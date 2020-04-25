class Signal{
    constructor(x,y,dir){
        this.dir = dir;
        this.body = createSprite(x,y);
        this.img = loadImage("images/signLightR.png");
        this.state = "R";
        this.body.scale = 0.75;
    }
    display(){
        drawSprites();
        this.body.addImage(this.img);
        if(mousePressedOver(this.body)){
            this.change();
        }

    }
    change(){
        if(this.state === "R"){
            this.img = loadImage("images/signLightG.png");
            this.state = "G";
        }else{
            this.img = loadImage("images/signLightR.png")
            this.state = "R";
        }
    }    
}