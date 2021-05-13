// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var messages_messages_pb = require('../messages/messages_pb.js');

function serialize_graphqleditor_messages_CreateFunctionRequest(arg) {
  if (!(arg instanceof messages_messages_pb.CreateFunctionRequest)) {
    throw new Error('Expected argument of type graphqleditor.messages.CreateFunctionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_CreateFunctionRequest(buffer_arg) {
  return messages_messages_pb.CreateFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphqleditor_messages_CreateFunctionResponse(arg) {
  if (!(arg instanceof messages_messages_pb.CreateFunctionResponse)) {
    throw new Error('Expected argument of type graphqleditor.messages.CreateFunctionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_CreateFunctionResponse(buffer_arg) {
  return messages_messages_pb.CreateFunctionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphqleditor_messages_DeleteFunctionRequest(arg) {
  if (!(arg instanceof messages_messages_pb.DeleteFunctionRequest)) {
    throw new Error('Expected argument of type graphqleditor.messages.DeleteFunctionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_DeleteFunctionRequest(buffer_arg) {
  return messages_messages_pb.DeleteFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphqleditor_messages_DeleteFunctionResponse(arg) {
  if (!(arg instanceof messages_messages_pb.DeleteFunctionResponse)) {
    throw new Error('Expected argument of type graphqleditor.messages.DeleteFunctionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_DeleteFunctionResponse(buffer_arg) {
  return messages_messages_pb.DeleteFunctionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphqleditor_messages_LogStreamRequest(arg) {
  if (!(arg instanceof messages_messages_pb.LogStreamRequest)) {
    throw new Error('Expected argument of type graphqleditor.messages.LogStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_LogStreamRequest(buffer_arg) {
  return messages_messages_pb.LogStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphqleditor_messages_LogStreamResponse(arg) {
  if (!(arg instanceof messages_messages_pb.LogStreamResponse)) {
    throw new Error('Expected argument of type graphqleditor.messages.LogStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_LogStreamResponse(buffer_arg) {
  return messages_messages_pb.LogStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphqleditor_messages_UpdateFunctionRequest(arg) {
  if (!(arg instanceof messages_messages_pb.UpdateFunctionRequest)) {
    throw new Error('Expected argument of type graphqleditor.messages.UpdateFunctionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_UpdateFunctionRequest(buffer_arg) {
  return messages_messages_pb.UpdateFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphqleditor_messages_UpdateFunctionResponse(arg) {
  if (!(arg instanceof messages_messages_pb.UpdateFunctionResponse)) {
    throw new Error('Expected argument of type graphqleditor.messages.UpdateFunctionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_UpdateFunctionResponse(buffer_arg) {
  return messages_messages_pb.UpdateFunctionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FunctionWorkerServiceService = exports.FunctionWorkerServiceService = {
  createFunction: {
    path: '/graphqleditor.function_worker_service.FunctionWorkerService/CreateFunction',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.CreateFunctionRequest,
    responseType: messages_messages_pb.CreateFunctionResponse,
    requestSerialize: serialize_graphqleditor_messages_CreateFunctionRequest,
    requestDeserialize: deserialize_graphqleditor_messages_CreateFunctionRequest,
    responseSerialize: serialize_graphqleditor_messages_CreateFunctionResponse,
    responseDeserialize: deserialize_graphqleditor_messages_CreateFunctionResponse,
  },
  updateFunction: {
    path: '/graphqleditor.function_worker_service.FunctionWorkerService/UpdateFunction',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.UpdateFunctionRequest,
    responseType: messages_messages_pb.UpdateFunctionResponse,
    requestSerialize: serialize_graphqleditor_messages_UpdateFunctionRequest,
    requestDeserialize: deserialize_graphqleditor_messages_UpdateFunctionRequest,
    responseSerialize: serialize_graphqleditor_messages_UpdateFunctionResponse,
    responseDeserialize: deserialize_graphqleditor_messages_UpdateFunctionResponse,
  },
  deleteFunction: {
    path: '/graphqleditor.function_worker_service.FunctionWorkerService/DeleteFunction',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.DeleteFunctionRequest,
    responseType: messages_messages_pb.DeleteFunctionResponse,
    requestSerialize: serialize_graphqleditor_messages_DeleteFunctionRequest,
    requestDeserialize: deserialize_graphqleditor_messages_DeleteFunctionRequest,
    responseSerialize: serialize_graphqleditor_messages_DeleteFunctionResponse,
    responseDeserialize: deserialize_graphqleditor_messages_DeleteFunctionResponse,
  },
  logStream: {
    path: '/graphqleditor.function_worker_service.FunctionWorkerService/LogStream',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.LogStreamRequest,
    responseType: messages_messages_pb.LogStreamResponse,
    requestSerialize: serialize_graphqleditor_messages_LogStreamRequest,
    requestDeserialize: deserialize_graphqleditor_messages_LogStreamRequest,
    responseSerialize: serialize_graphqleditor_messages_LogStreamResponse,
    responseDeserialize: deserialize_graphqleditor_messages_LogStreamResponse,
  },
};

exports.FunctionWorkerServiceClient = grpc.makeGenericClientConstructor(FunctionWorkerServiceService);
