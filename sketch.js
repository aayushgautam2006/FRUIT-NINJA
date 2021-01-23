var PLAY=1;
var END=0;
var gameState=PLAY;
var alien,aliensAnimation,alien_;
var alien1,alien2;
var alien1Image,alien2Image;
var fruit1,fruit2,fruit3,fruit3,fruit4;
var fruit1Image,Fruit2Image,fruit3Image,fruit4Image;
var gameover,gameoverImage;
var knife,knifeImage;
var background;
var score;
var fruitsGroup,aliensGroup;

function preload(){
  alien_ = loadAnimation("alien1.png","alien2.png")
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  knifeImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png");
  
 
}

function setup() {
  createCanvas(600,600);
  
  knife = createSprite(300,300,10,10);
  knife.addImage(knifeImage);
  knife.scale = 0.6;
  
  fruitsGroup = createGroup();
  aliensGroup = createGroup();
  
  score=0
}

function draw(){
  background("lightblue");
  
if(knife.isTouching(fruitsGroup)){
    fruitsGroup.destroyEach();
    score=score+2
   }else if( gameState === PLAY) {
    knife.y=mouseY
    knife.x=mouseX
    spawnAlien();
    spawnFruits();
  }
  
  if (knife.isTouching(aliensGroup)){
    gameState=END;
    aliensGroup.destroyEach();
    fruitsGroup.destroyEach();
    }else if( gameState === END){
      knife.addImage(gameoverImage)
      knife.scale=2
      knife.x=300
      knife.y=300
    }
   text("SCORE :"+score,500,20)
  
  drawSprites();
}

function spawnAlien(){
  if(frameCount%100  ===0){
    
    var side = Math.round(random(1,2))
    if(side === 1){
    alien = createSprite(0,Math.round(random(50,550)),10,10)
    alien.addAnimation("aliensAnimation",alien_)
    aliensGroup.add(alien);
    alien.velocityX = 4
    alien.lifetime=150
    }else{
    alien = createSprite(600,Math.round(random(50,500)),10,10)
    alien.addAnimation("aliensAnimation",alien_)
    aliensGroup.add(alien);
    alien.velocityX = -4
    alien.lifetime=150
      
    }
  }
}

function spawnFruits(){
 
  if(frameCount%100 === 0){
    
    var side_ = Math.round(random(1,2))
    if(side_ === 1){
    fruit1 = createSprite(0,Math.round(random(50,550)),10,10)
    fruitsGroup.add(fruit1,fruit2,fruit3,fruit4);
    fruit1.velocityX = 4
    fruit1.lifetime=150
    }else{
    fruit1 = createSprite(600,Math.round(random(50,500)),10,10)
    fruitsGroup.add(fruit1,fruit2,fruit3,fruit4);
    fruit1.velocityX = -4
    fruit1.lifetime=150
      
    }
      
    var fruit = Math.round(random(1,4));
    if(fruit ===1){
      fruit1.addImage(fruit1Image)
      fruit1.scale = 0.27;
    }else if(fruit ===2){
      fruit1.addImage(fruit2Image)
      fruit1.scale = 0.27;
    }else if(fruit ===3){
      fruit1.addImage(fruit3Image)
      fruit1.scale = 0.21;
    }else{
      fruit1.addImage(fruit4Image)
      fruit1.scale = 0.2;
    }
  }
}