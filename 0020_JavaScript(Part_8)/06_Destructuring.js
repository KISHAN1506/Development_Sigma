let names = ["Kishan","Ajay","Aman","Bruce","abc"];

// let winner = names[0];
// let runnerup = names[1];

// this might seem like an array but in reality these are just individual elements
// let [winner,runnerup] = names;

let [winner,runnerup,...others] = names;
console.log(winner,runnerup);
console.log(others);
