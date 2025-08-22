// const someVal = require("./05b_Providing_Value");

// console.log(someVal);

// kishanagarwal@Kishans-MacBook-Air 0029_Backend_1(Node.js) % node 05a_Export_Using_File.js
// 123
// kishanagarwal@Kishans-MacBook-Air 0029_Backend_1(Node.js) % 


// If nothing is provided by the file and still we 'require' it , it prints an empty object
// kishanagarwal@Kishans-MacBook-Air 0029_Backend_1(Node.js) % node 05a_Export_Using_File.js
// {}

// require()
// a built-in function to include external modules that exist in separate files.
// module.exports
// a special object


const maths = require("./05b_Providing_Value");

// console.log(maths);
// kishanagarwal@Kishans-MacBook-Air 0029_Backend_1(Node.js) % node 05a_Export_Using_File.js
// { sum: [Function: sum], mul: [Function: mul], g: 9.8, PI: 3.14 }
// kishanagarwal@Kishans-MacBook-Air 0029_Backend_1(Node.js) % 


console.log(maths.sum(8,9));
console.log(maths.PI);

// 17
// 3.14
