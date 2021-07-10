namespace Soccer {
    export class Player extends Moveable { 
        protected position: Vector;
        protected velocity: Vector;
        protected colorTeamOne: string;
        protected colorTeamTwo: string;
        protected precision: number;
        protected playerNumber: number;
        protected team: number;
        protected radius: number;
        protected changeNumber: boolean;

        constructor(_position?: Vector, _velocity?: Vector, _colorTeamOne?: string, _colorTeamtwo?: string, _precision?: number, _playerNumber?: number, _team?: number) { 
            super(_position);
            let x: number = 900 * Math.random();
            let y: number = 400 * Math.random();
            this.position = new Vector(x, y);
            this.colorTeamOne = "red";
            this.colorTeamTwo = "blue";

            if (_position) 
            this.position = _position;
            else
            this.position = new Vector(x, y);
        }    
        
        public draw(): void {   
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.colorTeamOne;
            crc2.fill();
            crc2.closePath();
        } 
    }
}

