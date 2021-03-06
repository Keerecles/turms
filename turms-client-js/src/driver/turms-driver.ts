import Timer from "../util/timer";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import * as WebSocketAsPromised from "websocket-as-promised";
import TurmsStatusCode from "../model/turms-status-code";
import TurmsBusinessException from "../model/turms-business-exception";
import {im} from "../model/proto-bundle";
// @ts-ignore
import fetch from "unfetch";
import querystring from "querystring";
import NotificationUtil from "../util/notification-util";
import {ParsedNotification} from "../model/parsed-notification";
import TurmsCloseStatus from "../model/turms-close-status";
import SystemUtil from "../util/system-util";
import TurmsNotification = im.turms.proto.TurmsNotification;
import TurmsRequest = im.turms.proto.TurmsRequest;
import UserStatus = im.turms.proto.UserStatus;
import DeviceType = im.turms.proto.DeviceType;

const COOKIE_REQUEST_ID = 'rid';
const COOKIE_USER_ID = 'uid';
const COOKIE_PASSWORD = 'pwd';
const COOKIE_USER_ONLINE_STATUS = 'us';
const COOKIE_DEVICE_TYPE = 'dt';
const COOKIE_LOCATION = 'loc';

const HEARTBEAT_INTERVAL = 20 * 1000;
export default class TurmsDriver {
    private _heartbeatInterval: number;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private _websocket: any; //WebSocketAsPromised
    private _heartbeatTimer?: Timer;
    private _onNotificationListeners: ((notification: ParsedNotification) => void)[] = [];
    private _onClose?: (closeStatus?: TurmsCloseStatus, wsStatusCode?: number, wsReason?: string, error?: Error) => void;

    private _url = 'ws://localhost:9510';
    private _httpUrl = 'http://localhost:9510';
    private _connectionTimeout = 10 * 1000;
    private _requestTimeout = 60 * 1000;
    private _minRequestsInterval = 0;
    private _requestsMap = {};
    private _lastRequestDate = new Date(0);
    private _queryReasonWhenLoginFailed = true;
    private _queryReasonWhenDisconnected = true;
    private _isClosedByClient = false;

    private _userId: string;
    private _password: string;
    private _location: string;
    private _userOnlineStatus: UserStatus;
    private _deviceType: DeviceType = SystemUtil.isBrowser() ? DeviceType.BROWSER : DeviceType.DESKTOP;

    private _requestId: number;
    private _sessionId?: string;
    private _address?: string;

    constructor(url?: string,
                connectionTimeout?: number,
                requestTimeout?: number,
                minRequestsInterval?: number,
                httpUrl?: string,
                queryReasonWhenLoginFailed = true,
                queryReasonWhenDisconnected = true) {
        if (url) this._url = url;
        if (connectionTimeout) this._connectionTimeout = connectionTimeout;
        if (requestTimeout) this._requestTimeout = requestTimeout;
        if (minRequestsInterval) this._minRequestsInterval = minRequestsInterval;
        this._heartbeatInterval = HEARTBEAT_INTERVAL;
        if (httpUrl) this._httpUrl = httpUrl;
        this._queryReasonWhenLoginFailed = queryReasonWhenLoginFailed;
        this._queryReasonWhenDisconnected = queryReasonWhenDisconnected;
    }

    set onClose(value: any) {
        this._onClose = value;
    }

    get onNotificationListeners(): ((notification: ParsedNotification) => void)[] {
        return this._onNotificationListeners;
    }

    sendHeartbeat(): Promise<void> {
        return new Promise((resolve, reject): void => {
            if (this.connected()) {
                this._lastRequestDate = new Date();
                this._websocket.send(new Uint8Array(0));
                resolve();
            } else {
                reject();
            }
        });
    }

    connected(): boolean {
        return this._websocket && this._websocket.isOpened;
    }

    disconnect(): Promise<void> {
        if (this._websocket.isOpened || this._websocket.isOpening) {
            this._isClosedByClient = true;
            return this._websocket.close()
                .then(() => {
                    this._isClosedByClient = false;
                }).catch(() => {
                    this._isClosedByClient = false;
                });
        } else {
            return Promise.reject();
        }
    }

