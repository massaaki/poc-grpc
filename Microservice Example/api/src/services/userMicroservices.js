const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoloader = require('@grpc/proto-loader');

const loaderConfig = require('../config/proto');

const userMicroservicesDef = protoloader.loadSync(
  path.resolve(__dirname, '..', 'contracts', 'user-microservice.proto'),
  loaderConfig
)

const userMicroservices = grpc.loadPackageDefinition(userMicroservicesDef);
const userMicroservicesClient = new userMicroservices.UserService('0.0.0.0:3334', grpc.credentials.createInsecure());

module.exports = userMicroservicesClient;