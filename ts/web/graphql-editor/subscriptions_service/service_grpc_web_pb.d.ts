import * as grpcWeb from 'grpc-web';

import * as graphql$editor_messages_messages_pb from '../../graphql-editor/messages/messages_pb';


export class SubscriptionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  subscription(
    request: graphql$editor_messages_messages_pb.SubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<graphql$editor_messages_messages_pb.SubscriptionResponse>;

}

export class SubscriptionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  subscription(
    request: graphql$editor_messages_messages_pb.SubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<graphql$editor_messages_messages_pb.SubscriptionResponse>;

}

