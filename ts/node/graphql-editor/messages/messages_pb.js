// source: graphql-editor/messages/messages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var stucco$ts$proto$gen_proto_messages_messages_pb = require('../../stucco-ts-proto-gen/proto/messages/messages_pb.js');
goog.object.extend(proto, stucco$ts$proto$gen_proto_messages_messages_pb);
goog.exportSymbol('proto.graphqleditor.messages.CreateFunctionRequest', null, global);
goog.exportSymbol('proto.graphqleditor.messages.CreateFunctionResponse', null, global);
goog.exportSymbol('proto.graphqleditor.messages.CreateFunctionResponse.Error', null, global);
goog.exportSymbol('proto.graphqleditor.messages.CreateFunctionResponse.Error.ErrorKind', null, global);
goog.exportSymbol('proto.graphqleditor.messages.DeleteFunctionRequest', null, global);
goog.exportSymbol('proto.graphqleditor.messages.DeleteFunctionResponse', null, global);
goog.exportSymbol('proto.graphqleditor.messages.DeleteFunctionResponse.Error', null, global);
goog.exportSymbol('proto.graphqleditor.messages.DeleteFunctionResponse.Error.ErrorKind', null, global);
goog.exportSymbol('proto.graphqleditor.messages.Function', null, global);
goog.exportSymbol('proto.graphqleditor.messages.GetJobStatusRequest', null, global);
goog.exportSymbol('proto.graphqleditor.messages.GetJobStatusResponse', null, global);
goog.exportSymbol('proto.graphqleditor.messages.GetJobStatusResponse.Error', null, global);
goog.exportSymbol('proto.graphqleditor.messages.GetJobStatusResponse.Error.ErrorKind', null, global);
goog.exportSymbol('proto.graphqleditor.messages.GetJobStatusResponse.JobStatus', null, global);
goog.exportSymbol('proto.graphqleditor.messages.JobStatusStreamRequest', null, global);
goog.exportSymbol('proto.graphqleditor.messages.JobStatusStreamResponse', null, global);
goog.exportSymbol('proto.graphqleditor.messages.JobStatusStreamResponse.Error', null, global);
goog.exportSymbol('proto.graphqleditor.messages.JobStatusStreamResponse.Error.ErrorKind', null, global);
goog.exportSymbol('proto.graphqleditor.messages.JobStatusStreamResponse.JobStatus', null, global);
goog.exportSymbol('proto.graphqleditor.messages.LogStreamRequest', null, global);
goog.exportSymbol('proto.graphqleditor.messages.LogStreamResponse', null, global);
goog.exportSymbol('proto.graphqleditor.messages.LogStreamResponse.Error', null, global);
goog.exportSymbol('proto.graphqleditor.messages.LogStreamResponse.Error.ErrorKind', null, global);
goog.exportSymbol('proto.graphqleditor.messages.ReadFunctionRequest', null, global);
goog.exportSymbol('proto.graphqleditor.messages.ReadFunctionResponse', null, global);
goog.exportSymbol('proto.graphqleditor.messages.ReadFunctionStatus', null, global);
goog.exportSymbol('proto.graphqleditor.messages.Runtime', null, global);
goog.exportSymbol('proto.graphqleditor.messages.RuntimeLogsRequest', null, global);
goog.exportSymbol('proto.graphqleditor.messages.RuntimeLogsResponse', null, global);
goog.exportSymbol('proto.graphqleditor.messages.RuntimeLogsResponse.Error', null, global);
goog.exportSymbol('proto.graphqleditor.messages.RuntimeLogsResponse.Error.ErrorKind', null, global);
goog.exportSymbol('proto.graphqleditor.messages.Status', null, global);
goog.exportSymbol('proto.graphqleditor.messages.SubscriptionRequest', null, global);
goog.exportSymbol('proto.graphqleditor.messages.SubscriptionResponse', null, global);
goog.exportSymbol('proto.graphqleditor.messages.SubscriptionResponse.Error', null, global);
goog.exportSymbol('proto.graphqleditor.messages.SubscriptionResponse.Error.ErrorKind', null, global);
goog.exportSymbol('proto.graphqleditor.messages.SubscrptionPayload', null, global);
goog.exportSymbol('proto.graphqleditor.messages.TextStreamRequest', null, global);
goog.exportSymbol('proto.graphqleditor.messages.TextStreamResponse', null, global);
goog.exportSymbol('proto.graphqleditor.messages.TextStreamResponse.Error', null, global);
goog.exportSymbol('proto.graphqleditor.messages.TextStreamResponse.Error.ErrorKind', null, global);
goog.exportSymbol('proto.graphqleditor.messages.TextStreamSource', null, global);
goog.exportSymbol('proto.graphqleditor.messages.TextStreamSource.Kind', null, global);
goog.exportSymbol('proto.graphqleditor.messages.UpdateFunctionRequest', null, global);
goog.exportSymbol('proto.graphqleditor.messages.UpdateFunctionRequest.EnvType', null, global);
goog.exportSymbol('proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts', null, global);
goog.exportSymbol('proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts', null, global);
goog.exportSymbol('proto.graphqleditor.messages.UpdateFunctionResponse', null, global);
goog.exportSymbol('proto.graphqleditor.messages.UpdateFunctionResponse.Error', null, global);
goog.exportSymbol('proto.graphqleditor.messages.UpdateFunctionResponse.Error.ErrorKind', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.Function = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.Function.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.Function, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.Function.displayName = 'proto.graphqleditor.messages.Function';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.CreateFunctionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.CreateFunctionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.CreateFunctionRequest.displayName = 'proto.graphqleditor.messages.CreateFunctionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.CreateFunctionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.CreateFunctionResponse.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.CreateFunctionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.CreateFunctionResponse.displayName = 'proto.graphqleditor.messages.CreateFunctionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.CreateFunctionResponse.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.CreateFunctionResponse.Error.displayName = 'proto.graphqleditor.messages.CreateFunctionResponse.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.ReadFunctionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.ReadFunctionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.ReadFunctionRequest.displayName = 'proto.graphqleditor.messages.ReadFunctionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.ReadFunctionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.ReadFunctionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.ReadFunctionResponse.displayName = 'proto.graphqleditor.messages.ReadFunctionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.UpdateFunctionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.UpdateFunctionRequest.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.UpdateFunctionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.UpdateFunctionRequest.displayName = 'proto.graphqleditor.messages.UpdateFunctionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.displayName = 'proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.displayName = 'proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.UpdateFunctionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.UpdateFunctionResponse.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.UpdateFunctionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.UpdateFunctionResponse.displayName = 'proto.graphqleditor.messages.UpdateFunctionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.UpdateFunctionResponse.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.UpdateFunctionResponse.Error.displayName = 'proto.graphqleditor.messages.UpdateFunctionResponse.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.DeleteFunctionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.DeleteFunctionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.DeleteFunctionRequest.displayName = 'proto.graphqleditor.messages.DeleteFunctionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.DeleteFunctionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.DeleteFunctionResponse.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.DeleteFunctionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.DeleteFunctionResponse.displayName = 'proto.graphqleditor.messages.DeleteFunctionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.DeleteFunctionResponse.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.DeleteFunctionResponse.Error.displayName = 'proto.graphqleditor.messages.DeleteFunctionResponse.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.LogStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.LogStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.LogStreamRequest.displayName = 'proto.graphqleditor.messages.LogStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.LogStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.LogStreamResponse.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.LogStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.LogStreamResponse.displayName = 'proto.graphqleditor.messages.LogStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.LogStreamResponse.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.LogStreamResponse.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.LogStreamResponse.Error.displayName = 'proto.graphqleditor.messages.LogStreamResponse.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.TextStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.TextStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.TextStreamRequest.displayName = 'proto.graphqleditor.messages.TextStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.TextStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.TextStreamResponse.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.TextStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.TextStreamResponse.displayName = 'proto.graphqleditor.messages.TextStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.TextStreamResponse.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.TextStreamResponse.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.TextStreamResponse.Error.displayName = 'proto.graphqleditor.messages.TextStreamResponse.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.SubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.SubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.SubscriptionRequest.displayName = 'proto.graphqleditor.messages.SubscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.SubscrptionPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.SubscrptionPayload.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.SubscrptionPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.SubscrptionPayload.displayName = 'proto.graphqleditor.messages.SubscrptionPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.SubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.SubscriptionResponse.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.SubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.SubscriptionResponse.displayName = 'proto.graphqleditor.messages.SubscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.SubscriptionResponse.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.SubscriptionResponse.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.SubscriptionResponse.Error.displayName = 'proto.graphqleditor.messages.SubscriptionResponse.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.TextStreamSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.TextStreamSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.TextStreamSource.displayName = 'proto.graphqleditor.messages.TextStreamSource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.GetJobStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.GetJobStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.GetJobStatusRequest.displayName = 'proto.graphqleditor.messages.GetJobStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.GetJobStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.GetJobStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.GetJobStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.GetJobStatusResponse.displayName = 'proto.graphqleditor.messages.GetJobStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.GetJobStatusResponse.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.GetJobStatusResponse.Error.displayName = 'proto.graphqleditor.messages.GetJobStatusResponse.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.JobStatusStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.JobStatusStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.JobStatusStreamRequest.displayName = 'proto.graphqleditor.messages.JobStatusStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.JobStatusStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.JobStatusStreamResponse.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.JobStatusStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.JobStatusStreamResponse.displayName = 'proto.graphqleditor.messages.JobStatusStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.JobStatusStreamResponse.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.JobStatusStreamResponse.Error.displayName = 'proto.graphqleditor.messages.JobStatusStreamResponse.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.RuntimeLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.RuntimeLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.RuntimeLogsRequest.displayName = 'proto.graphqleditor.messages.RuntimeLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.RuntimeLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.graphqleditor.messages.RuntimeLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.graphqleditor.messages.RuntimeLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.RuntimeLogsResponse.displayName = 'proto.graphqleditor.messages.RuntimeLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphqleditor.messages.RuntimeLogsResponse.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphqleditor.messages.RuntimeLogsResponse.Error.displayName = 'proto.graphqleditor.messages.RuntimeLogsResponse.Error';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.Function.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.Function.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.Function.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.Function} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.Function.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namespace: jspb.Message.getFieldWithDefault(msg, 3, ""),
    workDir: jspb.Message.getFieldWithDefault(msg, 4, ""),
    filesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    buildCmdList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.Function}
 */
