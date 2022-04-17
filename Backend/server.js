import express from "express";
import socketOption from "./constants/socketServerOptions.js";
import { Server } from "socket.io";
import { createServer } from "http";
import buildChatSocketClass from "./utils/WebSocketClass.js";
import configs from "./constants/mongoConfigs.js";
import mongoose from "mongoose"
import gameRoutes from "./routes/game.route.js"
import cors from "cors"

mongoose.Promise = global.Promise 
mongoose.connect(configs.mongouri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

mongoose.connection.on('error', () => {
    console.error("Something went wrong in mongodb %s", configs.mongouri)
})


// Server side socket.io connection code
const server = express();
server.use(cors())
server.use('/', gameRoutes)
const httpServer = createServer(server);

// Build new Socket Class
const io = new Server(httpServer, socketOption);
buildChatSocketClass(io);

// server listening for socket 
httpServer.listen(8080, () =>
  console.log(`server run on port ${8080}`)
);
