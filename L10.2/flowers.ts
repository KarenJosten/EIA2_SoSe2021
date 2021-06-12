namespace BlumenwieseL10 {
    
    export class Flowers {
        color: string;
        size: number;
        x: number;
        y: number;
        position: Vector;
        

        constructor(_position?: Vector) {

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
            //this.color = this.getRandomColor();
            this.drawFlower();
    } 
    drawFlower(): void {
        // console.log("draw Flowers");
    }
    }
}