proto.graphqleditor.messages.Function.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.Function;
  return proto.graphqleditor.messages.Function.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.Function} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.Function}
 */
proto.graphqleditor.messages.Function.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkDir(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFiles(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addBuildCmd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.Function.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.Function.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.Function} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.Function.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWorkDir();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getBuildCmdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.graphqleditor.messages.Function.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.Function} returns this
 */
proto.graphqleditor.messages.Function.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.graphqleditor.messages.Function.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.Function} returns this
 */
proto.graphqleditor.messages.Function.prototype.setProject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string namespace = 3;
 * @return {string}
 */
proto.graphqleditor.messages.Function.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.Function} returns this
 */
proto.graphqleditor.messages.Function.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string work_dir = 4;
 * @return {string}
 */
proto.graphqleditor.messages.Function.prototype.getWorkDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.Function} returns this
 */
proto.graphqleditor.messages.Function.prototype.setWorkDir = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string files = 5;
 * @return {!Array<string>}
 */
proto.graphqleditor.messages.Function.prototype.getFilesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.graphqleditor.messages.Function} returns this
 */
proto.graphqleditor.messages.Function.prototype.setFilesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.Function} returns this
 */
proto.graphqleditor.messages.Function.prototype.addFiles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.Function} returns this
 */
proto.graphqleditor.messages.Function.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};


/**
 * repeated string build_cmd = 6;
 * @return {!Array<string>}
 */
proto.graphqleditor.messages.Function.prototype.getBuildCmdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.graphqleditor.messages.Function} returns this
 */
proto.graphqleditor.messages.Function.prototype.setBuildCmdList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.Function} returns this
 */
proto.graphqleditor.messages.Function.prototype.addBuildCmd = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.Function} returns this
 */
proto.graphqleditor.messages.Function.prototype.clearBuildCmdList = function() {
  return this.setBuildCmdList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.CreateFunctionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.CreateFunctionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.CreateFunctionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.CreateFunctionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_function: (f = msg.getFunction()) && proto.graphqleditor.messages.Function.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.CreateFunctionRequest}
 */
proto.graphqleditor.messages.CreateFunctionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.CreateFunctionRequest;
  return proto.graphqleditor.messages.CreateFunctionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.CreateFunctionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.CreateFunctionRequest}
 */
proto.graphqleditor.messages.CreateFunctionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.graphqleditor.messages.Function;
      reader.readMessage(value,proto.graphqleditor.messages.Function.deserializeBinaryFromReader);
      msg.setFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.CreateFunctionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.CreateFunctionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.CreateFunctionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.CreateFunctionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.graphqleditor.messages.Function.serializeBinaryToWriter
    );
  }
};


/**
 * optional Function function = 1;
 * @return {?proto.graphqleditor.messages.Function}
 */
proto.graphqleditor.messages.CreateFunctionRequest.prototype.getFunction = function() {
  return /** @type{?proto.graphqleditor.messages.Function} */ (
    jspb.Message.getWrapperField(this, proto.graphqleditor.messages.Function, 1));
};


/**
 * @param {?proto.graphqleditor.messages.Function|undefined} value
 * @return {!proto.graphqleditor.messages.CreateFunctionRequest} returns this
*/
proto.graphqleditor.messages.CreateFunctionRequest.prototype.setFunction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.graphqleditor.messages.CreateFunctionRequest} returns this
 */
proto.graphqleditor.messages.CreateFunctionRequest.prototype.clearFunction = function() {
  return this.setFunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.graphqleditor.messages.CreateFunctionRequest.prototype.hasFunction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.CreateFunctionResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.CreateFunctionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.CreateFunctionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.CreateFunctionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.CreateFunctionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.graphqleditor.messages.CreateFunctionResponse.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse}
 */
proto.graphqleditor.messages.CreateFunctionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.CreateFunctionResponse;
  return proto.graphqleditor.messages.CreateFunctionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.CreateFunctionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse}
 */
proto.graphqleditor.messages.CreateFunctionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    case 2:
      var value = /** @type {!proto.graphqleditor.messages.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.graphqleditor.messages.CreateFunctionResponse.Error;
      reader.readMessage(value,proto.graphqleditor.messages.CreateFunctionResponse.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.CreateFunctionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.CreateFunctionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.CreateFunctionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.CreateFunctionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.graphqleditor.messages.CreateFunctionResponse.Error.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.CreateFunctionResponse.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.CreateFunctionResponse.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse.Error}
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.CreateFunctionResponse.Error;
  return proto.graphqleditor.messages.CreateFunctionResponse.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.CreateFunctionResponse.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse.Error}
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.CreateFunctionResponse.Error.ErrorKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.CreateFunctionResponse.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.CreateFunctionResponse.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.ErrorKind = {
  UNKNOWN: 0
};

/**
 * optional ErrorKind kind = 1;
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse.Error.ErrorKind}
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.prototype.getKind = function() {
  return /** @type {!proto.graphqleditor.messages.CreateFunctionResponse.Error.ErrorKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.CreateFunctionResponse.Error.ErrorKind} value
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse.Error} returns this
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse.Error} returns this
 */
