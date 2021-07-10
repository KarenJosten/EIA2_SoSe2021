"use strict";
/*Code mit Hilfe von Julia Käppeler und Rebecca Räschke erstellt*/
var Soccer;
(function (Soccer) {
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
        createLinesman(2);
        createBall(1);
        createPlayer(22);
        window.setInterval(update, 20, soccerfield); //alle 20 ms updaten
    }
    function createReferee(_nReferee) {
        for (let i = 0; i < _nReferee; i++) {
            let referee = new Soccer.Referee(); //Name der Subklasse, neuer Rerefee wird erstellt
            moveables.push(referee); //wird in das players array gepusht
        }
    }
    function createLinesman(_nLinesman) {
        for (let i = 0; i < _nLinesman; i++) {
            let linesman = new Soccer.Linesman();
            moveables.push(linesman);
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
            let player = new Soccer.Player();
            moveables.push(player);
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
    }
})(Soccer || (Soccer = {}));
/* if (i == 0) { */
//let linesman: Linesman = new Linesman({x: 800,y:  0}); //geht noch nicht
/*  let linesman: Linesman = new Linesman();
 moveables.push(linesman); */
/* if (i == 1) {
let linesman: Linesman = new Linesman({x: 800,y:  580});
moveables.push(linesman);
} */ 
//# sourceMappingURL=soccer.js.map