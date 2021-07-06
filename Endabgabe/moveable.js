"use strict";
var Soccer;
(function (Soccer) {
    class Moveable {
        constructor(_position) {
            let x = 900 * Math.random();
            let y = 600 * Math.random();
            this.position = new Soccer.Vector(x, y);
            this.size = 10;
        }
        move(_timeslice) {
            //
        }
        draw() {
            //draw
        }
    }
    Soccer.Moveable = Moveable;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=moveable.js.map