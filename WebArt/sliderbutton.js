    
function createIO()
{
	rinput = createSlider(0,255,0);
    rinput.position(50,50);
    rinput.size(100);
   
    ginput = createSlider(0,255,0);
    ginput.position(50,100);
    ginput.size(100);
   
    binput = createSlider(0,255,0);
    binput.position(50,150);
    binput.size(100);
   
    gridToggle = createButton('Toggle Grid');
    gridToggle.position(52,200);
    gridToggle.size(100);
    gridToggle.mousePressed(gridCheck);
    
    streamToggle = createButton('Toggle Stream');
    streamToggle.position(52,250);
    streamToggle.size(100);
    streamToggle.mousePressed(streamCheck);

    Single = createButton('Single Pen');
    Single.position(52,400);
    Single.size(100);
    Single.mousePressed(setSingle);
    
    Five = createButton('Five Pen');
    Five.position(52,450);
    Five.size(100);
    Five.mousePressed(setFive);
    
    Circle = createButton('Circle Pen');
    Circle.position(52,500);
    Circle.size(100);
    Circle.mousePressed(setCircle);
    
    Callig = createButton('Calligraphy Pen');
    Callig.position(52,550);
    Callig.size(100);
    Callig.mousePressed(setCallig);
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

 function streamCheck() {
    if (streamBool == true) {
        streamBool = false;
    } else if (streamBool == false) {
        streamBool = true;
    }
}

function gridDraw() {
    for (var i=0; i < rows; i++) {
        line(x.left,y.left + (boxsize * i), x.left + (cols * boxsize),y.left + (boxsize * i));
    }
   
    for (var j=0; j < cols; j++) {
        line(x.left + (boxsize * j),y.left, x.left + (boxsize * j),y.left + (boxsize * rows));
    }
}
 
function gridCheck() {
    if (gridBool == true) {
        gridBool = false;
    } else if (gridBool == false) {
        gridBool = true;
    }
}