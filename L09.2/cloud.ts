namespace BlumenwieseL09 {

    export class Cloud { //damit blumenwiese09 darauf zureifen kann muss man die Datei exportieren
        color: string;
        position: Vector;
        size: number;
        velocity: Vector;

        constructor() {
            let x: number = 1000 * Math.random() * 3;
            let y: number = 100;
            this.position = new Vector(x, y);

            //Geschwindigkeit und Richtung
            this.velocity = new Vector(1, 0);
            this.color = "white";

            this.size = 50;
    }

    move(_timeslice: number): void {
        this.position.add(this.velocity);

        if (this.position.x > crc2.canvas.width)
        this.position.x -= crc2.canvas.width;

        }


        drawCloud(): void {

        crc2.fillStyle = this.color;
        crc2.beginPath();
        crc2.arc(this.position.x + 50, this.position.y, this.size, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x + 130, this.position.y, this.size, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x + 210, this.position.y + 50, this.size, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x + 80, this.position.y + 80, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
}
}