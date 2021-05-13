// package: graphqleditor.function_worker_service
// file: function_worker_service/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as function_worker_service_service_pb from "../function_worker_service/service_pb";
import * as messages_messages_pb from "../messages/messages_pb";

interface IFunctionWorkerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createFunction: IFunctionWorkerServiceService_ICreateFunction;
    updateFunction: IFunctionWorkerServiceService_IUpdateFunction;
    deleteFunction: IFunctionWorkerServiceService_IDeleteFunction;
    logStream: IFunctionWorkerServiceService_ILogStream;
}

interface IFunctionWorkerServiceService_ICreateFunction extends grpc.MethodDefinition<messages_messages_pb.CreateFunctionRequest, messages_messages_pb.CreateFunctionResponse> {
    path: "/graphqleditor.function_worker_service.FunctionWorkerService/CreateFunction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.CreateFunctionRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.CreateFunctionRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.CreateFunctionResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.CreateFunctionResponse>;
}
interface IFunctionWorkerServiceService_IUpdateFunction extends grpc.MethodDefinition<messages_messages_pb.UpdateFunctionRequest, messages_messages_pb.UpdateFunctionResponse> {
    path: "/graphqleditor.function_worker_service.FunctionWorkerService/UpdateFunction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.UpdateFunctionRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.UpdateFunctionRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.UpdateFunctionResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.UpdateFunctionResponse>;
}
interface IFunctionWorkerServiceService_IDeleteFunction extends grpc.MethodDefinition<messages_messages_pb.DeleteFunctionRequest, messages_messages_pb.DeleteFunctionResponse> {
    path: "/graphqleditor.function_worker_service.FunctionWorkerService/DeleteFunction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.DeleteFunctionRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.DeleteFunctionRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.DeleteFunctionResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.DeleteFunctionResponse>;
}
interface IFunctionWorkerServiceService_ILogStream extends grpc.MethodDefinition<messages_messages_pb.LogStreamRequest, messages_messages_pb.LogStreamResponse> {
    path: "/graphqleditor.function_worker_service.FunctionWorkerService/LogStream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.LogStreamRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.LogStreamRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.LogStreamResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.LogStreamResponse>;
}

export const FunctionWorkerServiceService: IFunctionWorkerServiceService;

export interface IFunctionWorkerServiceServer extends grpc.UntypedServiceImplementation {
    createFunction: grpc.handleUnaryCall<messages_messages_pb.CreateFunctionRequest, messages_messages_pb.CreateFunctionResponse>;
    updateFunction: grpc.handleUnaryCall<messages_messages_pb.UpdateFunctionRequest, messages_messages_pb.UpdateFunctionResponse>;
    deleteFunction: grpc.handleUnaryCall<messages_messages_pb.DeleteFunctionRequest, messages_messages_pb.DeleteFunctionResponse>;
    logStream: grpc.handleUnaryCall<messages_messages_pb.LogStreamRequest, messages_messages_pb.LogStreamResponse>;
}

export interface IFunctionWorkerServiceClient {
    createFunction(request: messages_messages_pb.CreateFunctionRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.CreateFunctionResponse) => void): grpc.ClientUnaryCall;
    createFunction(request: messages_messages_pb.CreateFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.CreateFunctionResponse) => void): grpc.ClientUnaryCall;
    createFunction(request: messages_messages_pb.CreateFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.CreateFunctionResponse) => void): grpc.ClientUnaryCall;
    updateFunction(request: messages_messages_pb.UpdateFunctionRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UpdateFunctionResponse) => void): grpc.ClientUnaryCall;
    updateFunction(request: messages_messages_pb.UpdateFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UpdateFunctionResponse) => void): grpc.ClientUnaryCall;
    updateFunction(request: messages_messages_pb.UpdateFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UpdateFunctionResponse) => void): grpc.ClientUnaryCall;
    deleteFunction(request: messages_messages_pb.DeleteFunctionRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.DeleteFunctionResponse) => void): grpc.ClientUnaryCall;
    deleteFunction(request: messages_messages_pb.DeleteFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.DeleteFunctionResponse) => void): grpc.ClientUnaryCall;
    deleteFunction(request: messages_messages_pb.DeleteFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.DeleteFunctionResponse) => void): grpc.ClientUnaryCall;
    logStream(request: messages_messages_pb.LogStreamRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.LogStreamResponse) => void): grpc.ClientUnaryCall;
    logStream(request: messages_messages_pb.LogStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.LogStreamResponse) => void): grpc.ClientUnaryCall;
    logStream(request: messages_messages_pb.LogStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.LogStreamResponse) => void): grpc.ClientUnaryCall;
}

export class FunctionWorkerServiceClient extends grpc.Client implements IFunctionWorkerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createFunction(request: messages_messages_pb.CreateFunctionRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.CreateFunctionResponse) => void): grpc.ClientUnaryCall;
    public createFunction(request: messages_messages_pb.CreateFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.CreateFunctionResponse) => void): grpc.ClientUnaryCall;
    public createFunction(request: messages_messages_pb.CreateFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.CreateFunctionResponse) => void): grpc.ClientUnaryCall;
    public updateFunction(request: messages_messages_pb.UpdateFunctionRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UpdateFunctionResponse) => void): grpc.ClientUnaryCall;
    public updateFunction(request: messages_messages_pb.UpdateFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UpdateFunctionResponse) => void): grpc.ClientUnaryCall;
    public updateFunction(request: messages_messages_pb.UpdateFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UpdateFunctionResponse) => void): grpc.ClientUnaryCall;
    public deleteFunction(request: messages_messages_pb.DeleteFunctionRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.DeleteFunctionResponse) => void): grpc.ClientUnaryCall;
    public deleteFunction(request: messages_messages_pb.DeleteFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.DeleteFunctionResponse) => void): grpc.ClientUnaryCall;
    public deleteFunction(request: messages_messages_pb.DeleteFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.DeleteFunctionResponse) => void): grpc.ClientUnaryCall;
    public logStream(request: messages_messages_pb.LogStreamRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.LogStreamResponse) => void): grpc.ClientUnaryCall;
    public logStream(request: messages_messages_pb.LogStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.LogStreamResponse) => void): grpc.ClientUnaryCall;
    public logStream(request: messages_messages_pb.LogStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.LogStreamResponse) => void): grpc.ClientUnaryCall;
}
