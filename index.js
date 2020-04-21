const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
            if (err) throw err
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(content)
        })
        
    }
    if (req.url === "/api/users") {
        const users = [
            {name: "Bob", age: 24},
            {name: "Luke", age: 44}
            
        ]
        res.writeHead(200, {"Content-Type" : "application/json"})
        res.end(JSON.stringify(users));
        
    }
})
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("server running on port 5000..."))
