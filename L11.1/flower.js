"use strict";
var BlumenwieseL11;
(function (BlumenwieseL11) {
    class SmallFlower extends BlumenwieseL11.Flower {
        constructor(_size, _position) {
            super(_position);
            let x = 1000 * Math.random();
            let y = 300 * Math.random() + 920 * BlumenwieseL11.golden;
            this.color = this.getRandomColor();
            this.yellowcolor = this.getRandomYellowColor();
            this.colorNectar = "white";
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwieseL11.Vector(x, y);
            if (_size)
                this.size = _size;
            else
                this.size = 10;
        }
        draw() {
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.rect(this.position.x, this.position.y, 5, 50);
            BlumenwieseL11.crc2.fillStyle = "#487047";
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x + 14, this.position.y + 32, 8, 0, 1 * Math.PI);
            BlumenwieseL11.crc2.arc(this.position.x - 7, this.position.y + 22, 10, 0, 1 * Math.PI);
            BlumenwieseL11.crc2.fillStyle = "#487047";
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            //colorful flowers
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x + 10, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.arc(this.position.x, this.position.y + 10, this.size, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.arc(this.position.x - 10, this.position.y, this.size, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.arc(this.position.x, this.position.y - 10, this.size, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.fillStyle = this.color;
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.fillStyle = this.yellowcolor;
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            //Nektar
            /* crc2.beginPath();
            crc2.fillStyle = this.colorNectar;
            crc2.fillRect(this.position.x + 20, this.position.y + 20, 8, 0 - this.nectarLiter);
            crc2.closePath(); */
            //Nektar
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.fillStyle = this.colorNectar;
            BlumenwieseL11.crc2.fillText("Nectar flower: ", 60, 280, 200);
            BlumenwieseL11.crc2.fillRect(230, 280, 8, 0 - this.nectarLiter);
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.strokeStyle = "white";
            BlumenwieseL11.crc2.lineWidth = 0.5;
            BlumenwieseL11.crc2.moveTo(230, 280);
            BlumenwieseL11.crc2.lineTo(238, 280);
            BlumenwieseL11.crc2.lineTo(238, 249);
            BlumenwieseL11.crc2.lineTo(230, 249);
            BlumenwieseL11.crc2.lineTo(230, 280);
            BlumenwieseL11.crc2.stroke();
            BlumenwieseL11.crc2.closePath();
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
    BlumenwieseL11.SmallFlower = SmallFlower;
})(BlumenwieseL11 || (BlumenwieseL11 = {}));
//# sourceMappingURL=flower.js.map