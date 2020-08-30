var fixrect, movingrect;


function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200, 200, 50, 50);

  fixrect.debug = true;
  movingrect.debug = true;
  
  fixrect.shapeColor = "green";
  movingrect.shapeColor = "green";
movingrect.velocityX = +2 ;
fixrect.velocityX = -2 ;
}

function draw() {
  background(255,255,255);  
 
  //movingrect.x = mouseX;
 // movingrect.y = mouseY;

  if ((movingrect.x-fixrect.x < fixrect.width/2 + movingrect.width/2) && 
      (fixrect.x-movingrect.x < fixrect.width/2 + movingrect.width/2) &&
      (fixrect.y-movingrect.y < fixrect.height/2 + movingrect.height/2)&&
      (movingrect.y-fixrect.y < fixrect.height/2 + movingrect.height/2)){
    //fixrect.shapeColor = "red";
    //movingrect.shapeColor = "red";
    movingrect.velocityX = movingrect.velocityX *(-1);
    fixrect.velocityX = fixrect.velocityX *(-1) ;
  
}
else {fixrect.shapeColor = "green";
movingrect.shapeColor = "green";}


  drawSprites();


}
  
