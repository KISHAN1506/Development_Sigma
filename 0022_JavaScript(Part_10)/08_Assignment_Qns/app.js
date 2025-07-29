let p = document.querySelector("p");

// Q1
p.addEventListener("mouseout", function () {
    console.log("Mouse moved out");
});

let inp = document.querySelector("input");

inp.addEventListener("keypress", function () {
    console.log("Key is pressed");
});

window.addEventListener("scroll", function () {
    console.log("Page is being scrolled");
});

window.addEventListener("load", function () {
    console.log("Page Loaded");
})


// Q2:

let btn = document.createElement("button");
btn.innerText = "Hi I am button"
btn.addEventListener("click",function(){
    btn.style.backgroundColor = "green";
})

let body = document.querySelector("body");
body.append(btn);