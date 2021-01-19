const readlineSync = require("readline-sync");
let resu = 0;
let num = new Number(readlineSync.question('Choice a number :'));
for (let index = 0; index < num; index++) {
    let numForAdd = new Number(readlineSync.question('Choice a new number :'));
    resu = numForAdd + numForAdd;
}
console.log(resu);