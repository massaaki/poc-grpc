import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ListClient as _listPackage_ListClient, ListDefinition as _listPackage_ListDefinition } from './listPackage/List';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  listPackage: {
    List: SubtypeConstructor<typeof grpc.Client, _listPackage_ListClient> & { service: _listPackage_ListDefinition }
    TodoRequest: MessageTypeDefinition
    TodoResponse: MessageTypeDefinition
  }
}

