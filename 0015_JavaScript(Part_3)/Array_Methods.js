let arr = ["Kishan", "Deebu", "Whatever"];

// index of in array

console.log(arr.indexOf("Kishan"));
console.log(arr.indexOf("Kishann"));

// "includes" --> search if the value is there or not
console.log(arr.includes("Kishan"));
console.log(arr.includes("Kishann"));

// Concatenation Method
let color1 = ["red", "green", "blue"];
let color2 = ["voilet", "indigo", "magenta"];

console.log(color1.concat(color2));



// Reverse Method
// ⭐️ It is the function that changes the original array
console.log(color1.reverse());
console.log(color1);

let allColor = ['red', 'green', 'blue', 'voilet', 'indigo', 'magenta'];
// by default slice has 2 paramenters --> default : (start,end)
// Does not change the original Array
console.log(allColor.slice());
console.log(allColor.slice(2));
console.log(allColor.slice(2, 3));
console.log(allColor.slice(-2));
console.log(allColor.slice(8));


// Splice Method
// Syntax of Splice(start, deleteCount ,item0......itemN)
// Every actions and changes are done in original Array

let allColors = ['red', 'green', 'blue', 'voilet', 'indigo', 'magenta'];
console.log(allColors.splice(4));
// ['indigo', 'magenta']

console.log(allColors)
// ['red', 'green', 'blue', 'voilet']

console.log(allColors.splice(0, 1));
// ['red']

console.log(allColors)
// ['green', 'blue', 'voilet']

console.log(allColors.splice(0, 1, "black", "grey"));
// ['green']

console.log(allColors)
// ['black', 'grey', 'blue', 'voilet']


// This Olive will be added to the place from where element is deleted 
// (in this case grey replaced with Olive   )
console.log(allColors.splice(1, 1, "Olive"))
console.log(allColors);


// Sort Method
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"]
// looks good for Strings
days.sort();
console.log(days.sort());

// for numbers it doesnot works well because first it converts 
// the number to string then sort

let age = [23,54,12,100,99]
console.log(age.sort());

