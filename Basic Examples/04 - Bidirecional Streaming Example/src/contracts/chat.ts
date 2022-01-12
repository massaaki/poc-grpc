import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatClient as _chatPackate_ChatClient, ChatDefinition as _chatPackate_ChatDefinition } from './chatPackate/Chat';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chatPackate: {
    Chat: SubtypeConstructor<typeof grpc.Client, _chatPackate_ChatClient> & { service: _chatPackate_ChatDefinition }
    ChatRequest: MessageTypeDefinition
    ChatResponse: MessageTypeDefinition
  }
}

