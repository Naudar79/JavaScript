const readlineSync = require("readline-sync");
let sondage = { name: '', year: '', cast: [] };
let choix = '';

function askTvSeries() {
    sondage.name = readlineSync.question('Entrez le nom de votre serie :');
    sondage.year = new Number(readlineSync.question('Entrez la date de votre serie :'));
    //do {              !!!! Finir la boucle + alimenter le tableau
    sondage.cast = readlineSync.question('Entrez le nom de votre acteur. faites Q pour arrêter la liste :');
    //} while ((choix != "q") || (choix != "Q"));
    return sondage;
}
console.log(askTvSeries());