const readlineSync = require("readline-sync");
let firstName = readlineSync.question('Give me your name please?');
console.log("Hello " + firstName);