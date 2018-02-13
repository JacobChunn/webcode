class Square 
{
    constructor(x,y,w,CanvColor) 
	{
        this.x = x;
        this.y = y;
        this.w = w;
        this.color = CanvColor;
    }
   
    show() 
	{
        rect(this.x,this.y,this.w,this.w);
    }
	
    change(color) 
	{
        this.color = color;
        fill(this.color);
        rect(this.x,this.y,this.w,this.w);
       
    }
	
    tell() 
	{
        return this.color;
    }
	saveSquare(rrr,ggg,bbb) {
		this.color = color(rrr,ggg,bbb);
		fill(this.color);
		rect(this.x,this.y,this.w,this.w);
	}
}

function ClearCanvas()
{
	var CanvColor = 120;  //Default Light Gray Cell
    noStroke();
    for (var i=0; i < maxCols; i++) //arrPos
	{  
        arrPos[i] = [];
        for (var j=0; j < maxRows; j++) 
		{
           
            arrPos[i][j] = new Square(i*boxsize+x.arrPos,j*boxsize+y.arrPos, boxsize, CanvColor);
            arrPos[i][j].show();
        }
    }
	
	
	
	for (var i = 0; i < savedCols; i++)
	{
		savedSquares[i] = [];
		for (var j = 0; j < savedRows; j++)
		{
			var rr = int(random(0,255));
			var gg = int(random(0,255));
			var bb = int(random(0,255));
			savedSquares[i][j] = new Square(i*boxsize+52,j*boxsize+725,boxsize,150);
			savedSquares[i][j].saveSquare(rr,gg,bb);
		}
	}
}
