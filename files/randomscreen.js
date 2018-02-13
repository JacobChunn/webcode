function createRandom()
{
    var noisescale = .02;
    for (var i = 0; i<Columns; ++i)
    {
        for (var j = 0; j<Columns; ++j)
        {
            var noiseVal = (noise(i,j)) * 255;
            arrPos[i][j] = new Square(i*boxsize+x.arrPos,j * boxsize+y.arrPos, boxsize, noiseVal);
            arrPos[i][j].show();
        }
    }
}