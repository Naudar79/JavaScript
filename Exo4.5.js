const readlineSync = require("readline-sync");
let ax = new Number(readlineSync.question("Entrer le point AX: "));
let ay = new Number(readlineSync.question("Entrer le point AY: "));
let bx = new Number(readlineSync.question("Entrer le point BX: "));
let by = new Number(readlineSync.question("Entrer le point BY: "));

function calcDistance(ax, ay, bx, by) {
    this.ax = ax;
    this.ay = ay;
    this.bx = bx;
    this.by = by;
    let distDeuxPoints = Math.sqrt((Math.pow(this.bx - this.ax, 2)) + (Math.pow(this.by - this.ay, 2)));
    return distDeuxPoints;
}
console.log(calcDistance(ax, ay, bx, by));