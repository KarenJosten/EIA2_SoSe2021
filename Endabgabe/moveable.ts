namespace Soccer {

    export abstract class Moveable { //Unterklasse und main kann auf Moveable zugreifen
        public position: Vector;
        public startPosition: Vector;
        public colorTeamTwo: string;
        public colorTeamOne: string; 
        public velocity2: number; //eigene velocity für den Player, da ich mit number arbeite
        public precision: number;
        public velocity: Vector;
        public playerNumber: string;
        
        constructor(_position?: Vector, _startPosition?: Vector) { //brauchen wir hier auch _velocity??
            let a: number = - Math.random();
            let b: number = Math.random();
            this.velocity = new Vector(a, b);

            //feste position ohne Math.radnom, damit die nicht mehr am Rand kleben
            let x: number = 900 * Math.random();
            let y: number = 650 * Math.random();
            this.position = new Vector(x, y);
            this.startPosition = new Vector(x, y);

    } 

    public move(_timeslice: number): void {
        //
    }

    public moveToBall(_positionBall: Vector): void {
        //
    }

    public draw(): void {
        //draw
    }
    }
    }