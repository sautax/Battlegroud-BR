var rects = []
function setup() {
  createCanvas(windowWidth-4, windowHeight-4);
  for(let i = 0;i<50;i++){
    rects.push([[random(width),random(height)],[random(255),random(255),random(255)]])
  }
}

function draw() {
  background("#80ffff");
  for(let i = 0;i<50;i++){
    fill(rects[i][1][0],rects[i][1][1],rects[i][1][2])
    rect(rects[i][0][0],rects[i][0][1],35,35,5)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for(let i = 0;i<50;i++){
    rects[i] = [[random(width),random(height)],[random(255),random(255),random(255)]]
  }
}
