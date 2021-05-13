// package: graphqleditor.subscription_service
// file: subscriptions_service/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as subscriptions_service_service_pb from "../subscriptions_service/service_pb";
import * as messages_messages_pb from "../messages/messages_pb";

interface ISubscriptionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscription: ISubscriptionServiceService_ISubscription;
}

interface ISubscriptionServiceService_ISubscription extends grpc.MethodDefinition<messages_messages_pb.SubscriptionRequest, messages_messages_pb.SubscriptionResponse> {
    path: "/graphqleditor.subscription_service.SubscriptionService/Subscription";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<messages_messages_pb.SubscriptionRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.SubscriptionRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.SubscriptionResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.SubscriptionResponse>;
}

export const SubscriptionServiceService: ISubscriptionServiceService;

export interface ISubscriptionServiceServer extends grpc.UntypedServiceImplementation {
    subscription: grpc.handleServerStreamingCall<messages_messages_pb.SubscriptionRequest, messages_messages_pb.SubscriptionResponse>;
}

export interface ISubscriptionServiceClient {
    subscription(request: messages_messages_pb.SubscriptionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.SubscriptionResponse>;
    subscription(request: messages_messages_pb.SubscriptionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.SubscriptionResponse>;
}

export class SubscriptionServiceClient extends grpc.Client implements ISubscriptionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public subscription(request: messages_messages_pb.SubscriptionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.SubscriptionResponse>;
    public subscription(request: messages_messages_pb.SubscriptionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.SubscriptionResponse>;
}
