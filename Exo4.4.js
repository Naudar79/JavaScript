const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('Please enter a number : '));
let a = 0;

let finalTab = new Array;

function rand10(min, max) {
    return 1 + Math.floor(Math.random() * 10);
}

function multiRand(n) {
    for (let j = 0; j < n; j++) {
        result = rand10(1, 10);
        finalTab.push(result);
    }
    return finalTab;
}

function min(n) {
    minNumber = Math.min.apply(null, finalTab);
    return minNumber;
}

function max(n) {
    maxNumber = Math.max.apply(null, finalTab);
    return maxNumber;
}

function average(n) { //Syntaxe bonne mais ne fonctionne pas !! "k" is not defined
    for (let k = 0; k < finalTab.length; k++); {
        a = new Number(a + finalTab[k]);
        moy = a / finalTab.length;
    }
    return moy;
}
console.log(finalTab);
console.log("le minimum est: " + min(finalTab));
console.log("le maximum est: " + max(finalTab));
console.log("la moyenne est: " + average(finalTab));