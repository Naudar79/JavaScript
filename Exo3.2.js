const readlineSync = require("readline-sync");
let lowNumberArray = [1, 2, 3, 4, 5];
let highNumberArray = [100, 101, 102];
let low = +"0";
let high = +"0";
let moyLow = 0;
let moyHigh = 0;

for (let index = 0; index < lowNumberArray.length; index++) {
    low = low + lowNumberArray[index];
    moyLow = low / lowNumberArray.length;
}

for (let index = 0; index < highNumberArray.length; index++) {
    high = high + highNumberArray[index];
    moyHigh = high / highNumberArray.length;
}

console.log(moyLow);
console.log(moyHigh);