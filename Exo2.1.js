const readlineSync = require("readline-sync");
let age = new Number(readlineSync.question('What is your age :'));
if (age >= 18) {
    console.log("You are an adult");
} else if (age < 18) {
    console.log("You are not yet a baby");
}