window.onload= init()
var t=0; 
var frameInterval = 25;
var canvas = null; // canvas DOM object
var context = null; 
var name = document.getElementById("name").innerText
console.log(name)
 
// ball globals
var ballRadius = 10;
 
var collisionDamper = 0.3;
var floorFriction = 0.0005 * frameInterval;
var mouseForceMultiplier = 1 * frameInterval;
var restoreForce =0.002 * frameInterval;
 
var mouseX = 99999;
var mouseY = 99999;
 
var balls = null;
 
function Ball(x,y,vx,vy,color) {
	this.x=x;
	this.y=y;
	this.vx=vx;
	this.vy=vy;
	this.color=color;
 
	this.origX = x;
	this.origY = y;
}
 
function init() {
	canvas=document.getElementById("myCanvas");
	context=canvas.getContext("2d");
	initStageObjects();
	setInterval(updateStage, frameInterval);
}
 
function updateStage() {
	t+=frameInterval; 
	clearCanvas();
	updateStageObjects();
	drawStageObjects();	
}
 
function initStageObjects() {
	balls = new Array();
 
	var blue = "#3A5BCD";
	var red="#EF2B36";
	var yellow = "#FFC636";
	var green="#02A817";
	var skyblue="#ABEBC6";
	var cyan="#9400D3";
	
	// C
	balls.push(new Ball(170,60,0,0,blue));
	balls.push(new Ball(158,53,0,0,blue));
	balls.push(new Ball(143,52,0,0,blue));
	balls.push(new Ball(130,53,0,0,blue));
	balls.push(new Ball(117,58,0,0,blue));
	balls.push(new Ball(110,70,0,0,blue));
	balls.push(new Ball(102,82,0,0,blue));
	balls.push(new Ball(104,96,0,0,blue));
	balls.push(new Ball(105,107,0,0,blue));
	balls.push(new Ball(110,120,0,0,blue));
	balls.push(new Ball(124,130,0,0,blue));
	balls.push(new Ball(139,136,0,0,blue));
	balls.push(new Ball(152,136,0,0,blue));
	balls.push(new Ball(166,132,0,0,blue));
	balls.push(new Ball(176,122,0,0,blue));

	// O
	balls.push(new Ball(210,81,0,0,red));
	balls.push(new Ball(197,91,0,0,red));
	balls.push(new Ball(196,103,0,0,red));
	balls.push(new Ball(200,116,0,0,red));
	balls.push(new Ball(209,127,0,0,red));
	balls.push(new Ball(223,130,0,0,red));
	balls.push(new Ball(237,127,0,0,red));
	balls.push(new Ball(244,114,0,0,red));
	balls.push(new Ball(242,98,0,0,red));
	balls.push(new Ball(237,86,0,0,red));
	balls.push(new Ball(225,81,0,0,red));
 
 	// m
	var offsetm = 67
	balls.push(new Ball(offsetm + 257,127,0,0,yellow));
	balls.push(new Ball(offsetm + 260,116,0,0,yellow));
	balls.push(new Ball(offsetm + 262,103,0,0,yellow));
	balls.push(new Ball(offsetm + 260,91,0,0,yellow));
	balls.push(new Ball(offsetm + 250,81,0,0,yellow));
	balls.push(new Ball(offsetm + 240,83,0,0,yellow));
	balls.push(new Ball(offsetm + 235,90,0,0,yellow));
	
	balls.push(new Ball(offsetm + 230,95,0,0,yellow));
	
	balls.push(new Ball(offsetm + 225,90,0,0,yellow));
	balls.push(new Ball(offsetm + 220,83,0,0,yellow));
	balls.push(new Ball(offsetm + 210,81,0,0,yellow));
	balls.push(new Ball(offsetm + 200,91,0,0,yellow));
	balls.push(new Ball(offsetm + 198,103,0,0,yellow));
	balls.push(new Ball(offsetm + 200,116,0,0,yellow));
	balls.push(new Ball(offsetm + 203,127,0,0,yellow));

 	// i
	var offseti = 146

	balls.push(new Ball(offseti + 203,60,0,0,blue));
	balls.push(new Ball(offseti + 205,63,0,0,blue));
	balls.push(new Ball(offseti + 205,90,0,0,blue));
	balls.push(new Ball(offseti + 207,105,0,0,blue));
	balls.push(new Ball(offseti + 206,118,0,0,blue));
	balls.push(new Ball(offseti + 207,130,0,0,blue));

	// n
	var offsetn = 182;
	balls.push(new Ball(offsetn + 209,81,0,0,cyan));
	balls.push(new Ball(offsetn + 198,90,0,0,cyan));
	balls.push(new Ball(offsetn + 196,103,0,0,cyan));
	balls.push(new Ball(offsetn + 197,116,0,0,cyan));
	balls.push(new Ball(offsetn + 198,128,0,0,cyan));
	balls.push(new Ball(offsetn + 245,128,0,0,cyan));
	balls.push(new Ball(offsetn + 244,114,0,0,cyan));
	balls.push(new Ball(offsetn + 242,98,0,0,cyan));
	balls.push(new Ball(offsetn + 237,86,0,0,cyan));
	balls.push(new Ball(offsetn + 225,81,0,0,cyan));
	
	// g
	var offsetg = 120 ;
	balls.push(new Ball(offsetg + 370,80,0,0,green));
	balls.push(new Ball(offsetg + 358,79,0,0,green));
	balls.push(new Ball(offsetg + 346,79,0,0,green));
	balls.push(new Ball(offsetg + 335,84,0,0,green));
	balls.push(new Ball(offsetg + 330,98,0,0,green));
	balls.push(new Ball(offsetg + 334,111,0,0,green));
	balls.push(new Ball(offsetg + 348,116,0,0,green));
	balls.push(new Ball(offsetg + 362,109,0,0,green));
	balls.push(new Ball(offsetg + 362,94,0,0,green));
	balls.push(new Ball(offsetg + 355,128,0,0,green));
	balls.push(new Ball(offsetg + 340,135,0,0,green));
	balls.push(new Ball(offsetg + 327,142,0,0,green));
	balls.push(new Ball(offsetg + 325,155,0,0,green));
	balls.push(new Ball(offsetg + 339,165,0,0,green));
	balls.push(new Ball(offsetg + 352,166,0,0,green));
	balls.push(new Ball(offsetg + 367,161,0,0,green));
	balls.push(new Ball(offsetg + 371,149,0,0,green));
	balls.push(new Ball(offsetg + 366,137,0,0,green));
	
	//S
	var offsetS = 450 ;
	balls.push(new Ball(offsetS + 100,75,0,0,yellow));
	balls.push(new Ball(offsetS + 135,54,0,0,yellow));
	balls.push(new Ball(offsetS + 145,63,0,0,yellow));
	balls.push(new Ball(offsetS + 105,63,0,0,yellow));
	balls.push(new Ball(offsetS + 112,55,0,0,yellow));
	balls.push(new Ball(offsetS + 103,85,0,0,yellow));
	balls.push(new Ball(offsetS + 112,95,0,0,yellow));
	balls.push(new Ball(offsetS + 125,50,0,0,yellow));
	balls.push(new Ball(offsetS + 125,100,0,0,yellow));
	balls.push(new Ball(offsetS + 125,150,0,0,yellow));
	balls.push(new Ball(offsetS + 145,115,0,0,yellow));
	balls.push(new Ball(offsetS + 138,107,0,0,yellow));
	balls.push(new Ball(offsetS + 148,135,0,0,yellow));
	balls.push(new Ball(offsetS + 138,145,0,0,yellow));
	balls.push(new Ball(offsetS + 113,145,0,0,yellow));
	balls.push(new Ball(offsetS + 105,135,0,0,yellow));
	balls.push(new Ball(offsetS + 150,125,0,0,yellow));
	
	// O
	var oOffset = 423;
	balls.push(new Ball(oOffset + 210,81,0,0,blue));
	balls.push(new Ball(oOffset + 197,91,0,0,blue));
	balls.push(new Ball(oOffset + 196,103,0,0,blue));
	balls.push(new Ball(oOffset + 200,116,0,0,blue));
	balls.push(new Ball(oOffset + 209,127,0,0,blue));
	balls.push(new Ball(oOffset + 223,130,0,0,blue));
	balls.push(new Ball(oOffset + 237,127,0,0,blue));
	balls.push(new Ball(oOffset + 244,114,0,0,blue));
	balls.push(new Ball(oOffset + 242,98,0,0,blue));
	balls.push(new Ball(oOffset + 237,86,0,0,blue));
	balls.push(new Ball(oOffset + 225,81,0,0,blue));
	
		// O
	var oOffset = 494;
	balls.push(new Ball(oOffset + 210,81,0,0,green));
	balls.push(new Ball(oOffset + 197,91,0,0,green));
	balls.push(new Ball(oOffset + 196,103,0,0,green));
	balls.push(new Ball(oOffset + 200,116,0,0,green));
	balls.push(new Ball(oOffset + 209,127,0,0,green));
	balls.push(new Ball(oOffset + 223,130,0,0,green));
	balls.push(new Ball(oOffset + 237,127,0,0,green));
	balls.push(new Ball(oOffset + 244,114,0,0,green));
	balls.push(new Ball(oOffset + 242,98,0,0,green));
	balls.push(new Ball(oOffset + 237,86,0,0,green));
	balls.push(new Ball(oOffset + 225,81,0,0,green));
	
	// n
	var offsetn = 570;
	balls.push(new Ball(offsetn + 209,81,0,0,red));
	balls.push(new Ball(offsetn + 198,90,0,0,red));
	balls.push(new Ball(offsetn + 196,103,0,0,red));
	balls.push(new Ball(offsetn + 197,116,0,0,red));
	balls.push(new Ball(offsetn + 198,128,0,0,red));
	balls.push(new Ball(offsetn + 245,128,0,0,red));
	balls.push(new Ball(offsetn + 244,114,0,0,red));
	balls.push(new Ball(offsetn + 242,98,0,0,red));
	balls.push(new Ball(offsetn + 237,86,0,0,red));
	balls.push(new Ball(offsetn + 225,81,0,0,red));
 
}
function drawStageObjects() {
	for (var n=0; n<balls.length; n++) {	
		context.beginPath();
		context.arc(balls[n].x,balls[n].y,ballRadius,
			0,2*Math.PI,false);
		context.fillStyle=balls[n].color;
		context.fill();
	}
}
 
