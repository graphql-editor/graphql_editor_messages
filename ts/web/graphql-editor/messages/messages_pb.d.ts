import * as jspb from 'google-protobuf'

import * as stucco$ts$proto$gen_proto_messages_messages_pb from '../../stucco-ts-proto-gen/proto/messages/messages_pb';


export class Function extends jspb.Message {
  getId(): string;
  setId(value: string): Function;

  getProject(): string;
  setProject(value: string): Function;

  getNamespace(): string;
  setNamespace(value: string): Function;

  getWorkDir(): string;
  setWorkDir(value: string): Function;

  getFilesList(): Array<string>;
  setFilesList(value: Array<string>): Function;
  clearFilesList(): Function;
  addFiles(value: string, index?: number): Function;

  getBuildCmdList(): Array<string>;
  setBuildCmdList(value: Array<string>): Function;
  clearBuildCmdList(): Function;
  addBuildCmd(value: string, index?: number): Function;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Function.AsObject;
  static toObject(includeInstance: boolean, msg: Function): Function.AsObject;
  static serializeBinaryToWriter(message: Function, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Function;
  static deserializeBinaryFromReader(message: Function, reader: jspb.BinaryReader): Function;
}

export namespace Function {
  export type AsObject = {
    id: string,
    project: string,
    namespace: string,
    workDir: string,
    filesList: Array<string>,
    buildCmdList: Array<string>,
  }
}

export class CreateFunctionRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): CreateFunctionRequest;
  hasFunction(): boolean;
  clearFunction(): CreateFunctionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFunctionRequest): CreateFunctionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFunctionRequest;
  static deserializeBinaryFromReader(message: CreateFunctionRequest, reader: jspb.BinaryReader): CreateFunctionRequest;
}

export namespace CreateFunctionRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
  }
}

export class CreateFunctionResponse extends jspb.Message {
  getTrackId(): string;
  setTrackId(value: string): CreateFunctionResponse;

  getStatus(): Status;
  setStatus(value: Status): CreateFunctionResponse;

  getErrorsList(): Array<CreateFunctionResponse.Error>;
  setErrorsList(value: Array<CreateFunctionResponse.Error>): CreateFunctionResponse;
  clearErrorsList(): CreateFunctionResponse;
  addErrors(value?: CreateFunctionResponse.Error, index?: number): CreateFunctionResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFunctionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFunctionResponse): CreateFunctionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFunctionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFunctionResponse;
  static deserializeBinaryFromReader(message: CreateFunctionResponse, reader: jspb.BinaryReader): CreateFunctionResponse;
}

export namespace CreateFunctionResponse {
  export type AsObject = {
    trackId: string,
    status: Status,
    errorsList: Array<CreateFunctionResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getKind(): CreateFunctionResponse.Error.ErrorKind;
    setKind(value: CreateFunctionResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: CreateFunctionResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }

}

export class ReadFunctionRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): ReadFunctionRequest;
  hasFunction(): boolean;
  clearFunction(): ReadFunctionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadFunctionRequest): ReadFunctionRequest.AsObject;
  static serializeBinaryToWriter(message: ReadFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadFunctionRequest;
  static deserializeBinaryFromReader(message: ReadFunctionRequest, reader: jspb.BinaryReader): ReadFunctionRequest;
}

export namespace ReadFunctionRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
  }
}

export class ReadFunctionResponse extends jspb.Message {
  getStatus(): ReadFunctionStatus;
  setStatus(value: ReadFunctionStatus): ReadFunctionResponse;

  getUrl(): string;
  setUrl(value: string): ReadFunctionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadFunctionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadFunctionResponse): ReadFunctionResponse.AsObject;
  static serializeBinaryToWriter(message: ReadFunctionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadFunctionResponse;
  static deserializeBinaryFromReader(message: ReadFunctionResponse, reader: jspb.BinaryReader): ReadFunctionResponse;
}

export namespace ReadFunctionResponse {
  export type AsObject = {
    status: ReadFunctionStatus,
    url: string,
  }
}

