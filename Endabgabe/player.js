"use strict";
var Soccer;
(function (Soccer) {
    class Player extends Soccer.Moveable {
        constructor(_position, _velocity, _colorTeamOne, _colorTeamtwo, _precision, _playerNumber, _team) {
            super(_position);
            let x = 900 * Math.random();
            let y = 400 * Math.random();
            this.position = new Soccer.Vector(x, y);
            this.colorTeamOne = "red";
            this.colorTeamTwo = "blue";
            if (_position)
                this.position = _position;
            else
                this.position = new Soccer.Vector(x, y);
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeamOne;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
    }
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=player.js.map