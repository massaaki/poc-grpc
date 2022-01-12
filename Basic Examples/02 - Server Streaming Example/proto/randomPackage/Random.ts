// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NumberRequest as _randomPackage_NumberRequest, NumberRequest__Output as _randomPackage_NumberRequest__Output } from '../randomPackage/NumberRequest';
import type { NumberResponse as _randomPackage_NumberResponse, NumberResponse__Output as _randomPackage_NumberResponse__Output } from '../randomPackage/NumberResponse';

export interface RandomClient extends grpc.Client {
  RandomNumbers(argument: _randomPackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  RandomNumbers(argument: _randomPackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  randomNumbers(argument: _randomPackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  randomNumbers(argument: _randomPackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  RandomNumbers: grpc.handleServerStreamingCall<_randomPackage_NumberRequest__Output, _randomPackage_NumberResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  RandomNumbers: MethodDefinition<_randomPackage_NumberRequest, _randomPackage_NumberResponse, _randomPackage_NumberRequest__Output, _randomPackage_NumberResponse__Output>
}
