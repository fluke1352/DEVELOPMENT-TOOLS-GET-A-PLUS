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
        this.io.in('world-chat').emit('has-join-message', { message : `${ client.username } join world chat`, timeStamp : client.timeStamp });
    }

    // send message to everyone in world chat when client send message
    messageHandle (client) {
        if (client.message === null || client.timeStamp === null) {
            this.io.in('world-chat').emit('client-boardcast', null);
        }
        else {
            this.io.in('world-chat').emit('client-boardcast', { username : client.username, message : client.message, timeStamp : client.timeStamp});
        }
    }
}

// for build Class
const buildChatSocketClass = (io) => {
        io.of('/world_chat').on('connection', (socket) => new WorldChatSocket(io.of('/world_chat'), socket));
}

export default buildChatSocketClass;