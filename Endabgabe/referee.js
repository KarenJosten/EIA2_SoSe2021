"use strict";
var Soccer;
(function (Soccer) {
    class Referee extends Soccer.Moveable {
        constructor(_size, _position) {
            super(_position);
            let x = 900 * Math.random();
            let y = 400 * Math.random();
            let a = -Math.random();
            let b = Math.random();
            this.position = new Soccer.Vector(x, y);
            this.size = 10;
            this.color = "#ff748c";
            if (_position)
                this.position = _position;
            else
                this.position = new Soccer.Vector(x, y);
            this.velocity = new Soccer.Vector(a, b);
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            //mit Kollision
            if (this.position.x + this.size > 900 || this.position.x - this.size < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + this.size > 600 || this.position.y - this.size < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.color;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
    }
    Soccer.Referee = Referee;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=referee.js.map