export class CORSConfig extends jspb.Message {
  getAllowedOriginsList(): Array<string>;
  setAllowedOriginsList(value: Array<string>): CORSConfig;
  clearAllowedOriginsList(): CORSConfig;
  addAllowedOrigins(value: string, index?: number): CORSConfig;

  getAllowedHeadersList(): Array<string>;
  setAllowedHeadersList(value: Array<string>): CORSConfig;
  clearAllowedHeadersList(): CORSConfig;
  addAllowedHeaders(value: string, index?: number): CORSConfig;

  getAllowedMethodsList(): Array<HTTPMethod>;
  setAllowedMethodsList(value: Array<HTTPMethod>): CORSConfig;
  clearAllowedMethodsList(): CORSConfig;
  addAllowedMethods(value: HTTPMethod, index?: number): CORSConfig;

  getAllowCredentials(): boolean;
  setAllowCredentials(value: boolean): CORSConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CORSConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CORSConfig): CORSConfig.AsObject;
  static serializeBinaryToWriter(message: CORSConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CORSConfig;
  static deserializeBinaryFromReader(message: CORSConfig, reader: jspb.BinaryReader): CORSConfig;
}

export namespace CORSConfig {
  export type AsObject = {
    allowedOriginsList: Array<string>,
    allowedHeadersList: Array<string>,
    allowedMethodsList: Array<HTTPMethod>,
    allowCredentials: boolean,
  }
}

export class UpdateFunctionRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): UpdateFunctionRequest;
  hasFunction(): boolean;
  clearFunction(): UpdateFunctionRequest;

  getUrl(): string;
  setUrl(value: string): UpdateFunctionRequest;

  getSecretsList(): Array<string>;
  setSecretsList(value: Array<string>): UpdateFunctionRequest;
  clearSecretsList(): UpdateFunctionRequest;
  addSecrets(value: string, index?: number): UpdateFunctionRequest;

  getEnvType(): UpdateFunctionRequest.EnvType;
  setEnvType(value: UpdateFunctionRequest.EnvType): UpdateFunctionRequest;

  getNode14Opts(): UpdateFunctionRequest.Node14Opts | undefined;
  setNode14Opts(value?: UpdateFunctionRequest.Node14Opts): UpdateFunctionRequest;
  hasNode14Opts(): boolean;
  clearNode14Opts(): UpdateFunctionRequest;

  getCors(): CORSConfig | undefined;
  setCors(value?: CORSConfig): UpdateFunctionRequest;
  hasCors(): boolean;
  clearCors(): UpdateFunctionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFunctionRequest): UpdateFunctionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFunctionRequest;
  static deserializeBinaryFromReader(message: UpdateFunctionRequest, reader: jspb.BinaryReader): UpdateFunctionRequest;
}

export namespace UpdateFunctionRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
    url: string,
    secretsList: Array<string>,
    envType: UpdateFunctionRequest.EnvType,
    node14Opts?: UpdateFunctionRequest.Node14Opts.AsObject,
    cors?: CORSConfig.AsObject,
  }

  export class NodeOpts extends jspb.Message {
    getBuildScript(): string;
    setBuildScript(value: string): NodeOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeOpts.AsObject;
    static toObject(includeInstance: boolean, msg: NodeOpts): NodeOpts.AsObject;
    static serializeBinaryToWriter(message: NodeOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeOpts;
    static deserializeBinaryFromReader(message: NodeOpts, reader: jspb.BinaryReader): NodeOpts;
  }

  export namespace NodeOpts {
    export type AsObject = {
      buildScript: string,
    }
  }


  export class Node14Opts extends jspb.Message {
    getNodeOpts(): UpdateFunctionRequest.NodeOpts | undefined;
    setNodeOpts(value?: UpdateFunctionRequest.NodeOpts): Node14Opts;
    hasNodeOpts(): boolean;
    clearNodeOpts(): Node14Opts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node14Opts.AsObject;
    static toObject(includeInstance: boolean, msg: Node14Opts): Node14Opts.AsObject;
    static serializeBinaryToWriter(message: Node14Opts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node14Opts;
    static deserializeBinaryFromReader(message: Node14Opts, reader: jspb.BinaryReader): Node14Opts;
  }

  export namespace Node14Opts {
    export type AsObject = {
      nodeOpts?: UpdateFunctionRequest.NodeOpts.AsObject,
    }
  }


  export enum EnvType { 
    NODE14 = 0,
  }
}

export class UpdateFunctionResponse extends jspb.Message {
  getTrackId(): string;
  setTrackId(value: string): UpdateFunctionResponse;

  getStatus(): Status;
  setStatus(value: Status): UpdateFunctionResponse;

  getErrorsList(): Array<UpdateFunctionResponse.Error>;
  setErrorsList(value: Array<UpdateFunctionResponse.Error>): UpdateFunctionResponse;
  clearErrorsList(): UpdateFunctionResponse;
  addErrors(value?: UpdateFunctionResponse.Error, index?: number): UpdateFunctionResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFunctionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFunctionResponse): UpdateFunctionResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFunctionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFunctionResponse;
  static deserializeBinaryFromReader(message: UpdateFunctionResponse, reader: jspb.BinaryReader): UpdateFunctionResponse;
}

