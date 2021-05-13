"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", start);
    let crc2;
    let golden = 0.62;
    function start(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 800, y: 250 });
        drawCloud({ x: 700, y: 400 }, { x: 900, y: 100 });
        drawMountains(posMountains, 75, 200, "#8c8c8c", "white");
        drawMountains(posMountains, 50, 150, "#8c8c8c", "lightgrey");
        drawFence({ x: 0, y: 500 });
        drawField();
        drawBush({ x: 0, y: 540 });
        drawTree({ x: 280, y: 480 });
        drawSunflower({ x: 0, y: 520 });
        drawFlower({ x: 0, y: 580 });
    }
    function drawTree(_position) {
        //first tree
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x, _position.y, 20, 100);
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(220, 500);
        crc2.lineTo(360, 500);
        crc2.lineTo(290, 400);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.strokeStyle = "RGB(85,107,47)";
        crc2.stroke();
        crc2.moveTo(230, 440);
        crc2.lineTo(350, 440);
        crc2.lineTo(290, 330);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
        //second tree
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x + 200, _position.y, 20, 100);
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(400, 500);
        crc2.lineTo(580, 500);
        crc2.lineTo(490, 370);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.strokeStyle = "RGB(85,107,47)";
        crc2.stroke();
        crc2.moveTo(420, 420);
        crc2.lineTo(560, 420);
        crc2.lineTo(490, 300);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
        //third tree
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x + 400, _position.y, 20, 100);
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(620, 500);
        crc2.lineTo(760, 500);
        crc2.lineTo(690, 400);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.strokeStyle = "RGB(85,107,47)";
        crc2.stroke();
        crc2.moveTo(630, 440);
        crc2.lineTo(750, 440);
        crc2.lineTo(690, 330);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
    }
    function drawFlower(_position) {
        for (let i = 0; i < 20; i++) {
            let randomX = 1000 * Math.random();
            let randomY = 270 * Math.random();
            let colors = ["#f9d5e5", "#eeac99", "#e06377", "#c83349", "#d6d4e0", "#600307", "#b90b21", "#d71536", "#e5174d", "#FFFFE0"];
            let yellowColors = ["#FFFFCC", "#FFFF99", "#F0E68C", "#ffbc40", "#f0c265", "#e2a323", "#ffbc40"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            let randomYellowColor = yellowColors[Math.floor(Math.random() * yellowColors.length)];
            crc2.beginPath();
            crc2.rect(_position.x + randomX, _position.y + randomY, 5, 50);
            crc2.fillStyle = "#487047";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(_position.x + 14 + randomX, _position.y + 32 + randomY, 8, 0, 1 * Math.PI);
            crc2.arc(_position.x - 7 + randomX, _position.y + 22 + randomY, 10, 0, 1 * Math.PI);
            crc2.fillStyle = "#487047";
            crc2.fill();
            crc2.closePath();
            //colorful flowers
            crc2.beginPath();
            crc2.arc(_position.x + 10 + randomX, _position.y + randomY, 10, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX, _position.y + 10 + randomY, 10, 0, 2 * Math.PI);
            crc2.arc(_position.x - 10 + randomX, _position.y + randomY, 10, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX, _position.y - 10 + randomY, 10, 0, 2 * Math.PI);
            crc2.fillStyle = randomColor;
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(_position.x + randomX, _position.y + randomY, 8, 0, 2 * Math.PI);
            crc2.fillStyle = randomYellowColor;
            crc2.fill();
            crc2.closePath();
        }
    }
    function drawSunflower(_position) {
        for (let i = 0; i < 5; i++) {
            let randomX = 1000 * Math.random();
            crc2.beginPath();
            crc2.rect(_position.x + randomX, _position.y, 5, 80);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(_position.x + 14 + randomX, _position.y + 40, 8, 0, 1 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();
            //petals
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.ellipse(_position.x + randomX, _position.y + 10, 5, 10, 0, 20, 40);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(_position.x + randomX + 10, _position.y + 5, 5, 10, 2, 20, 40);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(_position.x + randomX + 10, _position.y - 8, 5, 10, 1, 20, 40);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(_position.x + randomX - 11, _position.y - 5, 5, 10, 5, 20, 40);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(_position.x + randomX - 10, _position.y + 6, 5, 10, 7, 20, 40);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(_position.x - 2 + randomX, _position.y - 11, 5, 10, 0, 20, 40);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(_position.x + randomX, _position.y, 9, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
        }
    }
    function drawBush(_position) {
        for (let i = 0; i < 5; i++) {
            let randomX = 1000 * Math.random();
            let colors = ["#487047", "#5f985e", "#314a30", "#898e4b"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            crc2.beginPath();
            crc2.arc(_position.x + 25 + randomX, _position.y + 5, 20, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX, _position.y + 10, 20, 0, 2 * Math.PI);
            crc2.arc(_position.x - 20 + randomX, _position.y - 5, 20, 0, 2 * Math.PI);
            crc2.arc(_position.x + 10 + randomX, _position.y - 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = randomColor;
            crc2.fill();
            crc2.closePath();
        }
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "RGB(176,196,222)");
        gradient.addColorStop(golden, "RGB(255,127,80)");
        gradient.addColorStop(1, "HSL(100, 100%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawField() {
        let gradient = crc2.createLinearGradient(0, 0, 100, 1000);
        gradient.addColorStop(0, "RGB(189,183,107)");
        gradient.addColorStop(1, "RGB(85,107,47)");
        crc2.beginPath();
        crc2.moveTo(0, 550);
        crc2.lineTo(1000, 550);
        crc2.lineTo(1000, 1000);
        crc2.lineTo(0, 1000);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.strokeStyle = "grey";
        crc2.stroke();
        crc2.closePath();
        crc2.stroke();
    }
    function drawSun(_position) {
        let r1 = 90;
        let r2 = 200;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(40, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(30, 100%, 70%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        let nParticles = 50;
        let radiusParticle = 100;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawFence(_position) {
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x, _position.y + 10, 1000, 5);
        crc2.rect(_position.x, _position.y + 30, 1000, 5);
        crc2.rect(_position.x + 50, _position.y, 5, 50);
        crc2.rect(_position.x + 150, _position.y, 5, 50);
        crc2.rect(_position.x + 250, _position.y, 5, 50);
        crc2.rect(_position.x + 350, _position.y, 5, 50);
        crc2.rect(_position.x + 450, _position.y, 5, 50);
        crc2.rect(_position.x + 550, _position.y, 5, 50);
        crc2.rect(_position.x + 650, _position.y, 5, 50);
        crc2.rect(_position.x + 750, _position.y, 5, 50);
        crc2.rect(_position.x + 850, _position.y, 5, 50);
        crc2.rect(_position.x + 950, _position.y, 5, 50);
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=blumenwiese.js.map