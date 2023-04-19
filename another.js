const EventEmitter=require("events");
const event=new EventEmitter();

function log(message)
{
    console.log(message);
    event.emit("MessageSent");


}
function test()
{
    console.log("Test called");
}
//module.exports={testing:test,log};
//module.exports=log;
module.exports.log=log;
module.exports.testing=test;



