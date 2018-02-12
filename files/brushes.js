// -------------------------
//TO ADD A NEW BRUSH, CREATE A FUNCTION WITH ITS PATTERN AND A NEW IF ELSE LOOP IN 'changeColors();'
//A NEW BUTTON MUST BE CREATED IN 'sliderbutton.js' AS WELL


function single(i,j)
{
	arrPos[i][j].change(col);
}

function five(i,j)
{

    if (i == 0 && j == 0)
	{
        arrPos[i][j].change(col);
        arrPos[i+1][j].change(col);
        arrPos[i][j+1].change(col);
    } 
	else if (i == 0 && j == (Rows - 1)) 
	{
        arrPos[i][j].change(col);
        arrPos[i+1][j].change(col);
        arrPos[i][j-1].change(col);
    } 
	else if (i == (Columns - 1) && j == 0) 
	{
        arrPos[i][j].change(col);
        arrPos[i][j+1].change(col);
        arrPos[i-1][j].change(col);
    } 
	else if (i == (Columns - 1) && j == (Rows - 1)) 
	{
        arrPos[i][j].change(col);
        arrPos[i][j-1].change(col);
        arrPos[i-1][j].change(col);
    } 
	else if (i == 0) 
	{
        arrPos[i][j].change(col);
        arrPos[i][j-1].change(col);
        arrPos[i+1][j].change(col);
        arrPos[i][j+1].change(col);
    } 
	else if (i == (Columns - 1)) 
	{
        arrPos[i][j].change(col);
        arrPos[i-1][j].change(col);
        arrPos[i][j-1].change(col);
        arrPos[i][j+1].change(col);
    } 
	else if (j == 0) 
	{
        arrPos[i][j].change(col);
        arrPos[i-1][j].change(col);
        arrPos[i+1][j].change(col);
        arrPos[i][j+1].change(col);
    } 
	else if (j == (Rows - 1)) 
	{
        arrPos[i][j].change(col);
        arrPos[i-1][j].change(col);
        arrPos[i][j-1].change(col);
        arrPos[i+1][j].change(col);
    }
	else 
	{
		arrPos[i][j].change(col);
		arrPos[i-1][j].change(col);
		arrPos[i][j-1].change(col);
		arrPos[i+1][j].change(col);
		arrPos[i][j+1].change(col);
    }
}
 
function callig(i,j)
{
    if (i == 0) 
	{
        arrPos[i][j].change(col);
    } 
	else if (j == (Rows - 1)) 
	{
        arrPos[i][j].change(col)
    } 
	else 
	{
		arrPos[i][j].change(col);
		arrPos[i-1][j+1].change(col);
    }
}

function circle(i,j)
{
	if (i == 0 && j == 0)
	{
		arrPos[i][j+1].change(col);
		arrPos[i+1][j+1].change(col);
		arrPos[i+1][j].change(col);
	}
	else if (i == (Columns - 1) && j ==0)
	{
		arrPos[i-1][j].change(col);
		arrPos[i-1][j+1].change(col);
		arrPos[i][j+1].change(col);
	}
	else if (i == 0 && j == (Rows-1))
	{
		arrPos[i][j-1].change(col);
		arrPos[i+1][j-1].change(col);
		arrPos[i+1][j].change(col);
	}
	else if (i == (Columns - 1) && j ==(Rows-1))
	{
		arrPos[i-1][j].change(col);
		arrPos[i-1][j-1].change(col);
		arrPos[i][j-1].change(col);
	}
	else if (i == 0)
	{
		arrPos[i][j-1].change(col);
		arrPos[i+1][j-1].change(col);
		arrPos[i+1][j].change(col);
		arrPos[i+1][j+1].change(col);
		arrPos[i][j+1].change(col);
	}
	else if (i == Columns-1)
	{
		arrPos[i][j-1].change(col);
		arrPos[i-1][j-1].change(col);
		arrPos[i-1][j].change(col);
		arrPos[i-1][j+1].change(col);
		arrPos[i][j+1].change(col);
	}
	else if (j == 0)
	{
		arrPos[i-1][j].change(col);
		arrPos[i-1][j+1].change(col);
		arrPos[i][j+1].change(col);
		arrPos[i+1][j+1].change(col);
		arrPos[i+1][j].change(col);
	}
	else if (j == Rows-1)
	{
		arrPos[i-1][j].change(col);
		arrPos[i-1][j-1].change(col);
		arrPos[i][j-1].change(col);
		arrPos[i+1][j-1].change(col);
		arrPos[i+1][j].change(col);
	}
	else
	{
		arrPos[i][j-1].change(col);
		arrPos[i][j+1].change(col);
		arrPos[i+1][j].change(col);
		arrPos[i+1][j-1].change(col);
		arrPos[i+1][j+1].change(col);		
		arrPos[i-1][j-1].change(col);
		arrPos[i-1][j+1].change(col);
		arrPos[i-1][j].change(col);
	}		
}

function changeColors()
{
	for (var i = 0; i < Columns; i ++) 
	{
		for (var j=0; j < Rows; j ++) 
		{
			if (mouseX > (i*boxsize+x.arrPos) && mouseX < ( i *boxsize+x.arrPos+boxsize) && mouseY > (j*boxsize+y.arrPos) && mouseY < (j*boxsize+y.arrPos+boxsize)) 
			{
				if (brush == 'single')
				{
					single(i,j);
					if (streamBool == true && lastI != -1 && lastJ != -1)
                    {
						single(int((i+lastI)/2),int((j+lastJ)/2));
                    }
				}
				else if(brush == 'five')
				{
					five(i,j);
				}
				else if(brush == 'circle')
				{
					circle(i,j);
				}
				else if(brush == 'callig')
				{
					callig(i,j);
				}
				
				lastI = i;
				lastJ = j;
				if (mouseHeldCheck() == false) {
					lastI = -1;
					lastJ = -1;
				}
			}
		} 
	}
}

function mouseHeldCheck() {
	if (mouseIsPressed == true && frameCheck == true) {
		return true;
	} else {
		return false;
	}
}