"use strict";
var BlumenwieseL09;
(function (BlumenwieseL09) {
    window.addEventListener("load", handleLoad);
    BlumenwieseL09.golden = 0.62;
    let flowers = [];
    let sunFlowers = [];
    let bees = [];
    let clouds = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        BlumenwieseL09.crc2 = canvas.getContext("2d");
        let horizon = BlumenwieseL09.crc2.canvas.height * BlumenwieseL09.golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 800, y: 250 });
        drawMountains(posMountains, 75, 200, "#8c8c8c", "white");
        drawMountains(posMountains, 50, 150, "#8c8c8c", "lightgrey");
        drawFence({ x: 0, y: 500 });
        drawField();
        drawTree({ x: 280, y: 480 });
        drawBeeHouse({ x: 850, y: 500 });
        let background = BlumenwieseL09.crc2.getImageData(0, 0, 1000, 900);
        drawCloud(1);
        drawSunflower(5);
        drawFlower(20);
        drawBee(15);
        window.setInterval(update, 20, background);
    }
    function drawBeeHouse(_position) {
        BlumenwieseL09.crc2.save();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.rect(_position.x, _position.y, 100, 80);
        BlumenwieseL09.crc2.fillStyle = "#664229";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 30, _position.y + 20, 10, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 50, _position.y + 20, 10, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 70, _position.y + 20, 10, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 70, _position.y + 40, 10, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 50, _position.y + 40, 10, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 30, _position.y + 40, 10, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fillStyle = ("#D2B48C");
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        //Dach
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.moveTo(850, 500);
        BlumenwieseL09.crc2.lineTo(950, 500);
        BlumenwieseL09.crc2.lineTo(900, 460);
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.fillStyle = "black";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.strokeStyle = "black";
        BlumenwieseL09.crc2.stroke();
    }
    function drawTree(_position) {
        //first tree
        BlumenwieseL09.crc2.save();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.rect(_position.x, _position.y, 20, 100);
        BlumenwieseL09.crc2.fillStyle = "RGB(94,47,0)";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.moveTo(220, 500);
        BlumenwieseL09.crc2.lineTo(360, 500);
        BlumenwieseL09.crc2.lineTo(290, 400);
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.fillStyle = "RGB(85,107,47)";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.strokeStyle = "RGB(85,107,47)";
        BlumenwieseL09.crc2.stroke();
        BlumenwieseL09.crc2.moveTo(230, 440);
        BlumenwieseL09.crc2.lineTo(350, 440);
        BlumenwieseL09.crc2.lineTo(290, 330);
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.fillStyle = "RGB(85,107,47)";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.stroke();
        BlumenwieseL09.crc2.restore();
        BlumenwieseL09.crc2.closePath();
        //second tree ------ nicht mehr wie im Activity Diagram
        BlumenwieseL09.crc2.save();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.rect(_position.x + 200, _position.y - 20, 20, 120);
        BlumenwieseL09.crc2.fillStyle = "RGB(94,47,0)";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.moveTo(_position.x + 210, _position.y + 30);
        BlumenwieseL09.crc2.lineTo(_position.x + 250, _position.y - 30);
        BlumenwieseL09.crc2.lineWidth = 10;
        BlumenwieseL09.crc2.fillStyle = "RGB(94,47,0)";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.strokeStyle = "RGB(94,47,0)";
        BlumenwieseL09.crc2.stroke();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.fillStyle = "#487047";
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 150, _position.y - 100, 45, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 200, _position.y - 50, 40, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 250, _position.y - 60, 40, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 220, _position.y - 150, 50, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.arc(_position.x + 200, _position.y - 100, 50, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        //third tree
        BlumenwieseL09.crc2.save();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.rect(_position.x + 400, _position.y, 20, 100);
        BlumenwieseL09.crc2.fillStyle = "RGB(94,47,0)";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.moveTo(620, 500);
        BlumenwieseL09.crc2.lineTo(760, 500);
        BlumenwieseL09.crc2.lineTo(690, 400);
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.fillStyle = "RGB(85,107,47)";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.strokeStyle = "RGB(85,107,47)";
        BlumenwieseL09.crc2.stroke();
        BlumenwieseL09.crc2.moveTo(630, 440);
        BlumenwieseL09.crc2.lineTo(750, 440);
        BlumenwieseL09.crc2.lineTo(690, 330);
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.fillStyle = "RGB(85,107,47)";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.stroke();
        BlumenwieseL09.crc2.restore();
        BlumenwieseL09.crc2.closePath();
    }
    function drawFlower(nFlower) {
        for (let i = 0; i < nFlower; i++) {
            let flower = new BlumenwieseL09.Flower(); //neue BLume erstellen, wird in array gepusht
            flowers.push(flower);
        }
    }
    function drawSunflower(_nSunflower) {
        for (let i = 0; i < _nSunflower; i++) {
            let sunflower = new BlumenwieseL09.SunFlower();
            sunFlowers.push(sunflower);
        }
    }
    function drawBee(_nBees) {
        for (let i = 0; i < _nBees; i++) {
            let bee = new BlumenwieseL09.Bee();
            bees.push(bee);
        }
    }
    function drawCloud(_nClouds) {
        for (let i = 0; i < _nClouds; i++) {
            let cloud = new BlumenwieseL09.Cloud();
            clouds.push(cloud);
        }
    }
    function drawBackground() {
        let gradient = BlumenwieseL09.crc2.createLinearGradient(0, 0, 0, BlumenwieseL09.crc2.canvas.height);
        gradient.addColorStop(0, "RGB(176,196,222)");
        gradient.addColorStop(BlumenwieseL09.golden, "RGB(255,127,80)");
        gradient.addColorStop(1, "HSL(100, 100%, 30%)");
        BlumenwieseL09.crc2.fillStyle = gradient;
        BlumenwieseL09.crc2.fillRect(0, 0, BlumenwieseL09.crc2.canvas.width, BlumenwieseL09.crc2.canvas.height);
    }
    function drawField() {
        let gradient = BlumenwieseL09.crc2.createLinearGradient(0, 0, 100, 1000);
        gradient.addColorStop(0, "RGB(189,183,107)");
        gradient.addColorStop(1, "RGB(85,107,47)");
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.moveTo(0, 550);
        BlumenwieseL09.crc2.lineTo(1000, 550);
        BlumenwieseL09.crc2.lineTo(1000, 1000);
        BlumenwieseL09.crc2.lineTo(0, 1000);
        BlumenwieseL09.crc2.fillStyle = gradient;
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.strokeStyle = "grey";
        BlumenwieseL09.crc2.stroke();
        BlumenwieseL09.crc2.closePath();
        BlumenwieseL09.crc2.stroke();
    }
    function drawSun(_position) {
        let r1 = 90;
        let r2 = 200;
        let gradient = BlumenwieseL09.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(30, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(20, 60%, 70%, 0)");
        BlumenwieseL09.crc2.save();
        BlumenwieseL09.crc2.translate(_position.x, _position.y);
        BlumenwieseL09.crc2.fillStyle = gradient;
        BlumenwieseL09.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        BlumenwieseL09.crc2.save();
        BlumenwieseL09.crc2.translate(_position.x, _position.y);
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.moveTo(0, 0);
        BlumenwieseL09.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            BlumenwieseL09.crc2.lineTo(x, y);
        } while (x < BlumenwieseL09.crc2.canvas.width);
        BlumenwieseL09.crc2.lineTo(x, 0);
        BlumenwieseL09.crc2.closePath();
        let gradient = BlumenwieseL09.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        BlumenwieseL09.crc2.fillStyle = gradient;
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.restore();
    }
    function drawFence(_position) {
        BlumenwieseL09.crc2.save();
        BlumenwieseL09.crc2.beginPath();
        BlumenwieseL09.crc2.rect(_position.x, _position.y + 10, 1000, 5);
        BlumenwieseL09.crc2.rect(_position.x, _position.y + 30, 1000, 5);
        BlumenwieseL09.crc2.rect(_position.x + 50, _position.y, 5, 50);
        BlumenwieseL09.crc2.rect(_position.x + 150, _position.y, 5, 50);
        BlumenwieseL09.crc2.rect(_position.x + 250, _position.y, 5, 50);
        BlumenwieseL09.crc2.rect(_position.x + 350, _position.y, 5, 50);
        BlumenwieseL09.crc2.rect(_position.x + 450, _position.y, 5, 50);
        BlumenwieseL09.crc2.rect(_position.x + 550, _position.y, 5, 50);
        BlumenwieseL09.crc2.rect(_position.x + 650, _position.y, 5, 50);
        BlumenwieseL09.crc2.rect(_position.x + 750, _position.y, 5, 50);
        BlumenwieseL09.crc2.rect(_position.x + 850, _position.y, 5, 50);
        BlumenwieseL09.crc2.rect(_position.x + 950, _position.y, 5, 50);
        BlumenwieseL09.crc2.fillStyle = "RGB(94,47,0)";
        BlumenwieseL09.crc2.fill();
        BlumenwieseL09.crc2.closePath();
    }
    function update(_background) {
        console.log("update");
        BlumenwieseL09.crc2.putImageData(_background, 0, 0);
        for (let cloud of clouds) {
            cloud.move(1);
            cloud.drawCloud();
        }
        for (let flower of flowers) {
            flower.move(1);
            flower.drawFlower();
        }
        for (let sunflower of sunFlowers) {
            sunflower.move(1);
            sunflower.drawSunflower();
        }
        for (let bee of bees) {
            bee.move(1);
            bee.drawBee();
        }
    }
})(BlumenwieseL09 || (BlumenwieseL09 = {}));
//# sourceMappingURL=blumenwiese09.js.map