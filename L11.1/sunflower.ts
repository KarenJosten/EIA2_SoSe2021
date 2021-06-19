namespace BlumenwieseL11 {
    export class SunFlower extends Flower { //damit blumenwiese09 darauf zureifen kann muss man die Datei exportieren
        color: string;
        colorNectar: string;
        position: Vector;
        size: number;

        constructor(_size?: number, _position?: Vector) {
            super(_position);
            let x: number = 1000 * Math.random();
            let y: number = 150 * Math.random() + 800 * golden;
            this.position = new Vector(x, y);

            this.size = 5;
            this.color = "yellow";
            //this.colorNectar = "RGB(255,127,80)";
            this.colorNectar = "white";

    }

    public draw(): void {    

        crc2.beginPath();
        crc2.rect(this.position.x, this.position.y, 5, 80); 
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        
        crc2.arc(this.position.x + 14, this.position.y + 40, 8, 0, 1 * Math.PI); 
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        //petals
        crc2.fillStyle = this.color;
        crc2.beginPath();
        crc2.ellipse(this.position.x, this.position.y + 10, this.size, 10, 0, 20, 40);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.ellipse(this.position.x + 10, this.position.y + 5, this.size, 10, 2, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(this.position.x + 10, this.position.y - 8, this.size, 10, 1, 20, 40);
        crc2.fill();
        crc2.closePath();
      
        crc2.beginPath();
        crc2.ellipse(this.position.x - 11, this.position.y - 5, this.size, 10, 5, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(this.position.x - 10, this.position.y + 6, this.size, 10, 7, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(this.position.x - 2, this.position.y - 11, this.size, 10, 0, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 9, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();

        //Nektar
        crc2.beginPath();
        crc2.font = "18px Arial";
        crc2.fillStyle = this.colorNectar;
        crc2.fillText("Nectar sunflower: ", 60, 350, 200);
        //crc2.fillRect(this.position.x + 20, this.position.y + 20, 8, 0 - this.nectarLiter);
        crc2.fillRect(230, 350, 8, 0 - this.nectarLiterSunflower);
        crc2.closePath();

        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 0.5;
        crc2.moveTo(230, 350);
        crc2.lineTo(238, 350);
        crc2.lineTo(238, 299);
        crc2.lineTo(230, 299);
        crc2.lineTo(230, 350);
        crc2.stroke();
        crc2.closePath();
        } 
    }
}
