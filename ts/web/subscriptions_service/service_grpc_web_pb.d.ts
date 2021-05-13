import * as grpcWeb from 'grpc-web';

import * as messages_messages_pb from '../messages/messages_pb';


export class SubscriptionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  subscription(
    request: messages_messages_pb.SubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.SubscriptionResponse>;

}

export class SubscriptionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  subscription(
    request: messages_messages_pb.SubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.SubscriptionResponse>;

}

