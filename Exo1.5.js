const readlineSync = require("readline-sync");
let numOne = new Number(readlineSync.question('Choice a first number with decimal: '));

let numTwo = new Number(readlineSync.question('Choice a second number with decimal: '));

/* ne garder que la partie entiere de numOne*/

let result = Math.trunc(numOne) * numTwo;

console.log("The result is: " + result);