namespace Soccer {
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

       public moveToBall(_positionBall: Vector): void { //Methode nicht im moveable -> velocity2, Spieler werden im Player erstellt
            let positionBall: Vector = _positionBall; //position vom Ball
            let posX: number = positionBall.x - this.position.x; //Differenz berechnen von Ball posx und player posx
            let posY: number = positionBall.y - this.position.y; //Differenz berechnen von Ball posy und player posy
            let rad: number = Math.hypot(posY, posX); //hier hätte man auch length benutzen können Karen..., Radius berechnen für alle positionen um den player herum

            //100 == 30 Meter Wahrnehmungsradius
            if (rad <= 120) { //wenn Radius kleiner gleich 100
            let position: Vector = new Vector(posX, posY); //neue position mit berechneten posx und posy
            position.scale(this.velocity2 / rad); //scale position mit geschwindigkeit geteilt durch den radius, mit geschwindigkeit bewegen und nicht springen
            this.position.add(position); //neue position adde
            }
            if (rad <= 10) {  //wenn Radius kleiner gleich 10 (beim Ball angekommen) ist dann schieße den Ball
                this.atBall = <HTMLElement>document.querySelector("#atball");
                this.atBall.innerHTML = "" + this.playerNumber;
                //_ball.move(1 / 15, this.precision);
                playerAction = Action.STOP_GAME;
            }
            if (rad > 120) {
                //wie laufen statt springen???
                this.position.set(this.startPosition.x, this.startPosition.y);
            }
       } 
    } 
}
