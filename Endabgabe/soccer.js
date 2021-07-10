"use strict";
/*Code mit Hilfe von Julia Käppeler und Rebecca Räschke erstellt*/
var Soccer;
(function (Soccer) {
    let PLAYER_EVENT;
    (function (PLAYER_EVENT) {
        PLAYER_EVENT["BALL_SHOOTS"] = "ballShoots";
        PLAYER_EVENT["CHANGE_PLAYER"] = "changePlayer";
    })(PLAYER_EVENT = Soccer.PLAYER_EVENT || (Soccer.PLAYER_EVENT = {}));
    window.addEventListener("load", handleLoad);
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Soccer.crc2 = canvas.getContext("2d");
        drawSoccerfield();
        drawGate();
        drawLines();
        let soccerfield = Soccer.crc2.getImageData(0, 0, 1000, 900);
        createReferee(1);
        createLinesman(1);
        createBall(1);
        createPlayer(22);
        canvas.addEventListener(PLAYER_EVENT.CHANGE_PLAYER, changePlayer);
        window.setInterval(update, 20, soccerfield); //alle 20 ms updaten
    }
    /*  function shootBall(_origin: Vector): void {
         let velocity: Vector = new Vector(200, 299);
         let ball: Ball = new Ball(_origin);
         ball.move(1);
         moveables.push(ball);
     }
 
     function handlePlayerShot(_event: Event): void {
         let player: Player = (<CustomEvent>_event).detail.player;
         shootBall(player.position);
     } */
    function changePlayer() {
        //
    }
    function createReferee(_nReferee) {
        for (let i = 0; i < _nReferee; i++) {
            let referee = new Soccer.Referee(); //Name der Subklasse, neuer Rerefee wird erstellt
            moveables.push(referee); //wird in das players array gepusht
        }
    }
    function createLinesman(_nLinesman) {
        for (let i = 0; i < _nLinesman; i++) {
            let firstLinesman = new Soccer.Linesman();
            firstLinesman.position.x = 900 * Math.random(); // setzt position.x von Linesman
            firstLinesman.position.y = 10;
            firstLinesman.velocity.x = Math.random();
            firstLinesman.velocity.y = 0;
            moveables.push(firstLinesman); //Werte des ersten Linienrichters in das Array pushen
            let secondLinesman = new Soccer.Linesman();
            moveables.push(secondLinesman);
        }
    }
    function createBall(_nBall) {
        for (let i = 0; i < _nBall; i++) {
            let ball = new Soccer.Ball();
            moveables.push(ball);
        }
    }
    function createPlayer(_nPlayer) {
        for (let i = 0; i < _nPlayer; i++) {
            if (i <= 10) {
                let firstTeam = new Soccer.Player();
                firstTeam.colorTeamOne = "blue";
                moveables.push(firstTeam);
            }
            else {
                let secondTeam = new Soccer.Player();
                secondTeam.colorTeamTwo = "red";
                moveables.push(secondTeam);
            }
        }
    }
    function drawSoccerfield() {
        Soccer.crc2.fillStyle = "#4c8527";
        Soccer.crc2.fillRect(0, 0, Soccer.crc2.canvas.width, Soccer.crc2.canvas.height);
        Soccer.crc2.fillStyle = "RGBA(62,90,44,0.5)";
        Soccer.crc2.beginPath();
        Soccer.crc2.rect(25, 0, 50, 600);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        Soccer.crc2.beginPath();
        Soccer.crc2.rect(125, 0, 50, 600);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        Soccer.crc2.beginPath();
        Soccer.crc2.rect(225, 0, 50, 600);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        Soccer.crc2.beginPath();
        Soccer.crc2.rect(325, 0, 50, 600);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        Soccer.crc2.beginPath();
        Soccer.crc2.rect(425, 0, 50, 600);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        Soccer.crc2.beginPath();
        Soccer.crc2.rect(525, 0, 50, 600);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        Soccer.crc2.beginPath();
        Soccer.crc2.rect(625, 0, 50, 600);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        Soccer.crc2.beginPath();
        Soccer.crc2.rect(725, 0, 50, 600);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        Soccer.crc2.beginPath();
        Soccer.crc2.rect(825, 0, 50, 600);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
    }
    function drawGate() {
        //first gate
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(0, 230);
        Soccer.crc2.lineTo(60, 230);
        Soccer.crc2.lineTo(60, 370);
        Soccer.crc2.lineTo(0, 370);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        Soccer.crc2.stroke();
        //second gate
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(900, 230);
        Soccer.crc2.lineTo(840, 230);
        Soccer.crc2.lineTo(840, 370);
        Soccer.crc2.lineTo(900, 370);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        Soccer.crc2.stroke();
    }
    function drawLines() {
        //Linie mitte
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(450, 0);
        Soccer.crc2.lineTo(450, 600); // für x auch crc2.canvas.width / 2 --> 900/2 = 450 oder Variable festlegen für height und width(weniger schreiben)
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        Soccer.crc2.stroke();
        //Kreis mitte
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(450, 300, 100, 0, 2 * Math.PI);
        Soccer.crc2.closePath();
        Soccer.crc2.stroke();
        //Rect gate right
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(900, 140);
        Soccer.crc2.lineTo(750, 140);
        Soccer.crc2.lineTo(750, 460);
        Soccer.crc2.lineTo(900, 460);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        Soccer.crc2.stroke();
        //Rect gate left
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(0, 140);
        Soccer.crc2.lineTo(150, 140);
        Soccer.crc2.lineTo(150, 460);
        Soccer.crc2.lineTo(0, 460);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        Soccer.crc2.stroke();
        //Punkt left
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(100, 300, 5, 0, 2 * Math.PI);
        Soccer.crc2.fillStyle = "white";
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        //Punkt mitte
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(450, 300, 5, 0, 2 * Math.PI);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        //Punkt rechts
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(800, 300, 5, 0, 2 * Math.PI);
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        //Halbkreis links
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(130, 300, 60, 5.05, 2.39 * Math.PI);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //Halbkreis rechts
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(770, 300, 60, 1.9, 1.39 * Math.PI);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
    }
    function update(_soccerfield) {
        Soccer.crc2.putImageData(_soccerfield, 0, 0);
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1);
        }
        //deleteExpandables();
        //handleCollisions();
    }
    /*   function deleteExpandables(): void {
          for (let i: number = moveables.length - 1; i >= 0; i--) {
              if (moveables[i].expendable)
                  moveables.splice(i, 1);
          }
      } */
    /*  function handleCollisions(): void {
         for (let i: number = 0; i < moveables.length; i++) {
             let a: Moveable = moveables[i];
             for (let j: number = i + 1; j < moveables.length; j++) {
                 let b: Moveable = moveables[j];
 
                 if (a instanceof Player && b instanceof Player)
                     continue;
                 if (a.expendable || b.expendable)
                     continue;
 
                 if (a.isHitBy(b)) {
                     a.change();
                     b.change();
                 }
     }
 }
     
 } */
})(Soccer || (Soccer = {}));
//# sourceMappingURL=soccer.js.map