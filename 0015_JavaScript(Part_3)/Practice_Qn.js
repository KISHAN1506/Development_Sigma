// Q1
let arr = [7, 9, 0, -2];
let n = 3;

console.log(arr.slice(0, n));

// Q2
let arr2 = [7, 9, 0, -2];
let n2 = 3;

console.log(arr2.slice(-n2));


// Q3
let str = "";
if (str.length === 0) {
    console.log("yes it is empty");
} else {
    console.log("No");

}

// Q4
let str2 = "kishan";
if (str2.toLowerCase() === str2) {
    console.log("yes it is lower case");
} else {
    console.log("No");

}

// Q5

let str3 = "   kishan     "
console.log(str3.trim());


// Q6
let arrr = [1, 2, 3];
let nn = 20;
if (arrr.includes(nn)) {
    console.log("Number there");
} else {
    console.log("Not there");

}