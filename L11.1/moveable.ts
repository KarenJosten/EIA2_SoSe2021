namespace BlumenwieseL11 {

    export abstract class Moveable {
        protected position: Vector;
        protected velocity: Vector;
        protected color: string;
        protected size: number;

        constructor(_position?: Vector) {
            let x: number = 1000 * Math.random() * 3;
            let y: number = 100;
            this.position = new Vector(x, y);

            //Geschwindigkeit und Richtung
            this.velocity = new Vector(1, 0);
    }

        public move(_timeslice: number): void {
            this.position.add(this.velocity);
    
            if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
            }

        public draw(): void {
            // console.log("Moveable move");
        }
    }
}