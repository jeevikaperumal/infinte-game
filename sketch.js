var pacman,pacmanImg;
var ghost,ghostImg;
var obstacle1,obstacle2,obstacle3;
var cherry,cherryImg;
var ground,groundImg,invisibleground;

var obstaclesGroup;
var cherrysGroup;

var score;

var gameState="play";



function preload(){

ghostImg=loadAnimation("ghost.png","ghost2.png");
pacmanImg=loadAnimation("pacman.png","pacman2.png");

obstacle1=loadImage("treetrunk.png");
obstacle2=loadImage("bat.png");
obstacle1=loadImage("bush.png");

groundImg=loadImage("ground.png");

cherryImg=loadImage("cherry.png");

}

function setup() {
 createCanvas(600,200);

  
  ground = createSprite(200,100,400,20);
  ground.addImage("ground",groundImg);
  ground.x=ground.x/2
  ground.velocityX=-3

  pacman = createSprite(200,200,50,50);
  pacman.addAnimation("pacman",pacmanImg);
  pacman.velocityX=3
  ghost = createSprite(50,200,50,50);
  ghost.addAnimation("ghost",ghostImg);
  ghost.velocityX=2
  score=0

  obstaclesGroup=new Group();
  cherrysGroup=new Group();
  

}

function draw() {
  background(180);

  if(ground.x<200){
    ground.x=ground.width/2
  }

 drawSprites();

 





 
}