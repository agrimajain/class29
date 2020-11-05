
var player;
var wormGroup;
var swamp

function preload(){
  playerImg = loadImage("images/frog.png")
  backgroundForest =loadImage("images/swampImg.png")
  wormImg= loadImage("images/worm.png")
}
function setup() {
createCanvas(600,600);
swamp = createSprite(300,300); 
swamp.scale = 2.5;
 swamp.addImage(backgroundForest) 
 player = createSprite(40,500,30,30);
  player.addImage(playerImg);
   player.scale= 0.4;
wormGroup= new Group();
}

function draw() {
background("black");  
player.x= mouseX;
player.y= mouseY;


generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }}
function generateWorms(){
if(frameCount % 30===0){
  console.log(frameCount);
  var worm = createSprite(random(40,320), random(40,320), 40 , 5 );
   //                           x             y            w    h
   worm.scale= random(0.1,0.3); worm.addImage(wormImg)
  worm.shapeColor="green"
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  
  wormGroup.add(worm);
  }
}
