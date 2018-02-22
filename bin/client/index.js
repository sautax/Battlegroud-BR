"use strict";
//client
document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        left = 1;
    }
    if (e.key === "ArrowRight") {
        right = 1;
    }
    if (e.key === "ArrowUp") {
        up = 1;
    }
    if (e.key === "ArrowDown") {
        down = 1;
    }
    vect[1] = 50 * down - 50 * up;
    vect[0] = 50 * right - 50 * left;
    socket.emit("move",vect)
});
document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft") {
        left = 0;
    }
    if (e.key === "ArrowRight") {
        right = 0;
    }
    if (e.key === "ArrowUp") {
        up = 0;
    }
    if (e.key === "ArrowDown") {
        down = 0;
    }
    vect[1] = 50 * down - 50 * up;
    vect[0] = 50 * right - 50 * left;
    socket.emit("move",vect)
});
let requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
let vect = []
let mouseX;
let mouseY;
let right = 0;
let left = 0;
let up = 0;
let down = 0;
let pseudo = prompt('enter a pseudo');
let players = []
let clientPlayer
socket.emit('newP', pseudo);
socket.on("update", function (ps) {
    players = ps
})
socket.on("Cupdate", function (Cplayer) {
    clientPlayer = Cplayer
})
socket.on("Pupdate", function (cp, mp) {
    let canvas = document.querySelector("#canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    clientPlayer = cp
    mouseX = canvas.width / 2;
    mouseY = canvas.height / 2;
    let x;
    let y;
    let m = mp
    let scl = canvas.width / 256;
    let step = 0

    function draw() {

        // vect[0] = mouseX - canvas.width/2
        // vect[1] = mouseY - canvas.height/2

        
        // clientPlayer.Wangle = Math.atan((mouseY - canvas.height / 2) / (mouseX - canvas.width / 2));
        context.fillStyle = "#709e9c";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.save();
        //context.translate(-clientPlayer.x + canvas.width/16,-clientPlayer.y+canvas.width/16)
        context.translate(canvas.width / 2, canvas.height / 2);
        context.strokeStyle = "white";
        context.fillStyle = clientPlayer.color;
        context.fillRect(-canvas.width / 16, -canvas.width / 16, canvas.width / 8, canvas.width / 8);
        context.translate(-(clientPlayer.x + canvas.width / 16), -(clientPlayer.y + canvas.width / 16));
        console.log(players)
        for (let i = 0; i < players.length; i++) {
            context.fillStyle = players[i].color;
            context.fillRect(players[i].x * scl, players[i].y * scl, canvas.width / 8, canvas.width / 8);
        }
        context.strokeStyle = "red";
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(m.width * scl, 0);
        context.stroke();
        context.beginPath();
        context.moveTo(0, m.height * scl);
        context.lineTo(m.width * scl, m.height * scl);
        context.stroke();
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, m.height * scl);
        context.stroke();
        context.beginPath();
        context.moveTo(m.width * scl, 0);
        context.lineTo(m.width * scl, m.height * scl);
        context.stroke();
        context.restore();
        requestAnimFrame(draw);
    }
    draw();


})