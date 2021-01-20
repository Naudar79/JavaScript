const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('Please enter a number : '));

function rand10(min, max) {
    return 1 + Math.floor(Math.random() * 10);
}

function multiRand(n) {
    let finalTab = new Array;
    for (let j = 0; j < n; j++) {
        result = rand10(1, 10);
        finalTab.push(result);
    }
    return finalTab;
}
console.log(multiRand(n));