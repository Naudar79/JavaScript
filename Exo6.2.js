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

let RectangleA = new Rectangle(1, 1, 3, 5);
let RectangleB = new Rectangle(3, 3, 3, 6);

console.log(RectangleA.collides(RectangleB));