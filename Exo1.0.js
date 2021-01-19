/*Demander deux nombres au user et afficher le résultat de chaque operateurs + - * / % */
const readlineSync = require("readline-sync");
let numberOne = new Number(readlineSync.question('Entrer le premier chiffre :'));
let numberTwo = new Number(readlineSync.question('Entrer le premier chiffre :'));
let Addit = (numberOne + numberTwo);
let Soustract = (numberOne - numberTwo);
let Multipli = (numberOne * numberTwo);
let Division = (numberOne / numberTwo);
let Modulo = (numberOne % numberTwo);
console.log("Le résultat de l'addition est : " + Addit);
console.log("Le résultat de la multiplication est : " + Multipli);
console.log("Le résultat de la soustraction est : " + Soustract);
console.log("Le résultat de la division est : " + Division);
console.log("Le Modulo est : " + Modulo);