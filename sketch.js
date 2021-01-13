
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var bananaGroup;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(80,316,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  ground=createSprite(400,380,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  bananaGroup=createGroup();
  
   monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
monkey.debug=true  

  
}


function draw() {
  //stop falling the monkey down  
monkey.collide(ground); 
  
  if(gameState === PLAY){
     background("lightblue");
  console.log(ground.x)
   if (ground.x < 150){
      ground.x = ground.width/2;
    }
  
  //pressed space to jump monkey
  if(keyDown("space")&& monkey.y>=100){
    monkey.velocityY=-10; 
  }
//add gravity to monkey
monkey.velocityY=monkey.velocityY+0.8;

    var survivalTime=0;
    stroke("white");
    textSize(20);
    fill("white");
    text("Score"+score,400,50);
    stroke("black");
    textSize(20)
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
    text("SurvivalTime:"+survivalTime,100,50);
    
  }
  
 
  
 obstacles(); 
createbanana();
drawSprites();
}
function createbanana(){
  if(frameCount%80===0){
    banana=createSprite(600,300,10,10);
    banana.y=Math.round(random(100,300));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-4;
    banana.lifetime=150;
    
  }
}
function obstacles(){
  if(frameCount%300===0){
  var obstacle=createSprite(400,350,5,5);
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.2  
    obstacle.velocityX=-4
  
  } 
  
  
}







