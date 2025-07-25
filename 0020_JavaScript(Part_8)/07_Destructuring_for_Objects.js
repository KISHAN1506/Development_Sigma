const student = {
    name: "Kishan",
    age: 19,
    class: 14,
    subject: ["DSA", "DSD", "Complex"],
    username: "Kishan@gmail.com",
    password: "abcd",
    city: "Pune"
};



// let username = student.username;
// let password = student.password;


// let {username,password} = student;
// if we want to store data in some other variable

let { username: user, password: secret, city: place = "Surat" } = student;
console.log(user);
console.log(secret);
console.log(place);
