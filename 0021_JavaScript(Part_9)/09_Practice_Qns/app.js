// Q1
let para = document.createElement('p');
para.innerText = "Hey I am red";
para.style.color = "red";

document.querySelector("body").append(para);

// Q2
let heading3 = document.createElement('h3');
heading3.innerText = "Hey I am blue";
heading3.style.color = "blue";
document.body.append(heading3);

// Q3

let divaddn = document.createElement("div");
divaddn.style.border = "black solid 1px";
divaddn.style.backgroundColor = "pink";
document.querySelector("h3").append(divaddn);


let head1 = document.createElement("h1");
head1.innerHTML = "I am in a div";
divaddn.appendChild(head1);

let parag = document.createElement("p");
parag.innerHTML = "Me too!";
divaddn.appendChild(parag);

