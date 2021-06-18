namespace BlumenwieseL11 {
    
    export abstract class Flower {
        protected color: string;
        protected size: number;
        protected position: Vector;
        protected nectarLiter: number;
        protected nectarLiterSunflower: number;
        

        constructor(_position?: Vector) {
            let x: number = 1000 * Math.random();
            let y: number = 300 * Math.random() + 920 * golden;
            this.position = new Vector(x, y);

            this.size = 10;
            this.nectarLiter = 0;
            this.nectarLiterSunflower = 0.9 * 2;
    } 
    public draw(): void {
        //draw
    }

    public fillNectar(): void {
        console.log("fill Nectar");
        if (this.nectarLiter < 30) {
            this.nectarLiter += 0.03;
    
            if (this.nectarLiterSunflower < 50) {
            this.nectarLiterSunflower += 0.05;
        }
        }
    }
    }
}