"use strict";
var BlumenwieseL09;
(function (BlumenwieseL09) {
    class Cloud {
        constructor() {
            let x = 1000 * Math.random() * 3;
            let y = 100;
            this.position = new BlumenwieseL09.Vector(x, y);
            //Geschwindigkeit und Richtung
            this.velocity = new BlumenwieseL09.Vector(1, 0);
            this.color = "white";
            this.size = 50;
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x > BlumenwieseL09.crc2.canvas.width)
                this.position.x -= BlumenwieseL09.crc2.canvas.width;
        }
        drawCloud() {
            BlumenwieseL09.crc2.fillStyle = this.color;
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x + 50, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x + 130, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x + 210, this.position.y + 50, this.size, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x + 80, this.position.y + 80, 50, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
        }
    }
    BlumenwieseL09.Cloud = Cloud;
})(BlumenwieseL09 || (BlumenwieseL09 = {}));
//# sourceMappingURL=cloud.js.map