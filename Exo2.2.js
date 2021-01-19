const readlineSync = require("readline-sync");
let min = new Number(readlineSync.question('Enter min number :'));
let max = new Number(readlineSync.question('Enter max number :'));
let current = new Number(readlineSync.question('Enter current number :'));
if (min < max) {
    if ((current < max) && (current > min)) {
        console.log("Current is between min and max");
    } else {
        console.log("current is not between min and max");
    }
} else if (min >= max) {
    console.log("ERROR : min was be minder to  max !");
}