proto.graphqleditor.messages.CreateFunctionResponse.Error.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string trackId = 1;
 * @return {string}
 */
proto.graphqleditor.messages.CreateFunctionResponse.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse} returns this
 */
proto.graphqleditor.messages.CreateFunctionResponse.prototype.setTrackid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.graphqleditor.messages.Status}
 */
proto.graphqleditor.messages.CreateFunctionResponse.prototype.getStatus = function() {
  return /** @type {!proto.graphqleditor.messages.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.graphqleditor.messages.Status} value
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse} returns this
 */
proto.graphqleditor.messages.CreateFunctionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Error errors = 3;
 * @return {!Array<!proto.graphqleditor.messages.CreateFunctionResponse.Error>}
 */
proto.graphqleditor.messages.CreateFunctionResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.graphqleditor.messages.CreateFunctionResponse.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.graphqleditor.messages.CreateFunctionResponse.Error, 3));
};


/**
 * @param {!Array<!proto.graphqleditor.messages.CreateFunctionResponse.Error>} value
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse} returns this
*/
proto.graphqleditor.messages.CreateFunctionResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.graphqleditor.messages.CreateFunctionResponse.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse.Error}
 */
proto.graphqleditor.messages.CreateFunctionResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.graphqleditor.messages.CreateFunctionResponse.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.CreateFunctionResponse} returns this
 */
proto.graphqleditor.messages.CreateFunctionResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.ReadFunctionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.ReadFunctionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.ReadFunctionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.ReadFunctionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_function: (f = msg.getFunction()) && proto.graphqleditor.messages.Function.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.ReadFunctionRequest}
 */
proto.graphqleditor.messages.ReadFunctionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.ReadFunctionRequest;
  return proto.graphqleditor.messages.ReadFunctionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.ReadFunctionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.ReadFunctionRequest}
 */
proto.graphqleditor.messages.ReadFunctionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.graphqleditor.messages.Function;
      reader.readMessage(value,proto.graphqleditor.messages.Function.deserializeBinaryFromReader);
      msg.setFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.ReadFunctionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.ReadFunctionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.ReadFunctionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.ReadFunctionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.graphqleditor.messages.Function.serializeBinaryToWriter
    );
  }
};


/**
 * optional Function function = 1;
 * @return {?proto.graphqleditor.messages.Function}
 */
proto.graphqleditor.messages.ReadFunctionRequest.prototype.getFunction = function() {
  return /** @type{?proto.graphqleditor.messages.Function} */ (
    jspb.Message.getWrapperField(this, proto.graphqleditor.messages.Function, 1));
};


/**
 * @param {?proto.graphqleditor.messages.Function|undefined} value
 * @return {!proto.graphqleditor.messages.ReadFunctionRequest} returns this
*/
proto.graphqleditor.messages.ReadFunctionRequest.prototype.setFunction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.graphqleditor.messages.ReadFunctionRequest} returns this
 */
proto.graphqleditor.messages.ReadFunctionRequest.prototype.clearFunction = function() {
  return this.setFunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.graphqleditor.messages.ReadFunctionRequest.prototype.hasFunction = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.ReadFunctionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.ReadFunctionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.ReadFunctionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.ReadFunctionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.ReadFunctionResponse}
 */
proto.graphqleditor.messages.ReadFunctionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.ReadFunctionResponse;
  return proto.graphqleditor.messages.ReadFunctionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.ReadFunctionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.ReadFunctionResponse}
 */
proto.graphqleditor.messages.ReadFunctionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.ReadFunctionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.ReadFunctionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.ReadFunctionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.ReadFunctionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.ReadFunctionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ReadFunctionStatus status = 1;
 * @return {!proto.graphqleditor.messages.ReadFunctionStatus}
 */
proto.graphqleditor.messages.ReadFunctionResponse.prototype.getStatus = function() {
  return /** @type {!proto.graphqleditor.messages.ReadFunctionStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.ReadFunctionStatus} value
 * @return {!proto.graphqleditor.messages.ReadFunctionResponse} returns this
 */
proto.graphqleditor.messages.ReadFunctionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.graphqleditor.messages.ReadFunctionResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.ReadFunctionResponse} returns this
 */
proto.graphqleditor.messages.ReadFunctionResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.UpdateFunctionRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.UpdateFunctionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.UpdateFunctionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_function: (f = msg.getFunction()) && proto.graphqleditor.messages.Function.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    secretsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    envtype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    node14opts: (f = msg.getNode14opts()) && proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.UpdateFunctionRequest;
  return proto.graphqleditor.messages.UpdateFunctionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.graphqleditor.messages.Function;
      reader.readMessage(value,proto.graphqleditor.messages.Function.deserializeBinaryFromReader);
      msg.setFunction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecrets(value);
      break;
    case 4:
      var value = /** @type {!proto.graphqleditor.messages.UpdateFunctionRequest.EnvType} */ (reader.readEnum());
      msg.setEnvtype(value);
      break;
    case 5:
      var value = new proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts;
      reader.readMessage(value,proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.deserializeBinaryFromReader);
      msg.setNode14opts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.UpdateFunctionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.UpdateFunctionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.graphqleditor.messages.Function.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSecretsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getEnvtype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getNode14opts();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.EnvType = {
  NODE14: 0
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    buildscript: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts;
  return proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildscript(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuildscript();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string buildScript = 1;
 * @return {string}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.prototype.getBuildscript = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts} returns this
 */
proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.prototype.setBuildscript = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeopts: (f = msg.getNodeopts()) && proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts;
  return proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts;
      reader.readMessage(value,proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.deserializeBinaryFromReader);
      msg.setNodeopts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeopts();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional NodeOpts nodeOpts = 1;
 * @return {?proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.prototype.getNodeopts = function() {
  return /** @type{?proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts} */ (
    jspb.Message.getWrapperField(this, proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts, 1));
};


/**
 * @param {?proto.graphqleditor.messages.UpdateFunctionRequest.NodeOpts|undefined} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts} returns this
*/
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.prototype.setNodeopts = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts} returns this
 */
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.prototype.clearNodeopts = function() {
  return this.setNodeopts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts.prototype.hasNodeopts = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Function function = 1;
 * @return {?proto.graphqleditor.messages.Function}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.getFunction = function() {
  return /** @type{?proto.graphqleditor.messages.Function} */ (
    jspb.Message.getWrapperField(this, proto.graphqleditor.messages.Function, 1));
};


/**
 * @param {?proto.graphqleditor.messages.Function|undefined} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest} returns this
*/
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.setFunction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest} returns this
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.clearFunction = function() {
  return this.setFunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.hasFunction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest} returns this
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string secrets = 3;
 * @return {!Array<string>}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.getSecretsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest} returns this
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.setSecretsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest} returns this
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.addSecrets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest} returns this
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.clearSecretsList = function() {
  return this.setSecretsList([]);
};


/**
 * optional EnvType envType = 4;
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest.EnvType}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.getEnvtype = function() {
  return /** @type {!proto.graphqleditor.messages.UpdateFunctionRequest.EnvType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.graphqleditor.messages.UpdateFunctionRequest.EnvType} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest} returns this
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.setEnvtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Node14Opts node14Opts = 5;
 * @return {?proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.getNode14opts = function() {
  return /** @type{?proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts} */ (
    jspb.Message.getWrapperField(this, proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts, 5));
};


