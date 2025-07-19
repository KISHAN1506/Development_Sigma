function multiCall(func, n) {
    for (let i = 0; i < n; i++) {
        greet();
    }
}

let greet = function () {
    console.log("Hello !!");
}

multiCall(greet,5);


function oddEvenTest(request) {
    if (request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    } else if (request == "even") {
        return function(n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}