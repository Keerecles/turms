// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: request/group/create_group_request.proto

package im.turms.turms.pojo.request;

public final class CreateGroupRequestOuterClass {
  private CreateGroupRequestOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_im_turms_proto_CreateGroupRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_im_turms_proto_CreateGroupRequest_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n(request/group/create_group_request.pro" +
      "to\022\016im.turms.proto\032\036google/protobuf/wrap" +
      "pers.proto\"\332\002\n\022CreateGroupRequest\022\014\n\004nam" +
      "e\030\001 \001(\t\022+\n\005intro\030\002 \001(\0132\034.google.protobuf" +
      ".StringValue\0222\n\014announcement\030\003 \001(\0132\034.goo" +
      "gle.protobuf.StringValue\0229\n\023profile_pict" +
      "ure_url\030\004 \001(\0132\034.google.protobuf.StringVa" +
      "lue\0222\n\rminimum_score\030\005 \001(\0132\033.google.prot" +
      "obuf.Int32Value\0222\n\rgroup_type_id\030\006 \001(\0132\033" +
      ".google.protobuf.Int64Value\0222\n\rmute_end_" +
      "date\030\007 \001(\0132\033.google.protobuf.Int64ValueB" +
      "\037\n\033im.turms.turms.pojo.requestP\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.WrappersProto.getDescriptor(),
        });
    internal_static_im_turms_proto_CreateGroupRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_im_turms_proto_CreateGroupRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_im_turms_proto_CreateGroupRequest_descriptor,
        new java.lang.String[] { "Name", "Intro", "Announcement", "ProfilePictureUrl", "MinimumScore", "GroupTypeId", "MuteEndDate", });
    com.google.protobuf.WrappersProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
