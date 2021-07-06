namespace Soccer {
    export class Referee extends Moveable { 
        color: string;
        position: Vector;
        size: number;
        velocity: Vector;

        constructor(_size?: number, _position?: Vector) {
            super(_position);
            let x: number = 900 * Math.random();
            let y: number = 400 * Math.random();
            let a: number = - Math.random();
            let b: number = Math.random();
            this.position = new Vector(x, y);
            this.size = 10;
            this.color = "#ff748c";

            if (_position) 
            this.position = _position;
            else
            this.position = new Vector(x, y);
            this.velocity = new Vector(a, b);
    }
    public move(_timeslice: number): void {
        this.position.add(this.velocity);

        //mit Kollision
        if (this.position.x + this.size > 900 || this.position.x - this.size < 0) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.y + this.size > 600 || this.position.y - this.size < 0) {
            this.velocity.y = -this.velocity.y;
        }
    }

    public draw(): void {   
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.closePath();
        } 
    }
}
