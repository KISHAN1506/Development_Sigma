let liter = {
    a: '1',
    b: '2',
    null: 'd',
    undefined: 'm',
    true: 'w'
}

console.log(liter.null);


let student = {
    name: "Kishan",
    age : 19,
    marks: 51,
    city: "Surat"
};

student.city = "Ahmedabad";
console.log(student);

student.gender = "Male";
console.log(student);

student.marks = "A";
console.log(student);

delete student.city;
console.log(student);
