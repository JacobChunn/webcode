var brush = 'single';

var boxsize = 24;
var maxCols = 64;
var maxRows = 36;
var Columns = 64;
var Rows = 36;
var savedCols = 4;
var savedRows = 3;

var Red = 0;
var Green = 0;
var Blue = 0;


var gridToggle, single, five, circle, callig;
var gridBool = true;
var streamBool = true;

var selMode = 'Select';

arrPos = [];
savedSquares = [];
sampleColors = [];
var a;

var x = {arrPos:240};
var y = {arrPos:40};

var lastJ = -1;
var lastI = -1;

var frameCheck = false;

function setup() 
{
    createCanvas(windowWidth,windowHeight);
    frameRate(60);
   
	
    createIO();
   
    ClearCanvas();  
	
	//createRandom();
}
 
function draw()
{
	
	if (mouseHeldCheck() == false) {
		lastI = -1;
		lastJ = -1;
	}
	
    var r = Red;
    var g = Green;
    var b = Blue;
	
	background(r,g,b);
	
    col = color(r,g,b);
   	
	gridFunc();
    
    if (streamBool == true && mouseIsPressed) 
	{ 
        changeColors();
    }
	
	for (var i=0; i < savedCols; i++) 
	{
		for (var j=0; j < savedRows; j++) 
		{
			fill(savedSquares[i][j].tell());
			savedSquares[i][j].show();
		}
	}  
	

}

 
function mousePressed() 
{
	noStroke();
    if (streamBool == false) 
	{
		changeColors();
    }
}