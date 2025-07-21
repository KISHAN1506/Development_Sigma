let sq = (n) => n * n;
console.log(sq(2));

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 11000)