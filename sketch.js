var garden, gardenImage

var cat, catImage, catMoveImages, catMove, catEnd, catEndImage

var mouse, mouseImage, mouseMoveImages, mouseMove, mouseEnd, mouseEndImage



function preload() {
    //load the images here
    gardenImage=loadImage("images/garden.png");

    catImage=loadImage("images/cat1.png");
    catMoveImages=loadAnimation("images/cat2.png","images/cat3.png")
    catEndImage=loadImage("images/cat4.png")

    mouseImage=loadImage("images/mouse1.png");
    mouseMoveImages=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseEndImage=loadImage("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500, 400, 1000, 800);
    garden.addImage(gardenImage);

    //create cat and mouse sprites here
    cat=createSprite(850, 650, 20, 20);
    cat.addImage(catImage);
    cat.scale = 0.2;

    mouse=createSprite(100, 650, 20, 20);
    mouse.addImage(mouseImage);
    mouse.scale = 0.15;


   

}

function draw() {

    background(255);

    //Write condition here to evaluate if cat and mouse collide
 if(cat.x-mouse.x < (cat.width+mouse.width)/2)
  {
   console.log("collision");
   cat.velocityX=0;
   cat.addAnimation("catLastImage", catEndImage);
    cat.x =300;
    cat.scale=0.2;
    
    mouse.addAnimation("mouseLastImage",mouseEndImage);
    mouse.scale=0.15;
  }
  
   
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("space")) {
      
        //catMove=createSprite(850, 700, 20, 20);
        cat.velocityX = -4;
        cat.addAnimation("catRunning",catMoveImages);
        

       // mouseMove=createSprite(850, 100, 20, 20);
        mouse.addAnimation("mouseTeasing",mouseMoveImages);
    }
  }
