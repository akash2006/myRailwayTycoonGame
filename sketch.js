// initiate the canvas variable
var canvas;

// initiate the platform variables
var platform;
var platformImg;

// initiate the track variables
var track1,track2,track3,track4;
var trackImage;

// initiate the train variables
var train;
var trainImage;
// var acceleration = 0;

// initiate the carriage variables
var carriage1,carriage2;
var carriageImage1,carriageImage2;

// initiate the trafiic light variables
var signal,lightImgR,lightImgG, signalState = "R";

// initiate the music variables
var bg,bgMusic;
var cash;
var announcement;

// initiate the trainState variable
var trainState = "run";

// initiate the coin variable
var coinsLimit = 0, coins = 0;

// initiate the bridge image variables
var bridge,bridgeImg;

// initiate the level variables
// var level = 0;

function preload(){
  // load the background image and sound
  bg = loadImage("images/backgroundf1.jpg");
  // bgMusic = loadSound("music/bg music.mp3");
  // bridgeImg = loadImage("images/footbridge2f.png");
  cash = loadSound("music/cash.m4a");
  // announcement = loadSound("music/station1.mp3");

}

function setup(){
  // announcement.play();
  // bgMusic.play();
  

  // create the canvas
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  canvas.parent('#canvascontainer');

  // create the platform
  platform1 = new Platform(displayWidth/2,displayHeight/2+200,"UP");
  platform2 = new Platform(displayWidth/2,displayHeight/2+60,"DOWN");
  platform3 = new Platform(displayWidth/2,displayHeight/2,"UP");
  platform4 = new Platform(displayWidth/2,displayHeight/2-140,"DOWN");
  platform5 = new Platform(displayWidth/2,displayHeight/2-200,"UP");
  platform6 = new Platform(displayWidth/2,displayHeight/2-340,"DOWN")
  

  // create the tracks
  // #1
  track1 = new Track(180,displayHeight/2+150);  
  track2 = new Track(360+180,displayHeight/2+150);  
  track3 = new Track(720+180,displayHeight/2+150);
  track4 = new Track(1080+180,displayHeight/2+150);
  // #2
  track5 = new Track(180,displayHeight/2+110);  
  track6 = new Track(360+180,displayHeight/2+110);  
  track7 = new Track(720+180,displayHeight/2+110);
  track8 = new Track(1080+180,displayHeight/2+110);
  // #3
  track9 = new Track(180,displayHeight/2-50);  
  track10 = new Track(360+180,displayHeight/2-50);  
  track11 = new Track(720+180,displayHeight/2-50);
  track12 = new Track(1080+180,displayHeight/2-50);
  // #4
  track13 = new Track(180,displayHeight/2-90);  
  track14 = new Track(360+180,displayHeight/2-90);  
  track15 = new Track(720+180,displayHeight/2-90);
  track16 = new Track(1080+180,displayHeight/2-90);
  // #5
  track17 = new Track(180,displayHeight/2-250);  
  track18 = new Track(360+180,displayHeight/2-250);  
  track19 = new Track(720+180,displayHeight/2-250);
  track20 = new Track(1080+180,displayHeight/2-250);
  // #6
  track21 = new Track(180,displayHeight/2-290);  
  track22 = new Track(360+180,displayHeight/2-290);  
  track23 = new Track(720+180,displayHeight/2-290);
  track24 = new Track(1080+180,displayHeight/2-290);
  
  // create the engines
  engine1 = new Engine(displayWidth+100,displayHeight/2+150,"UP");
  engine2 = new Engine(-100,displayHeight/2+110,"DOWN");
  engine3 = new Engine(displayWidth+100,displayHeight/2-50,"UP");
  engine4 = new Engine(-100,displayHeight/2-90,"DOWN");
  engine5 = new Engine(displayWidth+100,displayHeight/2-250,"UP");
  engine6 = new Engine(-100,displayHeight/2-290,"DOWN");

  // create the carriages
  carriage1 = new Carriage();
  carriage2 = new Carriage();
  carriage3 = new Carriage();
  carriage4 = new Carriage();
  carriage5 = new Carriage();
  carriage6 = new Carriage();
  carriage7 = new Carriage();
  carriage8 = new Carriage();
  carriage9 = new Carriage();
  carriage10 = new Carriage();
  carriage11 = new Carriage();
  carriage12 = new Carriage();
  
  // create the traffic lights
  signal1 = new Signal(390,displayHeight/2+210);
  signal2 = new Signal(390+650,displayHeight/2+40);
  signal3 = new Signal(390,displayHeight/2+10);
  signal4 = new Signal(390+650,displayHeight/2-160);
  signal5 = new Signal(390,displayHeight/2-190);
  signal6 = new Signal(390+650,displayHeight/2-360);  

  // create the fencing
  part1 = new Fence(200,25);
  part1 = new Fence(600,25);
  part1 = new Fence(1000,25);
  part1 = new Fence(1400,25);
  
  // create the level system
  level = new Level();
  // bridge = createSprite(displayWidth/2,590);
  // bridge.addImage(bridgeImg);
    
  console.log(displayWidth,displayHeight);
}

