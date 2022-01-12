import path from "path";
import * as grpc from '@grpc/grpc-js';
import * as prootoLoader from '@grpc/proto-loader';
import { RandomHandlers } from './proto/randomPackage/Random'

import { ProtoGrpcType } from './proto/random';

const PORT = 50051;

const PROTO_FILE = './proto/random.proto';

const packageDef = prootoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;
const randomPackage = grpcObj.randomPackage;


function getServer() {
  const server = new grpc.Server()
  server.addService(
    randomPackage.Random.service, {
      RandomNumbers: (call) => {
        let maxValue = call.request.maxValue;
        if (!maxValue)
          maxValue = 0;

        let runCount = 0;
        const intervalId = setInterval(() => {
          runCount++;
          call.write({ value: Math.floor(Math.random() * maxValue!) })
          if (runCount >= 10) {
            clearInterval(intervalId)
            call.end();
          }
        }, 500)

      }
    } as RandomHandlers)

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