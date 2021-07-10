namespace Soccer {

    export abstract class Moveable {
        protected color: string;
        protected velocity: Vector;
        protected position: Vector;
        
        constructor(_position?: Vector) { //brauchen wir hier auch _velocity??
            let x: number = 900 * Math.random();
            let y: number = 600 * Math.random();
            let a: number = - Math.random();
            let b: number = Math.random();
            
            this.position = new Vector(x, y);
            this.velocity = new Vector(a, b);
    } 

    public move(_timeslice: number): void {
        this.position.add(this.velocity);

        //mit Kollision
        if (this.position.x + 10 > 900 || this.position.x - 10 < 0) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.y + 10 > 600 || this.position.y - 10 < 0) {
            this.velocity.y = -this.velocity.y;
        }
    }

    public draw(): void {
        //draw
    }
    }
    }