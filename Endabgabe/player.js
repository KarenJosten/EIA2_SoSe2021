"use strict";
var Soccer;
(function (Soccer) {
    class Player extends Soccer.Moveable {
        constructor(_position, _velocity, _colorTeamOne, _colorTeamtwo, _precision, _playerNumber, _team) {
            super(_position);
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
        shoot() {
            console.log("shoot ball");
            let event = new CustomEvent(Soccer.PLAYER_EVENT.BALL_SHOOTS, { detail: { player: this } });
            Soccer.crc2.canvas.dispatchEvent(event);
        }
        change() {
            console.log("change player");
            super.change();
            let event = new CustomEvent(Soccer.PLAYER_EVENT.CHANGE_PLAYER, { detail: { player: this } });
            Soccer.crc2.canvas.dispatchEvent(event);
        }
    }
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=player.js.map