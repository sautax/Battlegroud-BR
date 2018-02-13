"use strict";
class game {
    constructor(id, bg) {
        this.bg = bg;
        canvas = document.querySelector("#" + id);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context = canvas.getContext('2d');
    }
    draw() {
    }
}
