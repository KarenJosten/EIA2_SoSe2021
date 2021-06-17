"use strict";
var BlumenwieseL10;
(function (BlumenwieseL10) {
    class Flower {
        constructor(_position) {
            let x = 1000 * Math.random();
            let y = 300 * Math.random() + 920 * BlumenwieseL10.golden;
            this.position = new BlumenwieseL10.Vector(x, y);
            this.size = 10;
            this.nectarLiter = 0;
        }
        draw() {
            //draw
        }
        fillNectar() {
            console.log("fill Nectar");
            if (this.nectarLiter < 30) {
                this.nectarLiter += 0.1;
            }
        }
    }
    BlumenwieseL10.Flower = Flower;
})(BlumenwieseL10 || (BlumenwieseL10 = {}));
//# sourceMappingURL=flowers.js.map