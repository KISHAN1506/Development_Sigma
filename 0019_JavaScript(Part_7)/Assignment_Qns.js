// Qs. Write an arrow function named array
// Average that accepts an array of numbers and returns the average of those numbers.

let arraySum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

let arr = [1, 2, 3, 4, 12];
arraySum(arr);

// Qs:

let isEven = (num) => (num % 2 == 0);
console.log(isEven(13));

