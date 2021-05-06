namespace Canvas {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", start);

    let crc2: CanvasRenderingContext2D;

    function start(_event: Event): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    crc2 = canvas.getContext("2d")!;

    drawCircles({x: 10, y: 600});
    drawCirclesTwo({x: 10, y: 600});
    drawTriangles();

    crc2.save();
    crc2.translate(800, 300);
    crc2.rotate(Math.PI * 90 / 180);
    crc2.restore();

    drawCircle({x: 300, y: 300});
    forms();
    text({x: 160, y: 15});
    }

    //random Kreise
    function drawCircles(_position: Vector): void {
        
        let circles: number = 100;
        let particle: Path2D = new Path2D();

        let red: number = Math.floor(Math.random() * 255);
        let green: number = Math.floor(Math.random() * 255);
        let blue: number = Math.floor(Math.random() * 255);

        particle.arc(_position.x * Math.random(), _position.y * Math.random(), 50 * Math.random(), 0, 2 * Math.PI);

        crc2.save();
        crc2.translate(_position.x * Math.random(), _position.y * Math.random());
        crc2.strokeStyle = "#f3bda1";
        crc2.stroke();
        crc2.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + 0.2 + ")";
        crc2.fill();
        crc2.shadowColor = "#4a503d";
        crc2.shadowBlur = 10;

        for (let draw: number = 0; draw < circles; draw++) {
            crc2.save();
            let x: number = Math.random() * 600;
            let y: number = - (Math.random() * 800);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }  

    //random Kreise
    function drawCirclesTwo(_position: Vector): void {
        
        let circles: number = 100;
        let particle: Path2D = new Path2D();

        let red: number = Math.floor(Math.random() * 255);
        let green: number = Math.floor(Math.random() * 255);
        let blue: number = Math.floor(Math.random() * 255);

        particle.arc(_position.x * Math.random(), _position.y * Math.random(), 50 * Math.random(), 0, 2 * Math.PI);

        crc2.save();
        crc2.translate(_position.x * Math.random(), _position.y * Math.random());
        crc2.strokeStyle = "#f3bda1";
        crc2.stroke();
        crc2.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + 0.3 + ")";
        crc2.fill();
        crc2.shadowColor = "#4a503d";
        crc2.shadowBlur = 10;

        for (let draw: number = 0; draw < circles; draw++) {
            crc2.save();
            let x: number = Math.random() * 600;
            let y: number = - (Math.random() * 800);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }  
  
    //random Dreiecke
    function drawTriangles(): void {

        let red: number = Math.floor(Math.random() * 255);
        let green: number = Math.floor(Math.random() * 255);
        let blue: number = Math.floor(Math.random() * 255);
       
        for (let i: number = 0; i < 8; i++) {

            crc2.beginPath();
            
            crc2.moveTo(Math.floor(Math.random() * 600 + 1), Math.floor(Math.random() * 600 + 1));
            crc2.lineTo(Math.floor(Math.random() * 600 + 1), Math.floor(Math.random() * 600 + 1));
            crc2.lineTo(Math.floor(Math.random() * 600 + 1), Math.floor(Math.random() * 600 + 1));
            crc2.closePath();

            crc2.fillStyle = "rgba(" + red + ", " + green + "," + blue + "," + 0.1 + ")";
            crc2.fill();
        }
    }

    function forms(): void {

        //Rechteck
        crc2.beginPath();
        crc2.moveTo(100, 76);
        crc2.lineTo(100, 524);
        crc2.lineTo(500, 524);
        crc2.lineTo(500, 76);
        crc2.strokeStyle = "#faf2da";
        crc2.stroke();
        crc2.closePath();

        crc2.stroke();

        //Achteck
        crc2.beginPath();
        crc2.moveTo(100, 76);
        crc2.lineTo(0, 300);
        crc2.lineTo(100, 524);
        crc2.lineTo(300, 600);
        crc2.lineTo(500, 524);
        crc2.lineTo(600, 300);
        crc2.lineTo(500, 76);
        crc2.lineTo(300, 0);
        crc2.strokeStyle = "#faf2da";
        crc2.stroke();
        crc2.closePath();

        crc2.stroke();
    }
    //Text
    function text(_position: Vector): void {
        crc2.font = "25px Arial";
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "black";
        crc2.strokeText("Click Button to refresh!", 10, 50);
        crc2.strokeStyle = "faf2da";
        crc2.closePath();
    }
    //Großer Kreis Mndala
    function drawCircle(_position: Vector): void {

        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 300, 0, 2 * Math.PI);
        crc2.strokeStyle = "#faf2da";
        crc2.stroke();
    }
}