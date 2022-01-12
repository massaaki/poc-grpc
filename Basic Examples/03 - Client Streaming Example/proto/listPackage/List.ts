// Original file: proto/list.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { TodoRequest as _listPackage_TodoRequest, TodoRequest__Output as _listPackage_TodoRequest__Output } from '../listPackage/TodoRequest';
import type { TodoResponse as _listPackage_TodoResponse, TodoResponse__Output as _listPackage_TodoResponse__Output } from '../listPackage/TodoResponse';

export interface ListClient extends grpc.Client {
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_listPackage_TodoResponse__Output>): grpc.ClientWritableStream<_listPackage_TodoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_listPackage_TodoResponse__Output>): grpc.ClientWritableStream<_listPackage_TodoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_listPackage_TodoResponse__Output>): grpc.ClientWritableStream<_listPackage_TodoRequest>;
  TodoList(callback: grpc.requestCallback<_listPackage_TodoResponse__Output>): grpc.ClientWritableStream<_listPackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_listPackage_TodoResponse__Output>): grpc.ClientWritableStream<_listPackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_listPackage_TodoResponse__Output>): grpc.ClientWritableStream<_listPackage_TodoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_listPackage_TodoResponse__Output>): grpc.ClientWritableStream<_listPackage_TodoRequest>;
  todoList(callback: grpc.requestCallback<_listPackage_TodoResponse__Output>): grpc.ClientWritableStream<_listPackage_TodoRequest>;
  
}

export interface ListHandlers extends grpc.UntypedServiceImplementation {
  TodoList: grpc.handleClientStreamingCall<_listPackage_TodoRequest__Output, _listPackage_TodoResponse>;
  
}

export interface ListDefinition extends grpc.ServiceDefinition {
  TodoList: MethodDefinition<_listPackage_TodoRequest, _listPackage_TodoResponse, _listPackage_TodoRequest__Output, _listPackage_TodoResponse__Output>
}
