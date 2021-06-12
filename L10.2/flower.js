"use strict";
var BlumenwieseL10;
(function (BlumenwieseL10) {
    class Flower extends BlumenwieseL10.Flowers {
        constructor(_size, _position) {
            super(_position);
            let x = 1000 * Math.random();
            let y = 300 * Math.random() + 920 * BlumenwieseL10.golden;
            this.position = new BlumenwieseL10.Vector(x, y);
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwieseL10.Vector(this.x, this.y);
            this.size = _size;
        }
        drawFlower() {
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.rect(this.position.x, this.position.y, 5, 50);
            BlumenwieseL10.crc2.fillStyle = "#487047";
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x + 14, this.position.y + 32, 8, 0, 1 * Math.PI);
            BlumenwieseL10.crc2.arc(this.position.x - 7, this.position.y + 22, 10, 0, 1 * Math.PI);
            BlumenwieseL10.crc2.fillStyle = "#487047";
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            //colorful flowers
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x + 10, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.arc(this.position.x, this.position.y + 10, this.size, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.arc(this.position.x - 10, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.arc(this.position.x, this.position.y - 10, this.size, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.fillStyle = this.color;
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            BlumenwieseL10.crc2.fillStyle = this.yellowcolor;
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
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
    BlumenwieseL10.Flower = Flower;
})(BlumenwieseL10 || (BlumenwieseL10 = {}));
//# sourceMappingURL=flower.js.map