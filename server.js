//engine
class player {
    constructor(pos, color, pseudo,id) {
        this.x = pos[0];
        this.y = pos[1];
        this.Wangle = 0;
        this.color = color;
        this.pseudo = pseudo
        this.id = id
    }
}
class map {
    constructor(whidth, height) {
        this.width = whidth;
        this.height = height;
    }
}

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mp = new map(5000,5000)

// var server = http.createServer(function (req, res) {
//     let page = url.parse(req.url).pathname;
//     let arrayS = Array.from(page)
//     let three = ""
//     for (let i = 0; i < 4; i++){
//         three=three +arrayS[i]
//     }
//     if (page === "/") {
//         fs.readFile('../../index.html', 'utf-8', function (error, content) {
//             res.writeHead(200, {
//                 "Content-Type": "text/html"
//             });
//             res.end(content);
//         });
//     } else if (three === "/bin") {
//         fs.readFile('../..' + page, 'utf-8', function (error, content) {
//             if (!error) {
//                 res.writeHead(200, {
//                     "Content-Type": "text/javascript"
//                 });
//                 res.end(content);
//             } else {
//                 res.writeHead(404)
//                 res.end()
//             }
//         });
//     }
// });
id = 0
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.get("/:fold/:target/:file",function(req,res){
    if (req.params.fold === "bin"){
        res.sendFile(__dirname+"/bin/"+req.params.target+"/"+req.params.file)
    }
})

let players = []
io.sockets.on('connection', function (socket, pseudo, Cplayer,vect) {

    socket.on("newP", function (pseudo) {
        id+=1
        socket.pseudo = pseudo
        socket.player = new player([Math.floor(Math.random() * 4000), Math.floor(Math.random() * 4000)], "yellow", pseudo,id)
        players.push(socket.player)
        socket.emit("Pupdate",socket.player,mp)
    });
    socket.on('move',function(vect){
        if (socket.player.x + vect[0]  >  0 && socket.player.x + vect[0]  < mp.width ) {
            socket.player.x += vect[0] ;
        }
        if (socket.player.y + vect[1]  > 0 && socket.player.y + vect[1]  < mp.height ) {
            socket.player.y += vect[1];
        }
        socket.player.x+= vect[0]
        socket.player.y+= vect[1]
        
        for (let i =0; i<players.lenght;i++){
            if (players[i].id === socket.player){
                players[i] = socket.player;
            }
        }
        console.log(players)
        socket.emit('Cupdate',socket.player)
        socket.broadcast.emit('update',players)
    })

});


//app.use(express.static(__dirname + '../../../'));

http.listen(8080);
console.log("listening on 8080")