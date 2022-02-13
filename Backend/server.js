import express from "express";
import socketOption from "./constants/socketServerOptions.js";
import { Server } from "socket.io";
import { createServer } from "http";
import buildChatSocketClass from "./utils/WebSocketClass.js";

// Server side socket.io connection code
const server = express();
const httpServer = createServer(server);

// Build new Socket Class
const io = new Server(httpServer, socketOption);
buildChatSocketClass(io);

// server listening for socket 
httpServer.listen(8080, () =>
  console.log(`server run on port ${8080}`)
);

// Declare socket to global 
// global.io = new Server(httpServer, socketOption);
// global.io.of('/world_chat').on('connection', Websocket.connection);