/**
 * @param {?proto.graphqleditor.messages.UpdateFunctionRequest.Node14Opts|undefined} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest} returns this
*/
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.setNode14opts = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.graphqleditor.messages.UpdateFunctionRequest} returns this
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.clearNode14opts = function() {
  return this.setNode14opts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.graphqleditor.messages.UpdateFunctionRequest.prototype.hasNode14opts = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.UpdateFunctionResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.UpdateFunctionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.UpdateFunctionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.UpdateFunctionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.graphqleditor.messages.UpdateFunctionResponse.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.UpdateFunctionResponse;
  return proto.graphqleditor.messages.UpdateFunctionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.UpdateFunctionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    case 2:
      var value = /** @type {!proto.graphqleditor.messages.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.graphqleditor.messages.UpdateFunctionResponse.Error;
      reader.readMessage(value,proto.graphqleditor.messages.UpdateFunctionResponse.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.UpdateFunctionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.UpdateFunctionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.UpdateFunctionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.graphqleditor.messages.UpdateFunctionResponse.Error.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.UpdateFunctionResponse.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.UpdateFunctionResponse.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse.Error}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.UpdateFunctionResponse.Error;
  return proto.graphqleditor.messages.UpdateFunctionResponse.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.UpdateFunctionResponse.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse.Error}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.UpdateFunctionResponse.Error.ErrorKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.UpdateFunctionResponse.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.UpdateFunctionResponse.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.ErrorKind = {
  UNKNOWN: 0
};

/**
 * optional ErrorKind kind = 1;
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse.Error.ErrorKind}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.prototype.getKind = function() {
  return /** @type {!proto.graphqleditor.messages.UpdateFunctionResponse.Error.ErrorKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.UpdateFunctionResponse.Error.ErrorKind} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse.Error} returns this
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse.Error} returns this
 */
proto.graphqleditor.messages.UpdateFunctionResponse.Error.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string trackId = 1;
 * @return {string}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse} returns this
 */
proto.graphqleditor.messages.UpdateFunctionResponse.prototype.setTrackid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.graphqleditor.messages.Status}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.prototype.getStatus = function() {
  return /** @type {!proto.graphqleditor.messages.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.graphqleditor.messages.Status} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse} returns this
 */
proto.graphqleditor.messages.UpdateFunctionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Error errors = 3;
 * @return {!Array<!proto.graphqleditor.messages.UpdateFunctionResponse.Error>}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.graphqleditor.messages.UpdateFunctionResponse.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.graphqleditor.messages.UpdateFunctionResponse.Error, 3));
};


/**
 * @param {!Array<!proto.graphqleditor.messages.UpdateFunctionResponse.Error>} value
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse} returns this
*/
proto.graphqleditor.messages.UpdateFunctionResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.graphqleditor.messages.UpdateFunctionResponse.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse.Error}
 */
proto.graphqleditor.messages.UpdateFunctionResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.graphqleditor.messages.UpdateFunctionResponse.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.UpdateFunctionResponse} returns this
 */
proto.graphqleditor.messages.UpdateFunctionResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.DeleteFunctionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.DeleteFunctionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.DeleteFunctionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.DeleteFunctionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_function: (f = msg.getFunction()) && proto.graphqleditor.messages.Function.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.DeleteFunctionRequest}
 */
proto.graphqleditor.messages.DeleteFunctionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.DeleteFunctionRequest;
  return proto.graphqleditor.messages.DeleteFunctionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.DeleteFunctionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.DeleteFunctionRequest}
 */
proto.graphqleditor.messages.DeleteFunctionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.graphqleditor.messages.Function;
      reader.readMessage(value,proto.graphqleditor.messages.Function.deserializeBinaryFromReader);
      msg.setFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.DeleteFunctionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.DeleteFunctionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.DeleteFunctionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.DeleteFunctionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.graphqleditor.messages.Function.serializeBinaryToWriter
    );
  }
};


/**
 * optional Function function = 1;
 * @return {?proto.graphqleditor.messages.Function}
 */
proto.graphqleditor.messages.DeleteFunctionRequest.prototype.getFunction = function() {
  return /** @type{?proto.graphqleditor.messages.Function} */ (
    jspb.Message.getWrapperField(this, proto.graphqleditor.messages.Function, 1));
};


/**
 * @param {?proto.graphqleditor.messages.Function|undefined} value
 * @return {!proto.graphqleditor.messages.DeleteFunctionRequest} returns this
*/
proto.graphqleditor.messages.DeleteFunctionRequest.prototype.setFunction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.graphqleditor.messages.DeleteFunctionRequest} returns this
 */
proto.graphqleditor.messages.DeleteFunctionRequest.prototype.clearFunction = function() {
  return this.setFunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.graphqleditor.messages.DeleteFunctionRequest.prototype.hasFunction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.DeleteFunctionResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.DeleteFunctionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.DeleteFunctionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.DeleteFunctionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.graphqleditor.messages.DeleteFunctionResponse.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.DeleteFunctionResponse;
  return proto.graphqleditor.messages.DeleteFunctionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.DeleteFunctionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    case 2:
      var value = /** @type {!proto.graphqleditor.messages.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.graphqleditor.messages.DeleteFunctionResponse.Error;
      reader.readMessage(value,proto.graphqleditor.messages.DeleteFunctionResponse.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.DeleteFunctionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.DeleteFunctionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.DeleteFunctionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.graphqleditor.messages.DeleteFunctionResponse.Error.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.DeleteFunctionResponse.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.DeleteFunctionResponse.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse.Error}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.DeleteFunctionResponse.Error;
  return proto.graphqleditor.messages.DeleteFunctionResponse.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.DeleteFunctionResponse.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse.Error}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.DeleteFunctionResponse.Error.ErrorKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.DeleteFunctionResponse.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.DeleteFunctionResponse.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.ErrorKind = {
  UNKNOWN: 0
};

/**
 * optional ErrorKind kind = 1;
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse.Error.ErrorKind}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.prototype.getKind = function() {
  return /** @type {!proto.graphqleditor.messages.DeleteFunctionResponse.Error.ErrorKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.DeleteFunctionResponse.Error.ErrorKind} value
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse.Error} returns this
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse.Error} returns this
 */
proto.graphqleditor.messages.DeleteFunctionResponse.Error.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string trackId = 1;
 * @return {string}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse} returns this
 */
proto.graphqleditor.messages.DeleteFunctionResponse.prototype.setTrackid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.graphqleditor.messages.Status}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.prototype.getStatus = function() {
  return /** @type {!proto.graphqleditor.messages.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.graphqleditor.messages.Status} value
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse} returns this
 */
proto.graphqleditor.messages.DeleteFunctionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Error errors = 3;
 * @return {!Array<!proto.graphqleditor.messages.DeleteFunctionResponse.Error>}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.graphqleditor.messages.DeleteFunctionResponse.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.graphqleditor.messages.DeleteFunctionResponse.Error, 3));
};


/**
 * @param {!Array<!proto.graphqleditor.messages.DeleteFunctionResponse.Error>} value
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse} returns this
*/
proto.graphqleditor.messages.DeleteFunctionResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.graphqleditor.messages.DeleteFunctionResponse.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse.Error}
 */
proto.graphqleditor.messages.DeleteFunctionResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.graphqleditor.messages.DeleteFunctionResponse.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.DeleteFunctionResponse} returns this
 */
