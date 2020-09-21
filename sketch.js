var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 400, 50, 25);
  //changed x axsis of wall and gave color to it
  wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor=(80, 80, 80)
 //speed isn not a sprite
 speed = random(223, 321);
  bullet.velocityX = speed;
  //speed is not sprite
  weight = random(30, 52)
  thickness = random(22, 83)
}

function draw() {
  background("Black");  

  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10) {
      bullet.shapeColor = color(255, 0, 0);
    }

    if(damage < 10) {
      bullet.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = wall.x
  if(bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}