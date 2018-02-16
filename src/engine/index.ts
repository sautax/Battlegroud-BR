//engine
class player {
    color : string
    x: number
    y : number
    Wangle : number
    constructor(pos : number[],color : string)  {
        this.x = pos[0]
        this.y = pos[1]
        this.Wangle = 0
        this.color = color
    }
}
class map{
    width : number
    height: number
    constructor(whidth : number, height:number) {
        this.width = whidth
        this.height = height
    }
}