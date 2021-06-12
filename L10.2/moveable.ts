namespace BlumenwieseL10 {

    export class Moveable {
        position: Vector;
        velocity: Vector;
        color: string;
        size: number;

        constructor(_position?: Vector) {
            let x: number = 1000 * Math.random() * 3;
            let y: number = 100;
            this.position = new Vector(x, y);

            //Geschwindigkeit und Richtung
            this.velocity = new Vector(1, 0);     
    }

        move(_timeslice: number): void {
            this.position.add(this.velocity);
    
            if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
            }

        draw(): void {
            // console.log("Moveable move");
        }
    }
}