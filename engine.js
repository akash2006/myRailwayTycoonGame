class Engine{
   constructor(x,y,dir){
        this.dir = dir;
       this.acceleration = 0;
       this.body = createSprite(x,y);
       if(this.dir === "UP"){
               this.img = loadImage("images/engine"+Math.round(random(1,4))+"U.png");
          }else if(this.dir === "DOWN"){
               this.img = loadImage("images/engine"+Math.round(random(1,4))+"D.png");
          }       
       console.log(this.body.x);
   }
   display(){
       drawSprites();
       this.body.addImage(this.img);
       
   }
   move(){
          if(this.dir === "UP"){
               this.body.velocityX=this.acceleration;    
          }else if(this.dir === "DOWN"){
               this.body.velocityX=-this.acceleration;   
          }
          // if(this.body.x<-410){
          //      this.body = new Engine(displayWidth+100,displayHeight/2+150,"UP")
          //      carriage1.reset();
          //      carriage2.reset();
          // } 
     }
   stop(){           
        this.acceleration+= -this.acceleration*0.1;      
     }
}