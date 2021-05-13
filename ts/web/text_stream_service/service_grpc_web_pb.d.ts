import * as grpcWeb from 'grpc-web';

import * as messages_messages_pb from '../messages/messages_pb';


export class TextStreamServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  textStream(
    request: messages_messages_pb.TextStreamRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.TextStreamResponse>;

}

export class TextStreamServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  textStream(
    request: messages_messages_pb.TextStreamRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.TextStreamResponse>;

}

