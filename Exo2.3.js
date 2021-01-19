const readlineSync = require("readline-sync");
let increment = 0;

/* Pas du tout convaincu par la boucle While pour cette exo*/

for (let i = 1; i < 51; i++) {
    increment = increment + 2;
    console.log(increment);
}