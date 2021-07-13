/*Code mit Hilfe von Julia Käppeler und Rebecca Räschke erstellt

Endabgabe: Fußballspiel
Name: Karen Josten
Matrikelnummer: 265754
Datum: 19.07.2021*/

namespace Soccer {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let moveables: Moveable[] = [];
    let formArray: string[] = [];

    let form: HTMLElement;
    let start: HTMLElement;
    //let userClick: HTMLElement;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        
        drawSoccerfield();
        drawGate();
        drawLines();

        let soccerfield: ImageData = crc2.getImageData(0, 0, 1000, 900);

        createReferee(1);
        createLinesman(1);
        createBall(1);

        form = <HTMLElement>document.querySelector("form");
        form.addEventListener("change", handleChange);

        start = <HTMLElement>document.querySelector("#start");
        start.addEventListener("click", createPlayer);

        /* userClick = <HTMLElement>document.querySelector("#userclick");
        userClick.addEventListener("click", getClickPosition); */

        //canvas.addEventListener("pointerup", switchPlayer);
        //oder so:
        //canvas.addEventListener(PLAYER_EVENT.CHANGE_PLAYER, changePlayer);

        window.setInterval(update, 15, soccerfield); 
    }

    function handleChange(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]); //alles in formData speichern
        formArray = [];
        for (let entry of formData) {//entry -> jeder Eintrag soll durchgegangen werden der Form Liste
            formArray.push(String(entry[1]));
        }            
    }

   /*  function changePlayer(): void {
        //
    } */

    function createReferee(_nReferee: number): void {
        for (let i: number = 0; i < _nReferee; i++) {
            let referee: Referee = new Referee(); //Name der Subklasse, neuer Rerefee wird erstellt
            moveables.push(referee); //wird in das players array gepusht
        }
    }

    function createLinesman(_nLinesman: number): void {
        for (let i: number = 0; i < _nLinesman; i++) {
            let firstLinesman: Linesman = new Linesman();
            firstLinesman.position.x = 900 * Math.random(); // setzt position.x von Linesman
            firstLinesman.position.y = 10;
            firstLinesman.velocity.x = Math.random();
            firstLinesman.velocity.y = 0;
            moveables.push(firstLinesman); //Werte des ersten Linienrichters in das Array pushen

            let secondLinesman: Linesman = new Linesman();
            moveables.push(secondLinesman);
        }
    }

    function createBall(_nBall: number): void {
        for (let i: number = 0; i < _nBall; i++) {
            let ball: Ball = new Ball();
            moveables.push(ball);
        }
    }

    /* function getClickPosition(e: PointerEvent): void {
        let xPos: number = e.clientX - (Ball.position.x);
        let yPos: number = e.clientY - (Soccer.Ball.position.y);

        let translate3dValue: number = xPos + yPos;
        Ball.style.transform = translate3dValue;
    } */

    function getRandomVelocity(_min: number, _max: number): number {
        let velocity: number = _max - _min; 
        let random: number = Math.random();
        let multiplied: number = random * velocity;
        let floored: number = Math.floor(multiplied);
    
        let answer: number = floored + _min;
        return answer;
}

    function getRandomPrecision(_min: number, _max: number): number {
        let precision: number = _max - _min; 
        //random festlegen
        let random: number = Math.random();
        //Precision mit random Zahl multiplizieren
        let multiplied: number = random * precision;
        //Zahl runden
        let floored: number = Math.floor(multiplied);
        //gerundete Zahl mit minPräzision multiiplizieren
        let answer: number = floored + _min;
        //Wert zurückgeben
        return answer;
}

    function createPlayer(): void {

        for (let i: number = 0; i <= 21; i++) {

            //1 Spieler Team1
            if (i == 0) {
                let playerTeamOne1: Player = new Player();
                playerTeamOne1.colorTeamOne = formArray[0];
                playerTeamOne1.position.x = 100;
                playerTeamOne1.position.y = 100;
                moveables.push(playerTeamOne1);
                getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
            }

            //2 Spieler Team1
            if (i == 1) {
                let playerTeamOne2: Player = new Player();
                playerTeamOne2.colorTeamOne = formArray[0];
                playerTeamOne2.position.x = 150;
                playerTeamOne2.position.y = 300;
                moveables.push(playerTeamOne2);
                getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
            }

            //3 Spieler Team1
            if (i == 2) {
                let playerTeamOne3: Player = new Player();
                playerTeamOne3.colorTeamOne = formArray[0];
                playerTeamOne3.position.x = 100;
                playerTeamOne3.position.y = 500;
                moveables.push(playerTeamOne3);
            }

            //4 Spieler Team1
            if (i == 3) {
                let playerTeamOne4: Player = new Player();
                playerTeamOne4.colorTeamOne = formArray[0];
                playerTeamOne4.position.x = 250;
                playerTeamOne4.position.y = 50;
                moveables.push(playerTeamOne4);
            }

            //5 Spieler Team1
            if (i == 4) {
                let playerTeamOne5: Player = new Player();
                playerTeamOne5.colorTeamOne = formArray[0];
                playerTeamOne5.position.x = 250;
                playerTeamOne5.position.y = 200;
                moveables.push(playerTeamOne5);
            }

            //6 Spieler Team1
            if (i == 5) {
                let playerTeamOne6: Player = new Player();
                playerTeamOne6.colorTeamOne = formArray[0];
                playerTeamOne6.position.x = 250;
                playerTeamOne6.position.y = 400;
                moveables.push(playerTeamOne6);
            }

            //7 Spieler Team1
            if (i == 6) {
                let playerTeamOne7: Player = new Player();
                playerTeamOne7.colorTeamOne = formArray[0];
                playerTeamOne7.position.x = 250;
                playerTeamOne7.position.y = 550;
                moveables.push(playerTeamOne7);
            }

            //8 Spieler Team1
            if (i == 7) {
                let playerTeamOne8: Player = new Player();
                playerTeamOne8.colorTeamOne = formArray[0];
                playerTeamOne8.position.x = 350;
                playerTeamOne8.position.y = 150;
                moveables.push(playerTeamOne8);
            }

            //9 Spieler Team1
            if (i == 8) {
                let playerTeamOne9: Player = new Player();
                playerTeamOne9.colorTeamOne = formArray[0];
                playerTeamOne9.position.x = 350;
                playerTeamOne9.position.y = 300;
                moveables.push(playerTeamOne9);
            }

            //10 Spieler Team1
            if (i == 9) {
                let playerTeamOne10: Player = new Player();
                playerTeamOne10.colorTeamOne = formArray[0];
                playerTeamOne10.position.x = 350;
                playerTeamOne10.position.y = 450;
                moveables.push(playerTeamOne10);
            }

            //11 Spieler Team1
            if (i == 10) {
                let playerTeamOne11: Player = new Player();
                playerTeamOne11.colorTeamOne = formArray[0];
                playerTeamOne11.position.x = 450;
                playerTeamOne11.position.y = 550;
                moveables.push(playerTeamOne11);
            }

            //1 Spieler Team2
            if (i == 11) {
                let playerTeamTwo1: Player = new Player();
                playerTeamTwo1.colorTeamTwo = formArray[1];
                playerTeamTwo1.position.x = 450;
                playerTeamTwo1.position.y = 50;
                moveables.push(playerTeamTwo1);
            }

             //2 Spieler Team2
            if (i == 12) {
                let playerTeamTwo2: Player = new Player();
                playerTeamTwo2.colorTeamTwo = formArray[1];
                playerTeamTwo2.position.x = 550;
                playerTeamTwo2.position.y = 150;
                moveables.push(playerTeamTwo2);
            }

            //3 Spieler Team2
            if (i == 13) {
                let playerTeamTwo3: Player = new Player();
                playerTeamTwo3.colorTeamTwo = formArray[1];
                playerTeamTwo3.position.x = 550;
                playerTeamTwo3.position.y = 300;
                moveables.push(playerTeamTwo3);
            }

             //4 Spieler Team2
            if (i == 14) {
                let playerTeamTwo4: Player = new Player();
                playerTeamTwo4.colorTeamTwo = formArray[1];
                playerTeamTwo4.position.x = 550;
                playerTeamTwo4.position.y = 450;
                moveables.push(playerTeamTwo4);
            }

             //5 Spieler Team2
            if (i == 15) {
                let playerTeamTwo5: Player = new Player();
                playerTeamTwo5.colorTeamTwo = formArray[1];
                playerTeamTwo5.position.x = 650;
                playerTeamTwo5.position.y = 50;
                moveables.push(playerTeamTwo5);
            }

            //6 Spieler Team2
            if (i == 16) {
                let playerTeamTwo6: Player = new Player();
                playerTeamTwo6.colorTeamTwo = formArray[1];
                playerTeamTwo6.position.x = 650;
                playerTeamTwo6.position.y = 200;
                moveables.push(playerTeamTwo6);
            }

            //7 Spieler Team2
            if (i == 17) {
                let playerTeamTwo7: Player = new Player();
                playerTeamTwo7.colorTeamTwo = formArray[1];
                playerTeamTwo7.position.x = 650;
                playerTeamTwo7.position.y = 400;
                moveables.push(playerTeamTwo7);
            }

            //8 Spieler Team2
            if (i == 18) {
                let playerTeamTwo8: Player = new Player();
                playerTeamTwo8.colorTeamTwo = formArray[1];
                playerTeamTwo8.position.x = 650;
                playerTeamTwo8.position.y = 550;
                moveables.push(playerTeamTwo8);
            }

            //9 Spieler Team2
            if (i == 19) {
                let playerTeamTwo9: Player = new Player();
                playerTeamTwo9.colorTeamTwo = formArray[1];
                playerTeamTwo9.position.x = 800;
                playerTeamTwo9.position.y = 100;
                moveables.push(playerTeamTwo9);
            }

            //10 Spieler Team2
            if (i == 20) {
                let playerTeamTwo10: Player = new Player();
                playerTeamTwo10.colorTeamTwo = formArray[1];
                playerTeamTwo10.position.x = 750;
                playerTeamTwo10.position.y = 300;
                moveables.push(playerTeamTwo10);
            }

            //11 Spieler Team2
            if (i == 21) {
                let playerTeamTwo11: Player = new Player();
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

    function drawSoccerfield(): void {
        crc2.fillStyle = "#4c8527";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.fillStyle = "RGBA(62,90,44,0.5)";
        crc2.beginPath();
        crc2.rect(25, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(125, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(225, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(325, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(425, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(525, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(625, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(725, 0, 50, 600);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(825, 0, 50, 600);
        crc2.fill();
        crc2.closePath();
    }

    function drawGate(): void {

        //first gate
        crc2.beginPath();
        crc2.moveTo(0, 230);
        crc2.lineTo(60, 230);
        crc2.lineTo(60, 370);
        crc2.lineTo(0, 370);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();

        //second gate
        crc2.beginPath();
        crc2.moveTo(900, 230);
        crc2.lineTo(840, 230);
        crc2.lineTo(840, 370);
        crc2.lineTo(900, 370);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
    } 

    function drawLines(): void {

        //Linie mitte
        crc2.beginPath();
        crc2.moveTo(450, 0);
        crc2.lineTo(450, 600); // für x auch crc2.canvas.width / 2 --> 900/2 = 450 oder Variable festlegen für height und width(weniger schreiben)
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();

        //Kreis mitte
        crc2.beginPath();
        crc2.arc(450, 300, 100, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.closePath();

        //Rect gate right
        crc2.beginPath();
        crc2.moveTo(900, 140);
        crc2.lineTo(750, 140);
        crc2.lineTo(750, 460);
        crc2.lineTo(900, 460);
        crc2.stroke();
        crc2.closePath();
        
        //Rect gate left
        crc2.beginPath();
        crc2.moveTo(0, 140);
        crc2.lineTo(150, 140);
        crc2.lineTo(150, 460);
        crc2.lineTo(0, 460);
        crc2.stroke();
        crc2.closePath();

        //Punkt left
        crc2.beginPath();
        crc2.arc(100, 300, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        //Punkt mitte
        crc2.beginPath();
        crc2.arc(450, 300, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //Punkt rechts
        crc2.beginPath();
        crc2.arc(800, 300, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        //Halbkreis links
        crc2.beginPath();
        crc2.arc(130, 300, 60, 5.05, 2.39 *  Math.PI); 
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        //Halbkreis rechts
        crc2.beginPath();
        crc2.arc(770, 300, 60, 1.9, 1.39 *  Math.PI); 
        crc2.stroke();
        crc2.closePath();
    }

    function update(_soccerfield: ImageData): void {
        crc2.putImageData(_soccerfield, 0, 0);
        let posBall: Vector = Ball.position;

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
}