proto.graphqleditor.messages.DeleteFunctionResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.LogStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.LogStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.LogStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.LogStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_function: (f = msg.getFunction()) && proto.graphqleditor.messages.Function.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.LogStreamRequest}
 */
proto.graphqleditor.messages.LogStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.LogStreamRequest;
  return proto.graphqleditor.messages.LogStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.LogStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.LogStreamRequest}
 */
proto.graphqleditor.messages.LogStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.graphqleditor.messages.Function;
      reader.readMessage(value,proto.graphqleditor.messages.Function.deserializeBinaryFromReader);
      msg.setFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.LogStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.LogStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.LogStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.LogStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.graphqleditor.messages.Function.serializeBinaryToWriter
    );
  }
};


/**
 * optional Function function = 1;
 * @return {?proto.graphqleditor.messages.Function}
 */
proto.graphqleditor.messages.LogStreamRequest.prototype.getFunction = function() {
  return /** @type{?proto.graphqleditor.messages.Function} */ (
    jspb.Message.getWrapperField(this, proto.graphqleditor.messages.Function, 1));
};


/**
 * @param {?proto.graphqleditor.messages.Function|undefined} value
 * @return {!proto.graphqleditor.messages.LogStreamRequest} returns this
*/
proto.graphqleditor.messages.LogStreamRequest.prototype.setFunction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.graphqleditor.messages.LogStreamRequest} returns this
 */
proto.graphqleditor.messages.LogStreamRequest.prototype.clearFunction = function() {
  return this.setFunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.graphqleditor.messages.LogStreamRequest.prototype.hasFunction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.LogStreamResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.LogStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.LogStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.LogStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.LogStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.graphqleditor.messages.LogStreamResponse.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.LogStreamResponse}
 */
proto.graphqleditor.messages.LogStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.LogStreamResponse;
  return proto.graphqleditor.messages.LogStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.LogStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.LogStreamResponse}
 */
proto.graphqleditor.messages.LogStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    case 2:
      var value = /** @type {!proto.graphqleditor.messages.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.graphqleditor.messages.LogStreamResponse.Error;
      reader.readMessage(value,proto.graphqleditor.messages.LogStreamResponse.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.LogStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.LogStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.LogStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.LogStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.graphqleditor.messages.LogStreamResponse.Error.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.LogStreamResponse.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.LogStreamResponse.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.LogStreamResponse.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.LogStreamResponse.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.LogStreamResponse.Error}
 */
proto.graphqleditor.messages.LogStreamResponse.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.LogStreamResponse.Error;
  return proto.graphqleditor.messages.LogStreamResponse.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.LogStreamResponse.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.LogStreamResponse.Error}
 */
proto.graphqleditor.messages.LogStreamResponse.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.LogStreamResponse.Error.ErrorKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.LogStreamResponse.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.LogStreamResponse.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.LogStreamResponse.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.LogStreamResponse.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.LogStreamResponse.Error.ErrorKind = {
  UNKNOWN: 0
};

/**
 * optional ErrorKind kind = 1;
 * @return {!proto.graphqleditor.messages.LogStreamResponse.Error.ErrorKind}
 */
proto.graphqleditor.messages.LogStreamResponse.Error.prototype.getKind = function() {
  return /** @type {!proto.graphqleditor.messages.LogStreamResponse.Error.ErrorKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.LogStreamResponse.Error.ErrorKind} value
 * @return {!proto.graphqleditor.messages.LogStreamResponse.Error} returns this
 */
proto.graphqleditor.messages.LogStreamResponse.Error.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.graphqleditor.messages.LogStreamResponse.Error.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.LogStreamResponse.Error} returns this
 */
proto.graphqleditor.messages.LogStreamResponse.Error.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string trackId = 1;
 * @return {string}
 */
proto.graphqleditor.messages.LogStreamResponse.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.LogStreamResponse} returns this
 */
proto.graphqleditor.messages.LogStreamResponse.prototype.setTrackid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.graphqleditor.messages.Status}
 */
proto.graphqleditor.messages.LogStreamResponse.prototype.getStatus = function() {
  return /** @type {!proto.graphqleditor.messages.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.graphqleditor.messages.Status} value
 * @return {!proto.graphqleditor.messages.LogStreamResponse} returns this
 */
proto.graphqleditor.messages.LogStreamResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Error errors = 3;
 * @return {!Array<!proto.graphqleditor.messages.LogStreamResponse.Error>}
 */
proto.graphqleditor.messages.LogStreamResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.graphqleditor.messages.LogStreamResponse.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.graphqleditor.messages.LogStreamResponse.Error, 3));
};


/**
 * @param {!Array<!proto.graphqleditor.messages.LogStreamResponse.Error>} value
 * @return {!proto.graphqleditor.messages.LogStreamResponse} returns this
*/
proto.graphqleditor.messages.LogStreamResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.graphqleditor.messages.LogStreamResponse.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.LogStreamResponse.Error}
 */
proto.graphqleditor.messages.LogStreamResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.graphqleditor.messages.LogStreamResponse.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.LogStreamResponse} returns this
 */
proto.graphqleditor.messages.LogStreamResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.TextStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.TextStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.TextStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.TextStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.TextStreamRequest}
 */
proto.graphqleditor.messages.TextStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.TextStreamRequest;
  return proto.graphqleditor.messages.TextStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.TextStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.TextStreamRequest}
 */
proto.graphqleditor.messages.TextStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.TextStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.TextStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.TextStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.TextStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trackId = 1;
 * @return {string}
 */
proto.graphqleditor.messages.TextStreamRequest.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.TextStreamRequest} returns this
 */
proto.graphqleditor.messages.TextStreamRequest.prototype.setTrackid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.TextStreamResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.TextStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.TextStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.TextStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    linesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.graphqleditor.messages.TextStreamResponse.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.TextStreamResponse}
 */
proto.graphqleditor.messages.TextStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.TextStreamResponse;
  return proto.graphqleditor.messages.TextStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.TextStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.TextStreamResponse}
 */
proto.graphqleditor.messages.TextStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLines(value);
      break;
    case 3:
      var value = new proto.graphqleditor.messages.TextStreamResponse.Error;
      reader.readMessage(value,proto.graphqleditor.messages.TextStreamResponse.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.TextStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.TextStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.TextStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLinesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.graphqleditor.messages.TextStreamResponse.Error.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.TextStreamResponse.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.TextStreamResponse.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.TextStreamResponse.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.TextStreamResponse.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.TextStreamResponse.Error}
 */
proto.graphqleditor.messages.TextStreamResponse.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.TextStreamResponse.Error;
  return proto.graphqleditor.messages.TextStreamResponse.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.TextStreamResponse.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.TextStreamResponse.Error}
 */
proto.graphqleditor.messages.TextStreamResponse.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.TextStreamResponse.Error.ErrorKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.TextStreamResponse.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.TextStreamResponse.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.TextStreamResponse.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.TextStreamResponse.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.TextStreamResponse.Error.ErrorKind = {
  UNKNOWN: 0
};

/**
 * optional ErrorKind kind = 1;
 * @return {!proto.graphqleditor.messages.TextStreamResponse.Error.ErrorKind}
 */
proto.graphqleditor.messages.TextStreamResponse.Error.prototype.getKind = function() {
  return /** @type {!proto.graphqleditor.messages.TextStreamResponse.Error.ErrorKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.TextStreamResponse.Error.ErrorKind} value
 * @return {!proto.graphqleditor.messages.TextStreamResponse.Error} returns this
 */
proto.graphqleditor.messages.TextStreamResponse.Error.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.graphqleditor.messages.TextStreamResponse.Error.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.TextStreamResponse.Error} returns this
 */
