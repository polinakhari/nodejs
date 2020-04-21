const http = require("http")

//create server obj
 
http.createServer((request, response) =>{
    response.write("Hello world") 
    response.end();
}).listen(3000, () => console.log("server running"));