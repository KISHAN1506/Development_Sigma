// Variables declared inside a function are not accessible outside the function
let sum = 45; // Global Scope


function calcSum(a, b) {
    sum = a + b;
}

// console.log(sum); not accessible outside

// Block Scope :
// accessible only in block scope


// Lexical Scope:

// A variable defined outside a function is accessible inside the fucntion
// that is defined after the varible declaration but the 
// opposite is NOT TRUE.

function outsideFunction() {
    function innerFunction() {
        console.log(x);
        console.log(y);
    }
    let x = 5;
    let y = 6;

    innerFunction();
}

outsideFunction();
// Hoisting

