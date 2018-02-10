class Square 
{
    constructor(x,y,w) 
	{
        this.x = x;
        this.y = y;
        this.w = w;
        this.color = 150;
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