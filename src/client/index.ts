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
    let canvas = <HTMLCanvasElement>document.querySelector("#canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let context = <CanvasRenderingContext2D>canvas.getContext('2d')
    let clientPlayer = new player([100,100])
    function draw() {
       // context.fillStyle = "#709e9c"
       // context.fillRect(0,0,canvas.width,canvas.height)
       // context.strokeStyle = "white"
       // context.fillStyle = "#bd809a"
       // context.fillRect(clientPlayer.x,clientPlayer.y,canvas.width/4,canvas.width/4)

        
        requestAnimFrame(draw)
    }
    draw()
}