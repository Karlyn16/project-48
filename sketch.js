var backgroundimg, girl, vulture1, snake,spider, scorpion,cactus,badguy,ground,score,coins;
var endState = 2;
var playeState=1;
var startState=0;

function preload() {
  backgroundimg=loadImage("desert2.jpeg");
  girl=loadImage("runninggirl (1).jpg");
  vulture=loadImage("vulture.jpeg");
 snake=loadImage("snake.jpeg");
  spider=loadImage("spider.jpg");
  scorpion=loadImage("scorpion.png");
  cactus=loadImage("cactus.png");
  badguy=loadImage("badguy.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth/2,displayHeight/2);
  bg.addImage(backgroundimg);
  bg.scale = 1.5
  ground=createSprite(50,50)
  ground.visible=true;
  ground.velocityX=-5

  snake=createSprite(50,50)
  spider=createSprite(30,50)
  scorpion=createSprite(50,50)
  cactus=createSprite(50,50)
  vulture=createSprite(100,350)

  //RandNum(1-100)


  
  
  
  girl1=createSprite(20,displayHeight-20)
  girl1.addImage("runninggirl(1)",girl)
  girl1.scale=1;
  vulture=createSprite(20,displayHeight-20);
  vulture.addImage("vulture.jpeg")
  
 
  ground.x=ground.width/2
  ground.velocityX = -(5+ 3*score/100);

  
  }


  function coin(){
    coin.positionX=Rand
  }



  function draw() {
    background(255);  
    
    girl1.debug=true
    if(gameState===0){
     score-score+Math.round (GetFrameRate()/60)
      ground.velocityX = -(5+ 3*score/100);
   }
    if(keyDown("space") && girl.y >= 159) {
     girl.velocityY = -12;
    }
    
    if(gameState=1){
      spawnObstacles
      obstacles.velocityX=start
      ground.velocityX=start
    }

    girl.collide(ground)
  girl=static
  if(keyDown(SpaceBar)){
    girl.velocityY=-4
    if(keyWentUp(SpaceBar)){
      girl.collide(ground)
    }
  }
    spawnObstacles();
    spawn(vultures);
     
    if(obstaclesGroup.isTouching(trex)){
      gameState = 1;
  }


    if(ground.x<0){
      ground.x = ground.width/2;
    }
    drawSprites();
  }

  function score() {
  if(Score>100){  
      
    playSound("powerUp9.ogg")
    Text("Score=")
  }
}

//imag needs to be moving at a specific speed with a frame Count
// obstacles need to be spawn randomly using the function Rand
function obstacles(){
  scorpion.velocityX=-4
  cactus.velocityX=-4
  spider.velocityX=-4
  cactus.velocityX=-4
  snake.velocityX=-4
  
}

function vulture(){
  if(RandNum(1,5,10,15,20,25,40,45)){
    vulture.velocityY=-6
    vulture.positionX=girl.positionX
    vulture.positionY=grl.positionY
  gameState=1
if(vulture.isTouching(girl)){
  gameState=2
}
  }

  
}

function badguy(){
badguy.velocityX=-4

}




