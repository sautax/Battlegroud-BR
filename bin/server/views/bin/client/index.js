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
});
let requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
let mouseX;
let mouseY;
let right = 0;
let left = 0;
let up = 0;
let down = 0;
window.onload = function () {
    let canvas = document.querySelector("#canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    let clientPlayer = new player([0, 0], "#bd809a");
    mouseX = canvas.width / 2;
    mouseY = canvas.height / 2;
    let vect = [0, 0];
    let players = [];
    let x;
    let y;
    let m = new map(5000, 5000);
    let scl = canvas.width / 256;
    for (let i = 0; i < 50; i++) {
        x = Math.floor(Math.random() * 4900);
        y = Math.floor(Math.random() * 4900);
        players.push(new player([x, y], "red"));
    }
    function draw() {
        // vect[0] = mouseX - canvas.width/2
        // vect[1] = mouseY - canvas.height/2
        vect[1] = 50 * down - 50 * up;
        vect[0] = 50 * right - 50 * left;
        vect[0] *= scl;
        vect[1] *= scl;
        if (clientPlayer.x + vect[0] / 8 > -scl && clientPlayer.x + vect[0] / 8 < m.width * scl + scl - canvas.width / 8) {
            clientPlayer.x += vect[0] / 8;
        }
        if (clientPlayer.y + vect[1] / 8 > -scl && clientPlayer.y + vect[1] / 8 < m.height * scl + scl - canvas.width / 8) {
            clientPlayer.y += vect[1] / 8;
        }
        clientPlayer.Wangle = Math.atan((mouseY - canvas.height / 2) / (mouseX - canvas.width / 2));
        console.log(clientPlayer.Wangle);
        context.fillStyle = "#709e9c";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.save();
        //context.translate(-clientPlayer.x + canvas.width/16,-clientPlayer.y+canvas.width/16)
        context.translate(canvas.width / 2, canvas.height / 2);
        context.strokeStyle = "white";
        context.fillStyle = clientPlayer.color;
        context.fillRect(-canvas.width / 16, -canvas.width / 16, canvas.width / 8, canvas.width / 8);
        context.translate(-(clientPlayer.x + canvas.width / 16), -(clientPlayer.y + canvas.width / 16));
        for (let i = 0; i < players.length; i++) {
            context.fillStyle = players[i].color;
            context.fillRect(players[i].x * scl, players[i].y * scl, canvas.width / 8, canvas.width / 8);
        }
        context.strokeStyle = 'red';
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
};
