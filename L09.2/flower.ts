namespace BlumenwieseL09 {

    export class Flower { //damit blumenwiese09 darauf zureifen kann muss man die Datei exportieren
        color: string;
        yellowcolor: string;
        position: Vector;
        size: number;
        velocity: Vector;

        constructor() {
            let x: number = 1000 * Math.random();
            let y: number = 300 * Math.random() + 920 * golden;
            this.position = new Vector(x, y);

            this.color = this.getRandomColor();
            this.yellowcolor = this.getRandomYellowColor();

            //Geschwindigkeit und Richtung
            let a: number = - Math.random() * 2;
            this.velocity = new Vector(a, 0);

            this.size = 10;
    }

        move(_timeslice: number): void {
            this.position.add(this.velocity);

            if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
            if (this.position.y > 900)
            this.position.y -= 500 * golden;
    }

        drawFlower(): void {
        
                crc2.beginPath();
                crc2.rect(this.position.x, this.position.y, 5, 50); 
                crc2.fillStyle = "#487047";
                crc2.fill();
                crc2.closePath();
        
                crc2.beginPath();
                crc2.arc(this.position.x + 14, this.position.y + 32, 8, 0, 1 * Math.PI); 
                crc2.arc(this.position.x - 7, this.position.y + 22, 10, 0, 1 * Math.PI); 
                crc2.fillStyle = "#487047";
                crc2.fill();
                crc2.closePath();
        
                //colorful flowers
                crc2.beginPath();
                crc2.arc(this.position.x + 10, this.position.y, this.size, 0, 2 * Math.PI);
                crc2.arc(this.position.x, this.position.y + 10, this.size, 0, 2 * Math.PI);
                crc2.arc(this.position.x - 10, this.position.y, this.size, 0, 2 * Math.PI);
                crc2.arc(this.position.x, this.position.y - 10, this.size, 0, 2 * Math.PI);
                
                crc2.fillStyle = this.color;
                crc2.fill();
            
                crc2.closePath();
        
                crc2.beginPath();
                crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
                crc2.fillStyle = this.yellowcolor;
                crc2.fill();
                crc2.closePath();
    }

        getRandomColor(): string {
            let color: string[] = ["#f9d5e5", "#eeac99", "#e06377", "#c83349", "#d6d4e0", "#600307", "#b90b21", "#d71536", "#e5174d", "#FFFFE0"];
            let randomColor: string = color[Math.floor(Math.random() * color.length)];

            return randomColor;
        }

        getRandomYellowColor(): string {
            let yellowcolor: string[] = ["#FFFFCC", "#FFFF99", "#F0E68C", "#ffbc40", "#f0c265", "#e2a323", "#ffbc40"];
            let randomYellowColor: string = yellowcolor[Math.floor(Math.random() * yellowcolor.length)];

            return randomYellowColor;
        }
    }
}