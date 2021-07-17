namespace Soccer {
    export class Referee extends Moveable {
        public velocity: Vector;
        protected color: string;

        constructor(_position?: Vector) {
            super(_position);
            this.color = "#ff748c";
    }

    public move(_timeslice: number): void {
        this.position.add(this.velocity);

        //Kollision
        if (this.position.x + 10 > 900 || this.position.x - 10 < 0) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.y + 10 > 650 || this.position.y - 10 < 0) {
            this.velocity.y = -this.velocity.y;
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
