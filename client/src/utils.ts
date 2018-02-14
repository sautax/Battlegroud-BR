class game {
    context : CanvasRenderingContext2D 
    canvas : HTMLCanvasElement
    bg : string
    players : player[]
    Cplayer : player
    
    constructor(id: string, bg :string, Ppos : number[]) {
        this.bg = bg
        this.canvas = <HTMLCanvasElement>document.querySelector("#"+id);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        this.players = []
        this.Cplayer = new player(Ppos)
    }
    draw() {
        this.context.fillStyle = this.bg
        this.context.fillRect(0,0,this.canvas.width,this.canvas.height)
        
        
    }
}
class player {
    position : number[]
    Wangle : number
    constructor(pos : number[])  {
        this.position = []
        this.Wangle = 0
    }
}