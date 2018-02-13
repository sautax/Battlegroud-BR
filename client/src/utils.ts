class game {
    context : CanvasRenderingContext2D
    canvas : CanvasRenderingContext2D

    constructor(id: string, bg :string) {
        this.bg = bg
        canvas = <HTMLCanvasElement>document.querySelector("#"+id);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context = canvas.getContext('2d');
    }
    draw() {
        
    }
}