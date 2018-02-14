//client
document.addEventListener("mousemove", function (e) {
    //console.log([])
})
document.addEventListener("keydown", function(e){
    
})
let requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        function (callback) {                   // Pour les mauvais
            window.setTimeout(callback, 1000 / 60);
        }
})()

window.onload = function(){
    let gme = new game("canvas", "#c0c0c0", [0,0])
    
    function loop() {
        gme.draw()
        requestAnimFrame(loop)
    }
    loop()
}