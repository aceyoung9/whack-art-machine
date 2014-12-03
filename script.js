// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var canvas = document.getElementById('myCanvas');
var width = myCanvas.width;
var height = myCanvas.height;

function triangle(canvas,len,x,y) {
  canvas.beginPath();
  canvas.moveTo(x,y);
  canvas.lineTo(x + len, y);
  canvas.lineTo(x + len/2, y - (len * (Math.sqrt(3)/2)));

  canvas.fillStyle = "rgb("+ getRandomInt(0, 20) 
    + ", " + getRandomInt(190, 220)
    + "," + getRandomInt(190, 220) + ")";
  canvas.fill();
}

function downTriangle(canvas,len,x,y) {
  canvas.beginPath();
  canvas.moveTo(x,y);
  canvas.lineTo(x + len, y);
  canvas.lineTo(x + len/2, y + (len * (Math.sqrt(3)/2)));
  canvas.fillStyle = "rgb("+ getRandomInt(0, 200) 
    + ", " + getRandomInt(190, 220)
    + "," + getRandomInt(190, 220) + ")";
  canvas.fill();
}

function hexagon (canvas, len, x, y) {
      triangle(canvas, len, x, y);
  downTriangle(canvas, len, x - len/2, y - (len * (Math.sqrt(3)/2)));
      triangle(canvas, len, x - len, y);
  downTriangle(canvas, len, x - len, y);
      triangle(canvas, len, x - len/2, y + (len * (Math.sqrt(3)/2)));
  downTriangle(canvas, len, x, y);
}

function draw() {
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var triLENGTH = 100;
    var triHEIGHT = triLENGTH * Math.sqrt(3)/2;
    var len = triLENGTH;
    
    hexagon(ctx, triLENGTH, width/2, height/2);

  }
}

draw();