function draw(){
  if(frameCount%1 && coins!==coinsLimit){
    coins++;
  }
  
  background(bg);
  level.display();
  track1.display();
  track2.display();
  track3.display();
  track4.display();

  track5.display();
  track6.display();
  track7.display();
  track8.display();

  track9.display();
  track10.display();
  track11.display();
  track12.display();

  track13.display();
  track14.display();
  track15.display();
  track16.display();

  track17.display();
  track18.display();
  track19.display();
  track20.display();

  track21.display();
  track22.display();
  track23.display();
  track24.display();
  if(level === 0){
    track5.lock();
    track6.lock();
    track7.lock();
    track8.lock();
    if(level === 1){
      track9.lock();
      track10.lock();
      track11.lock();
      track12.lock();

      track13.lock();
      track14.lock();
      track15.lock();
      track16.lock();

      track17.lock();
      track18.lock();
      track19.lock();
      track20.lock();

      track21.lock();
      track22.lock();
      track23.lock();
      track24.lock();
    }
  }
  // track4.lock();
  platform1.display();
  platform2.display();
  platform3.display();
  platform4.display();
  platform5.display();
  platform6.display();

  signal1.display();
  signal2.display();
  signal3.display();
  signal4.display();
  signal5.display();
  signal6.display();
  
  fill("red");
  textSize(24);
  text(coins,300,50);
  
  engine1.display();
  engine2.display();
  engine3.display();
  engine4.display();
  engine5.display();
  engine6.display();
  if(track4.state!==1){
    engine1.move();
  }  
  if(track5.state!==1){
    engine2.move();
  }
  if(track12.state!==1){
    engine3.move();
  }
  if(track13.state!==1){
    engine4.move();
  }
  if(track20.state!==1){
    engine5.move();
  }
  if(track21.state!==1){
    engine6.move();
  }

  carriage1.display();
  carriage2.display();
  carriage3.display();
  carriage4.display();
  carriage5.display();
  carriage6.display();
  carriage7.display();
  carriage8.display();
  carriage9.display();
  carriage10.display();
  carriage11.display();
  carriage12.display();

  part1.display();

  // create the link
  link1 = new Link(engine1,carriage1,"UP");
  link2 = new Link(carriage1,carriage2,"UP");
  link3 = new Link(engine2,carriage3,"DOWN");
  link4 = new Link(carriage3,carriage4,"DOWN");
  link5 = new Link(engine3,carriage5,"UP");
  link6 = new Link(carriage5,carriage6,"UP");
  link7 = new Link(engine4,carriage7,"DOWN");
  link8 = new Link(carriage7,carriage8,"DOWN");
  link9 = new Link(engine5,carriage9,"UP");
  link10 = new Link(carriage9,carriage10,"UP");
  link11 = new Link(engine6,carriage11,"DOWN");
  link12 = new Link(carriage11,carriage12,"DOWN");

  link1.display();
  link2.display();
  link3.display();
  link4.display();
  link5.display();
  link6.display();
  link7.display();
  link8.display();
  link9.display();
  link10.display();
  link11.display();
  link12.display();
  
  // if(trainState === "run"){
    if(engine1.body.x < signal1.body.x+signal1.body.width/2+450 && engine1.body.x+92 > signal1.body.x && engine1.acceleration<0 && signal1.state === "R"){
      engine1.stop();      
    }else if(frameCount%30){    
      engine1.acceleration-=random(0.1,0.5);    
    }
     if(engine2.body.x > signal2.body.x-signal2.body.width/2-450 && engine2.body.x-92 < signal2.body.x && engine2.acceleration<0 && signal2.state === "R"){
      engine2.stop();      
     }else if(frameCount%30){
       engine2.acceleration-=random(0.1,0.5);
      
     }
      if(engine3.body.x < signal3.body.x+signal3.body.width/2+450 && engine3.body.x+92 > signal3.body.x && engine3.acceleration<0 && signal3.state === "R"){
      engine3.stop();      
    }else if(frameCount%30){    
      engine3.acceleration-=random(0.1,0.5);    
    }
    if(engine4.body.x > signal4.body.x-signal4.body.width/2-450 && engine4.body.x-92 < signal4.body.x && engine4.acceleration<0 && signal4.state === "R"){
      engine4.stop();      
     }else if(frameCount%30){
       engine4.acceleration-=random(0.1,0.5);
      
     }
      if(engine5.body.x < signal5.body.x+signal5.body.width/2+450 && engine5.body.x+92 > signal5.body.x && engine5.acceleration<0 && signal5.state === "R"){
      engine5.stop();      
    }else if(frameCount%30){    
      engine5.acceleration-=random(0.1,0.5);    
    }
     if(engine6.body.x > signal6.body.x-signal6.body.width/2-450 && engine6.body.x-92 < signal6.body.x && engine6.acceleration<0 && signal6.state === "R"){
      engine6.stop();      
     }else if(frameCount%30){
       engine6.acceleration-=random(0.1,0.5);
      
     }
    // }

    if(engine1.body.x<-410){
      engine1 = new Engine(displayWidth+100,displayHeight/2+150,"UP")
      carriage1.reset();
      carriage2.reset();
    }
    
    if(engine2.body.x>displayWidth+410){
      engine2 = new Engine(-100,displayHeight/2+110,"DOWN");
      carriage3.reset();
      carriage4.reset();
    }
    
    if(engine3.body.x<-410){
      engine3 = new Engine(displayWidth+100,displayHeight/2-50,"UP");
      carriage5.reset();
      carriage6.reset();
    }

    if(engine4.body.x>displayWidth+410){
      engine4 = new Engine(-100,displayHeight/2-90,"DOWN");
      carriage7.reset();
      carriage8.reset();
    }

    if(engine5.body.x<-410){
      engine5 = new Engine(displayWidth+100,displayHeight/2-250,"UP");
      carriage9.reset();
      carriage10.reset();
    }

    if(engine6.body.x>displayWidth+410){
      engine6 = new Engine(-100,displayHeight/2-290,"DOWN");
      carriage11.reset();
      carriage12.reset();
    }


    if(track4.state === 1){
      engine1.velocityX = 0;
    }

  console.log(engine1.body.x);
  
}