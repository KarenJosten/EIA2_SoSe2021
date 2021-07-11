"use strict";
var Soccer;
(function (Soccer) {
    class Moveable {
        constructor(_position) {
            this.expendable = false;
            this.hitRadius = 0;
            let a = -Math.random();
            let b = Math.random();
            this.velocity = new Soccer.Vector(a, b);
            //feste position ohne Math.radnom, damit die nicht mehr am Rand kleben
            let x = 450;
            let y = 100;
            this.position = new Soccer.Vector(x, y);
        }
        /*   public change(): void {
              this.expendable = true;
          } */
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x + 10 > 900 || this.position.x - 10 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 10 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
        draw() {
            //draw
        }
    }
    Soccer.Moveable = Moveable;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=moveable.js.map