// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.14.0
// source: text_stream_service/service.proto

package text_stream_service

import (
	messages "github.com/graphql-editor/graphql_editor_messages/go/messages"
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

var File_text_stream_service_service_proto protoreflect.FileDescriptor

var file_text_stream_service_service_proto_rawDesc = []byte{
	0x0a, 0x21, 0x74, 0x65, 0x78, 0x74, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x5f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x21, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x65, 0x64, 0x69, 0x74,
	0x6f, 0x72, 0x2e, 0x74, 0x65, 0x78, 0x74, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x1a, 0x17, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73,
	0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32,
	0x7a, 0x0a, 0x11, 0x54, 0x65, 0x78, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0x65, 0x0a, 0x0a, 0x54, 0x65, 0x78, 0x74, 0x53, 0x74, 0x72, 0x65,
	0x61, 0x6d, 0x12, 0x29, 0x2e, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x65, 0x64, 0x69, 0x74,
	0x6f, 0x72, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x54, 0x65, 0x78, 0x74,
	0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2a, 0x2e,
	0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x65, 0x64, 0x69, 0x74, 0x6f, 0x72, 0x2e, 0x6d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x54, 0x65, 0x78, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61,
	0x6d, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x30, 0x01, 0x42, 0x4a, 0x5a, 0x48, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71,
	0x6c, 0x2d, 0x65, 0x64, 0x69, 0x74, 0x6f, 0x72, 0x2f, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c,
	0x5f, 0x65, 0x64, 0x69, 0x74, 0x6f, 0x72, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73,
	0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x65, 0x78, 0x74, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x5f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_text_stream_service_service_proto_goTypes = []interface{}{
	(*messages.TextStreamRequest)(nil),  // 0: graphqleditor.messages.TextStreamRequest
	(*messages.TextStreamResponse)(nil), // 1: graphqleditor.messages.TextStreamResponse
}
var file_text_stream_service_service_proto_depIdxs = []int32{
	0, // 0: graphqleditor.text_stream_service.TextStreamService.TextStream:input_type -> graphqleditor.messages.TextStreamRequest
	1, // 1: graphqleditor.text_stream_service.TextStreamService.TextStream:output_type -> graphqleditor.messages.TextStreamResponse
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_text_stream_service_service_proto_init() }
func file_text_stream_service_service_proto_init() {
	if File_text_stream_service_service_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_text_stream_service_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_text_stream_service_service_proto_goTypes,
		DependencyIndexes: file_text_stream_service_service_proto_depIdxs,
	}.Build()
	File_text_stream_service_service_proto = out.File
	file_text_stream_service_service_proto_rawDesc = nil
	file_text_stream_service_service_proto_goTypes = nil
	file_text_stream_service_service_proto_depIdxs = nil
}
