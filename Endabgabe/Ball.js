"use strict";
var Soccer;
(function (Soccer) {
    class Ball extends Soccer.Moveable {
        constructor(_position) {
            super(_position);
            this.goal1 = 0;
            this.goal2 = 0;
            let x = 450;
            let y = 325;
            this.position = new Soccer.Vector(x, y);
            this.color = "white";
            let i = 450;
            let j = 325;
            this.fixPosition = new Soccer.Vector(i, j);
            this.target = new Soccer.Vector(this.position.x, this.position.y);
        }
        move(_timeslice) {
            //Ziel (klick) und aktueller Punkt
            let difference = Soccer.Vector.getDifference(this.target, this.position); //weil static mit Vector. Different bestimmen vom Ziel und der pos vom Ball
            this.velocity = new Soccer.Vector(difference.x / 10, difference.y / 10); //geschwi.x Richtung / 10 --> wo ball hin soll, neue Geschwindigkeit vom Ball
            //gate first Team, left
            let posXL = 0 - this.position.x;
            let posYL = 325 - this.position.y;
            let rad1 = Math.hypot(posYL, posXL);
            //gate secondTeam, right
            let posXR = 900 - this.position.x;
            let posYR = 325 - this.position.y;
            let rad2 = Math.hypot(posYR, posXR);
            //let goal1: number = 0;
            if (difference.length <= 10) {
                this.velocity.x = 0;
                this.velocity.y = 0; //wenn Ball nah genug an dem Ziel, dann keine velocity
            }
            this.position.add(this.velocity);
            if (rad1 <= 50) {
                this.goalLeft = document.querySelector("#goalTeam2");
                this.goal1++;
                this.goalLeft.innerHTML = this.goal1 + "";
                Soccer.playerAction = Soccer.Action.STOP_GAME;
                this.position.set(this.fixPosition.x, this.fixPosition.y);
                this.target.set(this.fixPosition.x, this.fixPosition.y);
            }
            if (rad2 <= 50) {
                this.goalRight = document.querySelector("#goalTeam1");
                this.goal2++;
                this.goalRight.innerHTML = this.goal2 + "";
                Soccer.playerAction = Soccer.Action.STOP_GAME;
                this.position.set(this.fixPosition.x, this.fixPosition.y);
                this.target.set(this.fixPosition.x, this.fixPosition.y);
            }
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.color;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x + 3, this.position.y + 2, 1.4, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = "black";
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x - 3, this.position.y + 2, 1.4, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = "black";
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x - 3, this.position.y - 2, 1.4, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = "black";
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 2, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = "black";
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x + 3, this.position.y - 2, 1.4, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = "black";
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
    }
    Soccer.Ball = Ball;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Ball.js.map