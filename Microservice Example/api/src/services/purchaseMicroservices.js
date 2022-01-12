const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoloader = require('@grpc/proto-loader');

const loaderConfig = require('../config/proto');

const userMicroservicesDef = protoloader.loadSync(
  path.resolve(__dirname, '..', 'contracts', 'purchase-microservice.proto'),
  loaderConfig
)

const purchaseMicroservices = grpc.loadPackageDefinition(userMicroservicesDef);
const purchaseMicroservicesClient = new userMicroservices.UserService('0.0.0.0:3335', grpc.credentials.createInsecure());

module.exports = purchaseMicroservicesClient;