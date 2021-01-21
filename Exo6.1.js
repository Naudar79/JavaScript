const readlineSync = require("readline-sync");
class Circle { // Initialise la classe Circle
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() { //Calcul de la surface du cercle
        return Math.PI * this.radius ** 2;
    }
} // repositione le cercle

let newPos = new Circle(5, 3, 4);
console.log(newPos);
console.log(newPos.surface);
newPos.move(8, 9);
console.log(newPos);