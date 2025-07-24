let arr = [1, 2, 3, 4, 5];
let arrNew = [...arr];
console.log(...arrNew);


let strgArr = [..."Kishan"];
console.log(strgArr);


let odds = [1, 3, 5, 7, 9];
let evens = [2, 4, 6, 8];

let allNums = [...odds, ...evens];

console.log(...allNums);

