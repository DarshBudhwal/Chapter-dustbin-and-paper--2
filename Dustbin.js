class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.image = addImage("dustbingreen.png");
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}