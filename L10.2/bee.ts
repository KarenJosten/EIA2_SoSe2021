namespace BlumenwieseL10 {

    export class Bee { //damit blumenwiese09 darauf zureifen kann muss man die Datei exportieren
        color: string;
        colortwo: string;
        colorwings: string;
        position: Vector;
        size: number;
        velocity: Vector;

        constructor() {
            let x: number = 900;
            let y: number = 520;
            this.position = new Vector(x, y);

            this.color = "yellow";
            this.colortwo = "black";
            this.colorwings = "rgba(255, 255, 255, 0.5)";

            let a: number = - Math.random() * 3;
            let b: number = Math.random() * 3;
            this.velocity = new Vector(a, b);

            this.size = 15;
    }
        move(_timeslice: number): void {
        this.position.add(this.velocity);

        //ohne Kollision
        /* if (this.position.x < 0)
        this.position.x += crc2.canvas.width;
        if (this.position.y > 900)
        this.position.y -= crc2.canvas.height;
        } */
        //mit Kollision
        if (this.position.x + this.size > 1000 || this.position.x - this.size < 0) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.y + this.size > 900 || this.position.y - this.size < 0) {
            this.velocity.y = -this.velocity.y;
        }
    }

        drawBee(): void { 

        //first wing
        crc2.beginPath();
        crc2.arc(this.position.x - 5, this.position.y - 15, this.size, 1, 1 * Math.PI); 
        crc2.fillStyle = this.colorwings;
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.ellipse(this.position.x, this.position.y, 8, 16, 1, 20, 40);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.closePath();

        //middle line
        crc2.beginPath();
        crc2.ellipse(this.position.x, this.position.y, 8, 3, 1, 20, 40);
        crc2.fillStyle = this.colortwo;
        crc2.fill();
        crc2.closePath();

        //middle line right
        crc2.beginPath();
        crc2.ellipse(this.position.x + 8, this.position.y - 5, 6, 2, 1, 20, 40);
        crc2.fillStyle = this.colortwo;
        crc2.fill();
        crc2.closePath();

         //middle line left
        crc2.beginPath();
        crc2.ellipse(this.position.x - 8, this.position.y + 5, 6, 2, 1, 20, 40);
        crc2.fillStyle = this.colortwo;
        crc2.fill();
        crc2.closePath();

        //second wing
        crc2.beginPath();
        crc2.arc(this.position.x + 15, this.position.y - 2, this.size, 1, 1 * Math.PI); 
        crc2.fillStyle = this.colorwings;
        crc2.fill();
        crc2.closePath();

        }
    }
}