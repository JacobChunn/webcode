// -------------------------
//TO ADD A NEW BRUSH, CREATE A FUNCTION WITH ITS PATTERN AND A NEW IF ELSE LOOP IN 'changeColors();'
//A NEW BUTTON MUST BE CREATED IN 'sliderbutton.js' AS WELL


function single(i,j)
{
	left[i][j].change(reveal);
}

function five(i,j)
{
	left[i][j].change(reveal);
	left[i-1][j].change(reveal);
	left[i][j-1].change(reveal);
	left[i+1][j].change(reveal);
	left[i][j+1].change(reveal);
}
 
function callig(i,j)
{
	left[i][j].change(reveal);
	left[i-1][j+1].change(reveal);
}

function circle(i,j)
{
	left[i][j].change(reveal);
	left[i-1][j].change(reveal);
	left[i][j-1].change(reveal);
	left[i-1][j+1].change(reveal);
	left[i][j+1].change(reveal);
	left[i][j+2].change(reveal);
	left[i+1][j-1].change(reveal);
	left[i+1][j].change(reveal);
	left[i+1][j+1].change(reveal);
	left[i+1][j+2].change(reveal);
	left[i+2][j].change(reveal);
	left[i+2][j+1].change(reveal);
}

function changeColors(){
	for (var i = 0; i < cols; i ++) {
		for (var j=0; j < rows; j ++) {
			if (mouseX > (i*boxsize+x.left) && mouseX < ( i *boxsize+x.left+boxsize) && mouseY > (j*boxsize+y.left) && mouseY < (j*boxsize+y.left+boxsize)) {
				if (brush == 'single'){
					single(i,j);
				}else if(brush == 'five'){
					five(i,j);
				}else if(brush == 'circle'){
					circle(i,j);
				}else if(brush == 'callig'){
					callig(i,j);
				}
			}
		} 
	}
}