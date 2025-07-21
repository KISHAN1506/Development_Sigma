// => is arrow function

const sum = (a, b) => {
    console.log(a + b);
}

console.log(sum(23, 33));


// for single arguments parenthesis can be skipped
const cube = a => {
    console.log(a * a * a);
}

console.log(cube(23));


// Implicit(understood to the program) return in arrow function
const pow = (a, b) => a ** b;

console.log(pow(2, 4));


const mul = (a, b) => a * b;
console.log(mul(2,3));
