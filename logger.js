const EventEmmiter = require("events")
const uuid = require("uuid")

class Logger extends EventEmmiter{
    log(msg) {
        //call evt
        this.emit("message", {id: uuid.v4(), msg});
    }
}
const Logger = require("./logger")

const loggerr = new Logger();
loggerr.on('message', (data) => console.log("called listener", data))
loggerr.log("Hello world")
module.exports = Logger;