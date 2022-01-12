import path from "path";
import * as grpc from '@grpc/grpc-js';
import * as prootoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from './proto/list';

const PORT = 50051;

const PROTO_FILE = './proto/list.proto';

const packageDef = prootoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;



const client = new grpcObj.listPackage.List(
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
  const stream = client.TodoList((err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });

  stream.write({ todo: "step 1", status: "done" });
  stream.write({ todo: "step 2", status: "pending" });
  stream.write({ todo: "step 3", status: "done" });
  stream.write({ todo: "step 4", status: "pending" });
  stream.write({ todo: "step 5", status: "done" });
  stream.end();
}