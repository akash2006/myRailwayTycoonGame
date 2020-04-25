class Carriage{
    constructor(x,y){
        this.state = 0;
        this.body = createSprite(x,y);
        this.img = loadImage("images/carriage"+Math.round(random(1,3))+".png");
        this.coins = Math.round(random(50,500))
    }
    display(){
        drawSprites();
        this.body.addImage(this.img);
        var act;
       if(mousePressedOver(this.body) && this.body.x>535 && this.body.x <840 && this.state === 0){
            // act = new actionForm(this.body);
            // act.display();
            cash.play();
            coinsLimit+=Math.round(random(50,500));           
            if(this.coins!==0){
                this.coins-=1
              }
                 
              
            this.state = 1;
           level.updateXp(this.coins);
           loop();  
        }
        // console.log(this.body.velocityX);
    }
    reset(){
        this.state = 0;
    }
}