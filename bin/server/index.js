
let ejs = require("ejs");
let express = require("express")
let app = express()

app.get("/",function(req,res){
    res.render("index.ejs")
});
app.use(express.static(__dirname + '../../../'));
let io = require('socket.io').listen();
io.sockets.on('connection', function (socket) {

    console.log('client connected');

});


app.listen(8080)