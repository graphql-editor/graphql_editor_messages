// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.7
// source: graphql-editor/subscriptions_service/service.proto

package subscription_service

import (
	messages "github.com/graphql-editor/graphql_editor_messages/go/graphql-editor/messages"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_graphql_editor_subscriptions_service_service_proto protoreflect.FileDescriptor

var file_graphql_editor_subscriptions_service_service_proto_rawDesc = []byte{
	0x0a, 0x32, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x2d, 0x65, 0x64, 0x69, 0x74, 0x6f, 0x72,
	0x2f, 0x73, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x22, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x65, 0x64, 0x69,
	0x74, 0x6f, 0x72, 0x2e, 0x73, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x1a, 0x26, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71,
	0x6c, 0x2d, 0x65, 0x64, 0x69, 0x74, 0x6f, 0x72, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x73, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x32, 0x82, 0x01, 0x0a, 0x13, 0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x6b, 0x0a, 0x0c, 0x53, 0x75, 0x62, 0x73,
	0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2b, 0x2e, 0x67, 0x72, 0x61, 0x70, 0x68,
	0x71, 0x6c, 0x65, 0x64, 0x69, 0x74, 0x6f, 0x72, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x73, 0x2e, 0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x65,
	0x64, 0x69, 0x74, 0x6f, 0x72, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x53,
	0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x30, 0x01, 0x42, 0x5a, 0x5a, 0x58, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x2d, 0x65, 0x64, 0x69, 0x74,
	0x6f, 0x72, 0x2f, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x5f, 0x65, 0x64, 0x69, 0x74, 0x6f,
	0x72, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2f, 0x67, 0x6f, 0x2f, 0x67, 0x72,
	0x61, 0x70, 0x68, 0x71, 0x6c, 0x2d, 0x65, 0x64, 0x69, 0x74, 0x6f, 0x72, 0x2f, 0x73, 0x75, 0x62,
	0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_graphql_editor_subscriptions_service_service_proto_goTypes = []interface{}{
	(*messages.SubscriptionRequest)(nil),  // 0: graphqleditor.messages.SubscriptionRequest
	(*messages.SubscriptionResponse)(nil), // 1: graphqleditor.messages.SubscriptionResponse
}
var file_graphql_editor_subscriptions_service_service_proto_depIdxs = []int32{
	0, // 0: graphqleditor.subscription_service.SubscriptionService.Subscription:input_type -> graphqleditor.messages.SubscriptionRequest
	1, // 1: graphqleditor.subscription_service.SubscriptionService.Subscription:output_type -> graphqleditor.messages.SubscriptionResponse
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_graphql_editor_subscriptions_service_service_proto_init() }
func file_graphql_editor_subscriptions_service_service_proto_init() {
	if File_graphql_editor_subscriptions_service_service_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_graphql_editor_subscriptions_service_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_graphql_editor_subscriptions_service_service_proto_goTypes,
		DependencyIndexes: file_graphql_editor_subscriptions_service_service_proto_depIdxs,
	}.Build()
	File_graphql_editor_subscriptions_service_service_proto = out.File
	file_graphql_editor_subscriptions_service_service_proto_rawDesc = nil
	file_graphql_editor_subscriptions_service_service_proto_goTypes = nil
	file_graphql_editor_subscriptions_service_service_proto_depIdxs = nil
}
