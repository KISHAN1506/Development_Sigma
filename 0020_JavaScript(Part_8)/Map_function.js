
// Map function:

// main difference between forEach function 
// and map function is that forEach does not have any return value 
// while map function has return value which can be stored as 
// double in an array or similar

let nums = [1, 2, 3, 4];
let double = nums.map((element) => {
    return element * 2
});

console.log(double);

let students = [
    {
        name: "Kishan",
        marks: 92,
    }, {
        name: "Aman",
        marks: 81,
    }, {
        name: "Arnab",
        marks: 92,
    }
];

let gpa = students.map((el) => {
    return (el.marks)/10;
})

console.log(gpa);