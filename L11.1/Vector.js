"use strict";
var BlumenwieseL11;
(function (BlumenwieseL11) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    BlumenwieseL11.Vector = Vector;
})(BlumenwieseL11 || (BlumenwieseL11 = {}));
//# sourceMappingURL=Vector.js.map