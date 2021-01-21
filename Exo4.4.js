const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('Please enter a number : '));
let a = 0;
let table = multiRand();


function rand10(min, max) {
    return 1 + Math.floor(Math.random() * 10);
}

function multiRand() {
    let finalTab = new Array;
    for (let j = 0; j < n; j++) {
        result = rand10(1, 10);
        finalTab.push(result);
    }
    return finalTab;
}

function min(table) {
    minNumber = (Math.min(...table));
    return minNumber;
}

function max(table) {
    maxNumber = (Math.max(...table));
    return maxNumber;
}

function average(table) {
    let moy = 0;
    for (let k = 0; k < table.length; k++) {
        a = new Number(a + table[k]);
        moy = a / table.length;
    }
    return moy;
}

console.log(table);
console.log("Minimum is: " + min(table));
console.log("Maximum is: " + max(table));
console.log("Average is: " + average(table));