(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{211:function(t,v,_){"use strict";_.r(v);var e=_(0),l=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"管理功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#管理功能"}},[t._v("#")]),t._v(" 管理功能")]),t._v(" "),_("p",[t._v("此表所述功能主要供：①您的后端程序发出HTTP请求进行调用；②同时作为内容统计管理系统与集群监控管理系统的turms-admin使用。具体API接口文档，请查阅"),_("a",{attrs:{href:"https://github.com/turms-im/turms/blob/develop/turms/docs/html/swagger.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Turms的Swagger文档"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("strong",[t._v("注意")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("此表所述接口仅供管理员使用，而不应该被用户使用")]),t._v("。")]),t._v(" "),_("li",[t._v("Turms面向管理员使用的API接口并不是完全按照RESTful风格设计的，Turms的API接口的设计原则是“接口的规范性要以开发者使用便捷为前提”，而不是“为了接口规范，需要开发者进行多余的繁琐操作”")])]),t._v(" "),_("h3",{attrs:{id:"管理员权限管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#管理员权限管理"}},[t._v("#")]),t._v(" 管理员权限管理")]),t._v(" "),_("p",[t._v("每个Turms集群默认存在一个userId为“turms”，password为“turms”的超级管理员")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("功能")])]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("功能说明")])]),t._v(" "),_("th",[_("strong",[t._v("URL")])]),t._v(" "),_("th",[_("strong",[t._v("实现版本")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("管理员身份校验")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("告知请求发起者，其发送的管理员信息是否存在")]),t._v(" "),_("td",[t._v("HEAD /admins")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取管理员名单")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",[t._v("GET /admins")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("新建管理员")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",[t._v("POST /admins")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("删除管理员")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",[t._v("DELETE /admins")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("修改管理员信息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("包括修改管理员的权限")]),t._v(" "),_("td",[t._v("PUT /admins")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])])])]),t._v(" "),_("h3",{attrs:{id:"消息管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息管理"}},[t._v("#")]),t._v(" 消息管理")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("功能")])]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("功能说明")])]),t._v(" "),_("th",[_("strong",[t._v("URL")])]),t._v(" "),_("th",[_("strong",[t._v("实现版本")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取消息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据自定义的过滤条件，获取消息")]),t._v(" "),_("td",[t._v("GET /messages")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("消息全文检索")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("（Planned）预计基于hanLP与CoreNLP分词实现")]),t._v(" "),_("td",[t._v("GET /messages")]),t._v(" "),_("td",[t._v("1.x ❓")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("发送消息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("可发送的消息类型同“业务功能列表”中的消息类型")]),t._v(" "),_("td",[t._v("POST /messages")]),t._v(" "),_("td",[t._v("0.9.0 ❓")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("删除消息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("删除消息")]),t._v(" "),_("td",[t._v("DELETE /messages")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("修改消息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("可修改消息的所有字段信息，并在修改消息后可选是否重发此消息")]),t._v(" "),_("td",[t._v("PUT /messages")]),t._v(" "),_("td",[t._v("0.9.0 ❓")])])])]),t._v(" "),_("h3",{attrs:{id:"用户管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户管理"}},[t._v("#")]),t._v(" 用户管理")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("功能")])]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("功能说明")])]),t._v(" "),_("th",[_("strong",[t._v("URL")])]),t._v(" "),_("th",[_("strong",[t._v("实现版本")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取用户信息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据用户ID或分页信息，获取用户的非敏感信息或完整信息。"),_("br"),t._v("注意：此处获取的用户密码既可以是密文（默认salt+SHA256），也可以是明文。由您配置的参数决定（默认密文）")]),t._v(" "),_("td",[t._v("GET /users")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("添加用户账号")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("添加用户账号")]),t._v(" "),_("td",[t._v("POST /users")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("删除用户账号")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("删除用户账号。可指定是否同时删除，用户的联系人列表与被联系人列表")]),t._v(" "),_("td",[t._v("DELETE /users")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("修改用户信息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("可修改用户所有字段信息。包括禁用/解禁用户")]),t._v(" "),_("td",[t._v("PUT /users")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取用户在线信息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("获取用户在线信息，包括用户在线状态、用户位置（如果客户端有提供此数据）、用户在线设备类型与用户在线设备登陆时间")]),t._v(" "),_("td",[t._v("GET /users/statuses")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("修改用户在线状态")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("修改用户在线状态，可用于强制用户下线。不可修改下线用户的在线状态")]),t._v(" "),_("td",[t._v("PUT /users/statuses")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取用户附近的人")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据该用户的最新坐标，获取其附近的其他用户的ID（主要：此服务要求此用户客户端有提供用户坐标数据）")]),t._v(" "),_("td",[t._v("GET /users/users-nearby")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取用户的历史坐标")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("获取用户的所有历史坐标，每个坐标信息由必有的具体坐标、时间戳，以及可能为空的地址与地点名称组成")]),t._v(" "),_("td",[t._v("GET /users/locations")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])])])]),t._v(" "),_("h3",{attrs:{id:"用户关系管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户关系管理"}},[t._v("#")]),t._v(" 用户关系管理")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("功能")])]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("描述")])]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("URL")])]),t._v(" "),_("th",[_("strong",[t._v("实现版本")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取用户关系人名单")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据可选的过滤（如“是否是联系人”、“是否是好友/拉黑用户”等）与分组条件，获取用户的关系人名单")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("GET /users/relationships")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("移除关系人")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据可选的过滤条件（如“是否是联系人”、“是否是好友/拉黑用户”等），移除用户关系人列表中的某类用户或指定用户")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE /users/relationships")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("修改关系人信息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("修改与关系人的关系。如设定“是否是联系人”、转变具体关系为“好友”或“拉黑用户”")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("PUT /users/relationships")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("新建关系人分组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("POST /users/relationships-group")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("修改关系人分组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("PUT /users/relationships-group")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("删除关系人分组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE /users/relationships-group")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取关系人所在分组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("GET /users/relationships/group")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("添加关系人至分组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("POST /users/relationships/group")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("将关系人移除分组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE /users/relationships/group")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])])])]),t._v(" "),_("h3",{attrs:{id:"群组管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#群组管理"}},[t._v("#")]),t._v(" 群组管理")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("功能")])]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("描述")])]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("URL")])]),t._v(" "),_("th",[_("strong",[t._v("实现版本")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取群组信息（可分页）")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据过滤条件，获取全部或指定的群组信息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("GET /groups")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取一个用户参与的所有群组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据用户 ID 获取此用户加入的全部群组信息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("GET /users/groups")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("创建群组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("创建新群组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("POST /groups")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("修改群组信息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("修改群组的信息。包括转让群主身份、修改群组类型、修改群组禁言状态等操作")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("PUT /groups")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("删除群组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据过滤条件，删除群组")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE /groups")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])])])]),t._v(" "),_("h3",{attrs:{id:"群组成员管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#群组成员管理"}},[t._v("#")]),t._v(" 群组成员管理")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("功能")])]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("描述")])]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("URL")])]),t._v(" "),_("th",[_("strong",[t._v("实现版本")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("获取群组成员")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据过滤条件（如“被禁言用户”、“某身份”），获取一个群组的群成员列表")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("GET /groups/members")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("添加群组成员")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("添加用户至群组成员列表。可添加指定身份的成员")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("POST /groups/members")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("移除群组成员")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据过滤条件（如“被禁言用户”、“某身份”），从群组成员列表中移除用户")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE /groups/members")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("修改群组成员信息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("根据过滤条件（如“被禁言用户”、“某身份”），修改群组成员信息")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("PUT /groups/members")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])])])]),t._v(" "),_("p",[t._v("提醒：群组的禁言状态是指在某个时间段整个群组成员无法进行发言操作（群创建者Creator这个身份也是无权发言的，只有群所有者Owner与群管理员Managers在群禁言期间能发言）；群组成员的禁言状态是指在某个时间段某个群组成员无法进行发言操作，但其他未被禁言的成员仍可以发言。")]),t._v(" "),_("h3",{attrs:{id:"群组黑名单管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#群组黑名单管理"}},[t._v("#")]),t._v(" 群组黑名单管理")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("功能")])]),t._v(" "),_("th",[_("strong",[t._v("描述")])]),t._v(" "),_("th",[_("strong",[t._v("URL")])]),t._v(" "),_("th",[_("strong",[t._v("实现版本")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("查询群组黑名单")]),t._v(" "),_("td",[t._v("查看群组的黑名单列表")]),t._v(" "),_("td",[t._v("GET /groups/blacklists")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",[t._v("添加单个用户至群组黑名单")]),t._v(" "),_("td",[t._v("将用户添加至群组的黑名单列表")]),t._v(" "),_("td",[t._v("POST /groups/blacklists")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",[t._v("批量从群组黑名单移除用户")]),t._v(" "),_("td",[t._v("将用户从黑名单列表中移除")]),t._v(" "),_("td",[t._v("DELETE /groups/blacklists")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])])])]),t._v(" "),_("h3",{attrs:{id:"群组类型管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#群组类型管理"}},[t._v("#")]),t._v(" 群组类型管理")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("功能")])]),t._v(" "),_("th",[_("strong",[t._v("描述")])]),t._v(" "),_("th",[_("strong",[t._v("URL")])]),t._v(" "),_("th",[_("strong",[t._v("实现版本")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("查询已有群组类型")]),t._v(" "),_("td",[t._v("查询已有群组类型。默认数据库中包括一个名为“GROUP”类型的群组类型")]),t._v(" "),_("td",[t._v("GET /groups/types")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",[t._v("增加自定义群组类型")]),t._v(" "),_("td",[t._v("新增自定义的群组类型，来对群组做各种各样的定制化配置")]),t._v(" "),_("td",[t._v("POST /groups/types")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",[t._v("删除群组类型")]),t._v(" "),_("td",[t._v("删除群组类型")]),t._v(" "),_("td",[t._v("DELETE /groups/types")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",[t._v("修改群组类型的配置")]),t._v(" "),_("td",[t._v("修改已存在群组类型的配置")]),t._v(" "),_("td",[t._v("PUT /groups/types")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])])])]),t._v(" "),_("h3",{attrs:{id:"集群管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集群管理"}},[t._v("#")]),t._v(" 集群管理")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("功能")])]),t._v(" "),_("th",[_("strong",[t._v("描述")])]),t._v(" "),_("th",[_("strong",[t._v("URL")])]),t._v(" "),_("th",[_("strong",[t._v("实现版本")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("获取当前集群服务节点信息")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("GET /cluster")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",[t._v("获取当前配置")]),t._v(" "),_("td",[t._v("获取当前集群中服务节点的统一配置。"),_("br"),t._v("通过/cluster/config?mutable=true可仅获取可动态修改的配置项")]),t._v(" "),_("td",[t._v("GET /cluster/config")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])]),t._v(" "),_("tr",[_("td",[t._v("修改配置")]),t._v(" "),_("td",[t._v("动态修改集群节点的配置")]),t._v(" "),_("td",[t._v("PUT /cluster/config")]),t._v(" "),_("td",[t._v("0.8.0 ✔")])])])])])}),[],!1,null,null,null);v.default=l.exports}}]);