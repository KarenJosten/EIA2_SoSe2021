/*Code mit Hilfe von Julia Käppeler und Rebecca Räschke erstellt*/

namespace Soccer {
    export enum PLAYER_EVENT {
        BALL_SHOOTS = "ballShoots",
        CHANGE_PLAYER = "changePlayer"
    }

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let moveables: Moveable[] = [];
    let player: string[] = [];

    let form: HTMLElement;
    let start: HTMLElement;

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

        //canvas.addEventListener(PLAYER_EVENT.CHANGE_PLAYER, changePlayer);

        window.setInterval(update, 15, soccerfield); //alle 15 ms updaten
    }

    function handleChange(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]);
        player = [];
        for (let entry of formData) {
            player.push(String(entry[1]));
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

    function createPlayer(): void {
        for (let i: number = 0; i < 22; i++) {

            if (i <= 10) {
            let firstTeam: Player = new Player();
            //firstTeam.colorTeamOne = "blue";
            firstTeam.colorTeamOne = player[0];
            moveables.push(firstTeam);
            }

            else {
            let secondTeam: Player = new Player();
            //secondTeam.colorTeamTwo = "red";
            secondTeam.colorTeamTwo = player[1];
            moveables.push(secondTeam);
            }
        }
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
        crc2.stroke();

        //second gate
        crc2.beginPath();
        crc2.moveTo(900, 230);
        crc2.lineTo(840, 230);
        crc2.lineTo(840, 370);
        crc2.lineTo(900, 370);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        crc2.stroke();
    } 

    function drawLines(): void {

        //Linie mitte
        crc2.beginPath();
        crc2.moveTo(450, 0);
        crc2.lineTo(450, 600); // für x auch crc2.canvas.width / 2 --> 900/2 = 450 oder Variable festlegen für height und width(weniger schreiben)
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        crc2.stroke();

        //Kreis mitte
        crc2.beginPath();
        crc2.arc(450, 300, 100, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();

        //Rect gate right
        crc2.beginPath();
        crc2.moveTo(900, 140);
        crc2.lineTo(750, 140);
        crc2.lineTo(750, 460);
        crc2.lineTo(900, 460);
        crc2.stroke();
        crc2.closePath();
        crc2.stroke();
        
        //Rect gate left
        crc2.beginPath();
        crc2.moveTo(0, 140);
        crc2.lineTo(150, 140);
        crc2.lineTo(150, 460);
        crc2.lineTo(0, 460);
        crc2.stroke();
        crc2.closePath();
        crc2.stroke();

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

        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1);
        }
    }
}