// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: request/message/query_messages_request.proto

package im.turms.turms.pojo.request.message;

public final class QueryMessagesRequestOuterClass {
  private QueryMessagesRequestOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_im_turms_proto_QueryMessagesRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_im_turms_proto_QueryMessagesRequest_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n,request/message/query_messages_request" +
      ".proto\022\016im.turms.proto\032\036google/protobuf/" +
      "wrappers.proto\032\030constant/chat_type.proto" +
      "\032&constant/message_delivery_status.proto" +
      "\"\227\003\n\024QueryMessagesRequest\022\013\n\003ids\030\001 \003(\003\022)" +
      "\n\004size\030\002 \001(\0132\033.google.protobuf.Int32Valu" +
      "e\022+\n\tchat_type\030\003 \001(\0162\030.im.turms.proto.Ch" +
      "atType\0227\n\023are_system_messages\030\004 \001(\0132\032.go" +
      "ogle.protobuf.BoolValue\022,\n\007from_id\030\005 \001(\013" +
      "2\033.google.protobuf.Int64Value\0228\n\023deliver" +
      "y_date_after\030\006 \001(\0132\033.google.protobuf.Int" +
      "64Value\0229\n\024delivery_date_before\030\007 \001(\0132\033." +
      "google.protobuf.Int64Value\022>\n\017delivery_s" +
      "tatus\030\010 \001(\0162%.im.turms.proto.MessageDeli" +
      "veryStatusB\'\n#im.turms.turms.pojo.reques" +
      "t.messageP\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.WrappersProto.getDescriptor(),
          im.turms.turms.constant.ChatTypeOuterClass.getDescriptor(),
          im.turms.turms.constant.MessageDeliveryStatusOuterClass.getDescriptor(),
        });
    internal_static_im_turms_proto_QueryMessagesRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_im_turms_proto_QueryMessagesRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_im_turms_proto_QueryMessagesRequest_descriptor,
        new java.lang.String[] { "Ids", "Size", "ChatType", "AreSystemMessages", "FromId", "DeliveryDateAfter", "DeliveryDateBefore", "DeliveryStatus", });
    com.google.protobuf.WrappersProto.getDescriptor();
    im.turms.turms.constant.ChatTypeOuterClass.getDescriptor();
    im.turms.turms.constant.MessageDeliveryStatusOuterClass.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
