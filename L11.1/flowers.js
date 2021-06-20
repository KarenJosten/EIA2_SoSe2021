"use strict";
var BlumenwieseL11;
(function (BlumenwieseL11) {
    class Flower {
        constructor(_position) {
            let x = 1000 * Math.random();
            let y = 300 * Math.random() + 920 * BlumenwieseL11.golden;
            this.position = new BlumenwieseL11.Vector(x, y);
            this.size = 10;
            this.nectarLiter = 0;
            this.nectarLiterSunflower = 0.9 * 2;
        }
        draw() {
            //draw
        }
        fillNectar() {
            console.log("fill Nectar");
            if (this.nectarLiter < 30) {
                this.nectarLiter += 0.02;
            }
            /* if (this.nectarLiterSunflower < 50) {
                this.nectarLiterSunflower += 0.05;
            } */
        }
    }
    BlumenwieseL11.Flower = Flower;
})(BlumenwieseL11 || (BlumenwieseL11 = {}));
//# sourceMappingURL=flowers.js.map