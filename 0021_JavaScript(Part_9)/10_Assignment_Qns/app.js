let input = document.createElement("input");

let btn = document.createElement("button");
btn.innerText = "Click me";


input.setAttribute("placeholder","Username");
btn.setAttribute("id","btn");

let btnAcc = document.querySelector("#btn");
btn.classList.add("btnStyle");


document.querySelector("body").append(input);
document.querySelector("body").append(btn);


let head1 = document.createElement("h1");
head1.innerHTML = "DOM Practice";
head1.setAttribute("id","head1");

document.querySelector("body").append(head1);

let p1 = document.createElement("p");
p1.innerHTML = "<b>Kishan Agarwal </b>is my name";

document.querySelector("body").append(p1);