const readlineSync = require("readline-sync");
let increment = 2;

/* Pas du tout convaincu par la boucle While pour cette exo*/

for (let i = 1; i < 50; i++) {
    increment = increment + 2;
    console.log(increment);
}