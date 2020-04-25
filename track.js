class Track{
    constructor(x,y){
        this.body = createSprite(x,y);
        this.imgUl = loadImage("images/trackUl.png");
        this.imgL = loadImage("images/trackL.png");
        this.state = 0;
    }
    display(){
        drawSprites();
        this.body.addImage(this.imgUl);
    }
    lock(){
        this.body.addImage(this.imgL);
        this.state = 1;
        // if(allSprites.body.x<this.body.x+10){
        //     allSprites.body.velocityX = 0;
        // }
    }
}