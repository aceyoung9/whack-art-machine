// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var canvas = document.getElementById('myCanvas');
var width = myCanvas.width;
var height = myCanvas.height;

function getLight() {
  return "rgba(0,170,170," + getRandomArbitrary(.1, .333) + ")";
}

function getDark() {
  return "rgba(0,180,180," + getRandomArbitrary(.5, 1) + ")";
}

function triangle(canvas,len,x,y) {
  canvas.beginPath();
  canvas.moveTo(x,y);
  canvas.lineTo(x + len, y);
  canvas.lineTo(x + len/2, y - (len * (Math.sqrt(3)/2)));
  canvas.fill();
}

function downTriangle(canvas,len,x,y) {
  canvas.beginPath();
  canvas.moveTo(x,y);
  canvas.lineTo(x + len, y);
  canvas.lineTo(x + len/2, y + (len * (Math.sqrt(3)/2)));
  canvas.fill();
}

function hexagon (canvas, len, x, y) {
  canvas.fillStyle = getLight();
      triangle(canvas, len, x, y);
  canvas.fillStyle = getLight();
  downTriangle(canvas, len, x - len/2, y - (len * (Math.sqrt(3)/2)));
  canvas.fillStyle = getLight();
      triangle(canvas, len, x - len, y);
  canvas.fillStyle = getLight();
  downTriangle(canvas, len, x - len, y);
  canvas.fillStyle = getLight();

      triangle(canvas, len, x - len/2, y + (len * (Math.sqrt(3)/2)));
    canvas.fillStyle = getLight();

  downTriangle(canvas, len, x, y);
}

function megaHexagon (canvas, len, x, y) {
  var hei = (len * Math.sqrt(3)/2);
  hexagon(canvas, len, x, y);
  canvas.fillStyle = getLight();
  triangle(canvas, len, x - len/2, y - hei); //top
  triangle(canvas, len, x - len/2 - len, y + hei); //left
  triangle(canvas, len, x + len/2, y + hei); //right

  downTriangle(canvas, len, x - len/2, y + hei); //bottom
  downTriangle(canvas, len, x - len/2 - len, y - hei); //left
  downTriangle(canvas, len, x + len/2, y - hei); //right

  canvas.fillStyle = getDark();
  triangle(canvas, len, x + len, y); 
  canvas.fillStyle = getDark();
  triangle(canvas, len, x + len/2, y - hei);
  canvas.fillStyle = getDark();
  downTriangle(canvas, len, x + len, y); 
  canvas.fillStyle = getDark();
  downTriangle(canvas, len, x, y - 2*hei);
  canvas.fillStyle = getDark();
  triangle(canvas, len, x - 2*len, y); 
  canvas.fillStyle = getDark();
  triangle(canvas, len, x - 3*len/2, y - hei);
  canvas.fillStyle = getDark();
  downTriangle(canvas, len, x - len, y - 2*hei);
  canvas.fillStyle = getDark();
  downTriangle(canvas, len, x + len/2, y + hei);
  canvas.fillStyle = getDark();
  triangle(canvas, len, x, y + 2*hei); 
  canvas.fillStyle = getDark();
  downTriangle(canvas, len, x - 2*len, y); 
  canvas.fillStyle = getDark();
  downTriangle(canvas, len, x - 3*len/2, y + hei);
  canvas.fillStyle = getDark();
  triangle(canvas, len, x - len, y + 2*hei);

}

function draw() {
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var triLENGTH = 50;
    var triHEIGHT = triLENGTH * Math.sqrt(3)/2;
    var len = triLENGTH;
    
    megaHexagon(ctx, triLENGTH, width/2, height/2);

  }
}

draw();