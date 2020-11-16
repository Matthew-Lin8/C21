
var fixedRect
var movingRect
var gameObject1
var gameObject2
var gameObject3
var gameObject4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(600,200,50,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green"; 
  gameObject1 = createSprite(300,300,20,20);
  gameObject1.shapeColor = "orange";
  gameObject2 = createSprite(400,400,30,30);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(200,500,20,20);
  gameObject4 = createSprite(1000,500,20,20);
  gameObject3.velocityX = 6;
  gameObject4.velocityX = -6;
   movingRect.velocityX = -4;
   fixedRect.velocityX = 4;
}

function draw() {
     background(0,0,0);
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;
  movingRect.shapeColor = "green";
  if (isTouching(gameObject1, movingRect)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
  }
  else{
    gameObject1.shapeColor = "green";
  }

  if (isTouching(fixedRect, movingRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    }
    else{
      fixedRect.shapeColor = "green";
    }
  if (isTouching(gameObject2,movingRect)){
    gameObject2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
  gameObject2.shapeColor = "green";
  }
  bounceOff(gameObject3,gameObject4);
  bounceOff(movingRect,fixedRect);
  drawSprites();
}
