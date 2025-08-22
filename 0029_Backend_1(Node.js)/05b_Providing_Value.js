const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

// module.exports = 123;

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
};

// Method 1 
module.exports = obj;

// Method 2
// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// };

// Method 3
// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;


// Method 4
// exports.sum = (a, b) => a + b;
// exports.mul = (a, b) => a * b;
// exports.g = 9.8;
// exports.PI = 3.14;