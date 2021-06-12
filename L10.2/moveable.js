"use strict";
var BlumenwieseL10;
(function (BlumenwieseL10) {
    class Moveable {
        constructor(_position, _velocity) {
            let x = 1000 * Math.random() * 3;
            let y = 100;
            this.position = new BlumenwieseL10.Vector(x, y);
            //Geschwindigkeit und Richtung
            this.velocity = new BlumenwieseL10.Vector(1, 0);
            let a = -Math.random() * 3;
            let b = Math.random() * 3;
            this.velocity = new BlumenwieseL10.Vector(a, b);
            this.color = "white";
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x > BlumenwieseL10.crc2.canvas.width)
                this.position.x -= BlumenwieseL10.crc2.canvas.width;
        }
        draw() {
            // console.log("Moveable move");
        }
    }
    BlumenwieseL10.Moveable = Moveable;
})(BlumenwieseL10 || (BlumenwieseL10 = {}));
//# sourceMappingURL=moveable.js.map