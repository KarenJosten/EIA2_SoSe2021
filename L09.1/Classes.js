"use strict";
var Classes;
(function (Classes) {
    class Vector {
        //nehme 2 Parameter entgegen -> Fehler in Zeile 29 new Vector braucht Werte!!
        constructor(_x, _y) {
            this.x = 10;
            this.y = 10;
            this.set(_x, _y);
        }
        //Es folgen die Fähigkeiten:
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            //x und y werden mit dem Faktor 2 multipliziert
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x; //durch Addition entsteht ein neuer Vektor
            this.y += _addend.y;
        }
    }
    //sobald der constructor erstellt wird und diesen Vector erzeugt müssen Werte mitegeben werden
    let v1 = new Vector(30, 30);
    //skaliere um den Faktor 2 
    v1.set(2, 2); //gebe hier bereits 2 Werte mit
    v1.scale(2);
    console.log(v1);
})(Classes || (Classes = {}));
/*AUSFABE DER CONSOLE ohne Constructor und set
Vector
x: 20
y: 20
__proto__:
add: ƒ add(_addend)
constructor: class Vector
scale: ƒ scale(_factor)
__proto__: Object

AUSGABE DER CONSOLE mit Constructor und Set und Werten new Vector(30, 30)

Vector
x: 60
y: 60
__proto__:
add: ƒ add(_addend)
constructor: class Vector
scale: ƒ scale(_factor)
set: ƒ set(_x, _y)
__proto__: Object

AUSABE DER CONSOLE nachdem v1.set aufgerufen wird mit Werten

Vector {x: 4, y: 4}
x: 4
y: 4
__proto__:
add: ƒ add(_addend)
constructor: class Vector
scale: ƒ scale(_factor)
set: ƒ set(_x, _y)
__proto__: Object
*/ 
//# sourceMappingURL=Classes.js.map