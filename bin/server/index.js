let http = require("http")
let ejs = require("ejs");
let fs = require("fs")
let url = require("url");
//engine
class player {
    constructor(pos, color, pseudo) {
        this.x = pos[0];
        this.y = pos[1];
        this.Wangle = 0;
        this.color = color;
        this.pseudo = pseudo
    }
}
class map {
    constructor(whidth, height) {
        this.width = whidth;
        this.height = height;
    }
}

var server = http.createServer(function (req, res) {
    let page = url.parse(req.url).pathname;
    let arrayS = Array.from(page)
    let three = ""
    for (let i = 0; i < 4; i++){
        three=three +arrayS[i]
    }
    console.log(page)
    if (page === "/") {
        fs.readFile('../../index.html', 'utf-8', function (error, content) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(content);
        });
    } else if (three === "/bin") {
        fs.readFile('../..' + page, 'utf-8', function (error, content) {
            if (!error) {
                res.writeHead(200, {
                    "Content-Type": "text/javascript"
                });
                res.end(content);
            } else {
                res.writeHead(404)
                res.end()
            }
        });
    }
});
scs = []
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket, pseudo) {

    socket.on("newP", function (pseudo) {
        socket.pseudo = pseudo
        socket.player = new player([Math.floor(Math.random() * 4000), Math.floor(Math.random() * 4000)], "yellow", pseudo)
        scs.push(socket)
        console.log(io.sockets)
        socket.emit("Pupdate",socket.player)

    });

});


//app.use(express.static(__dirname + '../../../'));

server.listen(8080);
console.log("listening on 8080")