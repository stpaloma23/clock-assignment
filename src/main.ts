import * as PIXI from "pixi.js";
import { Container } from "pixi.js";

const main = async () => {
    const app = new PIXI.Application(); 
    document.body.appendChild(app.view);
  
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';
    app.renderer.resize(window.innerWidth, window.innerHeight);

    let container = new PIXI.Container();
    app.stage.addChild(container) ;
    
    let rect = new PIXI.Graphics();
    rect.beginFill(0xE6C99D);
    rect.drawRect(0,0,screen.width,screen.height);
    app.stage.addChild(rect);

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds(); 

    let secondsContainer = new Container();
    let minutesContainer = new Container(); 
    let hoursContainer = new Container();

    let colorArr = [0x92aac7, 0xed5752, 0xa1be95, 0xe2dfa2];
    let yPos = screen.height/2;
    let xPos1 = screen.width/5;
    let xPos2 = xPos1+xPos1;
    let xPos3 = xPos2+xPos1;
    let secondsRad = 100;
    let minRad = 100;
    let hrRad = 100;
    let color = 0;
   

    app.stage.addChild(secondsContainer);
    app.stage.addChild(minutesContainer);
    app.stage.addChild(hoursContainer);

 

    while (seconds < 59){
        let circle = new PIXI.Graphics();
        circle.beginFill(colorArr[color]);
        if (color > colorArr.length-1){
            color = 0 
        }
        else{
            color+=1
        }
        circle.drawCircle(xPos1,yPos,secondsRad);
        app.stage.addChild(circle);
        secondsRad -=3;
    }
   
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        container.x = window.innerWidth/2;
        container.y = window.innerHeight/2;
    });
  
    document.body.appendChild(app.view);
}
main();
