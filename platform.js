class Platform{
    constructor(x,y,dir){
        this.body = createSprite(x,y,600,60);
        // this.img = loadImage("images/station.png");
        if(dir == "UP"){
            this.img = loadImage("images/stationU.png");
        }else if(dir === "DOWN"){
            this.img = loadImage("images/stationD.png");
        }
    }
    display(){
        drawSprites();
        this.body.addImage(this.img);
    }
}