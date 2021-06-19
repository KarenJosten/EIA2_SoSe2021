"use strict";
var BlumenwieseL11;
(function (BlumenwieseL11) {
    class SunFlower extends BlumenwieseL11.Flower {
        constructor(_size, _position) {
            super(_position);
            let x = 1000 * Math.random();
            let y = 150 * Math.random() + 800 * BlumenwieseL11.golden;
            this.position = new BlumenwieseL11.Vector(x, y);
            this.size = 5;
            this.color = "yellow";
            //this.colorNectar = "RGB(255,127,80)";
            this.colorNectar = "white";
        }
        draw() {
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.rect(this.position.x, this.position.y, 5, 80);
            BlumenwieseL11.crc2.fillStyle = "green";
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x + 14, this.position.y + 40, 8, 0, 1 * Math.PI);
            BlumenwieseL11.crc2.fillStyle = "green";
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            //petals
            BlumenwieseL11.crc2.fillStyle = this.color;
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.ellipse(this.position.x, this.position.y + 10, this.size, 10, 0, 20, 40);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.ellipse(this.position.x + 10, this.position.y + 5, this.size, 10, 2, 20, 40);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.ellipse(this.position.x + 10, this.position.y - 8, this.size, 10, 1, 20, 40);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.ellipse(this.position.x - 11, this.position.y - 5, this.size, 10, 5, 20, 40);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.ellipse(this.position.x - 10, this.position.y + 6, this.size, 10, 7, 20, 40);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.ellipse(this.position.x - 2, this.position.y - 11, this.size, 10, 0, 20, 40);
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.arc(this.position.x, this.position.y, 9, 0, 2 * Math.PI);
            BlumenwieseL11.crc2.fillStyle = "brown";
            BlumenwieseL11.crc2.fill();
            BlumenwieseL11.crc2.closePath();
            //Nektar
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.font = "18px Arial";
            BlumenwieseL11.crc2.fillStyle = this.colorNectar;
            BlumenwieseL11.crc2.fillText("Nectar sunflower: ", 60, 350, 200);
            //crc2.fillRect(this.position.x + 20, this.position.y + 20, 8, 0 - this.nectarLiter);
            BlumenwieseL11.crc2.fillRect(230, 350, 8, 0 - this.nectarLiterSunflower);
            BlumenwieseL11.crc2.closePath();
            BlumenwieseL11.crc2.beginPath();
            BlumenwieseL11.crc2.strokeStyle = "white";
            BlumenwieseL11.crc2.lineWidth = 0.5;
            BlumenwieseL11.crc2.moveTo(230, 350);
            BlumenwieseL11.crc2.lineTo(238, 350);
            BlumenwieseL11.crc2.lineTo(238, 299);
            BlumenwieseL11.crc2.lineTo(230, 299);
            BlumenwieseL11.crc2.lineTo(230, 350);
            BlumenwieseL11.crc2.stroke();
            BlumenwieseL11.crc2.closePath();
        }
    }
    BlumenwieseL11.SunFlower = SunFlower;
})(BlumenwieseL11 || (BlumenwieseL11 = {}));
//# sourceMappingURL=sunflower.js.map