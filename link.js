class Link{
    constructor(bodyA,bodyB,dir){
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.dir = dir;
        if(this.dir === "UP"){
            bodyB.body.x = bodyA.body.x+bodyA.body.width/2+10+bodyB.body.width/2;
            // bodyB.body.y = bodyA.body.y;
        }else if(this.dir === "DOWN"){
            bodyB.body.x = bodyA.body.x-bodyA.body.width/2-10-bodyB.body.width/2;
            
        }
        bodyB.body.y = bodyA.body.y;
    }
    display(){
        stroke(0);
        strokeWeight(8);
        if(this.dir === "UP"){
            line(this.bodyA.body.x+this.bodyA.body.width/2,this.bodyA.body.y,this.bodyB.body.x-this.bodyB.body.width/2,this.bodyB.body.y);
        }else if(this.dir === "DOWN"){
            line(this.bodyA.body.x-this.bodyA.body.width/2,this.bodyA.body.y,this.bodyB.body.x+this.bodyB.body.width/2,this.bodyB.body.y);

        }
    }
}