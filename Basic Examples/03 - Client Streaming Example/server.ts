import path from "path";
import * as grpc from '@grpc/grpc-js';
import * as prootoLoader from '@grpc/proto-loader';
import { ListHandlers } from './proto/listPackage/List'

import { ProtoGrpcType } from './proto/list';
import { TodoRequest } from "./proto/listPackage/TodoRequest";

const PORT = 50051;

const PROTO_FILE = './proto/list.proto';

const packageDef = prootoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;
const listPackage = grpcObj.listPackage;


const todoList: TodoRequest[] = [];

function getServer() {
  const server = new grpc.Server()
  server.addService(
    listPackage.List.service, {
      TodoList: (call, callback) => {
        call.on("data", (chunk) => {
          console.log(chunk)
          todoList.push(chunk);
        });
        call.on("end", () => {
          callback(null, { todos: todoList })
        })
      }
    } as ListHandlers)

  return server
}

function main() {
  const server = getServer()

  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.log('error:', err);
      return;
    }
    console.log("Server started on port ", PORT);
    server.start();
  })
}

main();