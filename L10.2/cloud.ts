namespace BlumenwieseL10 {

    export class Cloud extends Moveable {
        position: Vector;
        size: number;
        velocity: Vector;

            constructor(_size?: number, _position?: Vector) {
            super(_position);

            let x: number = 1000 * Math.random() * 3;
            let y: number = 100;

            if (_position) 
                this.position = _position;
            else    
                this.position = new Vector(x, y);

            if (_size)
                this.size = _size;
            else    
                this.size = 50; 
    } 

        draw(): void {

        crc2.fillStyle = "white";
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