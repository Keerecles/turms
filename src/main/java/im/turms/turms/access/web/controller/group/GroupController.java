/*
 * Copyright (C) 2019 The Turms Project
 * https://github.com/turms-im/turms
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package im.turms.turms.access.web.controller.group;

import im.turms.turms.access.web.util.ResponseFactory;
import im.turms.turms.annotation.web.RequiredPermission;
import im.turms.turms.common.DateTimeUtil;
import im.turms.turms.common.PageUtil;
import im.turms.turms.common.TurmsStatusCode;
import im.turms.turms.constant.AdminPermission;
import im.turms.turms.constant.DivideBy;
import im.turms.turms.exception.TurmsBusinessException;
import im.turms.turms.pojo.domain.Group;
import im.turms.turms.pojo.dto.*;
import im.turms.turms.service.group.GroupService;
import im.turms.turms.service.message.MessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.*;

import static im.turms.turms.constant.AdminPermission.*;

@RestController
@RequestMapping("/groups")
public class GroupController {
    private final GroupService groupService;
    private final MessageService messageService;
    private final PageUtil pageUtil;
    private final DateTimeUtil dateTimeUtil;

    public GroupController(GroupService groupService, PageUtil pageUtil, MessageService messageService, DateTimeUtil dateTimeUtil) {
        this.groupService = groupService;
        this.pageUtil = pageUtil;
        this.messageService = messageService;
        this.dateTimeUtil = dateTimeUtil;
    }

    @GetMapping
    @RequiredPermission(GROUP_QUERY)
    public Mono<ResponseEntity<ResponseDTO<Collection<Group>>>> queryGroupsInformation(
            @RequestParam(required = false) Set<Long> ids,
            @RequestParam(required = false) Integer size) {
        size = pageUtil.getSize(size);
        Flux<Group> groupsFlux = groupService.queryGroups(ids, 0, size);
        return ResponseFactory.okIfTruthy(groupsFlux);
    }

    @GetMapping("/page")
    @RequiredPermission(GROUP_QUERY)
    public Mono<ResponseEntity<ResponseDTO<PaginationDTO<Group>>>> queryGroupsInformation(
            @RequestParam(required = false) Set<Long> ids,
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(required = false) Integer size) {
        size = pageUtil.getSize(size);
        Mono<Long> count = groupService.countGroups(ids);
        Flux<Group> groupsFlux = groupService.queryGroups(ids, page, size);
        return ResponseFactory.page(count, groupsFlux);
    }

    @PostMapping
    @RequiredPermission(GROUP_CREATE)
    public Mono<ResponseEntity<ResponseDTO<Group>>> addGroup(@RequestBody AddGroupDTO addGroupDTO) {
        Long ownerId = addGroupDTO.getOwnerId();
        Mono<Group> createdGroup = groupService.authAndCreateGroup(
                addGroupDTO.getCreatorId(),
                ownerId != null ? ownerId : addGroupDTO.getCreatorId(),
                addGroupDTO.getName(),
                addGroupDTO.getIntro(),
                addGroupDTO.getAnnouncement(),
                addGroupDTO.getProfilePictureUrl(),
                addGroupDTO.getMinimumScore(),
                addGroupDTO.getTypeId(),
                addGroupDTO.getMuteEndDate(),
                addGroupDTO.getActive());
        return ResponseFactory.okIfTruthy(createdGroup);
    }

    @PutMapping
    @RequiredPermission(GROUP_UPDATE)
    public Mono<ResponseEntity<ResponseDTO<AcknowledgedDTO>>> updateGroup(
            @RequestParam Long groupId,
            @RequestBody UpdateGroupDTO updateGroupDTO) {
        Mono<Boolean> updated = groupService.updateGroup(
                groupId,
                updateGroupDTO.getMuteEndDate(),
                updateGroupDTO.getName(),
                updateGroupDTO.getUrl(),
                updateGroupDTO.getIntro(),
                updateGroupDTO.getAnnouncement(),
                updateGroupDTO.getMinimumScore(),
                updateGroupDTO.getTypeId(),
                updateGroupDTO.getSuccessorId(),
                updateGroupDTO.getQuitAfterTransfer());
        return ResponseFactory.acknowledged(updated);
    }

    @DeleteMapping
    @RequiredPermission(GROUP_DELETE)
    public Mono<ResponseEntity<ResponseDTO<AcknowledgedDTO>>> deleteGroup(
            @RequestParam Long groupId,
            @RequestParam(required = false) Boolean logicalDelete) {
        Mono<Boolean> deleted = groupService.deleteGroupAndGroupMembers(groupId, logicalDelete);
        return ResponseFactory.acknowledged(deleted);
    }

    @GetMapping("/count")
    public Mono<ResponseEntity<ResponseDTO<GroupStatisticsDTO>>> countGroups(
            @RequestParam(required = false) Date createdStartDate,
            @RequestParam(required = false) Date createdEndDate,
            @RequestParam(required = false) Date deletedStartDate,
            @RequestParam(required = false) Date deletedEndDate,
            @RequestParam(required = false) Date sentMessageStartDate,
            @RequestParam(required = false) Date sentMessageEndDate,
            @RequestParam(defaultValue = "NOOP") DivideBy divideBy) {
        List<Mono<?>> counts = new LinkedList<>();
        GroupStatisticsDTO statistics = new GroupStatisticsDTO();
        if (divideBy == null || divideBy == DivideBy.NOOP) {
            if (deletedStartDate != null || deletedEndDate != null) {
                counts.add(groupService.countDeletedGroups(
                        deletedStartDate,
                        deletedEndDate)
                        .doOnSuccess(statistics::setDeletedGroups));
            }
            if (sentMessageStartDate != null || sentMessageEndDate != null) {
                counts.add(messageService.countGroupsThatSentMessages(
                        sentMessageStartDate,
                        sentMessageEndDate)
                        .doOnSuccess(statistics::setGroupsThatSentMessages));
            }
            if (counts.isEmpty() || createdStartDate != null || createdEndDate != null) {
                counts.add(groupService.countCreatedGroups(
                        createdStartDate,
                        createdEndDate)
                        .doOnSuccess(statistics::setCreatedGroups));
            }
        } else {
            if (deletedStartDate != null && deletedEndDate != null) {
                counts.add(dateTimeUtil.checkAndQueryBetweenDate(
                        deletedStartDate,
                        deletedEndDate,
                        divideBy,
                        groupService::countDeletedGroups)
                        .doOnSuccess(statistics::setDeletedGroupsRecords));
            }
            if (sentMessageStartDate != null && sentMessageEndDate != null) {
                counts.add(dateTimeUtil.checkAndQueryBetweenDate(
                        sentMessageStartDate,
                        sentMessageEndDate,
                        divideBy,
                        messageService::countGroupsThatSentMessages)
                        .doOnSuccess(statistics::setGroupsThatSentMessagesRecords));
            }
            if (createdStartDate != null && createdEndDate != null) {
                counts.add(dateTimeUtil.checkAndQueryBetweenDate(
                        createdStartDate,
                        createdEndDate,
                        divideBy,
                        groupService::countCreatedGroups)
                        .doOnSuccess(statistics::setCreatedGroupsRecords));
            }
            if (counts.isEmpty()) {
                throw TurmsBusinessException.get(TurmsStatusCode.ILLEGAL_ARGUMENTS);
            }
        }
        return ResponseFactory.okIfTruthy(Flux.merge(counts).then(Mono.just(statistics)));
    }
}