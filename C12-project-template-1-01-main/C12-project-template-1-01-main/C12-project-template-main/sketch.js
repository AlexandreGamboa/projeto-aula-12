var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var invisbleLeftboundary, invisbleRightboundary
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,200, 200, 200);//crie um sprite para a pista 
  path.addImage("pista", pathImg);
  path.velocityY = -2;//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
  path.scale=1.2;

  boy = createSprite(200, 300, 50, 50);
  boy.addAnimation("garoto", boyImg);
  boy.scale=0.8;
  
  invisbleLeftboundary=createSprite(0,0,100,800);
  leftBoundary=createSprite(0,0,100,800);
  invisbleLeftboundary.visible = false;

  invisbleRightboundary=createSprite(410,0,100,800);
  rightBoundary=createSprite(410,0,100,800);
  invisbleRightboundary.visible = false;
}

function draw() {
  background("blue");
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
    boy.x=World.mouseX;
    edges= createEdgeSprites();
    boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(invisbleLeftboundary);
  boy.collide(invisbleRightboundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
