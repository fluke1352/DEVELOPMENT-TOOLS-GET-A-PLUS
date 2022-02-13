import {expect} from '@jest/globals';
import { Server } from "socket.io";
import { createServer } from "http";
import { io } from 'socket.io-client';
import buildChatSocketClass from "../utils/WebSocketClass.js";
import express from "express";
import socketOption from '../constants/socketServerOptions.js';

let httpServer, clientSocket, serverSocket

beforeAll((done) => {
    const server = express();
    httpServer = createServer(server);
    const ios = new Server(httpServer, socketOption);
    serverSocket = buildChatSocketClass(ios);
    httpServer.listen(8080);
    done();
});

afterAll((done) => {
    httpServer.close();
    done();
});

beforeEach((done) => {
    clientSocket = new io('http://localhost:8080/world_chat');
    clientSocket.emit('join', { username : "takai" });
    done();
})

afterEach((done) => {
    clientSocket.disconnect();
    done();
})

describe('Join World Chat Test', () => {

    test('join_world_chat', (done) => {
        clientSocket.on('has-join-message', (data) => {
            try {
                expect(data.message).toEqual(`takai join world chat`);
                done();
            }
            catch (err) {
                done(err);
            }
        });
    });

});

describe('Client Send Message Test', () => {

    test('client_send_message', (done) => {
        clientSocket.emit('client-send', { socketId : clientSocket.id, username : "takai", message : "Hello World", time : "12:30PM"});
        clientSocket.on('client-boardcast', (data) => {
            console.log(data)
            try {
                expect(data).toEqual( { socketId : clientSocket.id, username : "takai", message : "Hello World", time : "12:30PM"} );
                done();
            }
            catch(err) {
                done(err);
            }
        });
    });

    test('client_send_null', (done) => {
        clientSocket.emit('client-send', { username : "takai",  message : null , timeStamp : null });
        clientSocket.on('client-boardcast', data => {
            try {
                expect(data).toBeNull();
                done();
            }
            catch (err) {
                done(err);
            }
        });
    });

});

