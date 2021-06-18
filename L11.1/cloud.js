"use strict";
var BlumenwieseL11;
(function (BlumenwieseL11) {
    class Cloud extends BlumenwieseL11.Moveable {
        constructor(_size, _position) {
            super(_position);
            let x = 1000 * Math.random() * 3;
            let y = 100;
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwieseL11.Vector(x, y);
            if (_size)
                this.size = _size;
            else
                this.size = 50;
        }
        draw() {
            BlumenwieseL11.crc2.fillStyle = "white";
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x + 50, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x + 130, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x + 210, this.position.y + 50, this.size, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x + 80, this.position.y + 80, 50, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
        }
    }
    BlumenwieseL11.Cloud = Cloud;
})(BlumenwieseL11 || (BlumenwieseL11 = {}));
//# sourceMappingURL=cloud.js.map