const readlineSync = require("readline-sync");
let lowNumberArray = [1, 2, 3, 4, 5];
let highNumberArray = [100, 101, 102];
let low = +"0";
let high = +"0";

for (let index = 0; index < lowNumberArray.length; index++) {
    low += lowNumberArray[index];
}

for (let index = 0; index < highNumberArray.length; index++) {
    high += highNumberArray[index];
}

console.log(low);
console.log(high);