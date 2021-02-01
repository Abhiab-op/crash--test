var car, wall, speed, weight 





function setup() {
  createCanvas(1600,800);

  car = createSprite(50, 400, 50, 50);
 wall = createSprite(1500, 400, 50, 100);
 speed = random(50,90);
 weight = random(400,1500)

car.velocityX = speed;

}

function draw() {
  background(255,255,255);  

if (wall.x - car.x <(car.width + wall.width)/2 ){
  car.velocityX = 0;
var deform = 0.5*weight*speed*speed/22500;
  if (deform > 180 ){
    car.shapeColor = "red"
  }
  if (deform >100 && deform < 180){
    car.shapeColor = "yellow"
  }
  if (deform < 100 ){
    car.shapeColor = "green"
  }
}





  drawSprites();
}