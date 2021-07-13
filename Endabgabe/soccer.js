"use strict";
/*Code mit Hilfe von Julia Käppeler und Rebecca Räschke erstellt

Endabgabe: Fußballspiel
Name: Karen Josten
Matrikelnummer: 265754
Datum: 19.07.2021*/
var Soccer;
(function (Soccer) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let formArray = [];
    let form;
    let start;
    //let userClick: HTMLElement;
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
        form = document.querySelector("form");
        form.addEventListener("change", handleChange);
        start = document.querySelector("#start");
        start.addEventListener("click", createPlayer);
        /* userClick = <HTMLElement>document.querySelector("#userclick");
        userClick.addEventListener("click", getClickPosition); */
        //canvas.addEventListener("pointerup", switchPlayer);
        //oder so:
        //canvas.addEventListener(PLAYER_EVENT.CHANGE_PLAYER, changePlayer);
        window.setInterval(update, 15, soccerfield);
    }
    function handleChange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]); //alles in formData speichern
        formArray = [];
        for (let entry of formData) { //entry -> jeder Eintrag soll durchgegangen werden der Form Liste
            formArray.push(String(entry[1]));
        }
    }
    /*  function changePlayer(): void {
         //
     } */
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
    /* function getClickPosition(e: PointerEvent): void {
        let xPos: number = e.clientX - (Ball.position.x);
        let yPos: number = e.clientY - (Soccer.Ball.position.y);

        let translate3dValue: number = xPos + yPos;
        Ball.style.transform = translate3dValue;
    } */
    function getRandomVelocity(_min, _max) {
        let velocity = _max - _min;
        let random = Math.random();
        let multiplied = random * velocity;
        let floored = Math.floor(multiplied);
        let answer = floored + _min;
        return answer;
    }
    function getRandomPrecision(_min, _max) {
        let precision = _max - _min;
        //random festlegen
        let random = Math.random();
        //Precision mit random Zahl multiplizieren
        let multiplied = random * precision;
        //Zahl runden
        let floored = Math.floor(multiplied);
        //gerundete Zahl mit minPräzision multiiplizieren
        let answer = floored + _min;
        //Wert zurückgeben
        return answer;
    }
    function createPlayer() {
        for (let i = 0; i <= 21; i++) {
            //1 Spieler Team1
            if (i == 0) {
                let playerTeamOne1 = new Soccer.Player();
                playerTeamOne1.colorTeamOne = formArray[0];
                playerTeamOne1.position.x = 100;
                playerTeamOne1.position.y = 100;
                moveables.push(playerTeamOne1);
                getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
            }
            //2 Spieler Team1
            if (i == 1) {
                let playerTeamOne2 = new Soccer.Player();
                playerTeamOne2.colorTeamOne = formArray[0];
                playerTeamOne2.position.x = 150;
                playerTeamOne2.position.y = 300;
                moveables.push(playerTeamOne2);
                getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
            }
            //3 Spieler Team1
            if (i == 2) {
                let playerTeamOne3 = new Soccer.Player();
                playerTeamOne3.colorTeamOne = formArray[0];
                playerTeamOne3.position.x = 100;
                playerTeamOne3.position.y = 500;
                moveables.push(playerTeamOne3);
            }
            //4 Spieler Team1
            if (i == 3) {
                let playerTeamOne4 = new Soccer.Player();
                playerTeamOne4.colorTeamOne = formArray[0];
                playerTeamOne4.position.x = 250;
                playerTeamOne4.position.y = 50;
                moveables.push(playerTeamOne4);
            }
            //5 Spieler Team1
            if (i == 4) {
                let playerTeamOne5 = new Soccer.Player();
                playerTeamOne5.colorTeamOne = formArray[0];
                playerTeamOne5.position.x = 250;
                playerTeamOne5.position.y = 200;
                moveables.push(playerTeamOne5);
            }
            //6 Spieler Team1
            if (i == 5) {
                let playerTeamOne6 = new Soccer.Player();
                playerTeamOne6.colorTeamOne = formArray[0];
                playerTeamOne6.position.x = 250;
                playerTeamOne6.position.y = 400;
                moveables.push(playerTeamOne6);
            }
            //7 Spieler Team1
            if (i == 6) {
                let playerTeamOne7 = new Soccer.Player();
                playerTeamOne7.colorTeamOne = formArray[0];
                playerTeamOne7.position.x = 250;
                playerTeamOne7.position.y = 550;
                moveables.push(playerTeamOne7);
            }
            //8 Spieler Team1
            if (i == 7) {
                let playerTeamOne8 = new Soccer.Player();
                playerTeamOne8.colorTeamOne = formArray[0];
                playerTeamOne8.position.x = 350;
                playerTeamOne8.position.y = 150;
                moveables.push(playerTeamOne8);
            }
            //9 Spieler Team1
            if (i == 8) {
                let playerTeamOne9 = new Soccer.Player();
                playerTeamOne9.colorTeamOne = formArray[0];
                playerTeamOne9.position.x = 350;
                playerTeamOne9.position.y = 300;
                moveables.push(playerTeamOne9);
            }
            //10 Spieler Team1
            if (i == 9) {
                let playerTeamOne10 = new Soccer.Player();
                playerTeamOne10.colorTeamOne = formArray[0];
                playerTeamOne10.position.x = 350;
                playerTeamOne10.position.y = 450;
                moveables.push(playerTeamOne10);
            }
            //11 Spieler Team1
            if (i == 10) {
                let playerTeamOne11 = new Soccer.Player();
                playerTeamOne11.colorTeamOne = formArray[0];
                playerTeamOne11.position.x = 450;
                playerTeamOne11.position.y = 550;
                moveables.push(playerTeamOne11);
            }
            //1 Spieler Team2
            if (i == 11) {
                let playerTeamTwo1 = new Soccer.Player();
                playerTeamTwo1.colorTeamTwo = formArray[1];
                playerTeamTwo1.position.x = 450;
                playerTeamTwo1.position.y = 50;
                moveables.push(playerTeamTwo1);
            }
            //2 Spieler Team2
            if (i == 12) {
                let playerTeamTwo2 = new Soccer.Player();
                playerTeamTwo2.colorTeamTwo = formArray[1];
                playerTeamTwo2.position.x = 550;
                playerTeamTwo2.position.y = 150;
                moveables.push(playerTeamTwo2);
            }
            //3 Spieler Team2
            if (i == 13) {
                let playerTeamTwo3 = new Soccer.Player();
                playerTeamTwo3.colorTeamTwo = formArray[1];
                playerTeamTwo3.position.x = 550;
                playerTeamTwo3.position.y = 300;
                moveables.push(playerTeamTwo3);
            }
            //4 Spieler Team2
            if (i == 14) {
                let playerTeamTwo4 = new Soccer.Player();
                playerTeamTwo4.colorTeamTwo = formArray[1];
                playerTeamTwo4.position.x = 550;
                playerTeamTwo4.position.y = 450;
                moveables.push(playerTeamTwo4);
            }
            //5 Spieler Team2
            if (i == 15) {
                let playerTeamTwo5 = new Soccer.Player();
                playerTeamTwo5.colorTeamTwo = formArray[1];
                playerTeamTwo5.position.x = 650;
                playerTeamTwo5.position.y = 50;
                moveables.push(playerTeamTwo5);
            }
            //6 Spieler Team2
            if (i == 16) {
                let playerTeamTwo6 = new Soccer.Player();
                playerTeamTwo6.colorTeamTwo = formArray[1];
                playerTeamTwo6.position.x = 650;
                playerTeamTwo6.position.y = 200;
                moveables.push(playerTeamTwo6);
            }
            //7 Spieler Team2
            if (i == 17) {
                let playerTeamTwo7 = new Soccer.Player();
                playerTeamTwo7.colorTeamTwo = formArray[1];
                playerTeamTwo7.position.x = 650;
                playerTeamTwo7.position.y = 400;
                moveables.push(playerTeamTwo7);
            }
            //8 Spieler Team2
            if (i == 18) {
                let playerTeamTwo8 = new Soccer.Player();
                playerTeamTwo8.colorTeamTwo = formArray[1];
                playerTeamTwo8.position.x = 650;
                playerTeamTwo8.position.y = 550;
                moveables.push(playerTeamTwo8);
            }
            //9 Spieler Team2
            if (i == 19) {
                let playerTeamTwo9 = new Soccer.Player();
                playerTeamTwo9.colorTeamTwo = formArray[1];
                playerTeamTwo9.position.x = 800;
                playerTeamTwo9.position.y = 100;
                moveables.push(playerTeamTwo9);
            }
            //10 Spieler Team2
            if (i == 20) {
                let playerTeamTwo10 = new Soccer.Player();
                playerTeamTwo10.colorTeamTwo = formArray[1];
                playerTeamTwo10.position.x = 750;
                playerTeamTwo10.position.y = 300;
                moveables.push(playerTeamTwo10);
            }
            //11 Spieler Team2
            if (i == 21) {
                let playerTeamTwo11 = new Soccer.Player();
                playerTeamTwo11.colorTeamTwo = formArray[1];
                playerTeamTwo11.position.x = 800;
                playerTeamTwo11.position.y = 500;
                moveables.push(playerTeamTwo11);
            }
        }
        //hide form Elements and start game
        form.classList.add("hidden");
        start.classList.add("hidden");
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
        //second gate
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(900, 230);
        Soccer.crc2.lineTo(840, 230);
        Soccer.crc2.lineTo(840, 370);
        Soccer.crc2.lineTo(900, 370);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
    }
    function drawLines() {
        //Linie mitte
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(450, 0);
        Soccer.crc2.lineTo(450, 600); // für x auch crc2.canvas.width / 2 --> 900/2 = 450 oder Variable festlegen für height und width(weniger schreiben)
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //Kreis mitte
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(450, 300, 100, 0, 2 * Math.PI);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //Rect gate right
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(900, 140);
        Soccer.crc2.lineTo(750, 140);
        Soccer.crc2.lineTo(750, 460);
        Soccer.crc2.lineTo(900, 460);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //Rect gate left
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(0, 140);
        Soccer.crc2.lineTo(150, 140);
        Soccer.crc2.lineTo(150, 460);
        Soccer.crc2.lineTo(0, 460);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
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
        let posBall = Soccer.Ball.position;
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1);
            moveable.moveToBall(posBall);
        }
    }
    /* function switchPlayer(_event: PointerEvent): void {

        let newPlayer: number = Math.floor(Math.random() * 2);
        // tslint:disable-next-line: no-unused-expression
        let position: Vector = new Vector(_event.clientX, _event.clientY);

        switch (newPlayer) {
            case 0:
                let player: Player = new Player(position); // Neuer Spieler
                moveables.push(player);
                break;
        }
    } */
})(Soccer || (Soccer = {}));
//# sourceMappingURL=soccer.js.map