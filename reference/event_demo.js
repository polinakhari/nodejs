 const EventEmmiter = require("events")

 //create class
 class MyEmitter extends EventEmmiter {}

 //init obj
 const myEmitter = new MyEmitter();

 //event listener
 myEmitter.on("event", () => console.log("event fired"))

 // init event
 myEmitter.emit("event")