proto.graphqleditor.messages.TextStreamResponse.Error.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Status status = 1;
 * @return {!proto.graphqleditor.messages.Status}
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.getStatus = function() {
  return /** @type {!proto.graphqleditor.messages.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.Status} value
 * @return {!proto.graphqleditor.messages.TextStreamResponse} returns this
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string lines = 2;
 * @return {!Array<string>}
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.getLinesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.graphqleditor.messages.TextStreamResponse} returns this
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.setLinesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.TextStreamResponse} returns this
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.addLines = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.TextStreamResponse} returns this
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.clearLinesList = function() {
  return this.setLinesList([]);
};


/**
 * repeated Error errors = 3;
 * @return {!Array<!proto.graphqleditor.messages.TextStreamResponse.Error>}
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.graphqleditor.messages.TextStreamResponse.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.graphqleditor.messages.TextStreamResponse.Error, 3));
};


/**
 * @param {!Array<!proto.graphqleditor.messages.TextStreamResponse.Error>} value
 * @return {!proto.graphqleditor.messages.TextStreamResponse} returns this
*/
proto.graphqleditor.messages.TextStreamResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.graphqleditor.messages.TextStreamResponse.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.TextStreamResponse.Error}
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.graphqleditor.messages.TextStreamResponse.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.TextStreamResponse} returns this
 */
proto.graphqleditor.messages.TextStreamResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.SubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.SubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.SubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.SubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.SubscriptionRequest}
 */
proto.graphqleditor.messages.SubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.SubscriptionRequest;
  return proto.graphqleditor.messages.SubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.SubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.SubscriptionRequest}
 */
proto.graphqleditor.messages.SubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.SubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.SubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.SubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.SubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.graphqleditor.messages.SubscriptionRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.SubscriptionRequest} returns this
 */
proto.graphqleditor.messages.SubscriptionRequest.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.SubscrptionPayload.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.SubscrptionPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.SubscrptionPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.SubscrptionPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.SubscrptionPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && stucco$ts$proto$gen_proto_messages_messages_pb.Value.toObject(includeInstance, f),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    stucco$ts$proto$gen_proto_messages_messages_pb.Value.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.SubscrptionPayload}
 */
proto.graphqleditor.messages.SubscrptionPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.SubscrptionPayload;
  return proto.graphqleditor.messages.SubscrptionPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.SubscrptionPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.SubscrptionPayload}
 */
proto.graphqleditor.messages.SubscrptionPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new stucco$ts$proto$gen_proto_messages_messages_pb.Value;
      reader.readMessage(value,stucco$ts$proto$gen_proto_messages_messages_pb.Value.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new stucco$ts$proto$gen_proto_messages_messages_pb.Value;
      reader.readMessage(value,stucco$ts$proto$gen_proto_messages_messages_pb.Value.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.SubscrptionPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.SubscrptionPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.SubscrptionPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.SubscrptionPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      stucco$ts$proto$gen_proto_messages_messages_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      stucco$ts$proto$gen_proto_messages_messages_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional stucco.messages.Value data = 1;
 * @return {?proto.stucco.messages.Value}
 */
proto.graphqleditor.messages.SubscrptionPayload.prototype.getData = function() {
  return /** @type{?proto.stucco.messages.Value} */ (
    jspb.Message.getWrapperField(this, stucco$ts$proto$gen_proto_messages_messages_pb.Value, 1));
};


/**
 * @param {?proto.stucco.messages.Value|undefined} value
 * @return {!proto.graphqleditor.messages.SubscrptionPayload} returns this
*/
proto.graphqleditor.messages.SubscrptionPayload.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.graphqleditor.messages.SubscrptionPayload} returns this
 */
proto.graphqleditor.messages.SubscrptionPayload.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.graphqleditor.messages.SubscrptionPayload.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated stucco.messages.Value errors = 2;
 * @return {!Array<!proto.stucco.messages.Value>}
 */
proto.graphqleditor.messages.SubscrptionPayload.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.stucco.messages.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, stucco$ts$proto$gen_proto_messages_messages_pb.Value, 2));
};


/**
 * @param {!Array<!proto.stucco.messages.Value>} value
 * @return {!proto.graphqleditor.messages.SubscrptionPayload} returns this
*/
proto.graphqleditor.messages.SubscrptionPayload.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.stucco.messages.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.stucco.messages.Value}
 */
proto.graphqleditor.messages.SubscrptionPayload.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.stucco.messages.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.SubscrptionPayload} returns this
 */
proto.graphqleditor.messages.SubscrptionPayload.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.SubscriptionResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.SubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.SubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.SubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.SubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && proto.graphqleditor.messages.SubscrptionPayload.toObject(includeInstance, f),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.graphqleditor.messages.SubscriptionResponse.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.SubscriptionResponse}
 */
proto.graphqleditor.messages.SubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.SubscriptionResponse;
  return proto.graphqleditor.messages.SubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.SubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.SubscriptionResponse}
 */
proto.graphqleditor.messages.SubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.graphqleditor.messages.SubscrptionPayload;
      reader.readMessage(value,proto.graphqleditor.messages.SubscrptionPayload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 2:
      var value = new proto.graphqleditor.messages.SubscriptionResponse.Error;
      reader.readMessage(value,proto.graphqleditor.messages.SubscriptionResponse.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.SubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.SubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.SubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.SubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.graphqleditor.messages.SubscrptionPayload.serializeBinaryToWriter
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.graphqleditor.messages.SubscriptionResponse.Error.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.SubscriptionResponse.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.SubscriptionResponse.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.SubscriptionResponse.Error}
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.SubscriptionResponse.Error;
  return proto.graphqleditor.messages.SubscriptionResponse.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.SubscriptionResponse.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.SubscriptionResponse.Error}
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.SubscriptionResponse.Error.ErrorKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.SubscriptionResponse.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.SubscriptionResponse.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.ErrorKind = {
  UNKNOWN: 0
};

/**
 * optional ErrorKind kind = 1;
 * @return {!proto.graphqleditor.messages.SubscriptionResponse.Error.ErrorKind}
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.prototype.getKind = function() {
  return /** @type {!proto.graphqleditor.messages.SubscriptionResponse.Error.ErrorKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.SubscriptionResponse.Error.ErrorKind} value
 * @return {!proto.graphqleditor.messages.SubscriptionResponse.Error} returns this
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.SubscriptionResponse.Error} returns this
 */
proto.graphqleditor.messages.SubscriptionResponse.Error.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SubscrptionPayload payload = 1;
 * @return {?proto.graphqleditor.messages.SubscrptionPayload}
 */
proto.graphqleditor.messages.SubscriptionResponse.prototype.getPayload = function() {
  return /** @type{?proto.graphqleditor.messages.SubscrptionPayload} */ (
    jspb.Message.getWrapperField(this, proto.graphqleditor.messages.SubscrptionPayload, 1));
};


/**
 * @param {?proto.graphqleditor.messages.SubscrptionPayload|undefined} value
 * @return {!proto.graphqleditor.messages.SubscriptionResponse} returns this
*/
proto.graphqleditor.messages.SubscriptionResponse.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.graphqleditor.messages.SubscriptionResponse} returns this
 */
proto.graphqleditor.messages.SubscriptionResponse.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.graphqleditor.messages.SubscriptionResponse.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Error errors = 2;
 * @return {!Array<!proto.graphqleditor.messages.SubscriptionResponse.Error>}
 */
