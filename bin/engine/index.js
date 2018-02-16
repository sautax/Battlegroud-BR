"use strict";
//engine
class player {
    constructor(pos, color) {
        this.x = pos[0];
        this.y = pos[1];
        this.Wangle = 0;
        this.color = color;
    }
}
class map {
    constructor(whidth, height) {
        this.width = whidth;
        this.height = height;
    }
}
