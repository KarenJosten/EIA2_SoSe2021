namespace Soccer {

    export abstract class Moveable {
        public expendable: boolean = false;
        protected color: string;
        protected velocity: Vector;
        protected position: Vector;
        protected hitRadius: number = 0;
        
        constructor(_position?: Vector) { //brauchen wir hier auch _velocity??
            let a: number = - Math.random();
            let b: number = Math.random();
            this.velocity = new Vector(a, b);

            //feste position ohne Math.radnom, damit die nicht mehr am Rand kleben
            let x: number = 450;
            let y: number = 100;
            this.position = new Vector(x, y);
    } 

  /*   public change(): void {
        this.expendable = true;
    } */

    public move(_timeslice: number): void {
        this.position.add(this.velocity);

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