proto.graphqleditor.messages.SubscriptionResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.graphqleditor.messages.SubscriptionResponse.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.graphqleditor.messages.SubscriptionResponse.Error, 2));
};


/**
 * @param {!Array<!proto.graphqleditor.messages.SubscriptionResponse.Error>} value
 * @return {!proto.graphqleditor.messages.SubscriptionResponse} returns this
*/
proto.graphqleditor.messages.SubscriptionResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.graphqleditor.messages.SubscriptionResponse.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.SubscriptionResponse.Error}
 */
proto.graphqleditor.messages.SubscriptionResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.graphqleditor.messages.SubscriptionResponse.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.SubscriptionResponse} returns this
 */
proto.graphqleditor.messages.SubscriptionResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.TextStreamSource.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.TextStreamSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.TextStreamSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.TextStreamSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    config: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.TextStreamSource}
 */
proto.graphqleditor.messages.TextStreamSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.TextStreamSource;
  return proto.graphqleditor.messages.TextStreamSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.TextStreamSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.TextStreamSource}
 */
proto.graphqleditor.messages.TextStreamSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.TextStreamSource.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.TextStreamSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.TextStreamSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.TextStreamSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.TextStreamSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.TextStreamSource.Kind = {
  FUNCTION: 0,
  JOB: 1
};

/**
 * optional Kind kind = 1;
 * @return {!proto.graphqleditor.messages.TextStreamSource.Kind}
 */
proto.graphqleditor.messages.TextStreamSource.prototype.getKind = function() {
  return /** @type {!proto.graphqleditor.messages.TextStreamSource.Kind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.TextStreamSource.Kind} value
 * @return {!proto.graphqleditor.messages.TextStreamSource} returns this
 */
proto.graphqleditor.messages.TextStreamSource.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string config = 2;
 * @return {string}
 */
proto.graphqleditor.messages.TextStreamSource.prototype.getConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.TextStreamSource} returns this
 */
proto.graphqleditor.messages.TextStreamSource.prototype.setConfig = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.GetJobStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.GetJobStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.GetJobStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.GetJobStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.GetJobStatusRequest}
 */
proto.graphqleditor.messages.GetJobStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.GetJobStatusRequest;
  return proto.graphqleditor.messages.GetJobStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.GetJobStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.GetJobStatusRequest}
 */
proto.graphqleditor.messages.GetJobStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.GetJobStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.GetJobStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.GetJobStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.GetJobStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trackId = 1;
 * @return {string}
 */
proto.graphqleditor.messages.GetJobStatusRequest.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.GetJobStatusRequest} returns this
 */
proto.graphqleditor.messages.GetJobStatusRequest.prototype.setTrackid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.GetJobStatusResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.GetJobStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.GetJobStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.GetJobStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.GetJobStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    jobStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.graphqleditor.messages.GetJobStatusResponse.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse}
 */
proto.graphqleditor.messages.GetJobStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.GetJobStatusResponse;
  return proto.graphqleditor.messages.GetJobStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.GetJobStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse}
 */
proto.graphqleditor.messages.GetJobStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!proto.graphqleditor.messages.GetJobStatusResponse.JobStatus} */ (reader.readEnum());
      msg.setJobStatus(value);
      break;
    case 3:
      var value = new proto.graphqleditor.messages.GetJobStatusResponse.Error;
      reader.readMessage(value,proto.graphqleditor.messages.GetJobStatusResponse.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.GetJobStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.GetJobStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.GetJobStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.GetJobStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getJobStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.graphqleditor.messages.GetJobStatusResponse.Error.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.GetJobStatusResponse.JobStatus = {
  STARTING: 0,
  RUNNING: 1,
  SUCCEEDED: 2,
  FAILED: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.GetJobStatusResponse.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.GetJobStatusResponse.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse.Error}
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.GetJobStatusResponse.Error;
  return proto.graphqleditor.messages.GetJobStatusResponse.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.GetJobStatusResponse.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse.Error}
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.GetJobStatusResponse.Error.ErrorKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.GetJobStatusResponse.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.GetJobStatusResponse.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.ErrorKind = {
  UNKNOWN: 0
};

/**
 * optional ErrorKind kind = 1;
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse.Error.ErrorKind}
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.prototype.getKind = function() {
  return /** @type {!proto.graphqleditor.messages.GetJobStatusResponse.Error.ErrorKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.GetJobStatusResponse.Error.ErrorKind} value
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse.Error} returns this
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse.Error} returns this
 */
proto.graphqleditor.messages.GetJobStatusResponse.Error.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Status status = 1;
 * @return {!proto.graphqleditor.messages.Status}
 */
proto.graphqleditor.messages.GetJobStatusResponse.prototype.getStatus = function() {
  return /** @type {!proto.graphqleditor.messages.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.Status} value
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse} returns this
 */
proto.graphqleditor.messages.GetJobStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional JobStatus job_status = 2;
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse.JobStatus}
 */
proto.graphqleditor.messages.GetJobStatusResponse.prototype.getJobStatus = function() {
  return /** @type {!proto.graphqleditor.messages.GetJobStatusResponse.JobStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.graphqleditor.messages.GetJobStatusResponse.JobStatus} value
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse} returns this
 */
proto.graphqleditor.messages.GetJobStatusResponse.prototype.setJobStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Error errors = 3;
 * @return {!Array<!proto.graphqleditor.messages.GetJobStatusResponse.Error>}
 */
proto.graphqleditor.messages.GetJobStatusResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.graphqleditor.messages.GetJobStatusResponse.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.graphqleditor.messages.GetJobStatusResponse.Error, 3));
};


/**
 * @param {!Array<!proto.graphqleditor.messages.GetJobStatusResponse.Error>} value
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse} returns this
*/
proto.graphqleditor.messages.GetJobStatusResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.graphqleditor.messages.GetJobStatusResponse.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse.Error}
 */
proto.graphqleditor.messages.GetJobStatusResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.graphqleditor.messages.GetJobStatusResponse.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.GetJobStatusResponse} returns this
 */
proto.graphqleditor.messages.GetJobStatusResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.JobStatusStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.JobStatusStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.JobStatusStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.JobStatusStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.JobStatusStreamRequest}
 */
proto.graphqleditor.messages.JobStatusStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.JobStatusStreamRequest;
  return proto.graphqleditor.messages.JobStatusStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.JobStatusStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.JobStatusStreamRequest}
 */
proto.graphqleditor.messages.JobStatusStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.JobStatusStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.JobStatusStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.JobStatusStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.JobStatusStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trackId = 1;
 * @return {string}
 */
proto.graphqleditor.messages.JobStatusStreamRequest.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.JobStatusStreamRequest} returns this
 */
proto.graphqleditor.messages.JobStatusStreamRequest.prototype.setTrackid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.JobStatusStreamResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.JobStatusStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.JobStatusStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.JobStatusStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    jobStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.graphqleditor.messages.JobStatusStreamResponse.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.JobStatusStreamResponse;
  return proto.graphqleditor.messages.JobStatusStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.JobStatusStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!proto.graphqleditor.messages.JobStatusStreamResponse.JobStatus} */ (reader.readEnum());
      msg.setJobStatus(value);
      break;
    case 3:
      var value = new proto.graphqleditor.messages.JobStatusStreamResponse.Error;
      reader.readMessage(value,proto.graphqleditor.messages.JobStatusStreamResponse.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.JobStatusStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.JobStatusStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.JobStatusStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getJobStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.graphqleditor.messages.JobStatusStreamResponse.Error.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.JobStatus = {
  STARTING: 0,
  RUNNING: 1,
  SUCCEEDED: 2,
  FAILED: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.JobStatusStreamResponse.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.JobStatusStreamResponse.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse.Error}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.JobStatusStreamResponse.Error;
  return proto.graphqleditor.messages.JobStatusStreamResponse.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.JobStatusStreamResponse.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse.Error}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.JobStatusStreamResponse.Error.ErrorKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.JobStatusStreamResponse.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.JobStatusStreamResponse.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.ErrorKind = {
  UNKNOWN: 0
};

