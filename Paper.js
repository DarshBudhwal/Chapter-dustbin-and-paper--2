class Paper{
 constructor(x,y,radius,height){
 var options={
     isStatic:false,
     restitution:0.4,
     friction:0.5,
     density:1.2
 }
    this.image = addImage("paper.png");
    World.add(world,this.image);
 }
 display(){
  ImageMode(CENTER);

 }
}