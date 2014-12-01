function triangle(canvas,len,x,y) {
  canvas.beginPath();
  canvas.moveTo(x, (len * (Math.sqrt(3)/2)) + y);
  canvas.lineTo(len + x, (len * (Math.sqrt(3)/2) + y));
  canvas.lineTo(x + len/2, y);
  canvas.fill();
}

function draw() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    //triangle(ctx, 300);
    triangle(ctx, 200, 0, 0);
    triangle(ctx, 200, 100, 100);
  }
}

draw();