"use strict";
var BlumenwieseL11;
(function (BlumenwieseL11) {
    class Moveable {
        constructor(_position) {
            let x = 1000 * Math.random() * 3;
            let y = 100;
            this.position = new BlumenwieseL11.Vector(x, y);
            //Geschwindigkeit und Richtung
            this.velocity = new BlumenwieseL11.Vector(1, 0);
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x > BlumenwieseL11.crc2.canvas.width)
                this.position.x -= BlumenwieseL11.crc2.canvas.width;
        }
        draw() {
            // console.log("Moveable move");
        }
    }
    BlumenwieseL11.Moveable = Moveable;
})(BlumenwieseL11 || (BlumenwieseL11 = {}));
//# sourceMappingURL=moveable.js.map