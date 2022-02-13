class WorldChatSocket {
    
    constructor (io, socket) {
        this.io = io;
        this.socket = socket;
        this.connection();
        socket.on('join', (client) => this.joinRoom(client));
        socket.on('client-send', (client) => this.messageHandle(client));
    }

    // use for log and send info when client connnected
    connection () {
       console.log(`Socket ID : ${ this.socket.id } has connected to Server`);
    }

    // send notify message when client join world chat
    joinRoom (client) {
        this.socket.join('world-chat');
        console.log(`${ client.username } join world chat`);
        this.io.in('world-chat').emit('has-join-message', { socketId : this.socket.id, message : `${ client.username } join world chat`, time : client.time });
    }

    // send message to everyone in world chat when client send message
    messageHandle (client) {
        if (client.message === null || client.time === null) {
            console.log("Client Send null value")
            this.io.in('world-chat').emit('client-boardcast', null);
        }
        else {
            this.io.in('world-chat').emit('client-boardcast', { socketId : this.socket.id, username : client.username, message : client.message, time : client.time});
        }
    }
}

// for build Class
const buildChatSocketClass = (io) => {
        io.of('/world_chat').on('connection', (socket) => new WorldChatSocket(io.of('/world_chat'), socket));
}

export default buildChatSocketClass;