import path from "path";
import * as grpc from '@grpc/grpc-js';
import * as prootoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from './proto/hello';

const PORT = 50051;

const PROTO_FILE = './proto/hello.proto';

const packageDef = prootoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;



const client = new grpcObj.helloPackage.Hello(
  `0.0.0.0:${PORT}`, grpc.credentials.createInsecure(),
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  onClientReady()

});


function onClientReady() {
  client.SayHello({ message: "HELLO WORLD" }, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log('result: ', result);
  })
}