// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var graphql$editor_messages_messages_pb = require('../../graphql-editor/messages/messages_pb.js');

function serialize_graphqleditor_messages_TextStreamRequest(arg) {
  if (!(arg instanceof graphql$editor_messages_messages_pb.TextStreamRequest)) {
    throw new Error('Expected argument of type graphqleditor.messages.TextStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_TextStreamRequest(buffer_arg) {
  return graphql$editor_messages_messages_pb.TextStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphqleditor_messages_TextStreamResponse(arg) {
  if (!(arg instanceof graphql$editor_messages_messages_pb.TextStreamResponse)) {
    throw new Error('Expected argument of type graphqleditor.messages.TextStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphqleditor_messages_TextStreamResponse(buffer_arg) {
  return graphql$editor_messages_messages_pb.TextStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TextStreamServiceService = exports.TextStreamServiceService = {
  textStream: {
    path: '/graphqleditor.text_stream_service.TextStreamService/TextStream',
    requestStream: false,
    responseStream: true,
    requestType: graphql$editor_messages_messages_pb.TextStreamRequest,
    responseType: graphql$editor_messages_messages_pb.TextStreamResponse,
    requestSerialize: serialize_graphqleditor_messages_TextStreamRequest,
    requestDeserialize: deserialize_graphqleditor_messages_TextStreamRequest,
    responseSerialize: serialize_graphqleditor_messages_TextStreamResponse,
    responseDeserialize: deserialize_graphqleditor_messages_TextStreamResponse,
  },
};

exports.TextStreamServiceClient = grpc.makeGenericClientConstructor(TextStreamServiceService);
