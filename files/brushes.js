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
						var mpI = (i+lastI)/2;
						var mpJ = (j+lastJ)/2;
						var qpI = (mpI+lastI)/2;
						var qpJ = (mpJ+lastJ)/2;
						var qqpI = (mpI+i)/2;
						var qqpJ = (mpJ+j)/2;
						
						single(int(mpI),int(mpJ));
						single(int(qpI),int(qpJ));
						single(int(qqpI),int(qqpJ));
						
						single(int((lastI+qpI)/2),int((lastJ+qpJ)/2));
						single(int((qpI+mpI)/2),int((qpJ+mpJ)/2));
						single(int((mpI+qqpI)/2),int((mpJ+qqpJ)/2));
						single(int((qqpI+i)/2),int((qqpJ+j)/2));
                    }
				}
				else if(brush == 'five')
				{
					five(i,j);
					if (streamBool == true && lastI != -1 && lastJ != -1)
                    {
						var mpI = (i+lastI)/2;
						var mpJ = (j+lastJ)/2;
						var qpI = (mpI+lastI)/2;
						var qpJ = (mpJ+lastJ)/2;
						var qqpI = (mpI+i)/2;
						var qqpJ = (mpJ+j)/2;
						
						five(int(mpI),int(mpJ));
						five(int(qpI),int(qpJ));
						five(int(qqpI),int(qqpJ));
						five(int((lastI+qpI)/2),int((lastJ+qpJ)/2));
						five(int((qpI+mpI)/2),int((qpJ+mpJ)/2));
						five(int((mpI+qqpI)/2),int((mpJ+qqpJ)/2));
						five(int((qqpI+i)/2),int((qqpJ+j)/2));
                    }
				}
				else if(brush == 'circle')
				{
					circle(i,j);
					if (streamBool == true && lastI != -1 && lastJ != -1)
                    {
						var mpI = (i+lastI)/2;
						var mpJ = (j+lastJ)/2;
						var qpI = (mpI+lastI)/2;
						var qpJ = (mpJ+lastJ)/2;
						var qqpI = (mpI+i)/2;
						var qqpJ = (mpJ+j)/2;
						
						circle(int(mpI),int(mpJ));
						circle(int(qpI),int(qpJ));
						circle(int(qqpI),int(qqpJ));
						circle(int((lastI+qpI)/2),int((lastJ+qpJ)/2));
						circle(int((qpI+mpI)/2),int((qpJ+mpJ)/2));
						circle(int((mpI+qqpI)/2),int((mpJ+qqpJ)/2));
						circle(int((qqpI+i)/2),int((qqpJ+j)/2));
                    }
				}
				else if(brush == 'callig')
				{
					callig(i,j);
					if (streamBool == true && lastI != -1 && lastJ != -1)
                    {
						var mpI = (i+lastI)/2;
						var mpJ = (j+lastJ)/2;
						var qpI = (mpI+lastI)/2;
						var qpJ = (mpJ+lastJ)/2;
						var qqpI = (mpI+i)/2;
						var qqpJ = (mpJ+j)/2;
						
						callig(int(mpI),int(mpJ));
						callig(int(qpI),int(qpJ));
						callig(int(qqpI),int(qqpJ));
						callig(int((lastI+qpI)/2),int((lastJ+qpJ)/2));
						callig(int((qpI+mpI)/2),int((qpJ+mpJ)/2));
						callig(int((mpI+qqpI)/2),int((mpJ+qqpJ)/2));
						callig(int((qqpI+i)/2),int((qqpJ+j)/2));
                    }
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