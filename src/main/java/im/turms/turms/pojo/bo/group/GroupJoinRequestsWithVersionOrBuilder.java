// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: model/group/group_join_requests_with_version.proto

package im.turms.turms.pojo.bo.group;

public interface GroupJoinRequestsWithVersionOrBuilder extends
    // @@protoc_insertion_point(interface_extends:im.turms.proto.GroupJoinRequestsWithVersion)
    com.google.protobuf.MessageOrBuilder {

    /**
     * <code>repeated .im.turms.proto.GroupJoinRequest group_join_requests = 1;</code>
     */
    java.util.List<im.turms.turms.pojo.bo.group.GroupJoinRequest>
    getGroupJoinRequestsList();

    /**
     * <code>repeated .im.turms.proto.GroupJoinRequest group_join_requests = 1;</code>
     */
    im.turms.turms.pojo.bo.group.GroupJoinRequest getGroupJoinRequests(int index);

    /**
     * <code>repeated .im.turms.proto.GroupJoinRequest group_join_requests = 1;</code>
     */
    int getGroupJoinRequestsCount();

    /**
     * <code>repeated .im.turms.proto.GroupJoinRequest group_join_requests = 1;</code>
     */
    java.util.List<? extends im.turms.turms.pojo.bo.group.GroupJoinRequestOrBuilder>
    getGroupJoinRequestsOrBuilderList();

    /**
     * <code>repeated .im.turms.proto.GroupJoinRequest group_join_requests = 1;</code>
     */
    im.turms.turms.pojo.bo.group.GroupJoinRequestOrBuilder getGroupJoinRequestsOrBuilder(
            int index);

  /**
   * <code>.google.protobuf.Int64Value last_updated_date = 2;</code>
   * @return Whether the lastUpdatedDate field is set.
   */
  boolean hasLastUpdatedDate();
  /**
   * <code>.google.protobuf.Int64Value last_updated_date = 2;</code>
   * @return The lastUpdatedDate.
   */
  com.google.protobuf.Int64Value getLastUpdatedDate();
  /**
   * <code>.google.protobuf.Int64Value last_updated_date = 2;</code>
   */
  com.google.protobuf.Int64ValueOrBuilder getLastUpdatedDateOrBuilder();
}
