"use strict";
var BlumenwieseL10;
(function (BlumenwieseL10) {
    class Bee extends BlumenwieseL10.Moveable {
        constructor(_size, _position) {
            super(_position);
            let x = 900;
            let y = 520;
            //this.position = new Vector(x, y);
            this.color = "yellow";
            this.colortwo = "black";
            this.colorwings = "rgba(255, 255, 255, 0.5)";
            let a = -Math.random() * 3;
            let b = Math.random() * 3;
            this.size = 15;
            //position
            if (_position)
                this.position = _position; //position, wie deklaiert
            else
                this.position = new BlumenwieseL10.Vector(x, y); //position, wenn kein Vektor angegeben ist
            //geschwindigkeit
            this.velocity = new BlumenwieseL10.Vector(1000, 0); //Geschwindigkeit
            this.velocity = new BlumenwieseL10.Vector(a, b);
        }
        move(_timeslice) {
            this.position.add(this.velocity);
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
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x - 5, this.position.y - 15, this.size, 1, 1 * Math.PI);
            BlumenwieseL10.crc2.fillStyle = this.colorwings;
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.ellipse(this.position.x, this.position.y, 8, 16, 1, 20, 40);
            BlumenwieseL10.crc2.fillStyle = this.color;
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            //middle line
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.ellipse(this.position.x, this.position.y, 8, 3, 1, 20, 40);
            BlumenwieseL10.crc2.fillStyle = this.colortwo;
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            //middle line right
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.ellipse(this.position.x + 8, this.position.y - 5, 6, 2, 1, 20, 40);
            BlumenwieseL10.crc2.fillStyle = this.colortwo;
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            //middle line left
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.ellipse(this.position.x - 8, this.position.y + 5, 6, 2, 1, 20, 40);
            BlumenwieseL10.crc2.fillStyle = this.colortwo;
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
            //second wing
            BlumenwieseL10.crc2.beginPath();
            BlumenwieseL10.crc2.arc(this.position.x + 15, this.position.y - 2, this.size, 1, 1 * Math.PI);
            BlumenwieseL10.crc2.fillStyle = this.colorwings;
            BlumenwieseL10.crc2.fill();
            BlumenwieseL10.crc2.closePath();
        }
    }
    BlumenwieseL10.Bee = Bee;
})(BlumenwieseL10 || (BlumenwieseL10 = {}));
//# sourceMappingURL=bee.js.map