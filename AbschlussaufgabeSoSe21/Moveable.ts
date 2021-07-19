namespace Minisoccer {

    export abstract class Moveable { 
        public position: Vector;
        public velocity: Vector;
        
        constructor(_position?: Vector, _startPosition?: Vector) { 
            let a: number = - Math.random();
            let b: number = Math.random();
            this.velocity = new Vector(a, b);

            let x: number = 900 * Math.random();
            let y: number = 650 * Math.random();
            this.position = new Vector(x, y);

    } 
    public move(_timeslice: number, _positionBall?: Vector): void { 
        //
    }

    public draw(): void {
        //draw
    }
    }
    }