class game {
    context : CanvasRenderingContext2D | null
    canvas : HTMLCanvasElement
    bg : string

    constructor(id: string, bg :string) {
        this.bg = bg
        this.canvas = <HTMLCanvasElement>document.querySelector("#"+id);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
    }
    draw() {
        
    }
}