export namespace UpdateFunctionResponse {
  export type AsObject = {
    trackId: string,
    status: Status,
    errorsList: Array<UpdateFunctionResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getKind(): UpdateFunctionResponse.Error.ErrorKind;
    setKind(value: UpdateFunctionResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: UpdateFunctionResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }

}

export class DeleteFunctionRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): DeleteFunctionRequest;
  hasFunction(): boolean;
  clearFunction(): DeleteFunctionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFunctionRequest): DeleteFunctionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFunctionRequest;
  static deserializeBinaryFromReader(message: DeleteFunctionRequest, reader: jspb.BinaryReader): DeleteFunctionRequest;
}

export namespace DeleteFunctionRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
  }
}

export class DeleteFunctionResponse extends jspb.Message {
  getTrackId(): string;
  setTrackId(value: string): DeleteFunctionResponse;

  getStatus(): Status;
  setStatus(value: Status): DeleteFunctionResponse;

  getErrorsList(): Array<DeleteFunctionResponse.Error>;
  setErrorsList(value: Array<DeleteFunctionResponse.Error>): DeleteFunctionResponse;
  clearErrorsList(): DeleteFunctionResponse;
  addErrors(value?: DeleteFunctionResponse.Error, index?: number): DeleteFunctionResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFunctionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFunctionResponse): DeleteFunctionResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFunctionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFunctionResponse;
  static deserializeBinaryFromReader(message: DeleteFunctionResponse, reader: jspb.BinaryReader): DeleteFunctionResponse;
}

export namespace DeleteFunctionResponse {
  export type AsObject = {
    trackId: string,
    status: Status,
    errorsList: Array<DeleteFunctionResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getKind(): DeleteFunctionResponse.Error.ErrorKind;
    setKind(value: DeleteFunctionResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: DeleteFunctionResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }

}

export class LogStreamRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): LogStreamRequest;
  hasFunction(): boolean;
  clearFunction(): LogStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogStreamRequest): LogStreamRequest.AsObject;
  static serializeBinaryToWriter(message: LogStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogStreamRequest;
  static deserializeBinaryFromReader(message: LogStreamRequest, reader: jspb.BinaryReader): LogStreamRequest;
}

export namespace LogStreamRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
  }
}

export class LogStreamResponse extends jspb.Message {
  getTrackId(): string;
  setTrackId(value: string): LogStreamResponse;

  getStatus(): Status;
  setStatus(value: Status): LogStreamResponse;

  getErrorsList(): Array<LogStreamResponse.Error>;
  setErrorsList(value: Array<LogStreamResponse.Error>): LogStreamResponse;
  clearErrorsList(): LogStreamResponse;
  addErrors(value?: LogStreamResponse.Error, index?: number): LogStreamResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogStreamResponse): LogStreamResponse.AsObject;
  static serializeBinaryToWriter(message: LogStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogStreamResponse;
  static deserializeBinaryFromReader(message: LogStreamResponse, reader: jspb.BinaryReader): LogStreamResponse;
}

