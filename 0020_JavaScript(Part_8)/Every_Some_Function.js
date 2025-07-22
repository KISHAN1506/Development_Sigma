// Every function returns true if every element satisfies the condition
// and return false even if only value returns false
// Similar to logical and

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 4];

let ans = arr1.every((el) => {
    return (el % 2 == 0);
})
let ans2 = arr2.every((el) => {
    return (el % 2 == 0);
})

console.log(ans);
console.log(ans2);

// Some function
// Some function returns true if any of element satisfies the condition
// and return false even none of element return true
// Similar to logical or

let arr3 = [1, 2, 3, 4];
let arr4 = [2, 4];

let ansNew1 = arr3.some((el) => {
    return (el % 2 == 0);
})
let ansNew2 = arr4.some((el) => {
    return (el % 2 == 0);
})

console.log(ansNew1);
console.log(ansNew2);