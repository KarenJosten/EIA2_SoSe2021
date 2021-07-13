namespace Soccer {
    export class Player extends Moveable { 
        //public playerAction: PLAYER_EVENT = PLAYER_EVENT.CHASE_BALL;
        public colorTeamTwo: string;
        public colorTeamOne: string; 
        public position: Vector;
        public radius: number;
        protected playerNumber: number;
        protected team: number;
        protected changeNumber: boolean;
        

        constructor(_position?: Vector, _velocityMax?: number, _velocityMin?: number, _colorTeamOne?: string, _colorTeamtwo?: string, _precision?: number, _playerNumber?: number, _team?: number) { 
            super(_position);
            this.radius = 30;
        }    
        
        public draw(): void {   
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.colorTeamOne;
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.colorTeamTwo;
            crc2.fill();
            crc2.closePath();
        } 

       public moveToBall(_positionBall: Vector): void {
            let positionBall: Vector = _positionBall;
            console.log(positionBall);
            //60 == 30 Meter Radius
            if (positionBall.x - this.position.x <= 60 && positionBall.y - this.position.y <= 60) {
                let chaseBall: Vector = new Vector(positionBall.x, positionBall.y);
                this.position = chaseBall;
            }
       } 

        public shootBall(): void {
            console.log("shoot ball");
           /*  let event: CustomEvent = new CustomEvent(PLAYER_EVENT.BALL_SHOOTS, {detail: {player: this}});
            crc2.canvas.dispatchEvent(event); */
        }

        public changePlayer(): void {
            console.log("change player");
            /* super.change();
            let event: CustomEvent = new CustomEvent(PLAYER_EVENT.CHANGE_PLAYER, {detail: {player: this}});
            crc2.canvas.dispatchEvent(event); */
        } 

    }
}