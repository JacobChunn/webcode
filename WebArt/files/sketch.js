var col;
var brush = 'single';

var boxsize = 24;
var Columns = 64;
var Rows = 36;

var Red = 1;
var Green = 1;
var Blue = 1;
var gridToggle, single, five, circle, callig;
var gridBool = true;
var streamBool = true;

arrPos = [];
saveSquares = [];

var x = {arrPos:240};
var y = {arrPos:40};
 
function setup() 
{
	stroke(1);
    createCanvas(windowWidth-5,windowHeight-5);
    frameRate(60);
   
	
    createIO();
   
    var CanvColor = 255;  //Default Light Gray Cell
    noStroke();
    for (var i=0; i < Columns; i++) //arrPos
	{  
        arrPos[i] = [];
        for (var j=0; j < Rows; j++) 
		{
           
            arrPos[i][j] = new Square(i*boxsize+x.arrPos,j*boxsize+y.arrPos, boxsize, CanvColor);
            arrPos[i][j].show();
        }
    }     
	
}
 
function draw()
{
    var r = Red;
    var g = Green;
    var b = Blue;
	
	background(r,g,b);
	
    col = color(r,g,b);
   	
    if (gridBool == true) 
	{
		gridDraw();
    } 
	else 
	{
        noStroke();
        for (var i=0; i < Columns; i++) 
		{
            for (var j=0; j < Rows; j++) 
			{
				fill(arrPos[i][j].tell());
				arrPos[i][j].show();
            }
        }
       
       
    }
    if (streamBool == true && mouseIsPressed) 
	{ 
        changeColors();
    }
	
	noFill();
	stroke(0);
	rect(240,40,Columns*boxsize,Rows*boxsize);
}

 
function mousePressed() 
{
	noStroke();
    if (streamBool == false) 
	{
		changeColors();
    }
}