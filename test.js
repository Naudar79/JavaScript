console.log("It works !!!"); /*Affiche "It works"*/
/*~BASES~*/
/*Display some data */
const readlineSync = require("readline-sync"); /*Appeler la librérier readline-sync*/
/*Ask data to your programs */
let userName = readlineSync.question('Can you give me your name please '); /*Demande le nom du user */
console.log("Hello " + userName); /*afiche Hello nomUtilisateur*/
/*Variables */
let age = 25; /*Déclavre la variable age et lui affecte 25 */
age = 36; /*On modifie la valeur de age à 36*/
age = 18; /*On change la valeur précédente (36) */
/*-- Numbers */
let age = 25;
/*-- String */
let phrase = "Coding is fun!";
/*-- Booleans */
let isItTrue = true;
let isItFalse = false;