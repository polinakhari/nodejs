const EventEmmiter = require("events")
const uuid = require("uuid")

class Logger extends EventEmmiter{
    log(msg) {
        //call evt
        this.emit("message", {id: uuid.v4(), msg});
    }
}
module.exports = Logger;