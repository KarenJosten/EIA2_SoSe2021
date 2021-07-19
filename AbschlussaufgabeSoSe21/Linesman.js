"use strict";
var Minisoccer;
(function (Minisoccer) {
    class Linesman extends Minisoccer.Moveable {
        constructor(_position) {
            super(_position);
            let x = 900 * Math.random();
            let y = 640;
            let a = -0.5;
            let b = 0;
            this.position = new Minisoccer.Vector(x, y);
            this.velocity = new Minisoccer.Vector(a, b);
            this.color = "yellow";
        }
        move(_timeslice) {
            //add velocity to this.position
            this.position.add(this.velocity);
            //collision
            if (this.position.x + 10 > 900 || this.position.x - 10 < 0) {
                this.velocity.x = -this.velocity.x;
            }
        }
        draw() {
            Minisoccer.crc2.beginPath();
            Minisoccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Minisoccer.crc2.fillStyle = this.color;
            Minisoccer.crc2.fill();
            Minisoccer.crc2.closePath();
        }
    }
    Minisoccer.Linesman = Linesman;
})(Minisoccer || (Minisoccer = {}));
//# sourceMappingURL=Linesman.js.map