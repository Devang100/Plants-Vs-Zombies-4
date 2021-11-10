var car,car_img;
var car2;
var car3;
var car4;
var car5;
//var cards;
var bla,bla_img
var plant;
var plant1,plant1Img;
var plant2,plant2Img;
var plant3,plant3Img;
var plant4,plant4Img;
var plant5,plant5Img;
var card1,card2,card3,card4,card5,card6;
var card1_img,card2_img,card3_img,card4_img,card5_img,card6_img;
var sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9,sq10,sq11,sq12,sq13,sq14,sq15,sq16,sq17,sq18,sq19,sq20;
var sq21,sq22,sq23,sq24,sq25,sq26,sq27,sq28,sq29,sq30,sq31,sq32,sq33,sq34,sq35,sq36,sq37,sq38,sq39,sq40;
var bground,bground2;
var pea1,pea2;
var p1_img,p2_img;
var pea1Group;
var invisline;
var zombie,zombie_anime,zombieGroup;
//ar bgSound;
var PLAY = 1;
var END = 0;
var gameState = PLAY;



function preload(){
  car_img = loadImage("images/car.png");
  bground = loadImage("images/back3.jpg");
  bground2 = loadImage("images/back2.jpg");
  plant1Img = loadImage("images/plant1.png");
  plant2Img = loadImage("images/plant2.png");
  plant3Img = loadImage("images/plant3.png");
  plant4Img = loadImage("images/plant4.png");
  plant5Img = loadImage("images/plant5.png");
  card1_img = loadImage("images/c1.jpg");
  card2_img = loadImage("images/c2.jpg");
  card3_img = loadImage("images/c3.jpg");
  card4_img = loadImage("images/c4.jpg");
  card5_img = loadImage("images/c5.jpg");
  card6_img = loadImage("images/c6.jpg");
  bl_img = loadImage("images/br.jpg");
  p1_img = loadImage("images/pea.png");
  zombie_anime = loadAnimation("zimage/1.png","zimage/2.png","zimage/3.png","zimage/4.png","zimage/5.png","zimage/6.png","zimage/7.png","zimage/8.png");
  //bgSound = loadSound("bgm.mp3");



  
}
function setup() {
  createCanvas(1500, 650);

  bl = createSprite(100,218);
  bl.addImage(bl_img);
  bl.scale = 5;

  

  invisline = createSprite(1060,300,5,700);
  invisline.visible = false;
  cars(); 
  cards();
  squares();
  plant();
  pea1Group = new Group();  
  zombieGroup = new Group();
}
function draw(){
  background(bground);
  //dragging();
 

  /*if(frameCount%600===0){
    var rand = Math.round(random(1,2));

    switch(rand) {
      case 1: background(bground);
              break;
      case 2: background(bground2);
              break;
      default: break;
    }
  }*/
  if(gameState === PLAY){
    spawnZombies();
    shoot();
    killZombies();

    /*if(keyDown("w")) {
      plant1.createPea();

  }*/
  //if(mousePressed)

  
  drawSprites();
}
}