export namespace LogStreamResponse {
  export type AsObject = {
    trackId: string,
    status: Status,
    errorsList: Array<LogStreamResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getKind(): LogStreamResponse.Error.ErrorKind;
    setKind(value: LogStreamResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: LogStreamResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }

}

export class TextStreamRequest extends jspb.Message {
  getTrackId(): string;
  setTrackId(value: string): TextStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TextStreamRequest): TextStreamRequest.AsObject;
  static serializeBinaryToWriter(message: TextStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextStreamRequest;
  static deserializeBinaryFromReader(message: TextStreamRequest, reader: jspb.BinaryReader): TextStreamRequest;
}

export namespace TextStreamRequest {
  export type AsObject = {
    trackId: string,
  }
}

export class TextStreamResponse extends jspb.Message {
  getStatus(): Status;
  setStatus(value: Status): TextStreamResponse;

  getLinesList(): Array<string>;
  setLinesList(value: Array<string>): TextStreamResponse;
  clearLinesList(): TextStreamResponse;
  addLines(value: string, index?: number): TextStreamResponse;

  getErrorsList(): Array<TextStreamResponse.Error>;
  setErrorsList(value: Array<TextStreamResponse.Error>): TextStreamResponse;
  clearErrorsList(): TextStreamResponse;
  addErrors(value?: TextStreamResponse.Error, index?: number): TextStreamResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TextStreamResponse): TextStreamResponse.AsObject;
  static serializeBinaryToWriter(message: TextStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextStreamResponse;
  static deserializeBinaryFromReader(message: TextStreamResponse, reader: jspb.BinaryReader): TextStreamResponse;
}

export namespace TextStreamResponse {
  export type AsObject = {
    status: Status,
    linesList: Array<string>,
    errorsList: Array<TextStreamResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getKind(): TextStreamResponse.Error.ErrorKind;
    setKind(value: TextStreamResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: TextStreamResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }

}

export class SubscriptionRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): SubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionRequest): SubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: SubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionRequest;
  static deserializeBinaryFromReader(message: SubscriptionRequest, reader: jspb.BinaryReader): SubscriptionRequest;
}

export namespace SubscriptionRequest {
  export type AsObject = {
    requestId: string,
  }
}

export class SubscrptionPayload extends jspb.Message {
  getData(): stucco$ts$proto$gen_proto_messages_messages_pb.Value | undefined;
  setData(value?: stucco$ts$proto$gen_proto_messages_messages_pb.Value): SubscrptionPayload;
  hasData(): boolean;
  clearData(): SubscrptionPayload;

  getErrorsList(): Array<stucco$ts$proto$gen_proto_messages_messages_pb.Value>;
  setErrorsList(value: Array<stucco$ts$proto$gen_proto_messages_messages_pb.Value>): SubscrptionPayload;
  clearErrorsList(): SubscrptionPayload;
  addErrors(value?: stucco$ts$proto$gen_proto_messages_messages_pb.Value, index?: number): stucco$ts$proto$gen_proto_messages_messages_pb.Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscrptionPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SubscrptionPayload): SubscrptionPayload.AsObject;
  static serializeBinaryToWriter(message: SubscrptionPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscrptionPayload;
  static deserializeBinaryFromReader(message: SubscrptionPayload, reader: jspb.BinaryReader): SubscrptionPayload;
}

export namespace SubscrptionPayload {
  export type AsObject = {
    data?: stucco$ts$proto$gen_proto_messages_messages_pb.Value.AsObject,
    errorsList: Array<stucco$ts$proto$gen_proto_messages_messages_pb.Value.AsObject>,
  }
}

export class SubscriptionResponse extends jspb.Message {
  getPayload(): SubscrptionPayload | undefined;
  setPayload(value?: SubscrptionPayload): SubscriptionResponse;
  hasPayload(): boolean;
  clearPayload(): SubscriptionResponse;

  getErrorsList(): Array<SubscriptionResponse.Error>;
  setErrorsList(value: Array<SubscriptionResponse.Error>): SubscriptionResponse;
  clearErrorsList(): SubscriptionResponse;
  addErrors(value?: SubscriptionResponse.Error, index?: number): SubscriptionResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionResponse): SubscriptionResponse.AsObject;
  static serializeBinaryToWriter(message: SubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionResponse;
  static deserializeBinaryFromReader(message: SubscriptionResponse, reader: jspb.BinaryReader): SubscriptionResponse;
}

