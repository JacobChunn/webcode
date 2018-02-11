var col;
var brush = 'single';

var boxsize = 24;
var cols = 64;
var rows = 36;

var lastI = 'na';
var lastJ;

var rinput,ginput,binput;
var gridToggle, single, five, circle, callig;
var gridBool = true;
var streamBool = true;

arrPos = [];
saveSquares = [];

var x = {arrPos:200};
var y = {arrPos:40};
 
function setup() 
{
    createCanvas(windowWidth-5,windowHeight-5);
    background(0);
    frameRate(60);
   
	
    createIO();
   
    fill(150);  //Default Light Gray Cell
    noStroke();
    for (var i=0; i < cols; i++) //arrPos
	{  
        arrPos[i] = [];
        for (var j=0; j < rows; j++) 
		{
           
            arrPos[i][j] = new Square(i*boxsize+x.arrPos,j*boxsize+y.arrPos, boxsize);
            arrPos[i][j].show();
        }
    }     
	
}
 
function draw() 
{
    var r = rinput.value();
    var g = ginput.value();
    var b = binput.value();
    col = color(r,g,b);
   
	colorSquare(r,g,b);
	
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
				fill(arrPos[i][j].tell());
				arrPos[i][j].show();
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