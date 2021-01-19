const readlineSync = require("readline-sync");
let i = 0;
while (i != 42) {
    let num = new Number(readlineSync.question('What is your favorite number ?'));
    i = num;
}