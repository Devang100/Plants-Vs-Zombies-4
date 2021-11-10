class Plant {
    constructor(){
  
    }
  
     character(){
        plant1 = createSprite(190,100,20,20);
        plant1.addImage("plant1",plant1Img);
        plant1.scale = 0.2;
      
        plant2 = createSprite(170,220,20,20);
        plant2.addImage("plant2",plant2Img);
        plant2.scale = 0.5;
      
        plant3 = createSprite(180,340,20,20);
        plant3.addImage("plant3",plant3Img);
        plant3.scale = 0.2;
      
        plant4 = createSprite(175,440,20,20);
        plant4.addImage("plant4",plant4Img);
        plant4.scale = 0.2;
      
        plant5 = createSprite(170,560,20,20);
        plant5.addImage("plant1",plant5Img);
        plant5.scale = 0.18;

        drawSprites();
      
      }
  
    
      
    
}