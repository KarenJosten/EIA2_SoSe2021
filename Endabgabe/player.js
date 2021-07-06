"use strict";
var Soccer;
(function (Soccer) {
    class Player {
        constructor(_position) {
            let x = 900 * Math.random();
            let y = 600 * Math.random();
            this.position = new Soccer.Vector(x, y);
            this.size = 10;
        }
        draw() {
            //draw
        }
    }
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=player.js.map