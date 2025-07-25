let arr = [1, 2, 3, 4];

// Q1
let ans = arr.reduce((sum, el) => {
    return sum + (el * el);
})
console.log(ans);

// Q2
let ans2 = arr.map((el) => {
    return el + 5;
});

console.log(ans2);


// Q3
let arr2 = ["Kishan", "Agarwal", "is", "My", "Name"]
let ans3 = arr2.map((el) => {
    return el.toUpperCase();
})

console.log(ans3);

// let arr = [1, 2, 3, 4];
// Q4

let arrAns = arr;
function doubleAndReturnArgs(...arr) {
    for (let i = 0; i < arr.length; i++) {
        arrAns.push(arr[i] * 2);
    }
}

doubleAndReturnArgs(...arr);

console.log(arrAns);


// Q5

const mergeObjects = (obj1, obj2) => ({
    ...obj1, ...obj2
});
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
