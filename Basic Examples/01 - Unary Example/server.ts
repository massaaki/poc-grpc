import path from "path";
import * as grpc from '@grpc/grpc-js';
import * as prootoLoader from '@grpc/proto-loader';
import { HelloHandlers } from './proto/helloPackage/Hello'

import { ProtoGrpcType } from './proto/hello';

const PORT = 50051;

const PROTO_FILE = './proto/hello.proto';

const packageDef = prootoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;
const helloPackage = grpcObj.helloPackage;


function getServer() {
  const server = new grpc.Server()
  server.addService(helloPackage.Hello.service, {
    "SayHello": (req, res) => {
      console.log(req, res)

      res(null, { message: "Some response here" })

    }
  } as HelloHandlers)
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