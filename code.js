var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["62f9abe9-34a8-4d88-aa21-9f6a25ff573f","b5194ee7-e3b9-49ce-9a29-5fc6456bd829","8e57477d-2269-4cd7-8c58-1f7958044e8a"],"propsByKey":{"62f9abe9-34a8-4d88-aa21-9f6a25ff573f":{"name":"miscball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5Yl0wzKk4SY_UGA_47svi8_VOnlYOp96/category_sports/miscball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"5Yl0wzKk4SY_UGA_47svi8_VOnlYOp96","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5Yl0wzKk4SY_UGA_47svi8_VOnlYOp96/category_sports/miscball.png"},"b5194ee7-e3b9-49ce-9a29-5fc6456bd829":{"name":"baseball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/uoZwcPJapKhZIATHFDR107Ylx1bV1j8k/category_sports/baseball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"uoZwcPJapKhZIATHFDR107Ylx1bV1j8k","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uoZwcPJapKhZIATHFDR107Ylx1bV1j8k/category_sports/baseball.png"},"8e57477d-2269-4cd7-8c58-1f7958044e8a":{"name":"curtain_straight_1","sourceUrl":"assets/api/v1/animation-library/gamelab/H8mjQMdCBFlcETVCas0Ga8L5N9I2MDmh/category_household_objects/curtain_straight.png","frameSize":{"x":256,"y":80},"frameCount":1,"looping":true,"frameDelay":2,"version":"H8mjQMdCBFlcETVCas0Ga8L5N9I2MDmh","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":80},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H8mjQMdCBFlcETVCas0Ga8L5N9I2MDmh/category_household_objects/curtain_straight.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating plddle and the ball
var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(150, 250, 20, 20);

var score=0;
var gameState ="serve";

//first row of boxes
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

//second row of boxes
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

ball.setAnimation("baseball_1")

ball.scale=0.05

paddle.setAnimation("curtain_straight_1")

paddle.scale=0.2

var lives=3

function draw() {
  background("white");
  
  //display score
  textSize(15);
  stroke("red");
  text("Score :"+score,330,20);
  
  text ("lives: "+lives,25,20)
textFont("Times New Roman")

  
  
  if(gameState == "serve")
  {
    //Moving the ball on pressing enter key
  if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
    gameState =  "play"
     //display welcome text
    textSize(25);
    text("Welcome! Press Enter to start.",30,200);
  } 
  }
  
 
  {
    //Moving the paddle with mouse along the x-axis
  paddle.x=World.mouseX;
  
  //destroy the boxes when ball touches them
  if(ball.isTouching(box1))
  {
    score=score+1;
    box1.destroy();
  }
  
  if(ball.isTouching(box2))
  {
    score=score+1;
    box2.destroy();
  }
  
  if(ball.isTouching(box3))
  {
    score=score+1;
    box3.destroy();
  }
  
  if(ball.isTouching(box4))
  {
    score=score+1;
    box4.destroy();
  }
  
  if(ball.isTouching(box5))
  {
    score=score+1;
    box5.destroy();
  }
  
  if(ball.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
  }
  
  if(ball.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
  }
  
  if(ball.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
  }
  
  if(ball.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
  }
  
  if(ball.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
  }
  if(ball.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
  }
  if(ball.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
  }
  if(ball.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
  }
  if(ball.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
  }
  if(ball.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
  }
  if(ball.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
  }
    if (ball.y>400) {
       ball.x=200
       ball.y=200
    ball.setVelocity(0,0)
    lives=lives-1
      gameState="serve"
    }
    if (lives== 0)
     {
  gameState="end"
  }   
  }
  
  if(gameState == "end")
  {
    text("Game Over!",175,225)
  }
 
  
 
  
  
  //Making the ball bounceOff the paddle and three sides of canvas
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

  

  drawSprites();
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
