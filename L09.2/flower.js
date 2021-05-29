"use strict";
var BlumenwieseL09;
(function (BlumenwieseL09) {
    class Flower {
        constructor() {
            let x = 1000 * Math.random();
            let y = 300 * Math.random() + 920 * BlumenwieseL09.golden;
            this.position = new BlumenwieseL09.Vector(x, y);
            this.color = this.getRandomColor();
            this.yellowcolor = this.getRandomYellowColor();
            //Geschwindigkeit und Richtung
            let a = -Math.random() * 2;
            this.velocity = new BlumenwieseL09.Vector(a, 0);
            this.size = 10;
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += BlumenwieseL09.crc2.canvas.width;
            if (this.position.y > 900)
                this.position.y -= 500 * BlumenwieseL09.golden;
        }
        drawFlower() {
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.rect(this.position.x, this.position.y, 5, 50);
            BlumenwieseL09.crc2.fillStyle = "#487047";
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x + 14, this.position.y + 32, 8, 0, 1 * Math.PI);
            BlumenwieseL09.crc2.arc(this.position.x - 7, this.position.y + 22, 10, 0, 1 * Math.PI);
            BlumenwieseL09.crc2.fillStyle = "#487047";
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            //colorful flowers
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x + 10, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.arc(this.position.x, this.position.y + 10, this.size, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.arc(this.position.x - 10, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.arc(this.position.x, this.position.y - 10, this.size, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.fillStyle = this.color;
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            BlumenwieseL09.crc2.fillStyle = this.yellowcolor;
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
        }
        getRandomColor() {
            let color = ["#f9d5e5", "#eeac99", "#e06377", "#c83349", "#d6d4e0", "#600307", "#b90b21", "#d71536", "#e5174d", "#FFFFE0"];
            let randomColor = color[Math.floor(Math.random() * color.length)];
            return randomColor;
        }
        getRandomYellowColor() {
            let yellowcolor = ["#FFFFCC", "#FFFF99", "#F0E68C", "#ffbc40", "#f0c265", "#e2a323", "#ffbc40"];
            let randomYellowColor = yellowcolor[Math.floor(Math.random() * yellowcolor.length)];
            return randomYellowColor;
        }
    }
    BlumenwieseL09.Flower = Flower;
})(BlumenwieseL09 || (BlumenwieseL09 = {}));
//# sourceMappingURL=flower.js.map