namespace BlumenwieseL10 {

    export class Flower extends Flowers { //damit blumenwiese09 darauf zureifen kann muss man die Datei exportieren
        color: string;
        yellowcolor: string;
        position: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            super(_position);

            let x: number = 1000 * Math.random();
            let y: number = 300 * Math.random() + 920 * golden;
            this.position = new Vector(x, y);

            if (_position)
                this.position = _position;
            else
            this.position = new Vector(this.x, this.y);

            this.size = _size;
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