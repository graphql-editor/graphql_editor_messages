// package: graphqleditor.text_stream_service
// file: text_stream_service/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as text_stream_service_service_pb from "../text_stream_service/service_pb";
import * as messages_messages_pb from "../messages/messages_pb";

interface ITextStreamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    textStream: ITextStreamServiceService_ITextStream;
}

interface ITextStreamServiceService_ITextStream extends grpc.MethodDefinition<messages_messages_pb.TextStreamRequest, messages_messages_pb.TextStreamResponse> {
    path: "/graphqleditor.text_stream_service.TextStreamService/TextStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<messages_messages_pb.TextStreamRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.TextStreamRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.TextStreamResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.TextStreamResponse>;
}

export const TextStreamServiceService: ITextStreamServiceService;

export interface ITextStreamServiceServer extends grpc.UntypedServiceImplementation {
    textStream: grpc.handleServerStreamingCall<messages_messages_pb.TextStreamRequest, messages_messages_pb.TextStreamResponse>;
}

export interface ITextStreamServiceClient {
    textStream(request: messages_messages_pb.TextStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.TextStreamResponse>;
    textStream(request: messages_messages_pb.TextStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.TextStreamResponse>;
}

export class TextStreamServiceClient extends grpc.Client implements ITextStreamServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public textStream(request: messages_messages_pb.TextStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.TextStreamResponse>;
    public textStream(request: messages_messages_pb.TextStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.TextStreamResponse>;
}
