namespace BlumenwieseL11 {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    let flowers: Flower[] = [];
    let moveables: Moveable[] = [];

    interface VectorMain {
        x: number;
        y: number;
    }

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        let horizon: number = crc2.canvas.height * golden;
        let posMountains: VectorMain = { x: 0, y: horizon };
        
        drawBackground();
        drawSun({ x: 800, y: 250 });
        drawMountains(posMountains, 75, 200, "#8c8c8c", "white");
        drawMountains(posMountains, 50, 150, "#8c8c8c", "lightgrey");
        drawFence({ x: 0, y: 500});
        drawField();
        drawTree({x: 280, y: 480});
        drawBeeHouse({x: 850, y: 500});

        let background: ImageData = crc2.getImageData(0, 0, 1000, 900);

        createSunflower(5);
        createFlower(20);
        createClouds();
        createBee(20);

        window.setInterval(update, 20, background);

    }

    function drawBeeHouse(_position: VectorMain): void {
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x, _position.y, 100, 80); 
        crc2.fillStyle = "#664229";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 30, _position.y + 20, 10, 0, 2 * Math.PI);
        crc2.fillStyle = ("#D2B48C");
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 50, _position.y + 20, 10, 0, 2 * Math.PI);
        crc2.fillStyle = ("#D2B48C");
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 70, _position.y + 20, 10, 0, 2 * Math.PI);
        crc2.fillStyle = ("#D2B48C");
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 70, _position.y + 40, 10, 0, 2 * Math.PI);
        crc2.fillStyle = ("#D2B48C");
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 50, _position.y + 40, 10, 0, 2 * Math.PI);
        crc2.fillStyle = ("#D2B48C");
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 30, _position.y + 40, 10, 0, 2 * Math.PI);
        crc2.fillStyle = ("#D2B48C");
        crc2.fill();
        crc2.closePath();

        //Dach
        crc2.beginPath();
        crc2.moveTo(850, 500);
        crc2.lineTo(950, 500);
        crc2.lineTo(900, 460);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.strokeStyle = "black";

        crc2.stroke();


    }

    function drawTree(_position: VectorMain): void {

        //first tree
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x, _position.y, 20, 100); 
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(220, 500);
        crc2.lineTo(360, 500);
        crc2.lineTo(290, 400);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.strokeStyle = "RGB(85,107,47)";

        crc2.stroke();

        crc2.moveTo(230, 440);
        crc2.lineTo(350, 440);
        crc2.lineTo(290, 330);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.stroke();
        crc2.restore();
        crc2.closePath();

        //second tree ------ nicht mehr wie im Activity Diagram
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x + 200, _position.y - 20, 20, 120); 
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(_position.x + 210, _position.y + 30);
        crc2.lineTo(_position.x + 250, _position.y - 30);
        crc2.lineWidth = 10;
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.strokeStyle = "RGB(94,47,0)";
        crc2.stroke();
        crc2.closePath();

        crc2.fillStyle = "#487047";
        crc2.beginPath();
        crc2.arc(_position.x + 150, _position.y - 100, 45, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 200, _position.y - 50, 40, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 250, _position.y - 60, 40, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 220, _position.y - 150, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 200, _position.y - 100, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
     
         //third tree
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x + 400, _position.y, 20, 100); 
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();
 
        crc2.beginPath();
        crc2.moveTo(620, 500);
        crc2.lineTo(760, 500);
        crc2.lineTo(690, 400);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.strokeStyle = "RGB(85,107,47)";
        crc2.stroke();
 
        crc2.moveTo(630, 440);
        crc2.lineTo(750, 440);
        crc2.lineTo(690, 330);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.stroke();
        crc2.restore();
        crc2.closePath();  
    }

    function createFlower(nFlower: number): void {
        for (let i: number = 0; i < nFlower; i++) {
            let smallflower: SmallFlower = new SmallFlower(); //Name der Subklasse, neue Blume wird erstellt
            flowers.push(smallflower); //wird in das flowers array gepusht
        }
    }

    function createSunflower(_nSunflower: number): void {
        for (let i:  number = 0; i < _nSunflower; i++) {
            let sunflower: SunFlower = new SunFlower();
            flowers.push(sunflower);
        }
    }

    function createBee(_nBees: number): void {
        for (let i: number = 0; i < _nBees; i++) {
        let bee: Bee = new Bee();
        moveables.push(bee);
        }
    }

    function createClouds(): void {
        let cloud: Cloud = new Cloud();
        moveables.push(cloud);
    }

    function drawBackground(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "RGB(176,196,222)");
        gradient.addColorStop(golden, "RGB(255,127,80)");
        gradient.addColorStop(1, "HSL(100, 100%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawField(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 100, 1000);
        gradient.addColorStop(0, "RGB(189,183,107)");
        gradient.addColorStop(1, "RGB(85,107,47)");
        crc2.beginPath();
        crc2.moveTo(0, 550);
        crc2.lineTo(1000, 550);
        crc2.lineTo(1000, 1000);
        crc2.lineTo(0, 1000);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.strokeStyle = "grey";
        crc2.stroke();
        crc2.closePath();

        crc2.stroke();
    } 

    function drawSun(_position: VectorMain): void {
        let r1: number = 90;
        let r2: number = 200;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(30, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(20, 60%, 70%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawMountains(_position: VectorMain, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }

    function drawFence(_position: VectorMain): void {
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x, _position.y + 10, 1000, 5); 
        crc2.rect(_position.x, _position.y + 30, 1000, 5);
        crc2.rect(_position.x + 50, _position.y, 5, 50); 
        crc2.rect(_position.x + 150, _position.y, 5, 50); 
        crc2.rect(_position.x + 250, _position.y, 5, 50); 
        crc2.rect(_position.x + 350, _position.y, 5, 50); 
        crc2.rect(_position.x + 450, _position.y, 5, 50); 
        crc2.rect(_position.x + 550, _position.y, 5, 50); 
        crc2.rect(_position.x + 650, _position.y, 5, 50); 
        crc2.rect(_position.x + 750, _position.y, 5, 50); 
        crc2.rect(_position.x + 850, _position.y, 5, 50); 
        crc2.rect(_position.x + 950, _position.y, 5, 50); 
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();
    }

    function update(_background: ImageData): void {
        console.log("update");
        crc2.putImageData(_background, 0, 0);

        for (let flower of flowers) {
            flower.fillNectar();
            flower.draw();
        }

        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1 / 50);
        }

    }
}