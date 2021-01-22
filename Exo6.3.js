let rectC = '';

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if ((((this.topLeftXPos <= otherRectangle.topLeftXPos) && (otherRectangle.topLeftXPos <= (this.topLeftXPos.length)) ||
                (this.topLeftXPos <= (otherRectangle.topLeftXPos + otherRectangle.length)) && (this.topLeftYPos <= otherRectangle.topLeftYPos) &&
                (otherRectangle.topLeftYPos <= (this.topLeftYPos + this.width)) || (this.topLeftYPos <= (otherRectangle.topLeftYPos + otherRectangle.Rectangle.width)) &&
                ((otherRectangle.topLeftYPos + otherRectangle.width) <= (this.topLeftYPos + this.width))))) {
            return true;
        } else {
            return false;
        }
    }
}

function Rand(k, j) { // Générer la surface du rectangle
    let rndNb = k + Math.floor(Math.random() * j);
    return rndNb;
}

while (l <= 1000) {
    RectC = new Rectangle(
        Math.floor(Math.random() * 50) + 1,
        Math.floor(Math.random() * 50) + 1,
        Math.floor(Math.random() * 50) + 1,
        Math.floor(Math.random() * 50) + 1
    );
}

for (let i = 0; i <= 1000; i++) { // Générer les 1000 rectangles

}