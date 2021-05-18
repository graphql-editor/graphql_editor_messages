// package: graphqleditor.subscription_service
// file: graphql-editor/subscriptions_service/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as graphql_editor_subscriptions_service_service_pb from "../../graphql-editor/subscriptions_service/service_pb";
import * as graphql_editor_messages_messages_pb from "../../graphql-editor/messages/messages_pb";

interface ISubscriptionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscription: ISubscriptionServiceService_ISubscription;
}

interface ISubscriptionServiceService_ISubscription extends grpc.MethodDefinition<graphql_editor_messages_messages_pb.SubscriptionRequest, graphql_editor_messages_messages_pb.SubscriptionResponse> {
    path: "/graphqleditor.subscription_service.SubscriptionService/Subscription";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<graphql_editor_messages_messages_pb.SubscriptionRequest>;
    requestDeserialize: grpc.deserialize<graphql_editor_messages_messages_pb.SubscriptionRequest>;
    responseSerialize: grpc.serialize<graphql_editor_messages_messages_pb.SubscriptionResponse>;
    responseDeserialize: grpc.deserialize<graphql_editor_messages_messages_pb.SubscriptionResponse>;
}

export const SubscriptionServiceService: ISubscriptionServiceService;

export interface ISubscriptionServiceServer extends grpc.UntypedServiceImplementation {
    subscription: grpc.handleServerStreamingCall<graphql_editor_messages_messages_pb.SubscriptionRequest, graphql_editor_messages_messages_pb.SubscriptionResponse>;
}

export interface ISubscriptionServiceClient {
    subscription(request: graphql_editor_messages_messages_pb.SubscriptionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<graphql_editor_messages_messages_pb.SubscriptionResponse>;
    subscription(request: graphql_editor_messages_messages_pb.SubscriptionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<graphql_editor_messages_messages_pb.SubscriptionResponse>;
}

export class SubscriptionServiceClient extends grpc.Client implements ISubscriptionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public subscription(request: graphql_editor_messages_messages_pb.SubscriptionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<graphql_editor_messages_messages_pb.SubscriptionResponse>;
    public subscription(request: graphql_editor_messages_messages_pb.SubscriptionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<graphql_editor_messages_messages_pb.SubscriptionResponse>;
}
