var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 70, 40];
var blue = [196, 40, 55];
var purple = [352, 40, 50];

var myName = "<Abid M. Abdelaziz/>";
letterColors = [purple, blue, green];
bubbleShape = "circle";

$(document).ready( function(){ 


drawName(myName, letterColors);
bounceBubbles();
$('.tabs').tabs();
$('.tap-target').tapTarget();
$('.tap-target').tapTarget('open');
$('.tap-target').tapTarget('close');









})