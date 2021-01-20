const readlineSync = require("readline-sync");
console.log("Afficher un nombre random entre 1 et 10");

function rand10(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
console.log(rand10(1, 10));