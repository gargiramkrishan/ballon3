
var p,pl,bg,bk,ball,bl,ball2,bl2,ball3,bl3,Obff;
var game,play,end,score;
var arrow,ap

function preload()
{
  pl = loadAnimation("bow0.png")
  bk = loadAnimation("background0.png")
  bl  = loadImage("blue_balloon0.png")
  bl2 = loadImage("green_balloon0.png")
  bl3 = loadImage("red_balloon0.png")

  ap = loadImage("arrow0.png")
  score = 0
  play = 1;
  end = 0; 
  game = play;
}



function setup() 
{
  createCanvas(400, 400);
  bg = createSprite(200,200);
  bg.addAnimation("tyt",bk);
  p = createSprite(390,200);
  p.addAnimation("uhi",pl);
  ball = createSprite(0,-88)
  arrow = createSprite(390,200)
  arrow.addAnimation("hhghh",ap)
  arrow.scale = 0.3
  Obff = new Group();
}

function draw() 
{
  background("white")
  console.log(arrow.x)
  if(game == play)
  {
   ball.x = ball.x + 9;
   if(keyDown("Up"))
   {
    arrow.y = p.y;
    p.y = p.y - 4
   }
   if(keyDown("Down"))
   {
    arrow.y = p.y;
    p.y = p.y + 4
   }
   if(arrow.x < 200)
   {
    arrow.visible = false;
    arrow.x = p.x
    arrow = createSprite(390,200)
    arrow.addAnimation("hhghh",ap)
    arrow.scale = 0.3
   }
   if(Obff.isTouching(arrow))
   {
     score = score + 1
   }
   if(keyDown("Space"))
   {
    arrow.x = arrow.x - 10;
   }
   ballon();

  }
  drawSprites();
  text("Score" + score, 200,250)
}
function ballon()
{
  if(frameCount%110==0)
  {
    ball = createSprite(50,200)
    ball.scale = 0.1;
    ball.y = Math.round(random(100,350))
    ball.x = ball.x + 9;
    barrl = Math.round(random(1,3))
    switch(barrl)
    {
      case 1 : ball.addImage(bl)
      break
      case 2 : ball.addImage(bl2)
      break
      case 3 : ball.addImage(bl3)
      break
      default:
        break
    }
    Obff.add(ball);
  }
}