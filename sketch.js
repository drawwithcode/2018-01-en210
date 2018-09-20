function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);

}

function draw() {
	background(204);

	//Wheel
	noFill()
	ellipse(250, 465, 70, 70);

	//Body
	rect(200, 325, 100, 140);


	function head(){

  var a=250;
	var b=285;
	var re=250;
	var gr=255;
	var bl=50;
	  if(mouseX>220 && mouseX<280&& mouseY>315&&mouseY<375)
     {a=pmouseX;}

    //neck
		strokeWeight(6);
		colorMode(RGB);
		stroke(0,0,0)
		line(a, b, 250, 345)


				strokeWeight(2);
				colorMode(RGB);
				stroke(150,150,150)
				line(a-10, b, 240, 345)


							strokeWeight(2);
							colorMode(RGB);
							stroke(150,150,150);
							line(a+10, b, 260, 345);

	  strokeWeight(20);
	  colorMode(RGB);
	  stroke(250,255,50,100)
	  line(a, b, 250, 345);


		strokeWeight(0)
		if(mouseX>220 && mouseX<280&& mouseY>315&&mouseY<375){fill(255,55,50)}
		else{fill(200,250,50,360)}

		    ellipseMode(CENTER)
		ellipse(250,345,40)




//head
	ellipseMode(CENTER);
	strokeWeight(0);
	fill(250,255,50,100)
	ellipse(a, b-50, 100);


//nose
	if((mouseX>a-25 && mouseX<a+25 && mouseY>b-15 && mouseY<b+15)||
	(mouseX>220 && mouseX<280&& mouseY>315&&mouseY<375))
	{fill(250,255,50,360)}
	else{fill(150,155,50,360)}
	ellipseMode(CENTER);
	strokeWeight(0);
	ellipse(a, b, 50);


//occhi
ellipseMode(CENTER);
	strokeWeight(0);

	if((mouseX>a-30 && mouseX<a-10 && mouseY>b-60 && mouseY<b-30)||
	(mouseX>a+10 && mouseX<a+30 && mouseY>b-60 && mouseY<b-30))
	{fill(250,255,50,360)}

else if((mouseX>a-25 && mouseX<a+25 && mouseY>b-15 && mouseY<b+15)||
(mouseX>220 && mouseX<280&& mouseY>315&&mouseY<375))
	{re=Math.floor(Math.random()*255);
		gr=Math.floor(Math.random()*255);
		bl=Math.floor(Math.random()*255);
		fill(re,gr,bl,360)}
	else{fill(re-50,gr-50,bl-50,200)}
	ellipse(a-20, b-50, 20);
		ellipse(a+20, b-50, 20);


	noFill()
	noStroke()
 }

	head()
}
