"use strict";
var Soccer;
(function (Soccer) {
    class Referee extends Soccer.Moveable {
        constructor(_position) {
            super(_position);
            this.color = "#ff748c";
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            //Kollision
            if (this.position.x + 10 > 900 || this.position.x - 10 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 650 || this.position.y - 10 < 0) {
                this.velocity.y = -this.velocity.y;
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
    Soccer.Referee = Referee;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=referee.js.map