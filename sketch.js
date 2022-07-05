var floor,boy,bob,monster,sus;
var floorImg,boyImg,bobImg,monsterImg,susImg;
var amongrun = 0;
var monsterG,bobG,obstaclesGroup;
function obstaclesGroup(){
    obstaclesGroup.addImage("bob.jpeg","monster.png")
}

var PLAY=1;
var END=0;
var gameState=1;

var obstaclesGroup, bob, monster;

function preload(){
    floorImg = loadImage("floor.jpeg");
    boyImg = loadAnimation("boy.gif");
    bobImg = loadImage("bob.jpeg");
    monsterImg = loadImage("monster.png");
    susImg = loadImage("sus.png");
  }
  
  function setup(){
  
    createCanvas(400,600);
  floor=createSprite(200,200);
  floor.addImage(floorImg);
  floor.velocityX = 4;
}


function draw() {
  background(180);
  text("Score: "+ amongrun++, 500,50);
  
  console.log("this is ",gameState)
  
  
  if(gameState === PLAY){ 
    sus.visible=false;


  }
  

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& boy.y >=160) {
      boy.velocityY = -13;
  }
  



  if(obstaclesGroup.isTouching(boy)){
      gameState = END;

    }
    else if (gameState === END) {
       ground.velocityX = 0;
      
      obstaclesGroup.setVelocityXEach(0);
      sus.visible=true;
      boy.velocityY=0;
    }
 
  boy.collide(invisibleGround);
  
  
  
  drawSprites();
}

function spawnObstacleGroup(){
 if (frameCount % 60 === 0){
   var obstaclesGroup = createSprite(600,165,10,40);
   obstaclesGroup.velocityX = -4;
   
    
    var rand = Math.round(random(1,2));
    switch(rand) {
        case 1: obstaclesGroup.addImage(bob);
                break;
        case 2: obstaclesGroup.addImage(monster);
                break;
      }
  
      obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
 }
}