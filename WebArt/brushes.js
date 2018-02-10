// -------------------------
//TO ADD A NEW BRUSH, CREATE A FUNCTION WITH ITS PATTERN AND A NEW IF ELSE LOOP IN 'changeColors();'
//A NEW BUTTON MUST BE CREATED IN 'sliderbutton.js' AS WELL


function single(i,j)
{
	arrPos[i][j].change(col);
}

function five(i,j)
{

    if (i == 0 && j == 0){
        arrPos[i][j].change(col);
        arrPos[i+1][j].change(col);
        arrPos[i][j+1].change(col);
    } else if (i == 0 && j == (rows - 1)) {
        arrPos[i][j].change(col);
        arrPos[i+1][j].change(col);
        arrPos[i][j-1].change(col);
    } else if (i == (cols - 1) && j == 0) {
        arrPos[i][j].change(col);
        arrPos[i][j+1].change(col);
        arrPos[i-1][j].change(col);
    } else if (i == (cols - 1) && j == (rows - 1)) {
        arrPos[i][j].change(col);
        arrPos[i][j-1].change(col);
        arrPos[i-1][j].change(col);
    } else if (i == 0) {
        arrPos[i][j].change(col);
        arrPos[i][j-1].change(col);
        arrPos[i+1][j].change(col);
        arrPos[i][j+1].change(col);
    } else if (i == (cols - 1)) {
        arrPos[i][j].change(col);
        arrPos[i-1][j].change(col);
        arrPos[i][j-1].change(col);
        arrPos[i][j+1].change(col);
    } else if (j == 0) {
        arrPos[i][j].change(col);
        arrPos[i-1][j].change(col);
        arrPos[i+1][j].change(col);
        arrPos[i][j+1].change(col);
    } else if (j == (rows - 1)) {
        arrPos[i][j].change(col);
        arrPos[i-1][j].change(col);
        arrPos[i][j-1].change(col);
        arrPos[i+1][j].change(col);
    }else {
    arrPos[i][j].change(col);
    arrPos[i-1][j].change(col);
    arrPos[i][j-1].change(col);
    arrPos[i+1][j].change(col);
    arrPos[i][j+1].change(col);
    }
}
 
function callig(i,j)
{
    if (i == 0) {
        arrPos[i][j].change(col);
    } else if (j == (rows - 1)) {
        arrPos[i][j].change(col)
    } else {
    arrPos[i][j].change(col);
    arrPos[i-1][j+1].change(col);
    }
}

function circle(i,j)
{
	if (i == 0 && j == 0){
		arrPos[i][j+1].change(col);
		arrPos[i+1][j+1].change(col);
		arrPos[i+1][j].change(col);
	}else if (i == (cols - 1) && j ==0){
		arrPos[i-1][j].change(col);
		arrPos[i-1][j+1].change(col);
		arrPos[i][j+1].change(col);
	}else if (i == 0 && j == (rows-1)){
		arrPos[i][j-1].change(col);
		arrPos[i+1][j-1].change(col);
		arrPos[i+1][j].change(col);
	}else if (i == (cols - 1) && j ==(rows-1)){
		arrPos[i-1][j].change(col);
		arrPos[i-1][j-1].change(col);
		arrPos[i][j-1].change(col);
	}else if (i == 0){
		arrPos[i][j-1].change(col);
		arrPos[i+1][j-1].change(col);
		arrPos[i+1][j].change(col);
		arrPos[i+1][j+1].change(col);
		arrPos[i][j+1].change(col);
	}else if (i == cols-1){
		arrPos[i][j-1].change(col);
		arrPos[i-1][j-1].change(col);
		arrPos[i-1][j].change(col);
		arrPos[i-1][j+1].change(col);
		arrPos[i][j+1].change(col);
	}else if (j == 0){
		arrPos[i-1][j].change(col);
		arrPos[i-1][j+1].change(col);
		arrPos[i][j+1].change(col);
		arrPos[i+1][j+1].change(col);
		arrPos[i+1][j].change(col);
	}else if (j == rows-1){
		arrPos[i-1][j].change(col);
		arrPos[i-1][j-1].change(col);
		arrPos[i][j-1].change(col);
		arrPos[i+1][j-1].change(col);
		arrPos[i+1][j].change(col);
	}else{
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
	for (var i = 0; i < cols; i ++) 
	{
		for (var j=0; j < rows; j ++) 
		{
			if (mouseX > (i*boxsize+x.arrPos) && mouseX < ( i *boxsize+x.arrPos+boxsize) && mouseY > (j*boxsize+y.arrPos) && mouseY < (j*boxsize+y.arrPos+boxsize)) 
			{
				if (brush == 'single')
				{
					single(i,j);
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
			}
		} 
	}
}