namespace Minisoccer {
    export class Linesman extends Moveable { 
        public velocity: Vector;
        public position: Vector;
        protected color: string;

        constructor(_position?: Vector) {
            super(_position); 
            let x: number = 900 * Math.random();
            let y: number = 640;
            let a: number = - 0.5;
            let b: number = 0;
            this.position = new Vector(x, y);
            this.velocity = new Vector(a, b);
            this.color = "yellow";
    }

    public move(_timeslice: number): void {
        //add velocity to this.position
        this.position.add(this.velocity);

        //collision
        if (this.position.x + 10 > 900 || this.position.x - 10 < 0) {
            this.velocity.x = -this.velocity.x;
        }
    }

    public draw(): void {    
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.closePath();
        } 
    }
}