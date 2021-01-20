const readlineSync = require("readline-sync");
let num = new Number(readlineSync.question('Enter a number : '));

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++)
        result = result * i;
    return result;
}
console.log(factorial(num));