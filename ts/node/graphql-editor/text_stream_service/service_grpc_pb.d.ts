// package: graphqleditor.text_stream_service
// file: graphql-editor/text_stream_service/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as graphql_editor_text_stream_service_service_pb from "../../graphql-editor/text_stream_service/service_pb";
import * as graphql_editor_messages_messages_pb from "../../graphql-editor/messages/messages_pb";

interface ITextStreamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    textStream: ITextStreamServiceService_ITextStream;
}

interface ITextStreamServiceService_ITextStream extends grpc.MethodDefinition<graphql_editor_messages_messages_pb.TextStreamRequest, graphql_editor_messages_messages_pb.TextStreamResponse> {
    path: "/graphqleditor.text_stream_service.TextStreamService/TextStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<graphql_editor_messages_messages_pb.TextStreamRequest>;
    requestDeserialize: grpc.deserialize<graphql_editor_messages_messages_pb.TextStreamRequest>;
    responseSerialize: grpc.serialize<graphql_editor_messages_messages_pb.TextStreamResponse>;
    responseDeserialize: grpc.deserialize<graphql_editor_messages_messages_pb.TextStreamResponse>;
}

export const TextStreamServiceService: ITextStreamServiceService;

export interface ITextStreamServiceServer extends grpc.UntypedServiceImplementation {
    textStream: grpc.handleServerStreamingCall<graphql_editor_messages_messages_pb.TextStreamRequest, graphql_editor_messages_messages_pb.TextStreamResponse>;
}

export interface ITextStreamServiceClient {
    textStream(request: graphql_editor_messages_messages_pb.TextStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<graphql_editor_messages_messages_pb.TextStreamResponse>;
    textStream(request: graphql_editor_messages_messages_pb.TextStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<graphql_editor_messages_messages_pb.TextStreamResponse>;
}

export class TextStreamServiceClient extends grpc.Client implements ITextStreamServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public textStream(request: graphql_editor_messages_messages_pb.TextStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<graphql_editor_messages_messages_pb.TextStreamResponse>;
    public textStream(request: graphql_editor_messages_messages_pb.TextStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<graphql_editor_messages_messages_pb.TextStreamResponse>;
}
