"use strict";
var BlumenwieseL10;
(function (BlumenwieseL10) {
    class Flowers {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwieseL10.Vector(0, 0);
            //this.color = this.getRandomColor();
            this.drawFlower();
        }
        drawFlower() {
            // console.log("draw Flowers");
        }
    }
    BlumenwieseL10.Flowers = Flowers;
})(BlumenwieseL10 || (BlumenwieseL10 = {}));
//# sourceMappingURL=flowers.js.map