    private _connect(
        userId: string,
        password: string,
        location?: string,
        userOnlineStatus = UserStatus.AVAILABLE,
        deviceType = DeviceType.UNKNOWN): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.connected()) {
                reject(TurmsBusinessException.CLIENT_ALREADY_CONNECTED);
            } else {
                this._requestId = this._generateRandomId();
                this._userId = userId;
                this._password = password;
                this._location = location;
                this._userOnlineStatus = userOnlineStatus;
                this._deviceType = deviceType;
                TurmsDriver._fillLoginInfo(this._requestId, userId, password, userOnlineStatus, deviceType, location);
                this._websocket = new WebSocketAsPromised(this._url, {
                    createWebSocket: (serverUrl): WebSocket => {
                        const ws = new WebSocket(serverUrl);
                        ws.binaryType = "arraybuffer";
                        return ws;
                    },
                    attachRequestId: (data: Uint8Array): Uint8Array => data,
                    packMessage: (data: Uint8Array): Uint8Array => data,
                    unpackMessage: (data: ArrayBuffer): TurmsNotification => TurmsNotification.decode(new Uint8Array(data)),
                    connectionTimeout: this._connectionTimeout,
                    timeout: this._requestTimeout,
                    extractRequestId: (notification: TurmsNotification): number | undefined => {
                        if (!notification.relayedRequest && notification.requestId) {
                            return parseInt(notification.requestId.value);
                        }
                    }
                });
                this._websocket.onUnpackedMessage.addListener((notification: TurmsNotification) => {
                    const isSessionInfo = notification.data && notification.data.session;
                    if (isSessionInfo) {
                        this._sessionId = notification.data.session.sessionId;
                        this._address = notification.data.session.address;
                    } else {
                        const parsedNotification = NotificationUtil.transform(notification);
                        for (const listener of this._onNotificationListeners) {
                            try {
                                listener(parsedNotification as ParsedNotification);
                            } catch (e) {
                                console.error(e);
                            }
                        }
                    }
                });
                // onClose will always be triggered when
                // 1. rejected by a HTTP upgrade error response
                // 2. disconnected no matter by error (after onError) or else
                this._websocket.onClose.addListener(event => {
                    this._onWebsocketClose(event)
                        .then(() => resolve())
                        .catch(e => reject(e));
                });
                this._websocket.open()
                    .then(() => {
                        this._onWebsocketOpen();
                        resolve();
                    })
                    .catch((error) => {
                        this._onWebsocketClose(error)
                            .then(() => resolve())
                            .catch(e => reject(e))
                    });
            }
        });
    }

    connect(
        userId: string,
        password: string,
        location?: string,
        userOnlineStatus = UserStatus.AVAILABLE,
        deviceType = DeviceType.UNKNOWN): Promise<void> {
        return this._connect(userId, password, location, userOnlineStatus, deviceType)
            .then(() => {
                TurmsDriver._clearLoginInfo();
                return Promise.resolve();
            })
            .catch(error => {
                TurmsDriver._clearLoginInfo();
                if (this._queryReasonWhenLoginFailed) {
                    return Promise.reject(error);
                } else {
                    return Promise.reject(`Failed to login due to 1. password mismatch; 2. the server doesn't exist or is unavailable`);
                }
            });
    }

    resetHeartBeatTimer(): void {
        if (this._heartbeatTimer) {
            this._heartbeatTimer.reset(this._heartbeatInterval);
        }
    }

    send(message: im.turms.proto.ITurmsRequest): Promise<TurmsNotification> {
        return new Promise((resolve, reject) => {
            if (this.connected()) {
                const now = new Date();
                if (!this._minRequestsInterval || now.getTime() - this._lastRequestDate.getTime() > this._minRequestsInterval) {
                    this._lastRequestDate = now;
                    const requestId = this._generateRandomId();
                    message.requestId = {value: '' + requestId};
                    const data = TurmsRequest.encode(message).finish();
                    this._requestsMap[requestId] = resolve;
                    this.resetHeartBeatTimer();
                    return this._websocket.sendRequest(data, {
                        requestId: requestId
                    }).then((notification: TurmsNotification) => {
                        if (notification.code && TurmsStatusCode.isSuccessCode(notification.code.value)) {
                            resolve(notification);
                        } else {
                            reject(TurmsBusinessException.fromNotification(notification));
                        }
                    });
                } else {
                    reject(TurmsBusinessException.fromCode(TurmsStatusCode.CLIENT_REQUESTS_TOO_FREQUENT));
                }
            } else {
                reject(TurmsBusinessException.fromCode(TurmsStatusCode.CLIENT_SESSION_HAS_BEEN_CLOSED));
            }
        });
    }

    private static _fillLoginInfo(
        requestId: number,
        userId: string,
        password: string,
        userOnlineStatus?: UserStatus,
        deviceType?: DeviceType,
        location?: string): void {
        document.cookie = `${COOKIE_REQUEST_ID}=${requestId}; path=/`;
        document.cookie = `${COOKIE_USER_ID}=${userId}; path=/`;
        document.cookie = `${COOKIE_PASSWORD}=${escape(password)}; path=/`;
        if (userOnlineStatus) {
            document.cookie = `${COOKIE_USER_ONLINE_STATUS}=${userOnlineStatus.toString()}; path=/`;
        }
        if (deviceType) {
            document.cookie = `${COOKIE_DEVICE_TYPE}=${deviceType.toString()}; path=/`;
        }
        if (location) {
            document.cookie = `${COOKIE_LOCATION}=${location}; path=/`;
        }
    }

    private static _clearLoginInfo(): void {
        const now = new Date().toUTCString();
        document.cookie = `${COOKIE_USER_ID}=;expires=${now}`;
        document.cookie = `${COOKIE_PASSWORD}=;expires=${now}`;
        document.cookie = `${COOKIE_USER_ONLINE_STATUS}=;expires=${now}`;
        document.cookie = `${COOKIE_DEVICE_TYPE}=;expires=${now}`;
        document.cookie = `${COOKIE_REQUEST_ID}=;expires=${now}`;
        document.cookie = `${COOKIE_LOCATION}=;expires=${now}`;
    }

    private _generateRandomId(): number {
        let id;
        do {
            id = Math.floor(Math.random() * 9007199254740991);
        } while (Object.prototype.hasOwnProperty.call(this._requestsMap, id));
        this._requestsMap[id] = true;
        return id;
    }

    private _onWebsocketOpen(): void {
        if (this._heartbeatTimer && this._heartbeatTimer.isRunning) {
            this._heartbeatTimer.reset(this._heartbeatInterval);
        } else {
            this._heartbeatTimer = new Timer((): Promise<void> => {
                const difference = new Date().getTime() - this._lastRequestDate.getTime();
                if (difference > this._minRequestsInterval) {
                    return this.sendHeartbeat();
                } else {
                    return Promise.reject();
                }
            }, this._heartbeatInterval);
            this._heartbeatTimer.start();
        }
    }

    private _onWebsocketClose(event: any): Promise<void> {
        const wasLogged = !!(this._heartbeatTimer && this._heartbeatTimer.isRunning);
        if (this._heartbeatTimer && this._heartbeatTimer.isRunning) {
            this._heartbeatTimer.stop();
        }
        if (this._isClosedByClient) {
            this._isClosedByClient = false;
            this._onClose(TurmsCloseStatus.DISCONNECTED_BY_CLIENT, event.code, event.reason);
            return Promise.resolve();
        }
        if (wasLogged) {
            if (this._onClose) {
                if (this._queryReasonWhenDisconnected && this._userId && this._sessionId) {
                    const params = querystring.stringify({
                        userId: this._userId,
                        deviceType: DeviceType[this._deviceType],
                        sessionId: this._sessionId
                    });
                    return fetch(`${this._httpUrl}/reasons/disconnection?${params}`)
                        .then(response => {
                            return response.text()
                                .then(text => {
                                    const closeStatus = parseInt(text);
                                    this._onClose(closeStatus, event.code, event.reason);
                                });
                        }).catch(error => {
                            this._onClose(null, event.code, event.reason, new Error(`Failed to fetch the disconnection reason: ${error}`));
                        });
                } else {
                    this._onClose(null, event.code, event.reason);
                }
            }
        } else {
            if (this._queryReasonWhenLoginFailed && this._userId && this._requestId) {
                const params = querystring.stringify({
                    userId: this._userId,
                    deviceType: DeviceType[this._deviceType],
                    requestId: this._requestId
                });
                return fetch(`${this._httpUrl}/reasons/login-failed?${params}`)
                    .then(response => {
                        if (response.status === 307) {
                            return response.text().then(host => {
                                return this.reconnect(host);
                            });
                        } else {
                            throw new Error(response);
                        }
                    }).catch(error => {
                        throw new Error(`Failed to fetch the login-failed reason: ${error}`);
                    });
            }
            return Promise.reject(new Error('Failed to login'));
        }
        return Promise.resolve();
    }

    reconnect(host?: string): Promise<void> {
        if (host) {
            const isSecure = this._url.startsWith("wss://");
            this._url = `${isSecure ? "wss://" : "ws://"}${host}`;
        }
        if (!this._userId || !this._password) {
            return Promise.reject();
        } else {
            return this.connect(this._userId, this._password, this._location,
                this._userOnlineStatus, this._deviceType);
        }
    }
}