export namespace SubscriptionResponse {
  export type AsObject = {
    payload?: SubscrptionPayload.AsObject,
    errorsList: Array<SubscriptionResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getKind(): SubscriptionResponse.Error.ErrorKind;
    setKind(value: SubscriptionResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: SubscriptionResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }

}

export class TextStreamSource extends jspb.Message {
  getKind(): TextStreamSource.Kind;
  setKind(value: TextStreamSource.Kind): TextStreamSource;

  getConfig(): string;
  setConfig(value: string): TextStreamSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextStreamSource.AsObject;
  static toObject(includeInstance: boolean, msg: TextStreamSource): TextStreamSource.AsObject;
  static serializeBinaryToWriter(message: TextStreamSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextStreamSource;
  static deserializeBinaryFromReader(message: TextStreamSource, reader: jspb.BinaryReader): TextStreamSource;
}

export namespace TextStreamSource {
  export type AsObject = {
    kind: TextStreamSource.Kind,
    config: string,
  }

  export enum Kind { 
    FUNCTION = 0,
    JOB = 1,
  }
}

export class GetJobStatusRequest extends jspb.Message {
  getTrackId(): string;
  setTrackId(value: string): GetJobStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobStatusRequest): GetJobStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobStatusRequest;
  static deserializeBinaryFromReader(message: GetJobStatusRequest, reader: jspb.BinaryReader): GetJobStatusRequest;
}

export namespace GetJobStatusRequest {
  export type AsObject = {
    trackId: string,
  }
}

export class GetJobStatusResponse extends jspb.Message {
  getStatus(): Status;
  setStatus(value: Status): GetJobStatusResponse;

  getJobStatus(): GetJobStatusResponse.JobStatus;
  setJobStatus(value: GetJobStatusResponse.JobStatus): GetJobStatusResponse;

  getErrorsList(): Array<GetJobStatusResponse.Error>;
  setErrorsList(value: Array<GetJobStatusResponse.Error>): GetJobStatusResponse;
  clearErrorsList(): GetJobStatusResponse;
  addErrors(value?: GetJobStatusResponse.Error, index?: number): GetJobStatusResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobStatusResponse): GetJobStatusResponse.AsObject;
  static serializeBinaryToWriter(message: GetJobStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobStatusResponse;
  static deserializeBinaryFromReader(message: GetJobStatusResponse, reader: jspb.BinaryReader): GetJobStatusResponse;
}

export namespace GetJobStatusResponse {
  export type AsObject = {
    status: Status,
    jobStatus: GetJobStatusResponse.JobStatus,
    errorsList: Array<GetJobStatusResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getKind(): GetJobStatusResponse.Error.ErrorKind;
    setKind(value: GetJobStatusResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: GetJobStatusResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }


  export enum JobStatus { 
    STARTING = 0,
    RUNNING = 1,
    SUCCEEDED = 2,
    FAILED = 3,
  }
}

export class JobStatusStreamRequest extends jspb.Message {
  getTrackId(): string;
  setTrackId(value: string): JobStatusStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobStatusStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JobStatusStreamRequest): JobStatusStreamRequest.AsObject;
  static serializeBinaryToWriter(message: JobStatusStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobStatusStreamRequest;
  static deserializeBinaryFromReader(message: JobStatusStreamRequest, reader: jspb.BinaryReader): JobStatusStreamRequest;
}

export namespace JobStatusStreamRequest {
  export type AsObject = {
    trackId: string,
  }
}

export class JobStatusStreamResponse extends jspb.Message {
  getStatus(): Status;
  setStatus(value: Status): JobStatusStreamResponse;

  getJobStatus(): JobStatusStreamResponse.JobStatus;
  setJobStatus(value: JobStatusStreamResponse.JobStatus): JobStatusStreamResponse;

