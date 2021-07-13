namespace Soccer {
    export class Ball extends Moveable { 
        static position: Vector;
        protected color: string;
        protected velocity: Vector;

        constructor(_position?: Vector) {
            super(_position);
            let x: number = 450;
            let y: number = 300;
            let a: number = Math.random();
            let b: number = Math.random(); //Ball geht nach unten, da Math.random positiv ist
            this.position = new Vector(x, y);
            this.color = "white";

            if (_position) 
            this.position = _position;
            else
            this.position = new Vector(x, y);
            this.velocity = new Vector(a, b);
    }

    public move(_timeslice: number): void {
        this.position.add(this.velocity);

        if (this.position.x + 10 > 900 || this.position.x - 5 < 0) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
            this.velocity.y = -this.velocity.y;
        }
       /*  if (this.position.x == 900 && this.position.y == 300) {
            alert("goal!");
        }
        if (this.position.x == 0 && this.position.y == 300) {
            alert("goal!");
        } */
    }

    public goal(): void {
       //
    }

    public draw(): void {   
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x + 3, this.position.y + 2, 1.4, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x - 3, this.position.y + 2, 1.4, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x - 3, this.position.y - 2, 1.4, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x + 3, this.position.y - 2, 1.4, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        } 
    }
}
