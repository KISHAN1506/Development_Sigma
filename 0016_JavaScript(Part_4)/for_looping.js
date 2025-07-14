// for (let i = 0; i < 1001; i++) {
//     console.log(i);
// }

// Print odd:
console.log("Odd Numbers ");
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

console.log("Even Numbers:");
// Print Even:
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Infinite loop
// for(let i = 0;i>=0;i++){
//     console.log(i);
// }

// Multiplication Table

let table = 12;
for (let i = 1; i <= 10; i++) {
    console.log(`${table} X ${i} = ${table * i}`);
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i + 1; j++) {
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
}