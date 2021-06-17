"use strict";
var BlumenwieseL10;
(function (BlumenwieseL10) {
    window.addEventListener("load", handleLoad);
    BlumenwieseL10.golden = 0.62;
    let flowers = [];
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        BlumenwieseL10.crc2 = canvas.getContext("2d");
        let horizon = BlumenwieseL10.crc2.canvas.height * BlumenwieseL10.golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 800, y: 250 });
        drawMountains(posMountains, 75, 200, "#8c8c8c", "white");
        drawMountains(posMountains, 50, 150, "#8c8c8c", "lightgrey");
        drawFence({ x: 0, y: 500 });
        drawField();
        drawTree({ x: 280, y: 480 });
        drawBeeHouse({ x: 850, y: 500 });
        let background = BlumenwieseL10.crc2.getImageData(0, 0, 1000, 900);
        createSunflower(5);
        createFlower(20);
        createClouds();
        createBee(20);
        window.setInterval(update, 20, background);
    }
    function drawBeeHouse(_position) {
        BlumenwieseL10.crc2.save();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.rect(_position.x, _position.y, 100, 80);
        BlumenwieseL10.crc2.fillStyle = "#664229";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 30, _position.y + 20, 10, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 50, _position.y + 20, 10, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 70, _position.y + 20, 10, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 70, _position.y + 40, 10, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 50, _position.y + 40, 10, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 30, _position.y + 40, 10, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        //Dach
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.moveTo(850, 500);
        BlumenwieseL10.crc2.lineTo(950, 500);
        BlumenwieseL10.crc2.lineTo(900, 460);
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.fillStyle = "black";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.strokeStyle = "black";
        BlumenwieseL10.crc2.stroke();
    }
    function drawTree(_position) {
        //first tree
        BlumenwieseL10.crc2.save();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.rect(_position.x, _position.y, 20, 100);
        BlumenwieseL10.crc2.fillStyle = "RGB(94,47,0)";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.moveTo(220, 500);
        BlumenwieseL10.crc2.lineTo(360, 500);
        BlumenwieseL10.crc2.lineTo(290, 400);
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.fillStyle = "RGB(85,107,47)";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.strokeStyle = "RGB(85,107,47)";
        BlumenwieseL10.crc2.stroke();
        BlumenwieseL10.crc2.moveTo(230, 440);
        BlumenwieseL10.crc2.lineTo(350, 440);
        BlumenwieseL10.crc2.lineTo(290, 330);
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.fillStyle = "RGB(85,107,47)";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.stroke();
        BlumenwieseL10.crc2.restore();
        BlumenwieseL10.crc2.closePath();
        //second tree ------ nicht mehr wie im Activity Diagram
        BlumenwieseL10.crc2.save();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.rect(_position.x + 200, _position.y - 20, 20, 120);
        BlumenwieseL10.crc2.fillStyle = "RGB(94,47,0)";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.moveTo(_position.x + 210, _position.y + 30);
        BlumenwieseL10.crc2.lineTo(_position.x + 250, _position.y - 30);
        BlumenwieseL10.crc2.lineWidth = 10;
        BlumenwieseL10.crc2.fillStyle = "RGB(94,47,0)";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.strokeStyle = "RGB(94,47,0)";
        BlumenwieseL10.crc2.stroke();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.fillStyle = "#487047";
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 150, _position.y - 100, 45, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 200, _position.y - 50, 40, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 250, _position.y - 60, 40, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 220, _position.y - 150, 50, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.arc(_position.x + 200, _position.y - 100, 50, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        //third tree
        BlumenwieseL10.crc2.save();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.rect(_position.x + 400, _position.y, 20, 100);
        BlumenwieseL10.crc2.fillStyle = "RGB(94,47,0)";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.moveTo(620, 500);
        BlumenwieseL10.crc2.lineTo(760, 500);
        BlumenwieseL10.crc2.lineTo(690, 400);
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.fillStyle = "RGB(85,107,47)";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.strokeStyle = "RGB(85,107,47)";
        BlumenwieseL10.crc2.stroke();
        BlumenwieseL10.crc2.moveTo(630, 440);
        BlumenwieseL10.crc2.lineTo(750, 440);
        BlumenwieseL10.crc2.lineTo(690, 330);
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.fillStyle = "RGB(85,107,47)";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.stroke();
        BlumenwieseL10.crc2.restore();
        BlumenwieseL10.crc2.closePath();
    }
    function createFlower(nFlower) {
        for (let i = 0; i < nFlower; i++) {
            let smallflower = new BlumenwieseL10.SmallFlower(); //Name der Subklasse, neue Blume wird erstellt
            flowers.push(smallflower); //wird in das flowers array gepusht
        }
    }
    function createSunflower(_nSunflower) {
        for (let i = 0; i < _nSunflower; i++) {
            let sunflower = new BlumenwieseL10.SunFlower();
            flowers.push(sunflower);
        }
    }
    function createBee(_nBees) {
        for (let i = 0; i < _nBees; i++) {
            let bee = new BlumenwieseL10.Bee();
            moveables.push(bee);
        }
    }
    function createClouds() {
        let cloud = new BlumenwieseL10.Cloud();
        moveables.push(cloud);
    }
    function drawBackground() {
        let gradient = BlumenwieseL10.crc2.createLinearGradient(0, 0, 0, BlumenwieseL10.crc2.canvas.height);
        gradient.addColorStop(0, "RGB(176,196,222)");
        gradient.addColorStop(BlumenwieseL10.golden, "RGB(255,127,80)");
        gradient.addColorStop(1, "HSL(100, 100%, 30%)");
        BlumenwieseL10.crc2.fillStyle = gradient;
        BlumenwieseL10.crc2.fillRect(0, 0, BlumenwieseL10.crc2.canvas.width, BlumenwieseL10.crc2.canvas.height);
    }
    function drawField() {
        let gradient = BlumenwieseL10.crc2.createLinearGradient(0, 0, 100, 1000);
        gradient.addColorStop(0, "RGB(189,183,107)");
        gradient.addColorStop(1, "RGB(85,107,47)");
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.moveTo(0, 550);
        BlumenwieseL10.crc2.lineTo(1000, 550);
        BlumenwieseL10.crc2.lineTo(1000, 1000);
        BlumenwieseL10.crc2.lineTo(0, 1000);
        BlumenwieseL10.crc2.fillStyle = gradient;
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.strokeStyle = "grey";
        BlumenwieseL10.crc2.stroke();
        BlumenwieseL10.crc2.closePath();
        BlumenwieseL10.crc2.stroke();
    }
    function drawSun(_position) {
        let r1 = 90;
        let r2 = 200;
        let gradient = BlumenwieseL10.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(30, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(20, 60%, 70%, 0)");
        BlumenwieseL10.crc2.save();
        BlumenwieseL10.crc2.translate(_position.x, _position.y);
        BlumenwieseL10.crc2.fillStyle = gradient;
        BlumenwieseL10.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        BlumenwieseL10.crc2.save();
        BlumenwieseL10.crc2.translate(_position.x, _position.y);
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.moveTo(0, 0);
        BlumenwieseL10.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            BlumenwieseL10.crc2.lineTo(x, y);
        } while (x < BlumenwieseL10.crc2.canvas.width);
        BlumenwieseL10.crc2.lineTo(x, 0);
        BlumenwieseL10.crc2.closePath();
        let gradient = BlumenwieseL10.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        BlumenwieseL10.crc2.fillStyle = gradient;
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.restore();
    }
    function drawFence(_position) {
        BlumenwieseL10.crc2.save();
        BlumenwieseL10.crc2.beginPath();
        BlumenwieseL10.crc2.rect(_position.x, _position.y + 10, 1000, 5);
        BlumenwieseL10.crc2.rect(_position.x, _position.y + 30, 1000, 5);
        BlumenwieseL10.crc2.rect(_position.x + 50, _position.y, 5, 50);
        BlumenwieseL10.crc2.rect(_position.x + 150, _position.y, 5, 50);
        BlumenwieseL10.crc2.rect(_position.x + 250, _position.y, 5, 50);
        BlumenwieseL10.crc2.rect(_position.x + 350, _position.y, 5, 50);
        BlumenwieseL10.crc2.rect(_position.x + 450, _position.y, 5, 50);
        BlumenwieseL10.crc2.rect(_position.x + 550, _position.y, 5, 50);
        BlumenwieseL10.crc2.rect(_position.x + 650, _position.y, 5, 50);
        BlumenwieseL10.crc2.rect(_position.x + 750, _position.y, 5, 50);
        BlumenwieseL10.crc2.rect(_position.x + 850, _position.y, 5, 50);
        BlumenwieseL10.crc2.rect(_position.x + 950, _position.y, 5, 50);
        BlumenwieseL10.crc2.fillStyle = "RGB(94,47,0)";
        BlumenwieseL10.crc2.fill();
        BlumenwieseL10.crc2.closePath();
    }
    function update(_background) {
        console.log("update");
        BlumenwieseL10.crc2.putImageData(_background, 0, 0);
        for (let flower of flowers) {
            flower.fillNectar();
            flower.draw();
        }
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1 / 50);
        }
    }
})(BlumenwieseL10 || (BlumenwieseL10 = {}));
//# sourceMappingURL=blumenwiese09.js.map