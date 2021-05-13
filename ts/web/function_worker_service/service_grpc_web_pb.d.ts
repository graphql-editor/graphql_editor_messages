import * as grpcWeb from 'grpc-web';

import * as messages_messages_pb from '../messages/messages_pb';


export class FunctionWorkerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createFunction(
    request: messages_messages_pb.CreateFunctionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.CreateFunctionResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.CreateFunctionResponse>;

  updateFunction(
    request: messages_messages_pb.UpdateFunctionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.UpdateFunctionResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.UpdateFunctionResponse>;

  deleteFunction(
    request: messages_messages_pb.DeleteFunctionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.DeleteFunctionResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.DeleteFunctionResponse>;

  logStream(
    request: messages_messages_pb.LogStreamRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.LogStreamResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.LogStreamResponse>;

}

export class FunctionWorkerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createFunction(
    request: messages_messages_pb.CreateFunctionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.CreateFunctionResponse>;

  updateFunction(
    request: messages_messages_pb.UpdateFunctionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.UpdateFunctionResponse>;

  deleteFunction(
    request: messages_messages_pb.DeleteFunctionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.DeleteFunctionResponse>;

  logStream(
    request: messages_messages_pb.LogStreamRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.LogStreamResponse>;

}

