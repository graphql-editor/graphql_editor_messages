// package: graphqleditor.messages
// file: graphql-editor/messages/messages.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as stucco_ts_proto_gen_proto_messages_messages_pb from "../stucco-ts-proto-gen/dist/ts/node/messages/messages_pb";

export class Function extends jspb.Message { 
    getId(): string;
    setId(value: string): Function;
    getProject(): string;
    setProject(value: string): Function;
    getNamespace(): string;
    setNamespace(value: string): Function;
    getWorkDir(): string;
    setWorkDir(value: string): Function;
    clearFilesList(): void;
    getFilesList(): Array<string>;
    setFilesList(value: Array<string>): Function;
    addFiles(value: string, index?: number): string;
    clearBuildCmdList(): void;
    getBuildCmdList(): Array<string>;
    setBuildCmdList(value: Array<string>): Function;
    addBuildCmd(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Function.AsObject;
    static toObject(includeInstance: boolean, msg: Function): Function.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): Function | undefined;
    setFunction(value?: Function): CreateFunctionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFunctionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFunctionRequest): CreateFunctionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    getTrackid(): string;
    setTrackid(value: string): CreateFunctionResponse;
    getStatus(): Status;
    setStatus(value: Status): CreateFunctionResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<CreateFunctionResponse.Error>;
    setErrorsList(value: Array<CreateFunctionResponse.Error>): CreateFunctionResponse;
    addErrors(value?: CreateFunctionResponse.Error, index?: number): CreateFunctionResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFunctionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFunctionResponse): CreateFunctionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFunctionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFunctionResponse;
    static deserializeBinaryFromReader(message: CreateFunctionResponse, reader: jspb.BinaryReader): CreateFunctionResponse;
}

export namespace CreateFunctionResponse {
    export type AsObject = {
        trackid: string,
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
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): Function | undefined;
    setFunction(value?: Function): ReadFunctionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadFunctionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadFunctionRequest): ReadFunctionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

export class UpdateFunctionRequest extends jspb.Message { 

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): Function | undefined;
    setFunction(value?: Function): UpdateFunctionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFunctionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFunctionRequest): UpdateFunctionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFunctionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFunctionRequest;
    static deserializeBinaryFromReader(message: UpdateFunctionRequest, reader: jspb.BinaryReader): UpdateFunctionRequest;
}

export namespace UpdateFunctionRequest {
    export type AsObject = {
        pb_function?: Function.AsObject,
    }
}

export class UpdateFunctionResponse extends jspb.Message { 
    getTrackid(): string;
    setTrackid(value: string): UpdateFunctionResponse;
    getStatus(): Status;
    setStatus(value: Status): UpdateFunctionResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<UpdateFunctionResponse.Error>;
    setErrorsList(value: Array<UpdateFunctionResponse.Error>): UpdateFunctionResponse;
    addErrors(value?: UpdateFunctionResponse.Error, index?: number): UpdateFunctionResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFunctionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFunctionResponse): UpdateFunctionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFunctionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFunctionResponse;
    static deserializeBinaryFromReader(message: UpdateFunctionResponse, reader: jspb.BinaryReader): UpdateFunctionResponse;
}

export namespace UpdateFunctionResponse {
    export type AsObject = {
        trackid: string,
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
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): Function | undefined;
    setFunction(value?: Function): DeleteFunctionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFunctionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFunctionRequest): DeleteFunctionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    getTrackid(): string;
    setTrackid(value: string): DeleteFunctionResponse;
    getStatus(): Status;
    setStatus(value: Status): DeleteFunctionResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<DeleteFunctionResponse.Error>;
    setErrorsList(value: Array<DeleteFunctionResponse.Error>): DeleteFunctionResponse;
    addErrors(value?: DeleteFunctionResponse.Error, index?: number): DeleteFunctionResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFunctionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFunctionResponse): DeleteFunctionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFunctionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFunctionResponse;
    static deserializeBinaryFromReader(message: DeleteFunctionResponse, reader: jspb.BinaryReader): DeleteFunctionResponse;
}

export namespace DeleteFunctionResponse {
    export type AsObject = {
        trackid: string,
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
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): Function | undefined;
    setFunction(value?: Function): LogStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogStreamRequest): LogStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    getTrackid(): string;
    setTrackid(value: string): LogStreamResponse;
    getStatus(): Status;
    setStatus(value: Status): LogStreamResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<LogStreamResponse.Error>;
    setErrorsList(value: Array<LogStreamResponse.Error>): LogStreamResponse;
    addErrors(value?: LogStreamResponse.Error, index?: number): LogStreamResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogStreamResponse): LogStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogStreamResponse;
    static deserializeBinaryFromReader(message: LogStreamResponse, reader: jspb.BinaryReader): LogStreamResponse;
}

export namespace LogStreamResponse {
    export type AsObject = {
        trackid: string,
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
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    getTrackid(): string;
    setTrackid(value: string): TextStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TextStreamRequest): TextStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextStreamRequest;
    static deserializeBinaryFromReader(message: TextStreamRequest, reader: jspb.BinaryReader): TextStreamRequest;
}

export namespace TextStreamRequest {
    export type AsObject = {
        trackid: string,
    }
}

export class TextStreamResponse extends jspb.Message { 
    getStatus(): Status;
    setStatus(value: Status): TextStreamResponse;
    clearLinesList(): void;
    getLinesList(): Array<string>;
    setLinesList(value: Array<string>): TextStreamResponse;
    addLines(value: string, index?: number): string;
    clearErrorsList(): void;
    getErrorsList(): Array<TextStreamResponse.Error>;
    setErrorsList(value: Array<TextStreamResponse.Error>): TextStreamResponse;
    addErrors(value?: TextStreamResponse.Error, index?: number): TextStreamResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TextStreamResponse): TextStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasData(): boolean;
    clearData(): void;
    getData(): stucco_ts_proto_gen_proto_messages_messages_pb.Value | undefined;
    setData(value?: stucco_ts_proto_gen_proto_messages_messages_pb.Value): SubscrptionPayload;
    clearErrorsList(): void;
    getErrorsList(): Array<stucco_ts_proto_gen_proto_messages_messages_pb.Value>;
    setErrorsList(value: Array<stucco_ts_proto_gen_proto_messages_messages_pb.Value>): SubscrptionPayload;
    addErrors(value?: stucco_ts_proto_gen_proto_messages_messages_pb.Value, index?: number): stucco_ts_proto_gen_proto_messages_messages_pb.Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscrptionPayload.AsObject;
    static toObject(includeInstance: boolean, msg: SubscrptionPayload): SubscrptionPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscrptionPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscrptionPayload;
    static deserializeBinaryFromReader(message: SubscrptionPayload, reader: jspb.BinaryReader): SubscrptionPayload;
}

export namespace SubscrptionPayload {
    export type AsObject = {
        data?: stucco_ts_proto_gen_proto_messages_messages_pb.Value.AsObject,
        errorsList: Array<stucco_ts_proto_gen_proto_messages_messages_pb.Value.AsObject>,
    }
}

export class SubscriptionResponse extends jspb.Message { 

    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): SubscrptionPayload | undefined;
    setPayload(value?: SubscrptionPayload): SubscriptionResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<SubscriptionResponse.Error>;
    setErrorsList(value: Array<SubscriptionResponse.Error>): SubscriptionResponse;
    addErrors(value?: SubscriptionResponse.Error, index?: number): SubscriptionResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscriptionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscriptionResponse): SubscriptionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
