const readlineSync = require("readline-sync");
let numberOne = new Number(readlineSync.question('Entrer le premier chiffre :'));
let numberTwo = new Number(readlineSync.question('Entrer le premier chiffre :'));
let Modulo = (numberOne % numberTwo);
console.log("Le Modulo est : " + Modulo);