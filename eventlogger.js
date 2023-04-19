const EventEmitter=require("events");

class EventLogger extends EventEmitter
{

    log(message)
    {
        console.log(message);
        this.emit("MessageSent");
    }
}
module.exports=EventLogger;

