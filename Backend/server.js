import express from "express";
import socketOption from "./constants/socketServerOptions.js";
import Websocket from "./utils/Websocket.js";
import { Server } from "socket.io";
import { createServer } from "http";

// Server side socket.io connection code
const server = express();
const httpServer = createServer(server);

// Declare socket to global 
global.io = new Server(httpServer, socketOption);
global.io.on('connection', Websocket.connection);

// server listening for socket 
httpServer.listen(8080, () =>
  console.log(`server run on port ${8080}`)
);

