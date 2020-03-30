const EventEmitter = require('events').EventEmitter;
 
class PingPing extends EventEmitter {
    constructor() {
        super();
        this.on('ping', this.pong); 
    }
 
    ping(msg) {
        console.log('ping');
        this.emit('ping', msg);
    }
 
    pong(msg) {
        console.log('pong', msg);
    }
}
 
const pingPong = new PingPing();
pingPong.ping('this is a TEST');
// ping
// pong