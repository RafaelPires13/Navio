var Navio
var Navio_png
var Mar
var Mar_png

function preload(){

Navio_png=loadAnimation( "ship-1.png","ship-2.png","ship-3.png","ship-4.png")
Mar_png=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  Mar = createSprite (200,200)
  Mar.addImage("Mar_png",Mar_png)
  Navio = createSprite(180,150)
  Navio.addAnimation("Navio_png",Navio_png)
  Navio.scale = 0.3 
  Mar.scale = 0.3
  Mar.velocityX = -3

}

function draw() {
  background("blue");
    drawSprites();
 if(Mar.x < 0){
  Mar.x = Mar.width/2;
 }
 
}
