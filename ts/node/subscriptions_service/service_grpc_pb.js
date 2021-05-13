// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var messages_messages_pb = require('../messages/messages_pb.js');

function serialize_graphqleditor_messages_SubscriptionRequest(arg) {
  if (!(arg instanceof messages_messages_pb.SubscriptionRequest)) {
    throw new Error('Expected argument of type graphqleditor.messages.SubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_SubscriptionRequest(buffer_arg) {
  return messages_messages_pb.SubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphqleditor_messages_SubscriptionResponse(arg) {
  if (!(arg instanceof messages_messages_pb.SubscriptionResponse)) {
    throw new Error('Expected argument of type graphqleditor.messages.SubscriptionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_SubscriptionResponse(buffer_arg) {
  return messages_messages_pb.SubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SubscriptionServiceService = exports.SubscriptionServiceService = {
  subscription: {
    path: '/graphqleditor.subscription_service.SubscriptionService/Subscription',
    requestStream: false,
    responseStream: true,
    requestType: messages_messages_pb.SubscriptionRequest,
    responseType: messages_messages_pb.SubscriptionResponse,
    requestSerialize: serialize_graphqleditor_messages_SubscriptionRequest,
    requestDeserialize: deserialize_graphqleditor_messages_SubscriptionRequest,
    responseSerialize: serialize_graphqleditor_messages_SubscriptionResponse,
    responseDeserialize: deserialize_graphqleditor_messages_SubscriptionResponse,
  },
};

exports.SubscriptionServiceClient = grpc.makeGenericClientConstructor(SubscriptionServiceService);
