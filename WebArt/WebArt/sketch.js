var reveal;
var brush = 'single';

var boxsize = 24;
var cols = 64;
var rows = 36;

var rinput,ginput,binput;
var gridToggle, single, five, circle, callig;
var gridBool = true;
var streamBool = true;

left = [];

var x = {left:200};
var y = {left:40};
 
function setup() 
{
    createCanvas(windowWidth-5,windowHeight-5);
    background(0);
    frameRate(60);
   
	
    createIO();
   
    fill(150);  //Default Light Gray Cell
    noStroke();
    for (var i=0; i < cols; i++) //left
	{  
        left[i] = [];
        for (var j=0; j < rows; j++) 
		{
           
            left[i][j] = new Square(i*boxsize+x.left,j*boxsize+y.left, boxsize);
            left[i][j].show();
        }
    } 
}
 
function draw() 
{
    var r = rinput.value();
    var g = ginput.value();
    var b = binput.value();
    reveal = color(r,g,b);
   
    if (gridBool == true) 
	{
        stroke(0);
		gridDraw();
    } 
	else 
	{
        noStroke();
        for (var i=0; i < cols; i++) 
		{
            for (var j=0; j < rows; j++) 
			{
				fill(left[i][j].tell());
				left[i][j].show();
            }
        }
       
       
    }
    if (streamBool == true && mouseIsPressed) 
	{ 
        changeColors();
    }
}

 
function mousePressed() 
{
    if (streamBool == false) 
	{
		changeColors();
    }
}