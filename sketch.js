function setup() {
  createCanvas(600,600);
  frameRate(1);
  colorMode(HSB,255);
  angleMode(DEGREES);
}

function draw() {
	rotate(-30);
	
	for(var x=0; x<height+300; x += 30) {
	  for(var y=-300; y<width+100; y += 50) {
		  var b = y+50;
		  var c = b-20;
		  var d = y-20;
		  var f = x+30;
		  
		  noFill();
		  noStroke();
		  
		  var s = random(60,255);
		  var v = random(150,255);
		  
		  var h = height/4+50
		  var w = width/4
		  
	    if(x <= h) {
				fill(40,s,v);
			} else if(x > h && x <= h*2) {
					fill(0,s,v);
				} else if(x > h*2 && x <= h*3) {
					fill(150,s,v);
				} else if(x > h*3) {
					fill(70,s,v);
				}
	  	quad(y,x,b,x,c,f,d,f);
		}
	}
}