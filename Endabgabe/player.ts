namespace Soccer {
    
    export abstract class Player {
        protected color: string;
        protected size: number;
        protected position: Vector;
        
        constructor(_position?: Vector) {
            let x: number = 900 * Math.random();
            let y: number = 600 * Math.random();
            this.position = new Vector(x, y);
            this.size = 10;
    } 
    public draw(): void {
        //draw
    }
    }
}