let http = require("http")
let ejs = require("ejs");
let fs = require("fs") 
let url = require("url");
var server = http.createServer(function(req, res) {
    let page = url.parse(req.url).pathname;
    let arrayS = Array.from(page)
    let three = ""
    for (let i = 0; i < 4; i++){
        three=three +arrayS[i]
    }
    if (page === "/"){
        fs.readFile('../../index.html', 'utf-8', function(error, content) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(content);
        });
    }
    else if (three ==="/bin") {
        fs.readFile('../..'+page, 'utf-8', function(error, content) {
            if (!error){
                res.writeHead(200, {"Content-Type": "text/javascript"});
                res.end(content);
            }
            else{
                res.writeHead(404)
                res.end()
            }
        });
    }
});

let io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log('client connected');  
});
//app.use(express.static(__dirname + '../../../'));


server.listen(8080)
console.log("listening on 8080")