/**
 * @fileoverview gRPC-Web generated client stub for graphqleditor.text_stream_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var graphql$editor_messages_messages_pb = require('../../graphql-editor/messages/messages_pb.js')
const proto = {};
proto.graphqleditor = {};
proto.graphqleditor.text_stream_service = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.graphqleditor.text_stream_service.TextStreamServiceClient =
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
proto.graphqleditor.text_stream_service.TextStreamServicePromiseClient =
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
 *   !proto.graphqleditor.messages.TextStreamRequest,
 *   !proto.graphqleditor.messages.TextStreamResponse>}
 */
const methodDescriptor_TextStreamService_TextStream = new grpc.web.MethodDescriptor(
  '/graphqleditor.text_stream_service.TextStreamService/TextStream',
  grpc.web.MethodType.SERVER_STREAMING,
  graphql$editor_messages_messages_pb.TextStreamRequest,
  graphql$editor_messages_messages_pb.TextStreamResponse,
  /**
   * @param {!proto.graphqleditor.messages.TextStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  graphql$editor_messages_messages_pb.TextStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.graphqleditor.messages.TextStreamRequest,
 *   !proto.graphqleditor.messages.TextStreamResponse>}
 */
const methodInfo_TextStreamService_TextStream = new grpc.web.AbstractClientBase.MethodInfo(
  graphql$editor_messages_messages_pb.TextStreamResponse,
  /**
   * @param {!proto.graphqleditor.messages.TextStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  graphql$editor_messages_messages_pb.TextStreamResponse.deserializeBinary
);


/**
 * @param {!proto.graphqleditor.messages.TextStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.graphqleditor.messages.TextStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.graphqleditor.text_stream_service.TextStreamServiceClient.prototype.textStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/graphqleditor.text_stream_service.TextStreamService/TextStream',
      request,
      metadata || {},
      methodDescriptor_TextStreamService_TextStream);
};


/**
 * @param {!proto.graphqleditor.messages.TextStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.graphqleditor.messages.TextStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.graphqleditor.text_stream_service.TextStreamServicePromiseClient.prototype.textStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/graphqleditor.text_stream_service.TextStreamService/TextStream',
      request,
      metadata || {},
      methodDescriptor_TextStreamService_TextStream);
};


module.exports = proto.graphqleditor.text_stream_service;

