"use strict";
class game {
    constructor(id, bg, Ppos) {
        this.bg = bg;
        this.canvas = document.querySelector("#" + id);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
        this.players = [];
        this.Cplayer = new player(Ppos);
    }
    draw() {
        this.context.fillStyle = this.bg;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
class player {
    constructor(pos) {
        this.position = [];
        this.Wangle = 0;
    }
}