/**
 * optional ErrorKind kind = 1;
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse.Error.ErrorKind}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.prototype.getKind = function() {
  return /** @type {!proto.graphqleditor.messages.JobStatusStreamResponse.Error.ErrorKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.JobStatusStreamResponse.Error.ErrorKind} value
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse.Error} returns this
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse.Error} returns this
 */
proto.graphqleditor.messages.JobStatusStreamResponse.Error.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Status status = 1;
 * @return {!proto.graphqleditor.messages.Status}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.prototype.getStatus = function() {
  return /** @type {!proto.graphqleditor.messages.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.Status} value
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse} returns this
 */
proto.graphqleditor.messages.JobStatusStreamResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional JobStatus job_status = 2;
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse.JobStatus}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.prototype.getJobStatus = function() {
  return /** @type {!proto.graphqleditor.messages.JobStatusStreamResponse.JobStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.graphqleditor.messages.JobStatusStreamResponse.JobStatus} value
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse} returns this
 */
proto.graphqleditor.messages.JobStatusStreamResponse.prototype.setJobStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Error errors = 3;
 * @return {!Array<!proto.graphqleditor.messages.JobStatusStreamResponse.Error>}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.graphqleditor.messages.JobStatusStreamResponse.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.graphqleditor.messages.JobStatusStreamResponse.Error, 3));
};


/**
 * @param {!Array<!proto.graphqleditor.messages.JobStatusStreamResponse.Error>} value
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse} returns this
*/
proto.graphqleditor.messages.JobStatusStreamResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.graphqleditor.messages.JobStatusStreamResponse.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse.Error}
 */
proto.graphqleditor.messages.JobStatusStreamResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.graphqleditor.messages.JobStatusStreamResponse.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.JobStatusStreamResponse} returns this
 */
proto.graphqleditor.messages.JobStatusStreamResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.RuntimeLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.RuntimeLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.RuntimeLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.RuntimeLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_function: (f = msg.getFunction()) && proto.graphqleditor.messages.Function.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.RuntimeLogsRequest}
 */
proto.graphqleditor.messages.RuntimeLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.RuntimeLogsRequest;
  return proto.graphqleditor.messages.RuntimeLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.RuntimeLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.RuntimeLogsRequest}
 */
proto.graphqleditor.messages.RuntimeLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.graphqleditor.messages.Function;
      reader.readMessage(value,proto.graphqleditor.messages.Function.deserializeBinaryFromReader);
      msg.setFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.RuntimeLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.RuntimeLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.RuntimeLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.RuntimeLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.graphqleditor.messages.Function.serializeBinaryToWriter
    );
  }
};


/**
 * optional Function function = 1;
 * @return {?proto.graphqleditor.messages.Function}
 */
proto.graphqleditor.messages.RuntimeLogsRequest.prototype.getFunction = function() {
  return /** @type{?proto.graphqleditor.messages.Function} */ (
    jspb.Message.getWrapperField(this, proto.graphqleditor.messages.Function, 1));
};


/**
 * @param {?proto.graphqleditor.messages.Function|undefined} value
 * @return {!proto.graphqleditor.messages.RuntimeLogsRequest} returns this
*/
proto.graphqleditor.messages.RuntimeLogsRequest.prototype.setFunction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.graphqleditor.messages.RuntimeLogsRequest} returns this
 */
proto.graphqleditor.messages.RuntimeLogsRequest.prototype.clearFunction = function() {
  return this.setFunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.graphqleditor.messages.RuntimeLogsRequest.prototype.hasFunction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.graphqleditor.messages.RuntimeLogsResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.RuntimeLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.RuntimeLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.RuntimeLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.graphqleditor.messages.RuntimeLogsResponse.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.RuntimeLogsResponse;
  return proto.graphqleditor.messages.RuntimeLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.RuntimeLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    case 2:
      var value = /** @type {!proto.graphqleditor.messages.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.graphqleditor.messages.RuntimeLogsResponse.Error;
      reader.readMessage(value,proto.graphqleditor.messages.RuntimeLogsResponse.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.RuntimeLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.RuntimeLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.RuntimeLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.graphqleditor.messages.RuntimeLogsResponse.Error.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.graphqleditor.messages.RuntimeLogsResponse.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphqleditor.messages.RuntimeLogsResponse.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse.Error}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphqleditor.messages.RuntimeLogsResponse.Error;
  return proto.graphqleditor.messages.RuntimeLogsResponse.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphqleditor.messages.RuntimeLogsResponse.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse.Error}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.graphqleditor.messages.RuntimeLogsResponse.Error.ErrorKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphqleditor.messages.RuntimeLogsResponse.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphqleditor.messages.RuntimeLogsResponse.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.ErrorKind = {
  UNKNOWN: 0
};

/**
 * optional ErrorKind kind = 1;
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse.Error.ErrorKind}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.prototype.getKind = function() {
  return /** @type {!proto.graphqleditor.messages.RuntimeLogsResponse.Error.ErrorKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.graphqleditor.messages.RuntimeLogsResponse.Error.ErrorKind} value
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse.Error} returns this
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse.Error} returns this
 */
proto.graphqleditor.messages.RuntimeLogsResponse.Error.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string trackId = 1;
 * @return {string}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse} returns this
 */
proto.graphqleditor.messages.RuntimeLogsResponse.prototype.setTrackid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.graphqleditor.messages.Status}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.prototype.getStatus = function() {
  return /** @type {!proto.graphqleditor.messages.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.graphqleditor.messages.Status} value
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse} returns this
 */
proto.graphqleditor.messages.RuntimeLogsResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Error errors = 3;
 * @return {!Array<!proto.graphqleditor.messages.RuntimeLogsResponse.Error>}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.graphqleditor.messages.RuntimeLogsResponse.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.graphqleditor.messages.RuntimeLogsResponse.Error, 3));
};


/**
 * @param {!Array<!proto.graphqleditor.messages.RuntimeLogsResponse.Error>} value
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse} returns this
*/
proto.graphqleditor.messages.RuntimeLogsResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.graphqleditor.messages.RuntimeLogsResponse.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse.Error}
 */
proto.graphqleditor.messages.RuntimeLogsResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.graphqleditor.messages.RuntimeLogsResponse.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.graphqleditor.messages.RuntimeLogsResponse} returns this
 */
proto.graphqleditor.messages.RuntimeLogsResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};


/**
 * @enum {number}
 */
proto.graphqleditor.messages.Runtime = {
  NODEJS14: 0
};

/**
 * @enum {number}
 */
proto.graphqleditor.messages.Status = {
  OK: 0,
  ERROR: 1
};

/**
 * @enum {number}
 */
proto.graphqleditor.messages.ReadFunctionStatus = {
  READY: 0,
  IN_PROGRESS: 1,
  NOT_DEPLOYED: 2
};

goog.object.extend(exports, proto.graphqleditor.messages);
