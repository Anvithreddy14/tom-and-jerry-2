var bgImage;
var cat ,catImage1,catImage2,catImage3,catImage4;
var mouse,mouseImage1,mouseImage2,mouseImage3,mouseImage4;


function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png")
    mouseImage1 = loadAnimation("images/mouse1.png")
    catImage2 = loadAnimation("images/cat2.png")
    mouseImage2 = loadAnimation("images/mouse2.png")
    catImage3 = loadAnimation("images/cat3.png")
    mouseImage3 = loadAnimation("images/mouse3.png")
    catImage4 = loadAnimation("images/cat4.png")
    mouseImage4 = loadAnimation("images/mouse4.png")


}

function setup() {
    createCanvas(1000, 800);

    cat = createSprite(830,730);
    cat.addAnimation("catSleeping",catImage1);
    cat.scale = 0.2;

    mouse = createSprite(80,730);
    mouse.addAnimation("mouseStanding",mouseImage1)
    mouse.scale = 0.2



}

function draw() {
    
    background(bgImage)
    //Write condition here to evalute if tom and jerry collide
    if(cat.x -mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX  = 0;
        cat.addAnimation("catrunning",catImage2);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catrunning");

        mouse.addAnimation("mouseTeasing",mouseImage2);
        mouse.scale = 0.2;
        mouse.changeAnimation("mouseTeasing");



   }

    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here
    if(keyDown(LEFT_ARROW)){
        cat.velocityX = -5
        cat.addAnimation("catlastImage",catImage3);
        cat.changeAnimation("catlastImage");

        mouse.addAnimation("mouselastImage",mouseImage3);
        
        mouse.changeAnimation("mouselastImage");
        
    }


}
