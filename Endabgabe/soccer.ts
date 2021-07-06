namespace Soccer {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    //let players: Player[] = [];
    let moveables: Moveable[] = [];

   /*  interface VectorMain {
        x: number;
        y: number;
    } */

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        
        drawBackground();
        drawGate();
        drawLines();

        let background: ImageData = crc2.getImageData(0, 0, 1000, 900);

        createReferee(1);
        createLinesman(2);

        window.setInterval(update, 20, background);

    }
  

    function createReferee(nReferee: number): void {
        for (let i: number = 0; i < nReferee; i++) {
            let referee: Referee = new Referee(); //Name der Subklasse, neuer Rerefee wird erstellt
            moveables.push(referee); //wird in das players array gepusht
        }
    }

    function createLinesman(_nLinesman: number): void {
        for (let i:  number = 0; i < _nLinesman; i++) {
            let linesman: Linesman = new Linesman();
            moveables.push(linesman);
        }
    }

    function drawBackground(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(1, "#4c8527");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        crc2.fillStyle = "RGBA(62,90,44,0.5)";
        crc2.beginPath();
        crc2.rect(25, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(125, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(225, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(325, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(425, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(525, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(625, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(725, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(825, 0, 50, 600);
        crc2.fill();
        crc2.closePath();
    }

    function drawGate(): void {

        //first gate
        crc2.beginPath();
        crc2.moveTo(0, 230);
        crc2.lineTo(60, 230);
        crc2.lineTo(60, 370);
        crc2.lineTo(0, 370);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        crc2.stroke();

        //second gate
        crc2.beginPath();
        crc2.moveTo(900, 230);
        crc2.lineTo(840, 230);
        crc2.lineTo(840, 370);
        crc2.lineTo(900, 370);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        crc2.stroke();
    } 

    function drawLines(): void {

        //Linie mitte
        crc2.beginPath();
        crc2.moveTo(450, 0);
        crc2.lineTo(450, 600);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        crc2.stroke();

        //Kreis mitte
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.arc(450, 300, 100, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();

        //Rect gate right
        crc2.beginPath();
        crc2.moveTo(900, 140);
        crc2.lineTo(750, 140);
        crc2.lineTo(750, 460);
        crc2.lineTo(900, 460);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        crc2.stroke();
        
        //Rect gate left
        crc2.beginPath();
        crc2.moveTo(0, 140);
        crc2.lineTo(150, 140);
        crc2.lineTo(150, 460);
        crc2.lineTo(0, 460);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        crc2.stroke();

        //Punkt left
        crc2.beginPath();
        crc2.arc(100, 300, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        //Punkt mitte
        crc2.beginPath();
        crc2.arc(450, 300, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        //Punkt rechts
        crc2.beginPath();
        crc2.arc(800, 300, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();

        //Halbkreis
        crc2.beginPath();
        crc2.arc(130, 300, 60, 5.05, 2.39 *  Math.PI); 
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        //Halbkreis rechts
        crc2.beginPath();
        crc2.arc(770, 300, 60, 1.9, 1.39 *  Math.PI); 
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
    }

    function update(_background: ImageData): void {
        console.log("update");
        crc2.putImageData(_background, 0, 0);

        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1);
        }
    }
}