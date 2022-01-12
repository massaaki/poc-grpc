import path from "path";
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { ChatHandlers } from "contracts/chatPackate/Chat";
import { ProtoGrpcType as ChatType } from "contracts/chat";

import { ChatRequest } from "contracts/chatPackate/ChatRequest";
import { ChatResponse } from "contracts/chatPackate/ChatResponse";


const PORT = 50051;
const chatPackageDef = protoLoader.loadSync(path.resolve(__dirname, 'contracts', 'chat.proto'));
const chatGrpcObj = (grpc.loadPackageDefinition(chatPackageDef) as unknown) as ChatType;
const chatPackage = chatGrpcObj.chatPackage;


// Global vars
const callObjByUsername = new Map<string, grpc.ServerDuplexStream<ChatRequest, ChatResponse>>()


function configServer() {
  const server = new grpc.Server()

  server.addService(
    chatPackage.Chat.service,
    {
      Chat: (call) => {
        call.on("data", (request) => {
          const username = call.metadata.get('username')[0] as string;
          const message = request.message;

          for (let [user, usersCall] of callObjByUsername) {
            if (username !== user) {
              usersCall.write({
                username,
                message
              })
            }
          }

          if (callObjByUsername.get(username) === undefined) {
            callObjByUsername.set(username, call);
          }
        });

        call.on("end", () => {
          const username = call.metadata.get('username')[0] as string;
          callObjByUsername.delete(username)
          call.write({
            username: "Server",
            message: `End message ${username}`
          })

          call.end();
        });
      }
    } as ChatHandlers);

  return server;
}

function main() {
  const server = configServer();

  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.log('Error to start the server ', error);
    }
    console.log("Server is running on port ", port);
  })
};
main();