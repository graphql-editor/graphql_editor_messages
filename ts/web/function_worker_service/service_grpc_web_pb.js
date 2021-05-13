/**
 * @fileoverview gRPC-Web generated client stub for graphqleditor.function_worker_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var messages_messages_pb = require('../messages/messages_pb.js')
const proto = {};
proto.graphqleditor = {};
proto.graphqleditor.function_worker_service = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.graphqleditor.function_worker_service.FunctionWorkerServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.graphqleditor.function_worker_service.FunctionWorkerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.graphqleditor.messages.CreateFunctionRequest,
 *   !proto.graphqleditor.messages.CreateFunctionResponse>}
 */
const methodDescriptor_FunctionWorkerService_CreateFunction = new grpc.web.MethodDescriptor(
  '/graphqleditor.function_worker_service.FunctionWorkerService/CreateFunction',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.CreateFunctionRequest,
  messages_messages_pb.CreateFunctionResponse,
  /**
   * @param {!proto.graphqleditor.messages.CreateFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.CreateFunctionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.graphqleditor.messages.CreateFunctionRequest,
 *   !proto.graphqleditor.messages.CreateFunctionResponse>}
 */
const methodInfo_FunctionWorkerService_CreateFunction = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.CreateFunctionResponse,
  /**
   * @param {!proto.graphqleditor.messages.CreateFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.CreateFunctionResponse.deserializeBinary
);


/**
 * @param {!proto.graphqleditor.messages.CreateFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.graphqleditor.messages.CreateFunctionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.graphqleditor.messages.CreateFunctionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.graphqleditor.function_worker_service.FunctionWorkerServiceClient.prototype.createFunction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/graphqleditor.function_worker_service.FunctionWorkerService/CreateFunction',
      request,
      metadata || {},
      methodDescriptor_FunctionWorkerService_CreateFunction,
      callback);
};


/**
 * @param {!proto.graphqleditor.messages.CreateFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.graphqleditor.messages.CreateFunctionResponse>}
 *     Promise that resolves to the response
 */
proto.graphqleditor.function_worker_service.FunctionWorkerServicePromiseClient.prototype.createFunction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/graphqleditor.function_worker_service.FunctionWorkerService/CreateFunction',
      request,
      metadata || {},
      methodDescriptor_FunctionWorkerService_CreateFunction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.graphqleditor.messages.UpdateFunctionRequest,
 *   !proto.graphqleditor.messages.UpdateFunctionResponse>}
 */
const methodDescriptor_FunctionWorkerService_UpdateFunction = new grpc.web.MethodDescriptor(
  '/graphqleditor.function_worker_service.FunctionWorkerService/UpdateFunction',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.UpdateFunctionRequest,
  messages_messages_pb.UpdateFunctionResponse,
  /**
   * @param {!proto.graphqleditor.messages.UpdateFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.UpdateFunctionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.graphqleditor.messages.UpdateFunctionRequest,
 *   !proto.graphqleditor.messages.UpdateFunctionResponse>}
 */
const methodInfo_FunctionWorkerService_UpdateFunction = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.UpdateFunctionResponse,
  /**
   * @param {!proto.graphqleditor.messages.UpdateFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.UpdateFunctionResponse.deserializeBinary
);


/**
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.graphqleditor.messages.UpdateFunctionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.graphqleditor.messages.UpdateFunctionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.graphqleditor.function_worker_service.FunctionWorkerServiceClient.prototype.updateFunction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/graphqleditor.function_worker_service.FunctionWorkerService/UpdateFunction',
      request,
      metadata || {},
      methodDescriptor_FunctionWorkerService_UpdateFunction,
      callback);
};


/**
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.graphqleditor.messages.UpdateFunctionResponse>}
 *     Promise that resolves to the response
 */
proto.graphqleditor.function_worker_service.FunctionWorkerServicePromiseClient.prototype.updateFunction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/graphqleditor.function_worker_service.FunctionWorkerService/UpdateFunction',
      request,
      metadata || {},
      methodDescriptor_FunctionWorkerService_UpdateFunction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.graphqleditor.messages.DeleteFunctionRequest,
 *   !proto.graphqleditor.messages.DeleteFunctionResponse>}
 */
const methodDescriptor_FunctionWorkerService_DeleteFunction = new grpc.web.MethodDescriptor(
  '/graphqleditor.function_worker_service.FunctionWorkerService/DeleteFunction',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.DeleteFunctionRequest,
  messages_messages_pb.DeleteFunctionResponse,
  /**
   * @param {!proto.graphqleditor.messages.DeleteFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.DeleteFunctionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.graphqleditor.messages.DeleteFunctionRequest,
 *   !proto.graphqleditor.messages.DeleteFunctionResponse>}
 */
const methodInfo_FunctionWorkerService_DeleteFunction = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.DeleteFunctionResponse,
  /**
   * @param {!proto.graphqleditor.messages.DeleteFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.DeleteFunctionResponse.deserializeBinary
);


/**
 * @param {!proto.graphqleditor.messages.DeleteFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.graphqleditor.messages.DeleteFunctionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.graphqleditor.messages.DeleteFunctionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.graphqleditor.function_worker_service.FunctionWorkerServiceClient.prototype.deleteFunction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/graphqleditor.function_worker_service.FunctionWorkerService/DeleteFunction',
      request,
      metadata || {},
      methodDescriptor_FunctionWorkerService_DeleteFunction,
      callback);
};


/**
 * @param {!proto.graphqleditor.messages.DeleteFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.graphqleditor.messages.DeleteFunctionResponse>}
 *     Promise that resolves to the response
 */
proto.graphqleditor.function_worker_service.FunctionWorkerServicePromiseClient.prototype.deleteFunction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/graphqleditor.function_worker_service.FunctionWorkerService/DeleteFunction',
      request,
      metadata || {},
      methodDescriptor_FunctionWorkerService_DeleteFunction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.graphqleditor.messages.LogStreamRequest,
 *   !proto.graphqleditor.messages.LogStreamResponse>}
 */
const methodDescriptor_FunctionWorkerService_LogStream = new grpc.web.MethodDescriptor(
  '/graphqleditor.function_worker_service.FunctionWorkerService/LogStream',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.LogStreamRequest,
  messages_messages_pb.LogStreamResponse,
  /**
   * @param {!proto.graphqleditor.messages.LogStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.LogStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.graphqleditor.messages.LogStreamRequest,
 *   !proto.graphqleditor.messages.LogStreamResponse>}
 */
const methodInfo_FunctionWorkerService_LogStream = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.LogStreamResponse,
  /**
   * @param {!proto.graphqleditor.messages.LogStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.LogStreamResponse.deserializeBinary
);


/**
 * @param {!proto.graphqleditor.messages.LogStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.graphqleditor.messages.LogStreamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.graphqleditor.messages.LogStreamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.graphqleditor.function_worker_service.FunctionWorkerServiceClient.prototype.logStream =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/graphqleditor.function_worker_service.FunctionWorkerService/LogStream',
      request,
      metadata || {},
      methodDescriptor_FunctionWorkerService_LogStream,
      callback);
};


/**
 * @param {!proto.graphqleditor.messages.LogStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.graphqleditor.messages.LogStreamResponse>}
 *     Promise that resolves to the response
 */
proto.graphqleditor.function_worker_service.FunctionWorkerServicePromiseClient.prototype.logStream =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/graphqleditor.function_worker_service.FunctionWorkerService/LogStream',
      request,
      metadata || {},
      methodDescriptor_FunctionWorkerService_LogStream);
};


module.exports = proto.graphqleditor.function_worker_service;

