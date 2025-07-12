let students = ["kishan","agarwal"]

console.log(students);
console.log(typeof(students));

let thngs = [123,234.44,"Kishan"]
console.log(thngs);
console.log(thngs);


let empArr = [];
console.log(empArr.length);


// Arrays are mutable

let fruit = ["Apple","Banana","Mango"]
fruit[11] = "Papaya";

// [ 'Apple', 'Banana', 'Mango', <8 empty items>, 'Papaya' ]
console.log(fruit);

// Array Methods:
let fruit2 = ["Apple","Banana","Mango"]
fruit2.push("Kishan")
console.log(fruit2);


// Pop removes the last element
console.log(fruit2.pop());
console.log(fruit2);

console.log("IHIHIHIHIHIHIHIHIHIHIHIHIHIH");
console.log("IHIHIHIHIHIHIHIHIHIHIHIHIHIH");
console.log("IHIHIHIHIHIHIHIHIHIHIHIHIHIH");

// Unshift -> Add to start
// Shift -> delete from start and return it

let fruit3 = ["Apple","Banana","Mango"]
fruit3.unshift("Apple")
console.log(fruit3);

console.log(fruit3.shift());

console.log(fruit3);


let follower = ['a','b','c'];

let blocked = []

blocked.push(follower.shift());
console.log(follower);
console.log(blocked);


