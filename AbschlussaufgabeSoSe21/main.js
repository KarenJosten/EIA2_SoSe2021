"use strict";
/*Code mit Hilfe von Julia Käppeler und Rebecca Räschke erstellt

Endabgabe: Fußballspiel
Name: Karen Josten
Matrikelnummer: 265754
Datum: 19.07.2021*/
var Minisoccer;
(function (Minisoccer) {
    let Action;
    (function (Action) {
        Action[Action["CHASE_BALL"] = 0] = "CHASE_BALL";
        Action[Action["STOP_GAME"] = 1] = "STOP_GAME";
        Action[Action["FLY_BALL"] = 2] = "FLY_BALL";
    })(Action = Minisoccer.Action || (Minisoccer.Action = {}));
    window.addEventListener("load", handleLoad);
    //all moveables (player, linesman, referee, ball)
    let moveables = [];
    //color, velocity etc. form array
    let formArray = [];
    //team 1 form array
    let formArray1 = [];
    //team 2
    let formArray2 = [];
    //form HTML
    let form;
    //start button HTML
    let start;
    //button delete player
    let deletePlayer;
    //button add player
    let addPlayer;
    //2 form for first team
    let playerStatsTeamOne;
    //3 form for second team
    let playerStatsTeamTwo;
    //ball variable
    let ball;
    //timer is false at the beginnig
    let isSetTimer = false;
    //first Action, all moveables move
    Minisoccer.playerAction = Action.CHASE_BALL;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Minisoccer.crc2 = canvas.getContext("2d");
        drawSoccerfield();
        drawGate();
        drawLines();
        //create background with drawSoccerfield, drawGate and drawLines
        let soccerfield = Minisoccer.crc2.getImageData(0, 0, 900, 650);
        createReferee(1);
        createLinesman(1);
        //create 1 ball
        ball = new Minisoccer.Ball();
        //push ball in moveables
        moveables.push(ball);
        //get form element from HTML
        form = document.querySelector("form");
        //change listener
        form.addEventListener("change", handleChange);
        //get button id #start
        start = document.querySelector("#start");
        //click listener
        start.addEventListener("click", createPlayer);
        deletePlayer = document.querySelector("#delete");
        deletePlayer.addEventListener("click", deletePlayerTeamOne);
        deletePlayer.addEventListener("click", deletePlayerTeamTwo);
        addPlayer = document.querySelector("#addplayer");
        addPlayer.addEventListener("click", addPlayerTeamOne);
        addPlayer.addEventListener("click", addPlayerTeamTwo);
        playerStatsTeamOne = document.querySelector("#playerStatsTeamOne");
        playerStatsTeamOne.addEventListener("change", getPlayerStatsTeamOne);
        playerStatsTeamTwo = document.querySelector("#playerStatsTeamTwo");
        playerStatsTeamTwo.addEventListener("change", getPlayerStatsTeamTwo);
        canvas.addEventListener("click", getClickPosition);
        window.addEventListener("keydown", playSound);
        //animate update
        window.setInterval(update, 20, soccerfield);
    }
    //play sound when any key is pressed
    function playSound(_event) {
        let audio = new Audio("crowd.wav");
        //play audio
        audio.play();
    }
    //get form element and push to formArray array
    function handleChange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]); //safe in form Data
        formArray = [];
        //entry -> jeder Eintrag soll durchgegangen werden der Form Liste
        for (let entry of formData) {
            //push elements in formArray entry 1 da value
            formArray.push(String(entry[1]));
        }
    }
    function getPlayerStatsTeamOne(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[1]); //safe in form Data
        formArray1 = [];
        for (let entry of formData) { //entry -> jeder Eintrag soll durchgegangen werden der Form Liste
            formArray1.push(String(entry[1])); //Einträge ins formArray pushen
        }
        let div = document.getElementById("div1");
        div.setAttribute("class", "statsOne");
        for (let b = 0; b < moveables.length; b++) {
            let player1 = moveables[b];
            //wenn player1 eine instanceof Player ist
            //player1 beinhaltet Player
            if (player1 instanceof Minisoccer.Player) {
                //if playernumber is same like value and color
                if (player1.playerNumber == formArray1[0] && player1.colorTeamOne) {
                    div.innerHTML = "Player stats team 1: <br>" + "Player: " + player1.playerNumber + "<br>" + "Position x: " + Math.floor(player1.position.x) + "<br>" + "Position y: " + Math.floor(player1.position.y) + "<br>" + "Velocity: " + player1.velocity2 + "<br>" + "Precision: " + player1.precision;
                }
            }
        }
        deletePlayer.classList.remove("hidden");
        addPlayer.classList.remove("hidden");
    }
    function deletePlayerTeamOne(_event) {
        for (let b = 0; b < moveables.length; b++) {
            let player1 = moveables[b];
            if (player1 instanceof Minisoccer.Player) {
                if (player1.playerNumber == formArray1[0] && player1.colorTeamOne) {
                    moveables.splice(b, 1);
                }
            }
        }
    }
    function deletePlayerTeamTwo(_event) {
        for (let b = 0; b < moveables.length; b++) {
            let player2 = moveables[b];
            if (player2 instanceof Minisoccer.Player) {
                if (player2.playerNumber == formArray2[0] && player2.colorTeamOne) {
                    moveables.splice(b, 1);
                }
            }
        }
    }
    function addPlayerTeamOne(_event) {
        let newPlayer = new Minisoccer.Player;
        for (let b = 0; b < moveables.length; b++) {
            let player1 = moveables[b];
            if (player1 instanceof Minisoccer.Player) {
                if (player1.playerNumber == formArray1[0] && player1.colorTeamOne) {
                    newPlayer.playerNumber = "12";
                    newPlayer.position.x = Math.random() * 900;
                    newPlayer.position.y = Math.random() * 650;
                    newPlayer.startPosition.x = Math.random() * 900;
                    newPlayer.startPosition.y = Math.random() * 650;
                    newPlayer.velocity2 = getRandomVelocity(Number(formArray[3]), Number(formArray[2]));
                    moveables.push(newPlayer);
                }
            }
        }
    }
    function addPlayerTeamTwo(_event) {
        let newPlayer = new Minisoccer.Player;
        for (let b = 0; b < moveables.length; b++) {
            let player1 = moveables[b];
            if (player1 instanceof Minisoccer.Player) {
                if (player1.playerNumber == formArray2[0] && player1.colorTeamTwo) {
                    newPlayer.playerNumber = "13";
                    newPlayer.position.x = Math.random() * 900;
                    newPlayer.position.y = Math.random() * 650;
                    newPlayer.startPosition.x = Math.random() * 900;
                    newPlayer.startPosition.y = Math.random() * 650;
                    moveables.push(newPlayer);
                }
            }
        }
    }
    function getPlayerStatsTeamTwo(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[2]); //safe in form Data
        formArray2 = [];
        for (let entry of formData) { //entry -> jeder Eintrag soll durchgegangen werden der Form Liste
            formArray2.push(String(entry[1])); //Einträge ins formArray pushen
        }
        let div = document.getElementById("div1");
        div.setAttribute("class", "statsOne");
        for (let b = 0; b < moveables.length; b++) {
            let player2 = moveables[b];
            //wenn player1 eine instanceof Player ist
            if (player2 instanceof Minisoccer.Player) {
                // && color for same team numbers
                if (player2.playerNumber == formArray2[0] && player2.colorTeamTwo) {
                    div.innerHTML = "Player stats team 2: <br>" + player2.playerNumber + "<br>" + "Position x: " + Math.floor(player2.position.x) + "<br>" + "Position y: " + Math.floor(player2.position.y) + "<br>" + "Velocity: " + player2.velocity2;
                }
            }
        }
        deletePlayer.classList.remove("hidden");
        addPlayer.classList.remove("hidden");
    }
    function getClickPosition(_event) {
        let clickPosition = new Minisoccer.Vector(_event.clientX - Minisoccer.crc2.canvas.offsetLeft, _event.clientY - Minisoccer.crc2.canvas.offsetTop);
        //target = click position
        ball.target = clickPosition;
        Minisoccer.playerAction = Action.FLY_BALL;
    }
    function createReferee(_nReferee) {
        for (let i = 0; i < _nReferee; i++) {
            let referee = new Minisoccer.Referee();
            moveables.push(referee);
        }
    }
    function createLinesman(_nLinesman) {
        for (let i = 0; i < _nLinesman; i++) {
            let firstLinesman = new Minisoccer.Linesman();
            //set pos and velocity for first linesman and push to moveables array
            firstLinesman.position.x = 900 * Math.random();
            firstLinesman.position.y = 10;
            firstLinesman.velocity.x = Math.random();
            firstLinesman.velocity.y = 0;
            moveables.push(firstLinesman);
            let secondLinesman = new Minisoccer.Linesman();
            moveables.push(secondLinesman);
        }
    }
    function getRandomVelocity(_min, _max) {
        let velocity = _max - _min;
        let multiply = Math.floor(Math.random() * velocity);
        let randomVelocity = multiply + _min; //rounded + min value to get at least min velocity
        //Wert zurück geben
        return randomVelocity;
    }
    function getRandomPrecision(_min, _max) {
        let precision = _max - _min;
        let multiply = Math.floor(Math.random() * precision);
        let randomPrecision = multiply + _min; //rounded + min value to get at least min precision
        return randomPrecision;
    }
    function createPlayer(_event) {
        for (let i = 0; i <= 21; i++) {
            //1 Spieler Team1
            if (i == 0) {
                let goalkeeperTeamOne1 = new Minisoccer.Player(); //
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
                let playerTeamOne2 = new Minisoccer.Player();
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
                let playerTeamOne3 = new Minisoccer.Player();
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
                let playerTeamOne4 = new Minisoccer.Player();
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
                let playerTeamOne5 = new Minisoccer.Player();
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
                let playerTeamOne6 = new Minisoccer.Player();
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
                let playerTeamOne7 = new Minisoccer.Player();
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
                let playerTeamOne8 = new Minisoccer.Player();
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
                let playerTeamOne9 = new Minisoccer.Player();
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
                let playerTeamOne10 = new Minisoccer.Player();
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
                let playerTeamOne11 = new Minisoccer.Player();
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
                let playerTeamTwo1 = new Minisoccer.Player();
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
                let playerTeamTwo2 = new Minisoccer.Player();
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
                let playerTeamTwo3 = new Minisoccer.Player();
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
                let playerTeamTwo4 = new Minisoccer.Player();
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
                let playerTeamTwo5 = new Minisoccer.Player();
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
                let playerTeamTwo6 = new Minisoccer.Player();
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
                let playerTeamTwo7 = new Minisoccer.Player();
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
                let playerTeamTwo8 = new Minisoccer.Player();
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
                let playerTeamTwo9 = new Minisoccer.Player();
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
                let playerTeamTwo10 = new Minisoccer.Player();
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
                let goalkeeperTeamTwo11 = new Minisoccer.Player();
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
    function drawSoccerfield() {
        Minisoccer.crc2.fillStyle = "#4c8527";
        Minisoccer.crc2.fillRect(0, 0, Minisoccer.crc2.canvas.width, Minisoccer.crc2.canvas.height);
        Minisoccer.crc2.fillStyle = "RGBA(62,90,44,0.5)";
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.rect(25, 0, 50, 650);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.rect(125, 0, 50, 650);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.rect(225, 0, 50, 650);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.rect(325, 0, 50, 650);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.rect(425, 0, 50, 650);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.rect(525, 0, 50, 650);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.rect(625, 0, 50, 650);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.rect(725, 0, 50, 650);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.rect(825, 0, 50, 650);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
    }
    function drawGate() {
        //first gate
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.moveTo(0, 255);
        Minisoccer.crc2.lineTo(60, 255);
        Minisoccer.crc2.lineTo(60, 395);
        Minisoccer.crc2.lineTo(0, 395);
        Minisoccer.crc2.strokeStyle = "white";
        Minisoccer.crc2.stroke();
        Minisoccer.crc2.closePath();
        //second gate
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.moveTo(900, 255);
        Minisoccer.crc2.lineTo(840, 255);
        Minisoccer.crc2.lineTo(840, 395);
        Minisoccer.crc2.lineTo(900, 395);
        Minisoccer.crc2.strokeStyle = "white";
        Minisoccer.crc2.stroke();
        Minisoccer.crc2.closePath();
    }
    function drawLines() {
        //Linie mitte
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.moveTo(450, 0);
        Minisoccer.crc2.lineTo(450, 650);
        Minisoccer.crc2.strokeStyle = "white";
        Minisoccer.crc2.stroke();
        Minisoccer.crc2.closePath();
        //Kreis mitte
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.arc(450, 325, 100, 0, 2 * Math.PI);
        Minisoccer.crc2.stroke();
        Minisoccer.crc2.closePath();
        //Rect gate right
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.moveTo(900, 165);
        Minisoccer.crc2.lineTo(750, 165);
        Minisoccer.crc2.lineTo(750, 485);
        Minisoccer.crc2.lineTo(900, 485);
        Minisoccer.crc2.stroke();
        Minisoccer.crc2.closePath();
        //Rect gate left
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.moveTo(0, 165);
        Minisoccer.crc2.lineTo(150, 165);
        Minisoccer.crc2.lineTo(150, 485);
        Minisoccer.crc2.lineTo(0, 485);
        Minisoccer.crc2.stroke();
        Minisoccer.crc2.closePath();
        //Punkt left
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.arc(100, 325, 5, 0, 2 * Math.PI);
        Minisoccer.crc2.fillStyle = "white";
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        //Punkt mitte
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.arc(450, 325, 5, 0, 2 * Math.PI);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        //Punkt rechts
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.arc(800, 325, 5, 0, 2 * Math.PI);
        Minisoccer.crc2.fill();
        Minisoccer.crc2.closePath();
        //Halbkreis links
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.arc(130, 325, 60, 5.05, 2.39 * Math.PI);
        Minisoccer.crc2.strokeStyle = "white";
        Minisoccer.crc2.stroke();
        Minisoccer.crc2.closePath();
        //Halbkreis rechts
        Minisoccer.crc2.beginPath();
        Minisoccer.crc2.arc(770, 325, 60, 1.9, 1.39 * Math.PI);
        Minisoccer.crc2.stroke();
        Minisoccer.crc2.closePath();
    }
    function handleTimer() {
        Minisoccer.playerAction = Action.CHASE_BALL; //Wenn timer fertig dann folge dem Ball wieder
        isSetTimer = false; //set timer to false
    }
    function update(_soccerfield) {
        Minisoccer.crc2.putImageData(_soccerfield, 0, 0);
        let posBall = ball.position;
        for (let moveable of moveables) {
            moveable.draw();
        }
        switch (Minisoccer.playerAction) {
            case Action.CHASE_BALL:
                for (let moveable of moveables) {
                    moveable.move(1 / 15, posBall);
                }
                break;
            case Action.STOP_GAME:
                //no actions
                break;
            case Action.FLY_BALL:
                if (isSetTimer == false) { //if timer is false
                    setTimeout(handleTimer, 500); //nach 500 ms könnt ihr zum zum ball, setTimeOut runs code ONCE after the timeout
                    isSetTimer = true; //ball is flying = timer true
                }
                ball.move(1); //only ball move
        }
    }
})(Minisoccer || (Minisoccer = {}));
//# sourceMappingURL=main.js.map