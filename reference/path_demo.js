const path = require("path");
//Base file name
console.log(path.basename(__filename))
// Dir name
console.log(path.dirname(__filename))

//File extention
console.log(path.extname(__filename))

//Create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)

//Concatinate path
console.log(path.join(__dirname, "test", "hello.html"));
