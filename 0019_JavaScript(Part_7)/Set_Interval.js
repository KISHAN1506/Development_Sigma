console.log("hello Everyone");

let id = setInterval(() => {
    console.log("abc");
}, 2000);

console.log(id);

let id2 = setInterval(() => {
    console.log("what");
}, 4000);

console.log(id2);


// to stop :
clearInterval(id);
