/*Code mit Hilfe von Julia Käppeler und Rebecca Räschke erstellt

Endabgabe: Fußballspiel
Name: Karen Josten
Matrikelnummer: 265754
Datum: 19.07.2021*/

namespace Soccer {
    export enum Action { //
        CHASE_BALL,
        STOP_GAME,
        CHANGE_PLAYER,
        FLY_BALL
    }

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let moveables: Moveable[] = [];
    //color etc
    let formArray: string[] = [];
    //team 1
    let formArray1: string[] = [];
    //team 2
    let formArray2: string[] = [];
    let form: HTMLElement;
    let start: HTMLElement;
    let deletePlayer: HTMLButtonElement;
    let addPlayer: HTMLButtonElement;
    let playerStatsTeamOne: HTMLElement;
    let playerStatsTeamTwo: HTMLElement;
    let ball: Ball;

    let isSetTimer: boolean = false; //is timer set?
    export let playerAction: Action = Action.CHASE_BALL;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        
        drawSoccerfield();
        drawGate();
        drawLines();

        let soccerfield: ImageData = crc2.getImageData(0, 0, 900, 650);

        createReferee(1);
        createLinesman(1);
        ball = new Ball(); //create 1 ball
        moveables.push(ball); //push ball in moveables

        form = <HTMLElement>document.querySelector("form");
        form.addEventListener("change", handleChange);

        start = <HTMLElement>document.querySelector("#start");
        start.addEventListener("click", createPlayer);

        deletePlayer = <HTMLButtonElement>document.querySelector("#delete"); 
        deletePlayer.addEventListener("click", getPlayerStatsTeamOne);

        addPlayer = <HTMLButtonElement>document.querySelector("#addplayer"); 

        playerStatsTeamOne = <HTMLElement>document.querySelector("#playerStatsTeamOne");
        playerStatsTeamOne.addEventListener("change", getPlayerStatsTeamOne);

        playerStatsTeamTwo = <HTMLElement>document.querySelector("#playerStatsTeamTwo");
        playerStatsTeamTwo.addEventListener("change", getPlayerStatsTeamTwo);

