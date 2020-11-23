var thickness,wall;
var bullet,speed,weight;

function setup(){
createCanvas(1300,400);

thickness=random(22,83);
wall= createSprite(1200,200,thickness,height/2);
wall.shapeColor="pink";

bullet=createSprite(50,200,30,5);
bullet.shapeColor="yellow";
bullet.velocityX= random(50,100);

speed=random(223,321);
weight=random(30,52);


}

function draw(){
background("black");

  if(collide(bullet,wall)){
     bullet.velocityX=0;
     var damage= 0.5 * weight * speed * speed/ (thickness * thickness
      * thickness);

      if (damage>10){
         wall.shapeColor="red";
      }
      if (damage<10){
         wall.shapeColor="green";
      }
  }
  collide(bullet,wall);
drawSprites();
}

function collide(bullet,wall){
   bulletRightEdge= bullet.x+bullet.width;
   wallLeftEdge=wall.x;
 
   if(bulletRightEdge >= wallLeftEdge){
      return true;
   } else 
   return false;
 
 }