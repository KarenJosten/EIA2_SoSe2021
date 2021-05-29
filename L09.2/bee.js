"use strict";
var BlumenwieseL09;
(function (BlumenwieseL09) {
    class Bee {
        constructor() {
            let x = 900;
            let y = 520;
            this.position = new BlumenwieseL09.Vector(x, y);
            this.color = "yellow";
            this.colortwo = "black";
            this.colorwings = "rgba(255, 255, 255, 0.5)";
            let a = -Math.random() * 3;
            let b = Math.random() * 3;
            this.velocity = new BlumenwieseL09.Vector(a, b);
            this.size = 15;
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            //ohne Kollision
            /* if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
            if (this.position.y > 900)
            this.position.y -= crc2.canvas.height;
            } */
            //mit Kollision
            if (this.position.x + this.size > 1000 || this.position.x - this.size < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + this.size > 900 || this.position.y - this.size < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
        drawBee() {
            //first wing
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x - 5, this.position.y - 15, this.size, 1, 1 * Math.PI);
            BlumenwieseL09.crc2.fillStyle = this.colorwings;
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.ellipse(this.position.x, this.position.y, 8, 16, 1, 20, 40);
            BlumenwieseL09.crc2.fillStyle = this.color;
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            //middle line
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.ellipse(this.position.x, this.position.y, 8, 3, 1, 20, 40);
            BlumenwieseL09.crc2.fillStyle = this.colortwo;
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            //middle line right
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.ellipse(this.position.x + 8, this.position.y - 5, 6, 2, 1, 20, 40);
            BlumenwieseL09.crc2.fillStyle = this.colortwo;
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            //middle line left
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.ellipse(this.position.x - 8, this.position.y + 5, 6, 2, 1, 20, 40);
            BlumenwieseL09.crc2.fillStyle = this.colortwo;
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
            //second wing
            BlumenwieseL09.crc2.beginPath();
            BlumenwieseL09.crc2.arc(this.position.x + 15, this.position.y - 2, this.size, 1, 1 * Math.PI);
            BlumenwieseL09.crc2.fillStyle = this.colorwings;
            BlumenwieseL09.crc2.fill();
            BlumenwieseL09.crc2.closePath();
        }
    }
    BlumenwieseL09.Bee = Bee;
})(BlumenwieseL09 || (BlumenwieseL09 = {}));
//# sourceMappingURL=bee.js.map