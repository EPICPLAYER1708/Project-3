var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var Gunina = createSprite(30,25,20,20); 
var wall1 = createSprite(75,10,25,200);
var wall2 = createSprite(120,42,90,25);
var wall3 = createSprite(48,180,120,25);
var wall4 = createSprite(50,230,25,125);
var wall5 = createSprite(0,340,120,25);
var wall6= createSprite(210,235,25,132);
var wall7 = createSprite(207.5,300,100,25);
var wall8 = createSprite(210,370,25,130);
var wall9 = createSprite(207.5,170,100,25);
var wall10 = createSprite(245,105,25,150);
var wall11 = createSprite(191,92,90,25);
var wall12 = createSprite(290,70,110,25);
var wall13 = createSprite(360,140,110,25);
var wall14 = createSprite(330,270,25,80);
var wall15 = createSprite(260,390,25,80);
var wall16 = createSprite(330,362.5,140,25);
var wall17 = createSprite(98,360,25,80);
var wall18 = createSprite(150,360,110,25);
var wall19 = createSprite(350,180,25,80);
var wall20 = createSprite(360,225,110,25);
var wall21 = createSprite(50,280,110,25);
var box = createSprite(390,300,20,30);

Gunina.shapeColor="lime";  
box.shapeColor="Blue";  
wall1.shapeColor="White";
wall2.shapeColor="White";
wall3.shapeColor="White";
wall4.shapeColor="White";
wall5.shapeColor="White";
wall6.shapeColor="White";
wall7.shapeColor="White";
wall8.shapeColor="White";
wall9.shapeColor="White";
wall10.shapeColor="White";
wall11.shapeColor="White";
wall12.shapeColor="White";
wall13.shapeColor="White";
wall14.shapeColor="White";
wall15.shapeColor="White";
wall16.shapeColor="White";
wall17.shapeColor="White";
wall18.shapeColor="White";
wall19.shapeColor="White";
wall20.shapeColor="White";
wall21.shapeColor="White";

function draw() { 
 background("Skyblue");
 drawSprites();
 text("Shanmukh", 2, 50);
 textSize(10);
 textFont("Arial");
 textAlign(LEFT);
 
 text("Playstation", 350,280);
 textSize(10);
 textFont("Arial");
 textAlign(RIGHT);
 
 if (Gunina.collide(box)){
 text("GOTTCHA TIME TO PLAY",CENTER);
 textFont("Arial");
 textSize(200);
 fill("yellow");
 text.setVelocity(50, 50);
 }
 if (keyDown("UP_ARROW")) {
 Gunina.velocityX=0;
 Gunina.velocityY=-4;
 }      
 if (keyDown("DOWN_ARROW")) {
 Gunina.velocityX=0;
 Gunina.velocityY=4;
 }
 if (keyDown("LEFT_ARROW")) {
 Gunina.velocityX=-4;
 Gunina.velocityY=0;
 }
 if (keyDown("RIGHT_ARROW")) {
 Gunina.velocityX=4;
 Gunina.velocityY=0;
 }
 
 createEdgeSprites();
 Gunina.bounceOff(edges);
 Gunina.bounceOff(wall1);
 Gunina.bounceOff(wall2);
 Gunina.bounceOff(wall3);
 Gunina.bounceOff(wall4);
 Gunina.bounceOff(wall5);
 Gunina.bounceOff(wall6);
 Gunina.bounceOff(wall7);
 Gunina.bounceOff(wall8);
 Gunina.bounceOff(wall9);
 Gunina.bounceOff(wall10);
 Gunina.bounceOff(wall11);
 Gunina.bounceOff(wall12);
 Gunina.bounceOff(wall13);
 Gunina.bounceOff(wall14);
 Gunina.bounceOff(wall15);
 Gunina.bounceOff(wall16);
 Gunina.bounceOff(wall17);
 Gunina.bounceOff(wall18);
 Gunina.bounceOff(wall19);
 Gunina.bounceOff(wall20);
 Gunina.bounceOff(wall21);
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
