// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var spectrum = ["rgba(191,208,0,",
  "rgba(0,170,170,",
  "rgba(255,138,0,",
  "rgba(254,67,101,",
  "rgba(93,224,220,",
  "rgba(221,233,229,"
];

var background = ["Gainsboro", "#FFFF33", "AntiqueWhite", "DarkTurquoise"];

function getRandomArrayMember(array) {
  return array[getRandomInt(0, array.length)];
}

function getLight() {
  var selectedLight = getRandomArrayMember(spectrum);
  return selectedLight + getRandomArbitrary(0, .25) + ")";
}

function getDark() {
  var selectedColor = getRandomArrayMember(spectrum);
  return selectedColor + getRandomArbitrary(.5, 1) + ")";
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
  var canvas = document.getElementById('myCanvas');
  var width = myCanvas.width;
  var height = myCanvas.height;

  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var triLENGTH = (width/6)/4;
    var triHEIGHT = triLENGTH * Math.sqrt(3)/2;

    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 6; j++) {
        megaHexagon(ctx, triLENGTH, j * width/4 + triLENGTH, i * triHEIGHT * 4 + triHEIGHT);
      }
    }

    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        megaHexagon(ctx, triLENGTH, j * width/4 + 4*triLENGTH, i * triHEIGHT * 4 - triHEIGHT);
      }
    }
  }
}

function genNew() {
  var canvas = document.getElementById('myCanvas');
  var width = myCanvas.width;
  var height = myCanvas.height;

  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = getRandomArrayMember(background);
    ctx.clearRect(0, 0, width, height);
    ctx.fillRect(0, 0, width, height);

  }
  draw();
}

function darken() {
  var canvas = document.getElementById('myCanvas');
  var width = myCanvas.width;
  var height = myCanvas.height;

  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var triLENGTH = (width/6)/4;
    var triHEIGHT = triLENGTH * Math.sqrt(3)/2;

    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 6; j++) {
        megaHexagon(ctx, triLENGTH, j * width/4 + triLENGTH, i * triHEIGHT * 4 + triHEIGHT);
      }
    }

    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        megaHexagon(ctx, triLENGTH, j * width/4 + 4*triLENGTH, i * triHEIGHT * 4 - triHEIGHT);
      }
    }
  }
}

function shadowy() {

  var canvas = document.getElementById('myCanvas');
  var width = myCanvas.width;
  var height = myCanvas.height;

  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var triLENGTH = (width/6)/4;
    var triHEIGHT = triLENGTH * Math.sqrt(3)/2;

    ctx.fillStyle = getRandomArrayMember(background);
    ctx.clearRect(0, 0, width, height);
    ctx.fillRect(0, 0, width, height);

    ctx.shadowOffsetX = getRandomInt(0, 5);
    ctx.shadowOffsetY = getRandomInt(0, 7);
    ctx.shadowBlur = 10;
    ctx.shadowColor = "LightSlateGrey"; 

    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 6; j++) {
        megaHexagon(ctx, triLENGTH, j * width/4 + triLENGTH, i * triHEIGHT * 4 + triHEIGHT);
      }
    }

    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        megaHexagon(ctx, triLENGTH, j * width/4 + 4*triLENGTH, i * triHEIGHT * 4 - triHEIGHT);
      }
    }
  }
}


genNew();
