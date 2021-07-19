namespace Minisoccer {
    export class Player extends Moveable { //wird unterklasse
        public position: Vector;
        public startPosition: Vector;
        public colorTeamTwo: string;
        public colorTeamOne: string; 
        public velocity2: number; //eigene velocity für den Player, da ich mit number arbeite
        public precision: number;
        public atBall: HTMLElement;
        public playerNumber: string;
        protected rad: number;

        constructor(_position?: Vector, _startPosition?: Vector) { 
            super(_position, _startPosition);
            this.velocity2 = 0;
            this.precision = 0;
            this.startPosition = new Vector(0, 0);
        }     

       public move(_timeslice: number, _positionBall: Vector): void { 
            let positionBall: Vector = _positionBall; //set position ball
            let posX: number = positionBall.x - this.position.x; //Differenz berechnen vom Ball posx und player posx
            let posY: number = positionBall.y - this.position.y; //Differenz berechnen vom Ball posy und player posy
            let rad: number = Math.hypot(posY, posX); //Radius berechnen für alle positionen um den player herum

            //120 == 30 Meter Wahrnehmungsradius
            if (rad <= 120) { 
            let position: Vector = new Vector(posX, posY); //neue position mit berechneten posx und posy
            position.scale(this.velocity2 / rad); //scale position mit geschwindigkeit geteilt durch den radius
            this.position.add(position); //add new position to position
            }
            if (rad <= 10) {  //player at ball
                this.atBall = <HTMLElement>document.querySelector("#atball");
                this.atBall.innerHTML = "" + this.playerNumber;
                //stop game
                playerAction = Action.STOP_GAME;
            }
            if (rad > 120) {
                //set position from player to startPos 
                this.position.set(this.startPosition.x, this.startPosition.y);
            }
       } 
       public draw(): void {   
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
        crc2.fillStyle = this.colorTeamOne;
        crc2.fill();
        crc2.strokeText(this.playerNumber, this.position.x, this.position.y + 3, 10);
        crc2.textAlign = "center";
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
        crc2.fillStyle = this.colorTeamTwo;
        crc2.fill();
        crc2.strokeText(this.playerNumber, this.position.x, this.position.y + 3, 10);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
    }
    } 
}