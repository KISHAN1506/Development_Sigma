let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    let user = this.elements[0]; //this === form here
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);
    
    console.log("Form Submitted");
})