// const Person = require("./person");

// const person1 = new Person("Polina", 24);
//  person1.greeting();

const Logger = require("./logger")

const loggerr = new Logger();
loggerr.on('message', (data) => console.log("called listener", data))
loggerr.log("Hello world")