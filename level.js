class Level{
    constructor(){
        this.xp = 0;
        this.level = 0;
        this.xpLimit = 1000;
    }
    display(){
        fill("red");
        textSize(18);
        text("XP : "+this.xp,50,50);
        text("Level : "+this.level,50,100);
        console.log(this.xp);
        if(this.xp >= this.xpLimit){
            this.levelUp()
        }
        noFill()
        stroke("blue");
        strokeWeight(5);
        arc(50,50,50,50,-PI/2,this.xp/this.xpLimit*360);
    }
    levelUp(){
        this.level+=1;
        this.xp=0;
        this.xpLimit+=500;
    }
    updateXp(score){
        this.xp+=Math.round(score*3/4);
    }
}