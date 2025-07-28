// on a page every single element can be used and triggered using eventListener

let p = document.querySelector("p");
p.addEventListener("click", function () {
    console.log("Lets go, Para was clicked");

})

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function () {
    console.log("You hovered on box");

})