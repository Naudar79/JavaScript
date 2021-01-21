const readlineSync = require("readline-sync");
let sondage = { name: '', year: '', cast: [] };
let choix = '';

function askTvSeries() {
    sondage.name = readlineSync.question('Entrez le nom de votre serie :');
    sondage.year = new Number(readlineSync.question('Entrez la date de votre serie :'));
    while (choix != '**') {
        choix = readlineSync.question('Entrez le nom de votre acteur. faites ** pour arrêter la liste :');
        sondage.cast.push(choix);
    }

    return sondage;
}
console.log(JSON.stringify(askTvSeries()));