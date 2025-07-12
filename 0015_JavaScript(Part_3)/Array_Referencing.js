console.log([1] == [1]);
// This condition will always return 'false' 
// since JavaScript compares objects by reference, not value
// console.log([1] === [1]);
console.log([] == []);
// This condition will always return 'false' 
// since JavaScript compares objects by reference, not value
// console.log([] === []);


let arr = [1, 2, 3]
// These all happens in pass by reference format 
let arrcpy = arr;
arrcpy.push(4);
console.log(arr);

