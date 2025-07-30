// Without bubbling prevention parent event listener is also triggered
// div was clicked
// app.js:9 

// ul was clicked
// app.js:6 
// div was clicked
// app.js:14 

// li was clicked
// app.js:9 
// ul was clicked
// app.js:6 
// div was clicked

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function () {
    console.log("div was clicked");
});
ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

for(lis of li){
    lis.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
}

// with stop propagation
// div was clicked
// app.js:25 ul was clicked
// app.js:31 li was clicked