const readlineSync = require("readline-sync");
let sondage = { name: '', year: '', cast: [] };
let tvSerie = new Array;
let choix = '';
let n = 0;

function askTvSeries() {
    sondage.name = readlineSync.question('Entrez le nom de votre serie :');
    sondage.year = new Number(readlineSync.question('Entrez la date de votre serie :'));
    while (choix != '**') {
        choix = readlineSync.question('Entrez le nom de votre acteur. faites ** pour arreter la liste :');
        sondage.cast.push(choix);
    }
    sondage.cast.pop(n - 1);
    return sondage;
}

function randomizeCast() {
    for (let j = 0; j < sondage.length; j++) {
        result = math.floor(Math.random(sondage.cast));
        tvSerie.push(result);
    }
    return tvSerie;
}
console.log(tvSerie);