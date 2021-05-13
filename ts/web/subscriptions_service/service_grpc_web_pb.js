/**
 * @fileoverview gRPC-Web generated client stub for graphqleditor.subscription_service
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
proto.graphqleditor.subscription_service = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.graphqleditor.subscription_service.SubscriptionServiceClient =
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
proto.graphqleditor.subscription_service.SubscriptionServicePromiseClient =
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
 *   !proto.graphqleditor.messages.SubscriptionRequest,
 *   !proto.graphqleditor.messages.SubscriptionResponse>}
 */
const methodDescriptor_SubscriptionService_Subscription = new grpc.web.MethodDescriptor(
  '/graphqleditor.subscription_service.SubscriptionService/Subscription',
  grpc.web.MethodType.SERVER_STREAMING,
  messages_messages_pb.SubscriptionRequest,
  messages_messages_pb.SubscriptionResponse,
  /**
   * @param {!proto.graphqleditor.messages.SubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.SubscriptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.graphqleditor.messages.SubscriptionRequest,
 *   !proto.graphqleditor.messages.SubscriptionResponse>}
 */
const methodInfo_SubscriptionService_Subscription = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.SubscriptionResponse,
  /**
   * @param {!proto.graphqleditor.messages.SubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.SubscriptionResponse.deserializeBinary
);


/**
 * @param {!proto.graphqleditor.messages.SubscriptionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.graphqleditor.messages.SubscriptionResponse>}
 *     The XHR Node Readable Stream
 */
proto.graphqleditor.subscription_service.SubscriptionServiceClient.prototype.subscription =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/graphqleditor.subscription_service.SubscriptionService/Subscription',
      request,
      metadata || {},
      methodDescriptor_SubscriptionService_Subscription);
};


/**
 * @param {!proto.graphqleditor.messages.SubscriptionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.graphqleditor.messages.SubscriptionResponse>}
 *     The XHR Node Readable Stream
 */
proto.graphqleditor.subscription_service.SubscriptionServicePromiseClient.prototype.subscription =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/graphqleditor.subscription_service.SubscriptionService/Subscription',
      request,
      metadata || {},
      methodDescriptor_SubscriptionService_Subscription);
};


module.exports = proto.graphqleditor.subscription_service;