        canvas.addEventListener("click", getClickPosition);
        window.addEventListener("keydown", playSound);

        
        //animate image
        window.setInterval(update, 20, soccerfield); 
    }

    function playSound(_event: KeyboardEvent): void {
           let audio: HTMLAudioElement = new Audio("crowd.wav");
           audio.play();
    }

    function handleChange(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]); //safe in form Data
        formArray = [];
        for (let entry of formData) {//entry -> jeder Eintrag soll durchgegangen werden der Form Liste
            //push elements in formArray
            formArray.push(String(entry[1])); 
        }            
    }

    function getPlayerStatsTeamOne(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[1]); //safe in form Data
        formArray1 = [];
        for (let entry of formData) {//entry -> jeder Eintrag soll durchgegangen werden der Form Liste
            formArray1.push(String(entry[1])); //Einträge ins formArray pushen
        }        
        
        let div: HTMLElement = <HTMLElement>document.getElementById("div1");
        div.setAttribute("class", "statsOne");
        
        for (let b: number = 0; b < moveables.length; b++) {
            let player1: Moveable = moveables[b];
            //wenn player1 eine instanceof Player ist
            if (player1 instanceof Player) { 
                if (player1.playerNumber == formArray1[0] && player1.colorTeamOne) {
                    div.innerHTML = "Player stats team 1: <br>" + "Player: " + player1.playerNumber + "<br>" + "Position x: " + Math.floor(player1.position.x) + "<br>" + "Position y: " + Math.floor(player1.position.y) + "<br>" + "Velocity: " + player1.velocity2 + "<br>" + "Precision: " + player1.precision;
                }
            }
        }
        deletePlayer.classList.remove("hidden");
        addPlayer.classList.remove("hidden");
    }

    function getPlayerStatsTeamTwo(_event: Event): void {
        
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[2]); //safe in form Data
        formArray2 = [];
        for (let entry of formData) {//entry -> jeder Eintrag soll durchgegangen werden der Form Liste
            formArray2.push(String(entry[1])); //Einträge ins formArray pushen
        }       
        let div: HTMLElement = <HTMLElement>document.getElementById("div1");
        div.setAttribute("class", "statsOne");
        
        for (let b: number = 0; b < moveables.length; b++) {
            let player2: Moveable = moveables[b];
            //wenn player1 eine instanceof Player ist
            if (player2 instanceof Player) { 
                // && color for same team numbers
                if (player2.playerNumber == formArray2[0] && player2.colorTeamTwo) {
                    div.innerHTML = "Player stats team 2: <br>" + player2.playerNumber + "<br>" + "Position x: " + Math.floor(player2.position.x) + "<br>" + "Position y: " + Math.floor(player2.position.y) + "<br>" + "Velocity: " + player2.velocity2;
                }
            }
        }
        deletePlayer.classList.remove("hidden");
        addPlayer.classList.remove("hidden");
    }

    function getClickPosition(_event: MouseEvent): void {
        let clickPosition: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        ball.target = clickPosition; //target wird klick position -> Ziel vom Ball
        playerAction = Action.FLY_BALL; //ball fliegt und nur Ball bewegt sich
        //hier abfrage: ist STOP_GAME aktivität?? dann nicht reagieren
 }

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

    function getRandomVelocity(_min: number, _max: number): number {
        let velocity: number = _max - _min; 
        let multiply: number = Math.floor(Math.random() * velocity);
        let randomVelocity: number = multiply + _min; //add rounded and random veloticy to
        //Wert zurück geben
        return randomVelocity;
}

    function getRandomPrecision(_min: number, _max: number): number {
        let precision: number = _max - _min; 
        let multiply: number = Math.floor(Math.random() * precision);
        let randomPrecision: number = multiply + _min;
        return randomPrecision;
}

    function createPlayer(): void {
        for (let i: number = 0; i <= 21; i++) {

            //1 Spieler Team1
            if (i == 0) {
                let goalkeeperTeamOne1: Player = new Player(); //
                goalkeeperTeamOne1.colorTeamOne = formArray[0];
                goalkeeperTeamOne1.position.x = 50; //lieber array
                goalkeeperTeamOne1.position.y = 325;
                goalkeeperTeamOne1.startPosition.x = 50; 
                goalkeeperTeamOne1.startPosition.y = 325;
                goalkeeperTeamOne1.playerNumber = "1";
                goalkeeperTeamOne1.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                goalkeeperTeamOne1.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(goalkeeperTeamOne1);
            }

            //2 Spieler Team1
            if (i == 1) {
                let playerTeamOne2: Player = new Player();
                playerTeamOne2.colorTeamOne = formArray[0];
                playerTeamOne2.position.x = 150;
                playerTeamOne2.position.y = 550;
                playerTeamOne2.startPosition.x = 150; 
                playerTeamOne2.startPosition.y = 550;
                playerTeamOne2.playerNumber = "2";
                playerTeamOne2.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamOne2.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamOne2);
            }

            //3 Spieler Team1
            if (i == 2) {
                let playerTeamOne3: Player = new Player();
                playerTeamOne3.colorTeamOne = formArray[0];
                playerTeamOne3.position.x = 300; 
                playerTeamOne3.position.y = 100;
                playerTeamOne3.startPosition.x = 300; 
                playerTeamOne3.startPosition.y = 100;
                playerTeamOne3.playerNumber = "3";
                playerTeamOne3.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamOne3.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamOne3);
            }

            //4 Spieler Team1
            if (i == 3) {
                let playerTeamOne4: Player = new Player();
                playerTeamOne4.colorTeamOne = formArray[0];
                playerTeamOne4.position.x = 450;
                playerTeamOne4.position.y = 100;
                playerTeamOne4.startPosition.x = 450; 
                playerTeamOne4.startPosition.y = 100;
                playerTeamOne4.playerNumber = "4";
                playerTeamOne4.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamOne4.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamOne4);
            }

            //5 Spieler Team1
            if (i == 4) {
                let playerTeamOne5: Player = new Player();
                playerTeamOne5.colorTeamOne = formArray[0];
                playerTeamOne5.position.x = 600;
                playerTeamOne5.position.y = 100;
                playerTeamOne5.startPosition.x = 600;
                playerTeamOne5.startPosition.y = 100;
                playerTeamOne5.playerNumber = "5";
                playerTeamOne5.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamOne5.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamOne5);
            }

            //6 Spieler Team1
            if (i == 5) {
                let playerTeamOne6: Player = new Player();
                playerTeamOne6.colorTeamOne = formArray[0];
                playerTeamOne6.position.x = 750;
                playerTeamOne6.position.y = 550;
                playerTeamOne6.startPosition.x = 750;
                playerTeamOne6.startPosition.y = 550;
                playerTeamOne6.playerNumber = "6";
                playerTeamOne6.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamOne6.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamOne6);
            }

            //7 Spieler Team1
            //zweite Reihe
            if (i == 6) {
                let playerTeamOne7: Player = new Player();
                playerTeamOne7.colorTeamOne = formArray[0];
                playerTeamOne7.position.x = 150;
                playerTeamOne7.position.y = 250;
                playerTeamOne7.startPosition.x = 150;
                playerTeamOne7.startPosition.y = 250;
                playerTeamOne7.playerNumber = "7";
                playerTeamOne7.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamOne7.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamOne7);
            }

            //8 Spieler Team1
            if (i == 7) {
                let playerTeamOne8: Player = new Player();
                playerTeamOne8.colorTeamOne = formArray[0];
                playerTeamOne8.position.x = 300;
                playerTeamOne8.position.y = 250;
                playerTeamOne8.startPosition.x = 300;
                playerTeamOne8.startPosition.y = 250;
                playerTeamOne8.playerNumber = "8";
                playerTeamOne8.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamOne8.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamOne8);
            }

            //9 Spieler Team
            if (i == 8) {
                let playerTeamOne9: Player = new Player();
                playerTeamOne9.colorTeamOne = formArray[0];
                playerTeamOne9.position.x = 450;
                playerTeamOne9.position.y = 400;
                playerTeamOne9.startPosition.x = 450;
                playerTeamOne9.startPosition.y = 400;
                playerTeamOne9.playerNumber = "9";
                playerTeamOne9.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamOne9.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamOne9);
            }

            //10 Spieler Team1
            if (i == 9) {
                let playerTeamOne10: Player = new Player();
                playerTeamOne10.colorTeamOne = formArray[0];
                playerTeamOne10.position.x = 600;
                playerTeamOne10.position.y = 250;
                playerTeamOne10.startPosition.x = 600;
                playerTeamOne10.startPosition.y = 250;
                playerTeamOne10.playerNumber = "10";
                playerTeamOne10.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamOne10.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamOne10);
            }

            //11 Spieler Team1
            if (i == 10) {
                let playerTeamOne11: Player = new Player();
                playerTeamOne11.colorTeamOne = formArray[0];
                playerTeamOne11.position.x = 750;
                playerTeamOne11.position.y = 250;
                playerTeamOne11.startPosition.x = 750;
                playerTeamOne11.startPosition.y = 250;
                playerTeamOne11.playerNumber = "11";
                playerTeamOne11.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamOne11.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamOne11);
            }

            //1 Spieler Team2
            //dritte Reihe
            if (i == 11) {
                let playerTeamTwo1: Player = new Player();
                playerTeamTwo1.colorTeamTwo = formArray[1];
                playerTeamTwo1.position.x = 150;
                playerTeamTwo1.position.y = 400;
                playerTeamTwo1.startPosition.x = 150;
                playerTeamTwo1.startPosition.y = 400;
                playerTeamTwo1.playerNumber = "1";
                playerTeamTwo1.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamTwo1.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamTwo1);
            }

             //2 Spieler Team2
            if (i == 12) {
                let playerTeamTwo2: Player = new Player();
                playerTeamTwo2.colorTeamTwo = formArray[1];
                playerTeamTwo2.position.x = 300;
                playerTeamTwo2.position.y = 400;
                playerTeamTwo2.startPosition.x = 300;
                playerTeamTwo2.startPosition.y = 400;
                playerTeamTwo2.playerNumber = "2";
                playerTeamTwo2.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamTwo2.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamTwo2);
            }

            //3 Spieler Team2
            if (i == 13) {
                let playerTeamTwo3: Player = new Player();
                playerTeamTwo3.colorTeamTwo = formArray[1];
                playerTeamTwo3.position.x = 450;
                playerTeamTwo3.position.y = 250;
                playerTeamTwo3.startPosition.x = 450;
                playerTeamTwo3.startPosition.y = 250;
                playerTeamTwo3.playerNumber = "3";
                playerTeamTwo3.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamTwo3.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamTwo3);
            }

             //4 Spieler Team2
            if (i == 14) {
                let playerTeamTwo4: Player = new Player();
                playerTeamTwo4.colorTeamTwo = formArray[1];
                playerTeamTwo4.position.x = 600;
                playerTeamTwo4.position.y = 400;
                playerTeamTwo4.startPosition.x = 600;
                playerTeamTwo4.startPosition.y = 400;
                playerTeamTwo4.playerNumber = "4";
                playerTeamTwo4.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamTwo4.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamTwo4);
            }

             //5 Spieler Team2
            if (i == 15) {
                let playerTeamTwo5: Player = new Player();
                playerTeamTwo5.colorTeamTwo = formArray[1];
                playerTeamTwo5.position.x = 750;
                playerTeamTwo5.position.y = 400;
                playerTeamTwo5.startPosition.x = 750;
                playerTeamTwo5.startPosition.y = 400;
                playerTeamTwo5.playerNumber = "5";
                playerTeamTwo5.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamTwo5.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamTwo5);
            }

            //6 Spieler Team2
            //vierte Reihe
            if (i == 16) {
                let playerTeamTwo6: Player = new Player();
                playerTeamTwo6.colorTeamTwo = formArray[1];
                playerTeamTwo6.position.x = 150;
                playerTeamTwo6.position.y = 100;
                playerTeamTwo6.startPosition.x = 150;
                playerTeamTwo6.startPosition.y = 100;
                playerTeamTwo6.playerNumber = "6";
                playerTeamTwo6.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamTwo6.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamTwo6);
            }

            //7 Spieler Team2
            if (i == 17) {
                let playerTeamTwo7: Player = new Player();
                playerTeamTwo7.colorTeamTwo = formArray[1];
                playerTeamTwo7.position.x = 300;
                playerTeamTwo7.position.y = 550;
                playerTeamTwo7.startPosition.x = 300;
                playerTeamTwo7.startPosition.y = 550;
                playerTeamTwo7.playerNumber = "7";
                playerTeamTwo7.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamTwo7.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamTwo7);
            }

            //8 Spieler Team2
            if (i == 18) {
                let playerTeamTwo8: Player = new Player();
                playerTeamTwo8.colorTeamTwo = formArray[1];
                playerTeamTwo8.position.x = 450;
                playerTeamTwo8.position.y = 550;
                playerTeamTwo8.startPosition.x = 450;
                playerTeamTwo8.startPosition.y = 550;
                playerTeamTwo8.playerNumber = "8";
                playerTeamTwo8.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamTwo8.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamTwo8);
            }

            //9 Spieler Team2
            if (i == 19) {
                let playerTeamTwo9: Player = new Player();
                playerTeamTwo9.colorTeamTwo = formArray[1];
                playerTeamTwo9.position.x = 600;
                playerTeamTwo9.position.y = 550;
                playerTeamTwo9.startPosition.x = 600;
                playerTeamTwo9.startPosition.y = 550;
                playerTeamTwo9.playerNumber = "9";
                playerTeamTwo9.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamTwo9.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamTwo9);
            }

            //10 Spieler Team2
            if (i == 20) {
                let playerTeamTwo10: Player = new Player();
                playerTeamTwo10.colorTeamTwo = formArray[1];
                playerTeamTwo10.position.x = 750;
                playerTeamTwo10.position.y = 100;
                playerTeamTwo10.startPosition.x = 750;
                playerTeamTwo10.startPosition.y = 100;
                playerTeamTwo10.playerNumber = "10";
                playerTeamTwo10.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                playerTeamTwo10.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(playerTeamTwo10);
            }

            //11 Spieler Team2
            if (i == 21) {
                let goalkeeperTeamTwo11: Player = new Player(); 
                goalkeeperTeamTwo11.colorTeamTwo = formArray[1];
                goalkeeperTeamTwo11.position.x = 850;
                goalkeeperTeamTwo11.position.y = 325;
                goalkeeperTeamTwo11.startPosition.x = 850;
                goalkeeperTeamTwo11.startPosition.y = 325;
                goalkeeperTeamTwo11.playerNumber = "11";
                goalkeeperTeamTwo11.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                goalkeeperTeamTwo11.precision = getRandomPrecision(Number(formArray[5]), Number(formArray[4]));
                moveables.push(goalkeeperTeamTwo11);
            }
        }

        //hide form Elements and start game, add class hidden
        form.classList.add("hidden");
        start.classList.add("hidden");
        //show playerStats, remove class hidden
        playerStatsTeamOne.classList.remove("hidden");
        playerStatsTeamTwo.classList.remove("hidden");
}

    function drawSoccerfield(): void {
        crc2.fillStyle = "#4c8527";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.fillStyle = "RGBA(62,90,44,0.5)";
        crc2.beginPath();
        crc2.rect(25, 0, 50, 650);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(125, 0, 50, 650);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(225, 0, 50, 650);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(325, 0, 50, 650);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(425, 0, 50, 650);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(525, 0, 50, 650);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(625, 0, 50, 650);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(725, 0, 50, 650);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(825, 0, 50, 650);
        crc2.fill();
        crc2.closePath();
    }

    function drawGate(): void {
        //first gate
        crc2.beginPath();
        crc2.moveTo(0, 255);
        crc2.lineTo(60, 255);
        crc2.lineTo(60, 395);
        crc2.lineTo(0, 395);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        //second gate
        crc2.beginPath();
        crc2.moveTo(900, 255);
        crc2.lineTo(840, 255);
        crc2.lineTo(840, 395);
        crc2.lineTo(900, 395);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
    } 

    function drawLines(): void {
        //Linie mitte
        crc2.beginPath();
        crc2.moveTo(450, 0);
        crc2.lineTo(450, 650); // für x auch crc2.canvas.width / 2 --> 900/2 = 450 oder Variable festlegen für height und width(weniger schreiben)
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        //Kreis mitte
        crc2.beginPath();
        crc2.arc(450, 325, 100, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.closePath();
        //Rect gate right
        crc2.beginPath();
        crc2.moveTo(900, 165);
        crc2.lineTo(750, 165);
        crc2.lineTo(750, 485);
        crc2.lineTo(900, 485);
        crc2.stroke();
        crc2.closePath();
        //Rect gate left
        crc2.beginPath();
        crc2.moveTo(0, 165);
        crc2.lineTo(150, 165);
        crc2.lineTo(150, 485);
        crc2.lineTo(0, 485);
        crc2.stroke();
        crc2.closePath();
        //Punkt left
        crc2.beginPath();
        crc2.arc(100, 325, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        //Punkt mitte
        crc2.beginPath();
        crc2.arc(450, 325, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //Punkt rechts
        crc2.beginPath();
        crc2.arc(800, 325, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //Halbkreis links
        crc2.beginPath();
        crc2.arc(130, 325, 60, 5.05, 2.39 *  Math.PI); 
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        //Halbkreis rechts
        crc2.beginPath();
        crc2.arc(770, 325, 60, 1.9, 1.39 *  Math.PI); 
        crc2.stroke();
        crc2.closePath();
    }

    function handleTimer(): void {
        playerAction = Action.CHASE_BALL;
        isSetTimer = false; //Wenn timer fertig dann folge dem Ball wieder
    }

    function update(_soccerfield: ImageData): void {
        crc2.putImageData(_soccerfield, 0, 0);
        let posBall: Vector = ball.position;

        for (let moveable of moveables) { //draw für komplette Funktion
            moveable.draw();
        } 
        switch (playerAction) {
            case Action.CHASE_BALL:
                for (let moveable of moveables) {
                    moveable.move(1 / 15);
                    moveable.moveToBall(posBall); //alle anderen moveables
                }
                break;
            case Action.STOP_GAME:
                break;
            case Action.CHANGE_PLAYER:
                break;
            case Action.FLY_BALL: //eigene Aktion, im shoot ball machen die komische bewegungen
                if (isSetTimer == false) {
                setTimeout(handleTimer, 500); //nach 500 ms könnt ihr zum zum ball, setTimeOut runs code ONCE after the timeout ->setInterval runs code REPEATEDLY
                isSetTimer = true; //setTimer auf true gesetzt wennn Ball sich bewegt
            }
                ball.move(1); //nur Ball soll sich bewegen
            }
        } 
    }
