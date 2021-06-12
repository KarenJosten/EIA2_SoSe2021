"use strict";
var BlumenwieseL10;
(function (BlumenwieseL10) {
    class Cloud extends BlumenwieseL10.Moveable {
        constructor(_size, _position) {
            super(_position);
            let x = 1000 * Math.random() * 3;
            let y = 100;
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwieseL10.Vector(x, y);
            if (_size)
                this.size = _size;
            else
                this.size = 50;
        }
        draw() {
            BlumenwieseL10.crc2.fillStyle = "white";
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x + 50, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x + 130, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x + 210, this.position.y + 50, this.size, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x + 80, this.position.y + 80, 50, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
        }
    }
    BlumenwieseL10.Cloud = Cloud;
})(BlumenwieseL10 || (BlumenwieseL10 = {}));
//# sourceMappingURL=cloud.js.map