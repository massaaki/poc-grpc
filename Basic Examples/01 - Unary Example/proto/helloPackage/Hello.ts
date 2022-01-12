// Original file: proto/hello.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SayRequest as _helloPackage_SayRequest, SayRequest__Output as _helloPackage_SayRequest__Output } from '../helloPackage/SayRequest';
import type { SayResponse as _helloPackage_SayResponse, SayResponse__Output as _helloPackage_SayResponse__Output } from '../helloPackage/SayResponse';

export interface HelloClient extends grpc.Client {
  SayHello(argument: _helloPackage_SayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_SayResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _helloPackage_SayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_SayResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _helloPackage_SayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_SayResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _helloPackage_SayRequest, callback: grpc.requestCallback<_helloPackage_SayResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloPackage_SayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_SayResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloPackage_SayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_SayResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloPackage_SayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_SayResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloPackage_SayRequest, callback: grpc.requestCallback<_helloPackage_SayResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface HelloHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_helloPackage_SayRequest__Output, _helloPackage_SayResponse>;
  
}

export interface HelloDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_helloPackage_SayRequest, _helloPackage_SayResponse, _helloPackage_SayRequest__Output, _helloPackage_SayResponse__Output>
}
