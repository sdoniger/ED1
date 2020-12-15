function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight(5);
  stroke(100, 100, 100);
  frameRate(2); //2 frames per second
}

function draw() {
  clear();
  background(255,255,255);
  var numSquares = 3;
  var margin = 10;
  var space = 15;
  var width = innerWidth - (2 * margin);
  var height = innerWidth - (2 * margin);
  var shift = 5;

  var sideWidth = width/numSquares;
  var sideHeight = height/numSquares;

  
  translate(margin,margin);
  
  for (var y = 0; y < height; y = y + sideHeight){
    for (var x = 0; x < width; x = x + sideWidth) {
      if (x == sideWidth && y == sideHeight){
          fill(255, 255, 255)
      } 
      else {
          fill(random(100,255),0,random(100,255));
      }
      quad(
        x + space + random(-shift,shift),y + space + random(-shift,shift),
        x + sideWidth - space + random(-shift,shift),y + space + random(-shift,shift),
        x + sideWidth - space + random(-shift,shift),y + sideHeight - space + random(-shift,shift),
        x + space + random(-shift,shift),y + sideHeight - space + random(-shift,shift)
      )
    }
  // noLoop();
  }
}