// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package text_stream_service

import (
	context "context"
	messages "github.com/graphql-editor/graphql_editor_messages/go/messages"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// TextStreamServiceClient is the client API for TextStreamService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TextStreamServiceClient interface {
	TextStream(ctx context.Context, in *messages.TextStreamRequest, opts ...grpc.CallOption) (TextStreamService_TextStreamClient, error)
}

type textStreamServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTextStreamServiceClient(cc grpc.ClientConnInterface) TextStreamServiceClient {
	return &textStreamServiceClient{cc}
}

func (c *textStreamServiceClient) TextStream(ctx context.Context, in *messages.TextStreamRequest, opts ...grpc.CallOption) (TextStreamService_TextStreamClient, error) {
	stream, err := c.cc.NewStream(ctx, &TextStreamService_ServiceDesc.Streams[0], "/graphqleditor.text_stream_service.TextStreamService/TextStream", opts...)
	if err != nil {
		return nil, err
	}
	x := &textStreamServiceTextStreamClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type TextStreamService_TextStreamClient interface {
	Recv() (*messages.TextStreamResponse, error)
	grpc.ClientStream
}

type textStreamServiceTextStreamClient struct {
	grpc.ClientStream
}

func (x *textStreamServiceTextStreamClient) Recv() (*messages.TextStreamResponse, error) {
	m := new(messages.TextStreamResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// TextStreamServiceServer is the server API for TextStreamService service.
// All implementations must embed UnimplementedTextStreamServiceServer
// for forward compatibility
type TextStreamServiceServer interface {
	TextStream(*messages.TextStreamRequest, TextStreamService_TextStreamServer) error
	mustEmbedUnimplementedTextStreamServiceServer()
}

// UnimplementedTextStreamServiceServer must be embedded to have forward compatible implementations.
type UnimplementedTextStreamServiceServer struct {
}

func (UnimplementedTextStreamServiceServer) TextStream(*messages.TextStreamRequest, TextStreamService_TextStreamServer) error {
	return status.Errorf(codes.Unimplemented, "method TextStream not implemented")
}
func (UnimplementedTextStreamServiceServer) mustEmbedUnimplementedTextStreamServiceServer() {}

// UnsafeTextStreamServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TextStreamServiceServer will
// result in compilation errors.
type UnsafeTextStreamServiceServer interface {
	mustEmbedUnimplementedTextStreamServiceServer()
}

func RegisterTextStreamServiceServer(s grpc.ServiceRegistrar, srv TextStreamServiceServer) {
	s.RegisterService(&TextStreamService_ServiceDesc, srv)
}

func _TextStreamService_TextStream_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(messages.TextStreamRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(TextStreamServiceServer).TextStream(m, &textStreamServiceTextStreamServer{stream})
}

type TextStreamService_TextStreamServer interface {
	Send(*messages.TextStreamResponse) error
	grpc.ServerStream
}

type textStreamServiceTextStreamServer struct {
	grpc.ServerStream
}

func (x *textStreamServiceTextStreamServer) Send(m *messages.TextStreamResponse) error {
	return x.ServerStream.SendMsg(m)
}

// TextStreamService_ServiceDesc is the grpc.ServiceDesc for TextStreamService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TextStreamService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "graphqleditor.text_stream_service.TextStreamService",
	HandlerType: (*TextStreamServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "TextStream",
			Handler:       _TextStreamService_TextStream_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "text_stream_service/service.proto",
}
