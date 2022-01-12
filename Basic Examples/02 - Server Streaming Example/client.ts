import path from "path";
import * as grpc from '@grpc/grpc-js';
import * as prootoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from './proto/random';

const PORT = 50051;

const PROTO_FILE = './proto/random.proto';

const packageDef = prootoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;



const client = new grpcObj.randomPackage.Random(
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
  const stream = client.RandomNumbers({ maxValue: 1000 });
  stream.on("data", (chunk) => {
    console.log(chunk)
  })
  stream.on("end", () => {
    console.log("communication ended.");
  })
}