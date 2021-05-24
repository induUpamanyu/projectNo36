var database;
var dog, dogImg, happyDog;
var foodS = 20;
var lastFed = 0;
var foodObj = null;
var feedButton, addButton;


function preload()
{
  backgroundImg = loadImage("images/bg.png");
  dogImg = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
}


function setup(){

  createCanvas(800, 500);

  foodObj = new Food();

  dog = createSprite(650, 280);
  dog.scale = 0.3;
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happyDog);

  feedButton = createButton("FEED DOG");
  feedButton.position(360, 500);
  feedButton.mousePressed(feedDog);

  addButton = createButton("ADD BOTTLES");
  addButton.position(360, 450);
  addButton.mousePressed(addFood);

}


function draw() {  

  background(backgroundImg);

  fill("white");
  textSize(15);
  if(lastFed>=12){
    text("Last Fed (approx timing) : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Fed (approx timing) : 12 AM",350,30);
   }else{
     text("Last Fed (approx timing) : "+ lastFed + " AM", 350,30);
   }

   if(keyWentUp("up")){
   addFood();
  }

  strokeWeight(2);
  stroke("skyblue")
  fill("crimson");
  textSize(20);
  text("press up arrow key to add the food ", 300, 70);

  strokeWeight(2);
  stroke("orange")
  fill("yellow");
  textSize(20);
  text("press space key to feed the dog ", 310, 100);

  foodObj.display();

  drawSprites();

}

function addFood(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  if(foodS > 0){
    dog.changeAnimation("dog2", happyDog);
    foodS--;
    foodObj.updateFoodStock(foodS);
    lastFed = hour();
    foodObj.updateLastFed(lastFed);
  }
}
