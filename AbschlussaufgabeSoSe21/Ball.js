"use strict";
var Minisoccer;
(function (Minisoccer) {
    class Ball extends Minisoccer.Moveable {
        constructor(_position) {
            super(_position);
            this.goal1 = 0;
            this.goal2 = 0;
            let x = 450;
            let y = 325;
            this.position = new Minisoccer.Vector(x, y);
            this.color = "white";
            let i = 450;
            let j = 325;
            this.fixPosition = new Minisoccer.Vector(i, j);
            this.target = new Minisoccer.Vector(this.position.x, this.position.y);
        }
        move(_timeslice) {
            //difference target from click and position from ball
            let difference = Minisoccer.Vector.getDifference(this.target, this.position);
            //velocity / 10 -> slower
            this.velocity = new Minisoccer.Vector(difference.x / 10, difference.y / 10);
            //gate first Team, left
            let posXL = 0 - this.position.x;
            let posYL = 325 - this.position.y;
            let rad1 = Math.hypot(posYL, posXL);
            //gate secondTeam, right
            let posXR = 900 - this.position.x;
            let posYR = 325 - this.position.y;
            let rad2 = Math.hypot(posYR, posXR);
            //if length from difference  <= 0 set velocity to 0
            if (difference.length <= 10) {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
            this.position.add(this.velocity);
            //goal left, set position to startPos if goal
            if (rad1 <= 50) {
                this.goalLeft = document.querySelector("#goalTeam2");
                this.goal1++;
                //show in HTML as string
                this.goalLeft.innerHTML = this.goal1 + "";
                Minisoccer.playerAction = Minisoccer.Action.STOP_GAME;
                this.position.set(this.fixPosition.x, this.fixPosition.y);
                this.target.set(this.fixPosition.x, this.fixPosition.y);
            }
            //goal right, set position to startPos if goal
            if (rad2 <= 50) {
                this.goalRight = document.querySelector("#goalTeam1");
                this.goal2++;
                //show in HTML as string
                this.goalRight.innerHTML = this.goal2 + "";
                Minisoccer.playerAction = Minisoccer.Action.STOP_GAME;
                this.position.set(this.fixPosition.x, this.fixPosition.y);
                this.target.set(this.fixPosition.x, this.fixPosition.y);
            }
        }
        draw() {
            Minisoccer.crc2.beginPath();
            Minisoccer.crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            Minisoccer.crc2.fillStyle = this.color;
            Minisoccer.crc2.fill();
            Minisoccer.crc2.closePath();
            Minisoccer.crc2.beginPath();
            Minisoccer.crc2.arc(this.position.x + 3, this.position.y + 2, 1.4, 0, 2 * Math.PI);
            Minisoccer.crc2.fillStyle = "black";
            Minisoccer.crc2.fill();
            Minisoccer.crc2.closePath();
            Minisoccer.crc2.beginPath();
            Minisoccer.crc2.arc(this.position.x - 3, this.position.y + 2, 1.4, 0, 2 * Math.PI);
            Minisoccer.crc2.fillStyle = "black";
            Minisoccer.crc2.fill();
            Minisoccer.crc2.closePath();
            Minisoccer.crc2.beginPath();
            Minisoccer.crc2.arc(this.position.x - 3, this.position.y - 2, 1.4, 0, 2 * Math.PI);
            Minisoccer.crc2.fillStyle = "black";
            Minisoccer.crc2.fill();
            Minisoccer.crc2.closePath();
            Minisoccer.crc2.beginPath();
            Minisoccer.crc2.arc(this.position.x, this.position.y, 2, 0, 2 * Math.PI);
            Minisoccer.crc2.fillStyle = "black";
            Minisoccer.crc2.fill();
            Minisoccer.crc2.closePath();
            Minisoccer.crc2.beginPath();
            Minisoccer.crc2.arc(this.position.x + 3, this.position.y - 2, 1.4, 0, 2 * Math.PI);
            Minisoccer.crc2.fillStyle = "black";
            Minisoccer.crc2.fill();
            Minisoccer.crc2.closePath();
        }
    }
    Minisoccer.Ball = Ball;
})(Minisoccer || (Minisoccer = {}));
//# sourceMappingURL=Ball.js.map