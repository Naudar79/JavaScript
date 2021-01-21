class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if (((this.topLeftXPos == otherRectangle.topLeftXPos) || (this.topLeftYPos == otherRectangle.topLeftYPos)) || ((this.width == otherRectangle.width) || (this.length == otherRectangle.length))) {
            return true;
        } else {
            return false;
        }
    }
}

let RectangleA = new Rectangle(4, 8, 4, 8);
let RectangleB = new Rectangle(5, 9, 5, 9);

console.log(RectangleA.collides(RectangleB));