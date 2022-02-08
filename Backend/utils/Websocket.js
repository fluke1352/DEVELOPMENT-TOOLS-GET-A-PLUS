// Event emitter and recive for WorldChat feature
class WebSocketWorldChat {
    // method for manage socket communication
    connection (socket)  {
        
        console.log(`Socket ID : ${ socket.id } has connected`);

        // send welcome msg to client when client connected
        socket.emit('connection', { msg : `Socket ID : ${ socket.id } has connected` });

        // active when use disconnected
        socket.on('disconnect', () => {
            console.log(`Socket ID : ${ socket.id } has disconnect`);
        });
    }
}

export default new WebSocketWorldChat();