// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: dto/group/group_join_question.proto

package im.turms.turms.pojo.dto;

public final class GroupJoinQuestionOuterClass {
  private GroupJoinQuestionOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_im_turms_proto_GroupJoinQuestion_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_im_turms_proto_GroupJoinQuestion_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n#dto/group/group_join_question.proto\022\016i" +
      "m.turms.proto\032\036google/protobuf/wrappers." +
      "proto\"\366\001\n\021GroupJoinQuestion\022\'\n\002id\030\001 \001(\0132" +
      "\033.google.protobuf.Int64Value\022-\n\010group_id" +
      "\030\002 \001(\0132\033.google.protobuf.Int64Value\022.\n\010q" +
      "uestion\030\003 \001(\0132\034.google.protobuf.StringVa" +
      "lue\022-\n\007answers\030\004 \003(\0132\034.google.protobuf.S" +
      "tringValue\022*\n\005score\030\005 \001(\0132\033.google.proto" +
      "buf.Int32ValueB\033\n\027im.turms.turms.pojo.dt" +
      "oP\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.WrappersProto.getDescriptor(),
        });
    internal_static_im_turms_proto_GroupJoinQuestion_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_im_turms_proto_GroupJoinQuestion_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_im_turms_proto_GroupJoinQuestion_descriptor,
        new java.lang.String[] { "Id", "GroupId", "Question", "Answers", "Score", });
    com.google.protobuf.WrappersProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
