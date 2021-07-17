"use strict";
var Soccer;
(function (Soccer) {
    class Linesman extends Soccer.Moveable {
        constructor(_position) {
            super(_position); //konstruktor einer abstrakten Klasse braucht super
            let x = 900 * Math.random();
            let y = 640;
            let a = -0.5;
            let b = 0;
            this.position = new Soccer.Vector(x, y);
            this.velocity = new Soccer.Vector(a, b);
            this.color = "yellow";
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            //Kollision
            if (this.position.x + 10 > 900 || this.position.x - 10 < 0) {
                this.velocity.x = -this.velocity.x;
            }
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.color;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
    }
    Soccer.Linesman = Linesman;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=linesman.js.map