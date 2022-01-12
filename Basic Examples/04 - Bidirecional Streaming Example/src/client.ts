import path from "path";
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import readline from 'readline';

import { ProtoGrpcType as ChatType } from "contracts/chat";


const PORT = 50051;
const chatPackageDef = protoLoader.loadSync(path.resolve(__dirname, 'contracts', 'chat.proto'));
const chatGrpcObj = (grpc.loadPackageDefinition(chatPackageDef) as unknown) as ChatType;



const client = new chatGrpcObj.chatPackage.Chat(
  `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
)

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
  if (err) {
    console.log('error to initialize client..: ', err);
    return;
  }
  onClientReady()

});


function onClientReady() {
  console.log('client started');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const username = process.argv[2];

  if (!username) {
    console.log('no username');
    process.exit();
  }
  console.log('username', username);

  const metadata = new grpc.Metadata()
  metadata.set("username", username)
  const call = client.Chat(metadata)
  // call.end();


  call.write({
    message: "entered"
  });

  call.on("data", (chunk) => {
    console.log(`${chunk.username} : ${chunk.message}`);
  })

  rl.on("line", (line) => {
    if (line === "quit") {
      call.end();

    } else {
      call.write({
        message: line
      })
    }
  })
}