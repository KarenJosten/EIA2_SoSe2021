namespace BlumenwieseL10 {
    
    export abstract class Flower {
        protected color: string;
        protected size: number;
        protected position: Vector;
        protected nectarLiter: number;
        

        constructor(_position?: Vector) {
            let x: number = 1000 * Math.random();
            let y: number = 300 * Math.random() + 920 * golden;
            this.position = new Vector(x, y);

            this.size = 10;
            this.nectarLiter = 0;
    } 
    public draw(): void {
        //draw
    }

    public fillNectar(): void {
        console.log("fill Nectar");
        if (this.nectarLiter < 30) {
            this.nectarLiter += 0.1;
        }
    }
    }
}