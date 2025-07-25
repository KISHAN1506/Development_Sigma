// Rest allows a function to take indefinate arguments and 
// bundle them up in an array

function min(a, b, c, d) {
    console.log(arguments);
}

console.log(min(1, 2, 3, 4));



function sum(...args) {

    // for(let i = 0;i<args.length;i++){
    //     total+=args[i];
    // }

    return args.reduce((total2, el) => total2 + el , 0);
}


console.log(sum(1, 2, 3, 4, 5, 6, 7));