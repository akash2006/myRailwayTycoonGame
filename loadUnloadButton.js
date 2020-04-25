class actionForm{
        constructor(body){
                this.state = "unload";
                this.actButton = createSprite(body.x,body.y-30,40,20);
                // this.unlButton = createSprite(body.x-20,body.y-30,40,20);
                // this.shapeColor = "red";
                // if(this.state === "unload"){
                //         this.actButton.shapeColor = "red";
                // }else if(this.state === "load"){
                //         this.actButton.shapeColor = "green";
                // }                
        }
        display(){
                drawSprites();
                if(this.state === "unload"){
                        this.actButton.shapeColor = "red";
                }else if(this.state === "load"){
                        this.actButton.shapeColor = "green";
                }
                if(mousePressedOver(this.actButton) && this.state === "unload"){
                        // if(this.state === "unload"){
                                console.log("unload");
                                this.state = "load";
                        // }else
                        //  if(this.state === "load"){
                        //         console.log("loaded");
                        //         this.state === "unload";
                        // }
                }
        }
        // mouseClicked(){
        //         if(this.shapeColor === "red"){
        //                 this.shapeCOlor = "green";
        //         }
        // }
}