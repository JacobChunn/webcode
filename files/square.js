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
			savedSquares[i][j] = new Square(i*boxsize+52,j*boxsize+725,boxsize,int(random(255)));
			savedSquares[i][j].show();
		}
	}
	
}
