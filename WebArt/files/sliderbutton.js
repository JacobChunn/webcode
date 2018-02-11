function createIO()
{
	stroke(255);
	rinput = createSlider(0,255,0);
    rinput.position(50,50);
    rinput.size(100);
	fill(255,0,0);
	
	ellipse(38,63, 25,25);
   
    ginput = createSlider(0,255,0);
    ginput.position(50,100);
    ginput.size(100);
	fill(0,255,0);
	ellipse(38,113, 25,25);
   
    binput = createSlider(0,255,0);
    binput.position(50,150);
    binput.size(100);
	fill(0,0,255);
	ellipse(38,163, 25,25);
   
    gridToggle = createButton('Toggle Grid');
    gridToggle.position(52,300);
    gridToggle.size(100);
    gridToggle.mousePressed(gridCheck);
    
    streamToggle = createButton('Toggle Stream');
    streamToggle.position(52,350);
    streamToggle.size(100);
    streamToggle.mousePressed(streamCheck);

    Single = createButton('Single Pen');
    Single.position(52,415);
    Single.size(100);
    Single.mousePressed(setSingle);
    
    Five = createButton('Five Pen');
    Five.position(52,465);
    Five.size(100);
    Five.mousePressed(setFive);
    
    Circle = createButton('Circle Pen');
    Circle.position(52,515);
    Circle.size(100);
    Circle.mousePressed(setCircle);
    
    Callig = createButton('Calligraphy Pen');
    Callig.position(52,565);
    Callig.size(100);
    Callig.mousePressed(setCallig);
}

function colorSquare(ri,gi,bi)
{
	fill(col);
	stroke(255);
	ellipse(100,210, 50,50);
	
	fill(0);
	noStroke();
	rect(40,244,150,40);
	
	colstr = ri + ', ' + gi + ', '  + bi;
	textSize(24);
	fill(255);
	text(colstr,42,265)
}

function setSingle()
{
    brush = 'single';
}

function setFive()
{
    brush = 'five';
}

function setCircle()
{
    brush = 'circle';
}

function setCallig()
{
    brush = 'callig';
}

 function streamCheck() 
 {
    if (streamBool == true) 
	{
        streamBool = false;
    } 
	else if (streamBool == false) 
	{
        streamBool = true;
    }
}

function gridDraw() 
{
    for (var i=0; i < rows; i++) 
	{
        line(x.arrPos,y.arrPos + (boxsize * i), x.arrPos + (cols * boxsize),y.arrPos + (boxsize * i));
    }
   
    for (var j=0; j < cols; j++) 
	{
        line(x.arrPos + (boxsize * j),y.arrPos, x.arrPos + (boxsize * j),y.arrPos + (boxsize * rows));
    }
}
 
function gridCheck() 
{
    if (gridBool == true) 
	{
        gridBool = false;
    } 
	else if (gridBool == false) 
	{
        gridBool = true;
    }
}