function updateStageObjects() {

	for (var n=0; n<balls.length; n++) {

		balls[n].y+=balls[n].vy;
		balls[n].x+=balls[n].vx;
 
		if (balls[n].x > balls[n].origX) {
			balls[n].vx -= restoreForce;
		}
		else {
			balls[n].vx += restoreForce;
		}
		if (balls[n].y > balls[n].origY) {
			balls[n].vy -= restoreForce;
		}
		else {
			balls[n].vy += restoreForce;
		}
 
		// mouse forces
		var distX = balls[n].x - mouseX;
		var distY = balls[n].y - mouseY;
 
		var radius = Math.sqrt(Math.pow(distX,2) + 
			Math.pow(distY,2));
 
		var totalDist = Math.abs(distX) + Math.abs(distY);
 
		var forceX = (Math.abs(distX) / totalDist) * 
			(1/radius) * mouseForceMultiplier;
		var forceY = (Math.abs(distY) / totalDist) * 
			(1/radius) * mouseForceMultiplier;
 
		if (distX>0) { 
			balls[n].vx += forceX;
		}
		else {
			balls[n].vx -= forceX;
		}
		if (distY>0) { 
			balls[n].vy += forceY;
		}
		else {
			balls[n].vy -= forceY;
		}
 
		// floor friction
		if (balls[n].vx>0) {
			balls[n].vx-=floorFriction;
		}
		else if (balls[n].vx<0) {
			balls[n].vx+=floorFriction;
		}
		if (balls[n].vy>0) {
			balls[n].vy-=floorFriction;
		}
		else if (balls[n].vy<0) {
			balls[n].vy+=floorFriction;
		}
 
		if (balls[n].y > (canvas.height-ballRadius)) {
			balls[n].y=canvas.height-ballRadius-2;
			balls[n].vy*=-1; 
			balls[n].vy*=(1-collisionDamper);
		}
 
		if (balls[n].y < (ballRadius)) {
			balls[n].y=ballRadius+2;
			balls[n].vy*=-1; 
			balls[n].vy*=(1-collisionDamper);
		}
	
		if (balls[n].x > (canvas.width-ballRadius)) {
			balls[n].x=canvas.width-ballRadius-2;
			balls[n].vx*=-1;
			balls[n].vx*=(1-collisionDamper);
		}
 
		if (balls[n].x < (ballRadius)) {
			balls[n].x=ballRadius+2;
			balls[n].vx*=-1;
			balls[n].vx*=(1-collisionDamper);
		}	
	}
}
 
function clearCanvas() {
	context.clearRect(0,0,canvas.width, canvas.height);
}
 
function handleMouseMove(evt) {
	mouseX = evt.clientX - canvas.offsetLeft;
	mouseY = evt.clientY - canvas.offsetTop;	
}
 
function handleMouseOut() {
	mouseX = 99999;
	mouseY = 99999;
}
 