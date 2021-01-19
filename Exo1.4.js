const readlineSync = require("readline-sync");
let name = readlineSync.question('Give me your name please?');
let firstName = readlineSync.question('Give me your firstname please?');
let city = readlineSync.question('Give me your city please?');
console.log("Your name is " + firstName + " " + name + " and you live in " + city + ".");