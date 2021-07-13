"use strict";
var Soccer;
(function (Soccer) {
    class Player extends Soccer.Moveable {
        constructor(_position, _velocityMax, _velocityMin, _colorTeamOne, _colorTeamtwo, _precision, _playerNumber, _team) {
            super(_position);
            this.radius = 30;
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeamOne;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeamTwo;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
        moveToBall(_positionBall) {
            let positionBall = _positionBall;
            console.log(positionBall);
            //60 == 30 Meter Radius
            if (positionBall.x - this.position.x <= 60 && positionBall.y - this.position.y <= 60) {
                let chaseBall = new Soccer.Vector(positionBall.x, positionBall.y);
                this.position = chaseBall;
            }
        }
        shootBall() {
            console.log("shoot ball");
            /*  let event: CustomEvent = new CustomEvent(PLAYER_EVENT.BALL_SHOOTS, {detail: {player: this}});
             crc2.canvas.dispatchEvent(event); */
        }
        changePlayer() {
            console.log("change player");
            /* super.change();
            let event: CustomEvent = new CustomEvent(PLAYER_EVENT.CHANGE_PLAYER, {detail: {player: this}});
            crc2.canvas.dispatchEvent(event); */
        }
    }
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=player.js.map