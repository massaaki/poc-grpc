
const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const implementation = require('./implementation')

require('./database');


const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'contracts', 'user.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
)


const proto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

server.addService(proto.UserService.service, implementation);
server.bindAsync('0.0.0.0:3334', grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log('server started on port', port)
  server.start();
});
