<h1>POC: gRPC (Remote Procedure Call)</h1>
<p>gRPC is a Framework developed by Google and implements a communication process using Http/2 protocol</p>
<p>I implemented 3 types of gRPC communication, Unary(same as json requests that we usualy create), Sever Streaming and Client Streaming.</p>

<h2>Caracteristics</h2>
<ul>
  <li>Communication using Protocol Buffers</li>
  <li>Binary data communcation</li>
  <li>Compressed headers</li>
  <li>Multiplex: Use the same TCP connection to receive data between client and server</li>
</ul>

<h2>Main applications</h2>
<ul>
  <li>Microservices</li>
  <li>Applications that needs many requests to get some result</li>
</ul>


<h2>Base Libraries to implement</h2>
<ul>
  <li>@grpc/grpc-js</li>
  <li>@grpc/proto-loader</li>
</ul>


<h2>Generate Types</h2>

<h3>Examples 1 to 3</h3>

```bash
yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ proto/*.proto
```

<h3>Example 4</h3>

```bash
yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/contracts/ src/contracts/*.proto
```





<h2>Getting Started</h2>

```bash
yarn start #starts the server
yarn client #starts the client
```
