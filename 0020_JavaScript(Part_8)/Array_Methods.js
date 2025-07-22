let arr = [1, 2, 3, 4, 5];

// M1
let print = function (el) {
    console.log(el);
}
arr.forEach(print);


// M2
arr.forEach(function (el) {
    console.log(el);
});

// M3
arr.forEach((el) => {
    console.log(el);
});


let arr2 = [
    {
        name: "Kishan",
        marks: 32,
    }, {
        name: "Aman",
        marks: 21,
    }, {
        name: "Arnab",
        marks: 52,
    }
];

console.log(arr2);

arr2.forEach((student) => {
    console.log(student);
})