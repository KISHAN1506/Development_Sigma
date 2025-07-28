// for overall changes

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("Input Changed");
    console.log("Final Value = ", this.value);
})

user.addEventListener("input", function () {
    console.log("Input Changed");
    console.log("Final Value = ", this.value);
})

