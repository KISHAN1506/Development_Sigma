// General Syntax for any method is : str.method()
let str = "    kishan    "

// Trim does not alter the original string instead it creates a new string 
let strTrm = str.trim();
console.log(str);
console.log(strTrm);

// Strings in JS are immutable
// To uppercase and to lowercase
let myName = "Kishan"
console.log(myName.toLowerCase())
console.log(myName.toUpperCase())

// index of Argument

let strg = "HelloEveryone"
console.log(strg.indexOf("Ever"));


// Method Chaining
let msg = "     hello       "
console.log(msg.trim().toUpperCase());


// Slice Method
let strg2 = "Hello Everyone"
console.log(strg2.slice(2));
console.log(strg2.slice(2,5));

console.log(strg2.slice(-2)); // str.length() - 2

// Replace :
// Only first occurence is changed

let str2 = "Agarwal"

console.log(str2.replace('a','z'));
console.log(str2.replace('ar','zg'));


// Repeat

let str3 = "Hello"
console.log(str3.repeat(3));