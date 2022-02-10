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
        console.log(`${ this.socket.id } join world chat`);
        this.io.in('world-chat').emit('has-join-message', { message : `${ client.username } join world chat` });
    }

    // send message to everyone in world chat when client send message
    messageHandle (client) {
        this.io.in('world-chat').emit('client-boardcast', { message : client.message , username : client.username});
    }
}

// for build Class
const buildChatSocketClass = (io) => {
    io.of('/world_chat').on('connection', (socket) => new WorldChatSocket(io.of('/world_chat'), socket));
}

export default buildChatSocketClass;