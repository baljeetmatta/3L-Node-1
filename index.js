const EventLogger=require("./eventlogger");
const event=new EventLogger();
event.on("MessageSent",()=>{
    console.log("Event handled")
})

event.log("Welcome to node");

// const EventEmitter=require("events");
// const event=new EventEmitter();


// const os=require("os");
// console.log(os.totalmem());
// const fsobject=require("fs");
// //let data=fsobject.readFileSync("./demo.txt");
// //console.log(data);
// // fsobject.readFile("./demo.txt","utf-8",function(err,data){
// //     if(err) console.log(err);
// //     else
// // console.log(data);

// // });




// const path=require("path");
// console.log(path);
// let data=path.parse(__filename);
// console.log(data);

// const logging=require("./another");
// console.log(logging);

// logging=1;


// logging.log('Welcome to node');
// logging.testing();




// console.log("hello to node");
// event.on("MessageSent",function(){

//     console.log("Event Handled");

// });

// const another=require("./another");
// another.log("Welcome to emiiter");


//event.emit("MessageSent");