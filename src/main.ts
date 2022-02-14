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
    let xPos1 = screen.width/4;
    let xPos2 = xPos1+xPos1;
    let xPos3 = xPos2+xPos1;
    let secondsRad = 300;
    let minRad = 300;
    let hrRad = 300;
    let color = 0;
    let hrCtr = 1;
    let secCrt = 1; 
    let minCrt = 1;
    let secBool = true; 
    let minBool = true; 
    let hrBool = true; 
    while(secBool){
        let circle = new PIXI.Graphics();
        circle.beginFill(colorArr[color]);
        if (color > colorArr.length-1){
            color = 0 ;
        }
        else{
            color+=1;
        }
        circle.drawCircle(xPos3,yPos,secondsRad);
        app.stage.addChild(circle);
        secondsRad -=5;
        secCrt +=1;
        if (secCrt > seconds){
            break;
        }
    }

    while(minBool){
        let circle = new PIXI.Graphics();
        circle.beginFill(colorArr[color]);
        if (color > colorArr.length-1){
            color = 0 ;
        }
        else{
            color+=1;
        }
        circle.drawCircle(xPos2,yPos,minRad);
        app.stage.addChild(circle);
        minRad -=5;
        console.log(minutes);
        minCrt+=1;

        if (minCrt > minutes){
            break;
        }

    }

    while (hrBool) {
        let circle = new PIXI.Graphics();
        circle.beginFill(colorArr[color]);
        if (color > colorArr.length-1){
            color = 0 
        }
        else{
            color+=1
        }
        circle.drawCircle(xPos1,yPos,hrRad);
        app.stage.addChild(circle);
        hrRad -=20;
        console.log(hours);
        hrCtr+=1;

        if (hrCtr > hours){
            break
        }
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

