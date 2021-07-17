"use strict";
var Soccer;
(function (Soccer) {
    class Player extends Soccer.Moveable {
        constructor(_position, _startPosition) {
            super(_position, _startPosition);
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeamOne;
            Soccer.crc2.fill();
            Soccer.crc2.strokeText(this.playerNumber, this.position.x, this.position.y + 3, 10);
            Soccer.crc2.textAlign = "center";
            Soccer.crc2.strokeStyle = "white";
            Soccer.crc2.stroke();
            Soccer.crc2.closePath();
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeamTwo;
            Soccer.crc2.fill();
            Soccer.crc2.strokeText(this.playerNumber, this.position.x, this.position.y + 3, 10);
            Soccer.crc2.strokeStyle = "white";
            Soccer.crc2.stroke();
            Soccer.crc2.closePath();
        }
        moveToBall(_positionBall) {
            let positionBall = _positionBall; //position vom Ball
            let posX = positionBall.x - this.position.x; //Differenz berechnen von Ball posx und player posx
            let posY = positionBall.y - this.position.y; //Differenz berechnen von Ball posy und player posy
            let rad = Math.hypot(posY, posX); //hier hätte man auch length benutzen können Karen..., Radius berechnen für alle positionen um den player herum
            //100 == 30 Meter Wahrnehmungsradius
            if (rad <= 120) { //wenn Radius kleiner gleich 100
                let position = new Soccer.Vector(posX, posY); //neue position mit berechneten posx und posy
                position.scale(this.velocity2 / rad); //scale position mit geschwindigkeit geteilt durch den radius, mit geschwindigkeit bewegen und nicht springen
                this.position.add(position); //neue position adde
            }
            if (rad <= 10) { //wenn Radius kleiner gleich 10 (beim Ball angekommen) ist dann schieße den Ball
                this.atBall = document.querySelector("#atball");
                this.atBall.innerHTML = this.playerNumber;
                Soccer.playerAction = Soccer.Action.STOP_GAME;
            }
            if (rad > 120) {
                //wie laufen statt springen???
                this.position.set(this.startPosition.x, this.startPosition.y);
            }
        }
    }
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=player.js.map