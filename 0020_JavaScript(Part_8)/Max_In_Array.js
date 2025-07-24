let arr = [1, 2, 3, 1];

// let max = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

//  console.log(max);

let ans = arr.reduce((max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
})
console.log(ans);