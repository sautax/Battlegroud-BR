//client
document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX
    mouseY = e.clientY
})
document.addEventListener("keydown", function(e){
    
})
let requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        function (callback) {                   // Pour les mauvais
            window.setTimeout(callback, 1000 / 60);
        }
})()
let mouseX :number
let mouseY : number

window.onload = function(){
    let canvas = <HTMLCanvasElement>document.querySelector("#canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let context = <CanvasRenderingContext2D>canvas.getContext('2d')
    let clientPlayer = new player([100,100])
    mouseX = canvas.width/2
    mouseY = canvas.height/2
    let vect = [0]
    let players : player[] = []
    let x : number
    let y : number
    for (let i = 0 ; i< 50 ; i++) {
        x= Math.random()
        y = Math.random()
        if (x>=0.5){
            x*=5000
            x = Math.floor(x)
        }else {
            x*=-5000
            x = Math.floor(x)
        }
        if (y>=0.5){
            y*=5000
            y = Math.floor(y)
        }else {
            y*=-5000
            y = Math.floor(y)
        }
        players.push(new player([x,y]))
    }
    function draw() {
        vect[0] = mouseX - canvas.width/2
        vect[1] = mouseY - canvas.height/2
        clientPlayer.x+=vect[0]/4
        clientPlayer.y+=vect[1]/4
        console.log(clientPlayer.x,clientPlayer.y)
        context.fillStyle = "#709e9c"
        context.fillRect(0,0,canvas.width,canvas.height)
        context.save()
        context.translate(canvas.width/2,canvas.height/2)
        context.strokeStyle = "white"
        context.fillStyle = "#bd809a"
        context.fillRect(-canvas.width/16,-canvas.width/16,canvas.width/8,canvas.width/8)
        context.restore()
        context.save()
        context.translate(-clientPlayer.x-canvas.width/16,-clientPlayer.y-canvas.height/16)
        for (let i = 0 ; i<players.length;i++) {
            context.fillStyle = "red"
            context.fillRect(players[i].x,players[i].y,canvas.width/8,canvas.width/8)

        }
        context.restore()


        
        requestAnimFrame(draw)
    }
    draw()
}