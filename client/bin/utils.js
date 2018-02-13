"use strict";
class game {
    constructor(id, bg) {
        this.bg = bg;
        this.canvas = document.querySelector("#" + id);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
    }
    draw() {
    }
}
