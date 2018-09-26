
var w = 100;
var h = 100;
var xOff = 0.5;
var yOff = 0.5;
ratioX = Math.trunc(w*0.4);
ratioY = Math.trunc(h*0.5);

function setup() {
  //var contX = document.getElementById("frame0");
  //console.log(contX);
  canvas =createCanvas(windowWidth, windowHeight);
  //w = windowWidth;
  //h = windowHeight;
  
  background(255);
  noStroke();
  //frameRate(2);
}
function draw() {
  w = canvas.width;
  h = canvas.height;
  //console.log(canvas.width)
  var x = random(w);
  var y = random(h);
  var xw = random(10);
  var c = random(50);
  var sc = random(1);
  //translate(w/2-noise(xOff)*w, h/2-noise(yOff)*h);
  if(sc > 0.5){
    for (var i = 0; i < w; i+=ratioX) {
      var shift = noise(xOff)*h;
      xOff = xOff + 0.001;
      fill(c%55, c%100+15);
      rect(i, shift, c, c);
      for (var j = 0; j < h; j+=ratioY){
      	var xw = random(10);
      	push();
        fill(c%25+205, x%25+205);
        rect(shift, j, xw, c);
        pop();
      }
   }
 } else{
    
    for (var i = 0; i < h; i+=ratioX) {
      var xw = random(10);
      var shift = noise(x);
      yOff = yOff + 0.001;
      //fill(c%25, c%10+15);
      //rect(i, i, xw, c);
      for (var j = 0; j < w; j+=ratioY){
        push();
        translate(noise(xOff)*w, noise(yOff)*h);
        rotate(noise(j)*xw)
        fill(c%25+225, 0, 0, x%25+225);
        rect(0, 0, xw, xw);
        pop();
      }
  }
  }
  
}

function windowResized() {
  /*if (w <= h) {
	  ratioX = Math.trunc(w*0.2);
      ratioY = Math.trunc(h*0.1);
	} else {
	  ratioX = Math.trunc(w*0.1);
      ratioY = Math.trunc(h*0.2);
	}*/
  resizeCanvas(windowWidth, windowHeight);
  //img.resize(w, h);
}