const readlineSync = require("readline-sync");
let num = new Number(readlineSync.question('What is your number ?'));
if ((num == 1) || (num <= 7)) {
    if (num == 1) {
        console.log("Monday");
    } else if (num == 2) {
        console.log("Tuesday");
    } else if (num == 3) {
        console.log("Wednesday");
    } else if (num == 4) {
        console.log("Thursday");
    } else if (num == 5) {
        console.log("Friday");
    } else if (num == 6) {
        console.log("Saturday");
    } else {
        console.log("Sunday");
    }
}