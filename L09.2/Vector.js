"use strict";
var BlumenwieseL09;
(function (BlumenwieseL09) {
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
    BlumenwieseL09.Vector = Vector;
})(BlumenwieseL09 || (BlumenwieseL09 = {}));
//# sourceMappingURL=Vector.js.map