function plant(){


  //character();
  plant1 = createSprite(400,140,20,20);
  plant1.addImage("plant1",plant1Img);
  plant1.scale = 0.15;

  plant2 = createSprite(400,230,20,20);
  plant2.addImage("plant1",plant1Img);
  plant2.scale = 0.15;

  plant3 = createSprite(400,340,20,20);
  plant3.addImage("plant1",plant1Img);
  plant3.scale = 0.15;

  plant4 = createSprite(400,440,20,20);
  plant4.addImage("plant1",plant1Img);
  plant4.scale = 0.15;
  
  plant5 = createSprite(400,550,20,20);
  plant5.addImage("plant1",plant1Img);
  plant5.scale = 0.15;

 

}
function cars(){

  car = createSprite(320,140,20,50);
  car.addImage(car_img);
  car.scale = 0.15;
  
  car2 = createSprite(320,240,20,50);
  car2.addImage(car_img);
  car2.scale = 0.15;
  
  car3 = createSprite(316,340,20,50);
  car3.addImage(car_img);
  car3.scale = 0.15;
  
  car4 = createSprite(315,440,20,50);
  car4.addImage(car_img);
  car4.scale = 0.15;
  
  car5 = createSprite(310,560,20,50);
  car5.addImage(car_img);
  car5.scale = 0.15;

}
function cards(){
  card1 = createSprite(100,60);
  card1.addImage(card1_img);

  card2 = createSprite(100,160);
  card2.addImage(card2_img);

  card3 = createSprite(100,260);
  card3.addImage(card3_img);

  card4 = createSprite(100,360);
  card4.addImage(card4_img);

}
function squares(){
  sq1 = createSprite(405,135,80,110);
  sq1.visible = false;
  sq2 = createSprite(480,135,80,110);
  sq2.visible = false;
  sq3 = createSprite(575,135,80,110);
  sq3.visible = false;
  sq4 = createSprite(665,135,80,110);
  sq4.visible = false;
  sq5 = createSprite(750,135,80,110);
  sq5.visible = false;
  sq6 = createSprite(840,135,80,110);
  sq6.visible = false;
  sq7 = createSprite(920,135,80,110);
  sq7.visible = false;
  sq8 = createSprite(1000,135,80,110);
  sq8.visible = false;
  sq9 = createSprite(405,250,80,110);
  sq9.visible = false;
  sq10 = createSprite(480,250,80,110);
  sq10.visible = false;

  sq11 = createSprite(575,250,80,110);
  sq11.visible = false;
  sq12 = createSprite(665,250,80,110);
  sq12.visible = false;
  sq13 = createSprite(750,250,80,110);
  sq13.visible = false;
  sq14 = createSprite(840,250,80,110);
  sq14.visible = false;
  sq15 = createSprite(920,250,80,110);
  sq15.visible = false;
  sq16 = createSprite(1000,250,80,110);
  sq16.visible = false;
  sq17 = createSprite(405,350,80,110);
  sq17.visible = false;
  sq18 = createSprite(480,350,80,110);
  sq18.visible = false;
  sq19 = createSprite(575,350,80,110);
  sq19.visible = false;
  sq20 = createSprite(665,350,80,110);
  sq20.visible = false;

  sq21 = createSprite(750,350,80,110);
  sq21.visible = false;
  sq22 = createSprite(840,350,80,110);
  sq22.visible = false;
  sq23 = createSprite(920,350,80,110);
  sq23.visible = false;
  sq24 = createSprite(1000,350,80,110);
  sq24.visible = false;
  sq25 = createSprite(405,470,80,110);
  sq25.visible = false;
  sq26 = createSprite(480,470,80,110);
  sq26.visible = false;
  sq27 = createSprite(575,470,80,110);
  sq27.visible = false;
  sq28 = createSprite(665,470,80,110);
  sq28.visible = false;
  sq29 = createSprite(750,470,80,110);
  sq29.visible = false;
  sq30 = createSprite(840,470,80,110);
  sq30.visible = false;

  sq31 = createSprite(920,470,80,110);
  sq31.visible = false;
  sq32 = createSprite(1000,470,80,110);
  sq32.visible = false;
  sq33 = createSprite(405,570,80,110);
  sq33.visible = false;
  sq34 = createSprite(480,570,80,110);
  sq34.visible = false;
  sq35 = createSprite(575,570,80,110);
  sq35.visible = false;
  sq36 = createSprite(665,570,80,110);
  sq36.visible = false;
  sq37 = createSprite(750,570,80,110);
  sq37.visible = false;
  sq38 = createSprite(840,570,80,110);
  sq38.visible = false;
  sq39 = createSprite(920,570,80,110);
  sq39.visible = false;
  sq40 = createSprite(1000,570,80,110);
  sq40.visible = false;
}
function createPea1(){
  if(frameCount%40===0){
  pea1 = createSprite(420,123,20,20);
  pea1.addImage(p1_img);
  pea1.scale = 0.3;
  //arrow.scale = 0.2;
  pea1.depth = plant1.depth;
  plant1.depth = plant1.depth+1;
  pea1.velocityX = 5;
  //pea1.y=bow.y
  pea1.lifetime = 200;
  pea1Group.add(pea1);
  }
}

function createPea2(){
  if(frameCount%40===0){
  pea1 = createSprite(420,210,20,20);
  pea1.addImage(p1_img);
  pea1.scale = 0.3;
  //arrow.scale = 0.2;
  pea1.depth = plant1.depth;
  plant1.depth = plant1.depth+1;
  pea1.velocityX = 5;
  //pea1.y=bow.y
  pea1.lifetime = 200;
  pea1Group.add(pea1);
  }
}

function createPea3(){
  if(frameCount%40===0){
  pea1 = createSprite(420,320,20,20);
  pea1.addImage(p1_img);
  pea1.scale = 0.3;
  //arrow.scale = 0.2;
  pea1.depth = plant1.depth;
  plant1.depth = plant1.depth+1;
  pea1.velocityX = 5;
  //pea1.y=bow.y
  pea1.lifetime = 200;
  pea1Group.add(pea1);
  }
}

function createPea4(){
  if(frameCount%40===0){
  pea1 = createSprite(420,420,20,20);
  pea1.addImage(p1_img);
  pea1.scale = 0.3;
  //arrow.scale = 0.2;
  pea1.depth = plant1.depth;
  plant1.depth = plant1.depth+1;
  pea1.velocityX = 5;
  //pea1.y=bow.y
  pea1.lifetime = 200;
  pea1Group.add(pea1);
  }
}

function createPea5(){
  if(frameCount%40===0){
  pea1 = createSprite(420,530,20,20);
  pea1.addImage(p1_img);
  pea1.scale = 0.3;
  //arrow.scale = 0.2;
  pea1.depth = plant1.depth;
  plant1.depth = plant1.depth+1;
  pea1.velocityX = 5;
  //pea1.y=bow.y
  pea1.lifetime = 200;
  pea1Group.add(pea1);
  }
}
function spawnZombies(){
  if(frameCount%85===0){
    zombie = createSprite(1350,650);
    zombie.addAnimation("animation",zombie_anime);
    zombie.y = Math.round(random(110,380))

    //bgSound.play();
    
    zombie.velocityX = -2;
    zombie.scale=0.75;
    zombie.lifetime = 1600;
    
    zombieGroup.add(zombie);//you had to add your sprite to the group
    
    
    
    }
}
function shoot(){


  if(keyCode===49){
   createPea1();
  }
  if(keyCode===50){
    createPea2();
   }
   if(keyCode===51){
    createPea3();
   }
   if(keyCode===52){
    createPea4();
   }
   if(keyCode===53){
    createPea5();
   }
}

function killZombies(){
  /*if(pea1Group.isTouching(zombieGroup)){
      zombieGroup.destroyEach();
  }*/
  if(zombieGroup.isTouching(pea1Group)){
    for(var i=0;i<zombieGroup.length;i=i+2){     
        
     if(zombieGroup[i].isTouching(pea1Group)){
          zombieGroup[i].destroy();
          pea1Group[i].destroy();
         
          } 
        
  }
}
}







