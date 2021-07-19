"use strict";
var Minisoccer;
(function (Minisoccer) {
    class Referee extends Minisoccer.Moveable {
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
            Minisoccer.crc2.beginPath();
            Minisoccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Minisoccer.crc2.fillStyle = this.color;
            Minisoccer.crc2.fill();
            Minisoccer.crc2.closePath();
        }
    }
    Minisoccer.Referee = Referee;
})(Minisoccer || (Minisoccer = {}));
//# sourceMappingURL=Referee.js.map