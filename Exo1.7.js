const readlineSync = require("readline-sync");
let ShoeSize = new Number(readlineSync.question('What is your shoes size :'));
let bitrhYear = new Number(readlineSync.question('what is your birth year :'));
let multSize = (((ShoeSize * 2) + 5) * 50);
let sousYear = ((multSize - bitrhYear) + 1766);
console.log("Le résultat est: " + sousYear);