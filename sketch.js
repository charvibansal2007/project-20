
var Background ,  backgroundImage;
var cat1 , catImage , catImage2 , catImage3;
var mouse , mouseImage , mouseImage2 , mouseImage3;

function preload() {
    //load the images here
    
    backgroundImage = loadImage("images/gardenn.png");

    catImage = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png" , "images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");

    mouseImage = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    cat1 = createSprite(800,650,10,10);
    cat1.addAnimation("catImage", catImage);
    cat1.scale = 0.1;

    mouse = createSprite(50,670,10,10);
    mouse.addAnimation("mouse",mouseImage);
    mouse.scale = 0.1;
    
    cat1.debug = true;
    mouse.debug = true;
    cat1.setCollider("rectangle", -20, 0, 25, 20);
    mouse.setCollider("rectangle", 20, 0, 25, 20);
}

function draw() {
    
    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide

    if(cat1.x-mouse.x <= cat1.width/2 + mouse.width/2
        && mouse.x-cat1.x <= cat1.width/2 + mouse.width/2){
    
          cat1.velocityX = 0;
          cat1.addAnimation("cat3", catImage3);
          cat1.changeAnimation("cat3", catImage3);
          cat1.scale = 0.2;
          
        mouse.addAnimation("mouse3", mouseImage3);
        mouse.changeAnimation("mouse3", mouseImage3);
        mouse.scale = 0.15;
    }
      

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code her
  if(keyCode === LEFT_ARROW){

      cat1.velocityX = -3;
      cat1.addAnimation("catTeasing" , catImage2);
      cat1.changeAnimation("catTeasing" , catImage2);

      mouse.addAnimation("mouse2",mouseImage2);
      mouse.changeAnimation("mouse2",mouseImage2);
  }
}