  getErrorsList(): Array<JobStatusStreamResponse.Error>;
  setErrorsList(value: Array<JobStatusStreamResponse.Error>): JobStatusStreamResponse;
  clearErrorsList(): JobStatusStreamResponse;
  addErrors(value?: JobStatusStreamResponse.Error, index?: number): JobStatusStreamResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobStatusStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobStatusStreamResponse): JobStatusStreamResponse.AsObject;
  static serializeBinaryToWriter(message: JobStatusStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobStatusStreamResponse;
  static deserializeBinaryFromReader(message: JobStatusStreamResponse, reader: jspb.BinaryReader): JobStatusStreamResponse;
}

export namespace JobStatusStreamResponse {
  export type AsObject = {
    status: Status,
    jobStatus: JobStatusStreamResponse.JobStatus,
    errorsList: Array<JobStatusStreamResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getKind(): JobStatusStreamResponse.Error.ErrorKind;
    setKind(value: JobStatusStreamResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: JobStatusStreamResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }


  export enum JobStatus { 
    STARTING = 0,
    RUNNING = 1,
    SUCCEEDED = 2,
    FAILED = 3,
  }
}

export class GetRuntimeLogsRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): GetRuntimeLogsRequest;
  hasFunction(): boolean;
  clearFunction(): GetRuntimeLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRuntimeLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRuntimeLogsRequest): GetRuntimeLogsRequest.AsObject;
  static serializeBinaryToWriter(message: GetRuntimeLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRuntimeLogsRequest;
  static deserializeBinaryFromReader(message: GetRuntimeLogsRequest, reader: jspb.BinaryReader): GetRuntimeLogsRequest;
}

export namespace GetRuntimeLogsRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
  }
}

export class GetRuntimeLogsResponse extends jspb.Message {
  getTrackId(): string;
  setTrackId(value: string): GetRuntimeLogsResponse;

  getStatus(): Status;
  setStatus(value: Status): GetRuntimeLogsResponse;

  getErrorsList(): Array<GetRuntimeLogsResponse.Error>;
  setErrorsList(value: Array<GetRuntimeLogsResponse.Error>): GetRuntimeLogsResponse;
  clearErrorsList(): GetRuntimeLogsResponse;
  addErrors(value?: GetRuntimeLogsResponse.Error, index?: number): GetRuntimeLogsResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRuntimeLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRuntimeLogsResponse): GetRuntimeLogsResponse.AsObject;
  static serializeBinaryToWriter(message: GetRuntimeLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRuntimeLogsResponse;
  static deserializeBinaryFromReader(message: GetRuntimeLogsResponse, reader: jspb.BinaryReader): GetRuntimeLogsResponse;
}

export namespace GetRuntimeLogsResponse {
  export type AsObject = {
    trackId: string,
    status: Status,
    errorsList: Array<GetRuntimeLogsResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getKind(): GetRuntimeLogsResponse.Error.ErrorKind;
    setKind(value: GetRuntimeLogsResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: GetRuntimeLogsResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }

}

export class GetFunctionConfigRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): GetFunctionConfigRequest;
  hasFunction(): boolean;
  clearFunction(): GetFunctionConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFunctionConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFunctionConfigRequest): GetFunctionConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetFunctionConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFunctionConfigRequest;
  static deserializeBinaryFromReader(message: GetFunctionConfigRequest, reader: jspb.BinaryReader): GetFunctionConfigRequest;
}

export namespace GetFunctionConfigRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
  }
}

export class GetFunctionConfigResponse extends jspb.Message {
  getStatus(): Status;
  setStatus(value: Status): GetFunctionConfigResponse;

  getErrorsList(): Array<GetFunctionConfigResponse.Error>;
  setErrorsList(value: Array<GetFunctionConfigResponse.Error>): GetFunctionConfigResponse;
  clearErrorsList(): GetFunctionConfigResponse;
  addErrors(value?: GetFunctionConfigResponse.Error, index?: number): GetFunctionConfigResponse.Error;

  getSecretsList(): Array<string>;
  setSecretsList(value: Array<string>): GetFunctionConfigResponse;
  clearSecretsList(): GetFunctionConfigResponse;
  addSecrets(value: string, index?: number): GetFunctionConfigResponse;

