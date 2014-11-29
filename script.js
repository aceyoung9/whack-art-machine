function triangle(canvas,len) {
  // Makes an equilateral traingle, given length of side, and surface to draw
  // on.
  canvas.beginPath();
  canvas.moveTo(0, len * (Math.sqrt(3)/2));
  canvas.lineTo(len, len * (Math.sqrt(3)/2));
  canvas.lineTo(len/2, 0);
  canvas.fill();
}

function draw() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    triangle(ctx, 300);
  }
}

draw();