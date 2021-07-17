"use strict";
var Soccer;
(function (Soccer) {
    class Moveable {
        constructor(_position, _startPosition) {
            let a = -Math.random();
            let b = Math.random();
            this.velocity = new Soccer.Vector(a, b);
            //feste position ohne Math.radnom, damit die nicht mehr am Rand kleben
            let x = 900 * Math.random();
            let y = 650 * Math.random();
            this.position = new Soccer.Vector(x, y);
            this.startPosition = new Soccer.Vector(x, y);
        }
        move(_timeslice) {
            //
        }
        moveToBall(_positionBall) {
            //
        }
        draw() {
            //draw
        }
    }
    Soccer.Moveable = Moveable;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=moveable.js.map