  getCors(): CORSConfig | undefined;
  setCors(value?: CORSConfig): GetFunctionConfigResponse;
  hasCors(): boolean;
  clearCors(): GetFunctionConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFunctionConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFunctionConfigResponse): GetFunctionConfigResponse.AsObject;
  static serializeBinaryToWriter(message: GetFunctionConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFunctionConfigResponse;
  static deserializeBinaryFromReader(message: GetFunctionConfigResponse, reader: jspb.BinaryReader): GetFunctionConfigResponse;
}

export namespace GetFunctionConfigResponse {
  export type AsObject = {
    status: Status,
    errorsList: Array<GetFunctionConfigResponse.Error.AsObject>,
    secretsList: Array<string>,
    cors?: CORSConfig.AsObject,
  }

  export class Error extends jspb.Message {
    getKind(): GetFunctionConfigResponse.Error.ErrorKind;
    setKind(value: GetFunctionConfigResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: GetFunctionConfigResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }

}

export class SetFunctionConfigRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): SetFunctionConfigRequest;
  hasFunction(): boolean;
  clearFunction(): SetFunctionConfigRequest;

  getSecretsList(): Array<string>;
  setSecretsList(value: Array<string>): SetFunctionConfigRequest;
  clearSecretsList(): SetFunctionConfigRequest;
  addSecrets(value: string, index?: number): SetFunctionConfigRequest;

  getCors(): CORSConfig | undefined;
  setCors(value?: CORSConfig): SetFunctionConfigRequest;
  hasCors(): boolean;
  clearCors(): SetFunctionConfigRequest;

  getRemoveallsecrets(): boolean;
  setRemoveallsecrets(value: boolean): SetFunctionConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetFunctionConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetFunctionConfigRequest): SetFunctionConfigRequest.AsObject;
  static serializeBinaryToWriter(message: SetFunctionConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetFunctionConfigRequest;
  static deserializeBinaryFromReader(message: SetFunctionConfigRequest, reader: jspb.BinaryReader): SetFunctionConfigRequest;
}

export namespace SetFunctionConfigRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
    secretsList: Array<string>,
    cors?: CORSConfig.AsObject,
    removeallsecrets: boolean,
  }
}

export class SetFunctionConfigResponse extends jspb.Message {
  getStatus(): Status;
  setStatus(value: Status): SetFunctionConfigResponse;

  getErrorsList(): Array<SetFunctionConfigResponse.Error>;
  setErrorsList(value: Array<SetFunctionConfigResponse.Error>): SetFunctionConfigResponse;
  clearErrorsList(): SetFunctionConfigResponse;
  addErrors(value?: SetFunctionConfigResponse.Error, index?: number): SetFunctionConfigResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetFunctionConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetFunctionConfigResponse): SetFunctionConfigResponse.AsObject;
  static serializeBinaryToWriter(message: SetFunctionConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetFunctionConfigResponse;
  static deserializeBinaryFromReader(message: SetFunctionConfigResponse, reader: jspb.BinaryReader): SetFunctionConfigResponse;
}

export namespace SetFunctionConfigResponse {
  export type AsObject = {
    status: Status,
    errorsList: Array<SetFunctionConfigResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getKind(): SetFunctionConfigResponse.Error.ErrorKind;
    setKind(value: SetFunctionConfigResponse.Error.ErrorKind): Error;

    getMsg(): string;
    setMsg(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      kind: SetFunctionConfigResponse.Error.ErrorKind,
      msg: string,
    }

    export enum ErrorKind { 
      UNKNOWN = 0,
    }
  }

}

export enum Runtime { 
  NODEJS14 = 0,
}
export enum Status { 
  OK = 0,
  ERROR = 1,
}
export enum ReadFunctionStatus { 
  READY = 0,
  IN_PROGRESS = 1,
  NOT_DEPLOYED = 2,
}
export enum HTTPMethod { 
  GET = 0,
  HEAD = 1,
  POST = 2,
  PUT = 3,
  DELETE = 4,
  PATCH = 5,
}
