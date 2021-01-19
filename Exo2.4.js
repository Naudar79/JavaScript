const readlineSync = require("readline-sync");

for (let i = 0; i <= 100; i++) {
    let mod = i % 2;
    if (mod == 0) {
        let resu = i / 2;
        console.log(resu);
    } else {
        let mult = i * 3;
        console.log(mult);
    }
}