"use strict";
var Minisoccer;
(function (Minisoccer) {
    class Player extends Minisoccer.Moveable {
        constructor(_position, _startPosition) {
            super(_position, _startPosition);
            this.velocity2 = 0;
            this.precision = 0;
            this.startPosition = new Minisoccer.Vector(0, 0);
        }
        move(_timeslice, _positionBall) {
            let positionBall = _positionBall; //set position ball
            let posX = positionBall.x - this.position.x; //Differenz berechnen vom Ball posx und player posx
            let posY = positionBall.y - this.position.y; //Differenz berechnen vom Ball posy und player posy
            let rad = Math.hypot(posY, posX); //Radius berechnen für alle positionen um den player herum
            //120 == 30 Meter Wahrnehmungsradius
            if (rad <= 120) {
                let position = new Minisoccer.Vector(posX, posY); //neue position mit berechneten posx und posy
                position.scale(this.velocity2 / rad); //scale position mit geschwindigkeit geteilt durch den radius
                this.position.add(position); //add new position to position
            }
            if (rad <= 10) { //player at ball
                this.atBall = document.querySelector("#atball");
                this.atBall.innerHTML = "" + this.playerNumber;
                //stop game
                Minisoccer.playerAction = Minisoccer.Action.STOP_GAME;
            }
            if (rad > 120) {
                //set position from player to startPos 
                this.position.set(this.startPosition.x, this.startPosition.y);
            }
        }
        draw() {
            Minisoccer.crc2.beginPath();
            Minisoccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Minisoccer.crc2.fillStyle = this.colorTeamOne;
            Minisoccer.crc2.fill();
            Minisoccer.crc2.strokeText(this.playerNumber, this.position.x, this.position.y + 3, 10);
            Minisoccer.crc2.textAlign = "center";
            Minisoccer.crc2.strokeStyle = "white";
            Minisoccer.crc2.stroke();
            Minisoccer.crc2.closePath();
            Minisoccer.crc2.beginPath();
            Minisoccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Minisoccer.crc2.fillStyle = this.colorTeamTwo;
            Minisoccer.crc2.fill();
            Minisoccer.crc2.strokeText(this.playerNumber, this.position.x, this.position.y + 3, 10);
            Minisoccer.crc2.strokeStyle = "white";
            Minisoccer.crc2.stroke();
            Minisoccer.crc2.closePath();
        }
    }
    Minisoccer.Player = Player;
})(Minisoccer || (Minisoccer = {}));
//# sourceMappingURL=Player.js.map