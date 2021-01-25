var canvas;
var music;
var surf1,surf2,surf3,surf4;
var box;
// var edges;
var bounceoff
function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);
    music.play();
    edges=createEdgeSprites;
    
    //create 4 different surfaces
    surf1 = createSprite(100,590,130,20);
    surf1.shapeColor="red"; 
    surf2 = createSprite(300,590,130,20);
    surf2.shapeColor="green"; 
    surf3 = createSprite(500,590,130,20);
    surf3.shapeColor="blue"; 
    surf4 = createSprite(700,590,130,20);
    surf4.shapeColor="yellow"; 

    //create box sprite and give velocity
    box = createSprite(random(200,200,1,1));
    box.shapeColor="white";
    
    
    box.velocityX=5;
    box.velocityY=5;
    

}

function draw() {
    background(rgb(169,169,169));

    //add condition to check if box touching surface and make it box
    createEdgeSprites();
    //box.bounceoff(createEdgeSprites);

if(surf1.isTouching(box) && box.bounceoff(surf1)){
    box.shapeColor="red"
}
if(surf2.isTouching(box) && box.bounceoff(surf2)){
    box.shapeColor="green"
}
if(surf3.isTouching(box) && box.bounceoff(surf3)){
    box.shapeColor="blue"
}
if(surf4.isTouching(box) && box.bounceoff(surf4)){
    box.shapeColor="yellow"
}
drawSprites();
}