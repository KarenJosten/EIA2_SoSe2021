namespace Soccer {
    export class Ball extends Moveable { 
        public position: Vector;
        public target: Vector; 
        public goalLeft: HTMLElement;
        public goalRight: HTMLElement;
        public velocity: Vector;
        public goal1: number = 0;
        public goal2: number = 0;
        protected color: string;
        private fixPosition: Vector;

        constructor(_position?: Vector) {
            super(_position);
            let x: number = 450;
            let y: number = 325;
            this.position = new Vector(x, y);
            this.color = "white";
            let i: number = 450;
            let j: number = 325;
            this.fixPosition = new Vector(i, j);
            this.target = new Vector(this.position.x, this.position.y);
    }

    public move(_timeslice: number): void {
        //Ziel (klick) und aktueller Punkt
        let difference: Vector = Vector.getDifference(this.target, this.position); //weil static mit Vector. Different bestimmen vom Ziel und der pos vom Ball
        this.velocity = new Vector(difference.x / 10, difference.y / 10); //geschwi.x Richtung / 10 --> wo ball hin soll, neue Geschwindigkeit vom Ball
        
        //gate first Team, left
        let posXL: number = 0 - this.position.x; 
        let posYL: number = 325 - this.position.y; 
        let rad1: number = Math.hypot(posYL, posXL);

        //gate secondTeam, right
        let posXR: number = 900 - this.position.x; 
        let posYR: number = 325 - this.position.y; 
        let rad2: number = Math.hypot(posYR, posXR);
        //let goal1: number = 0;

        if (difference.length <= 10) {
            this.velocity.x = 0;
            this.velocity.y = 0; //wenn Ball nah genug an dem Ziel, dann keine velocity
        }
        this.position.add(this.velocity);

        if (rad1 <= 50) { 
            this.goalLeft = <HTMLElement>document.querySelector("#goalTeam2");
            this.goal1++;
            this.goalLeft.innerHTML = this.goal1 + "";
            playerAction = Action.STOP_GAME; 
            this.position.set(this.fixPosition.x, this.fixPosition.y);
            this.target.set(this.fixPosition.x, this.fixPosition.y);
        }

        if (rad2 <= 50) {
            this.goalRight = <HTMLElement>document.querySelector("#goalTeam1");  
            this.goal2++;
            this.goalRight.innerHTML = this.goal2 + "";
            playerAction = Action.STOP_GAME;
            this.position.set(this.fixPosition.x, this.fixPosition.y);
            this.target.set(this.fixPosition.x, this.fixPosition.y);
        }
    }

    public draw(): void {   
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x + 3, this.position.y + 2, 1.4, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x - 3, this.position.y + 2, 1.4, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x - 3, this.position.y - 2, 1.4, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(this.position.x + 3, this.position.y - 2, 1.4, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        } 
    }
}
