"use strict";
var BlumenwieseL09;
(function (BlumenwieseL09) {
    class SunFlower {
        constructor() {
            let x = 1000 * Math.random();
            let y = 150 * Math.random() + 800 * BlumenwieseL09.golden;
            this.position = new BlumenwieseL09.Vector(x, y);
            //Geschwindigkeit und Richtung
            this.velocity = new BlumenwieseL09.Vector(-0.3, 0);
            this.size = 5;
            this.color = "yellow";
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += BlumenwieseL09.crc2.canvas.width;
            if (this.position.y > 900)
                this.position.y -= 500 * BlumenwieseL09.golden;
        }
        drawSunflower() {
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.rect(this.position.x, this.position.y, 5, 80);
            BlumenwieseL09.crc2.fillStyle = "green";
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x + 14, this.position.y + 40, 8, 0, 1 * Math.PI);
            BlumenwieseL09.crc2.fillStyle = "green";
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            //petals
            BlumenwieseL09.crc2.fillStyle = this.color;
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.ellipse(this.position.x, this.position.y + 10, this.size, 10, 0, 20, 40);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.ellipse(this.position.x + 10, this.position.y + 5, this.size, 10, 2, 20, 40);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.ellipse(this.position.x + 10, this.position.y - 8, this.size, 10, 1, 20, 40);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.ellipse(this.position.x - 11, this.position.y - 5, this.size, 10, 5, 20, 40);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.ellipse(this.position.x - 10, this.position.y + 6, this.size, 10, 7, 20, 40);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.ellipse(this.position.x - 2, this.position.y - 11, this.size, 10, 0, 20, 40);
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x, this.position.y, 9, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.fillStyle = "brown";
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
        }
    }
    BlumenwieseL09.SunFlower = SunFlower;
})(BlumenwieseL09 || (BlumenwieseL09 = {}));
//# sourceMappingURL=sunflower.js.map