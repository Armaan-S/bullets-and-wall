var bullet,wall,speed,weight;
var thickness;
function setup() {
  createCanvas(800,400);
  speed = random(10,30);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(600,200, thickness, height/2);
  wall.shapeColor = "green"
  bullet = createSprite(300,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor = "blue"
}

function draw() {
  background(255,255,255);
 if (hasCollided(bullet, wall)){
bullet.velocity = 0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
 if(damage>10){
 wall.shapeColor = "red"
  }
  if(damage<=10){
    wall.shapeColor = "green"
  }
 }
  drawSprites();
}
function hasCollided(lbullet, lwall){
 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x;
 if (bulletRightEdge>=wallLeftEdge){
   return true
 }
 return false
}