import * as PIXI from 'pixi.js'



let graphics: PIXI.Graphics;


const load = (app: PIXI.Application) => {
    return new Promise<void>((resolve) => {
        app.loader.add('assets/hello-world.png').load(() => {
            resolve();
        });
    });
};

const main = async () => {
    // Actual app
    let app = new PIXI.Application({antialias: true, backgroundColor: 0xE6C99D});

    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);

    // Load assets
    await load(app);

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds(); 

    let colorArr = [0x92aac7, 0xed5752, 0xa1be95, 0xe2dfa2];
    let yPos = screen.height/2;
    let xPos1 = screen.width/5;
    let xPos2 = xPos1+xPos1;
    let xPos3 = xPos2+xPos1;
    let secondsRad = 100;
    let minRad = 100;
    let hrRad = 100;
    let color = 0;

    if (seconds%1 == 0){
        let circle = new PIXI.Graphics();
        circle.beginFill(colorArr[color]);
        if (color > colorArr.length-1){
            color = 0 
        }
        else{
            color+=1
        }
        circle.drawCircle(600,yPos,secondsRad);
        app.stage.addChild(circle);
        secondsRad -=3;
    }

    if (hours%1 == 0){
        let circle = new PIXI.Graphics();
        circle.beginFill(colorArr[color]);
        if (color > colorArr.length-1){
            color = 0 
        }
        else{
            color+=1
        }
        circle.drawCircle(xPos2,yPos,hrRad);
        app.stage.addChild(circle);
        secondsRad -=3;
        console.log(seconds);

    }

    if (minutes%1 == 0){
        let circle = new PIXI.Graphics();
        circle.beginFill(colorArr[color]);
        if (color > colorArr.length-1){
            color = 0 
        }
        else{
            color+=1
        }
        circle.drawCircle(xPos1,yPos,minRad);
        app.stage.addChild(circle);
        minRad -=3;
        console.log(seconds);
    }



    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        // sprite.x = window.innerWidth / 2 - sprite.width / 2;
        // sprite.y = window.innerHeight / 2 - sprite.height / 2;
    });

    document.body.appendChild(app.view);


};

// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.


main();

