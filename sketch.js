
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug=true

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug=true
  
  gameObject1= createSprite(200,500,20,10);
gameObject1.shapeColor ="yellow";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue" }

   else if(isTouching(movingRect,fixedRect)){
     movingRect.shapeColor= "red";
     fixedRect.shapeColor="red";
   }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor="green";
    fixedRect.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

