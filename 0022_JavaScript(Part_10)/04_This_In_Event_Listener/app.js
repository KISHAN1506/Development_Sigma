// In callback this means --> the object which made the call in event listener

let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let btn = document.querySelector("button");

function changeBackground() {
    console.dir(this.innerText);
    this.style.backgroundColor = "lightblue";
}

h1.addEventListener("click",changeBackground);
h3.addEventListener("click",changeBackground);
p.addEventListener("click",changeBackground);
btn.addEventListener("click",changeBackground);