"use strict";
var Minisoccer;
(function (Minisoccer) {
    class Moveable {
        constructor(_position, _startPosition) {
            let a = -Math.random();
            let b = Math.random();
            this.velocity = new Minisoccer.Vector(a, b);
            let x = 900 * Math.random();
            let y = 650 * Math.random();
            this.position = new Minisoccer.Vector(x, y);
        }
        move(_timeslice, _positionBall) {
            //
        }
        draw() {
            //draw
        }
    }
    Minisoccer.Moveable = Moveable;
})(Minisoccer || (Minisoccer = {}));
//# sourceMappingURL=Moveable.js.map