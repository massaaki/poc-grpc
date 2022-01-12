// Original file: src/contracts/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatRequest as _chatPackate_ChatRequest, ChatRequest__Output as _chatPackate_ChatRequest__Output } from '../chatPackate/ChatRequest';
import type { ChatResponse as _chatPackate_ChatResponse, ChatResponse__Output as _chatPackate_ChatResponse__Output } from '../chatPackate/ChatResponse';

export interface ChatClient extends grpc.Client {
  Chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_chatPackate_ChatRequest, _chatPackate_ChatResponse__Output>;
  Chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_chatPackate_ChatRequest, _chatPackate_ChatResponse__Output>;
  chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_chatPackate_ChatRequest, _chatPackate_ChatResponse__Output>;
  chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_chatPackate_ChatRequest, _chatPackate_ChatResponse__Output>;
  
}

export interface ChatHandlers extends grpc.UntypedServiceImplementation {
  Chat: grpc.handleBidiStreamingCall<_chatPackate_ChatRequest__Output, _chatPackate_ChatResponse>;
  
}

export interface ChatDefinition extends grpc.ServiceDefinition {
  Chat: MethodDefinition<_chatPackate_ChatRequest, _chatPackate_ChatResponse, _chatPackate_ChatRequest__Output, _chatPackate_ChatResponse__Output>
}
