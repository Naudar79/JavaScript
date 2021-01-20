const readlineSync = require("readline-sync");
console.log("Calcul surface d'un rectangle");
let haut = readlineSync.question('Entrez la hauteur : ');
let large = readlineSync.question('Entrez la largeur :');

function calcSurface(haut, large) {
    return haut * large;
}
console.log(calcSurface(haut, large));