// Event emitter and recive for WorldChat feature
class WebSocketWorldChat {
    // method for manage socket communication
    connection (socket)  {
        const io = global.io.of('/world_chat');
        // log when client connected
        console.log(`Socket ID : ${ socket.id } has connected to World Chat`);

        // send welcome msg to client when client connected
        socket.emit('connection', { msg : `Socket ID : ${ socket.id } has connected to World Chat` });

        // active when use disconnected
        socket.on('disconnect', () => {
            console.log(`Socket ID : ${ socket.id } has disconnect`);
        });

        socket.on('message-send', (data) => {
            io.in('room-1').emit('message-boardcast', { msg : data.msg })
        })

        socket.on('join', () => {
            socket.join('room-1');
            io.in('room-1').emit('has-join', { msg : 'new user has join room' });  
        })
    }
}

export default new WebSocketWorldChat();