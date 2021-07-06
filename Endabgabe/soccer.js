"use strict";
var Soccer;
(function (Soccer) {
    window.addEventListener("load", handleLoad);
    Soccer.golden = 0.62;
    //let players: Player[] = [];
    let moveables = [];
    /*  interface VectorMain {
         x: number;
         y: number;
     } */
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Soccer.crc2 = canvas.getContext("2d");
        drawBackground();
        drawGate();
        drawLines();
        let background = Soccer.crc2.getImageData(0, 0, 1000, 900);
        createReferee(1);
        createLinesman(2);
        window.setInterval(update, 20, background);
    }
    function createReferee(nReferee) {
        for (let i = 0; i < nReferee; i++) {
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
    function drawBackground() {
        let gradient = Soccer.crc2.createLinearGradient(0, 0, 0, Soccer.crc2.canvas.height);
        gradient.addColorStop(1, "#4c8527");
        Soccer.crc2.fillStyle = gradient;
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
        Soccer.crc2.lineTo(450, 600);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        Soccer.crc2.stroke();
        //Kreis mitte
        Soccer.crc2.beginPath();
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.arc(450, 300, 100, 0, 2 * Math.PI);
        Soccer.crc2.closePath();
        Soccer.crc2.stroke();
        //Rect gate right
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(900, 140);
        Soccer.crc2.lineTo(750, 140);
        Soccer.crc2.lineTo(750, 460);
        Soccer.crc2.lineTo(900, 460);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        Soccer.crc2.stroke();
        //Rect gate left
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(0, 140);
        Soccer.crc2.lineTo(150, 140);
        Soccer.crc2.lineTo(150, 460);
        Soccer.crc2.lineTo(0, 460);
        Soccer.crc2.strokeStyle = "white";
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
        Soccer.crc2.fillStyle = "white";
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        //Punkt rechts
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(800, 300, 5, 0, 2 * Math.PI);
        Soccer.crc2.fillStyle = "white";
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        //Halbkreis
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(130, 300, 60, 5.05, 2.39 * Math.PI);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //Halbkreis rechts
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(770, 300, 60, 1.9, 1.39 * Math.PI);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
    }
    function update(_background) {
        console.log("update");
        Soccer.crc2.putImageData(_background, 0, 0);
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1);
        }
    }
})(Soccer || (Soccer = {}));
//# sourceMappingURL=soccer.js.map