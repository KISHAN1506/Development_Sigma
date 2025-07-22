// returns a single value at the end

// arr.reduce( reducer function with 2 variables for (accumulator, element) );
let arr = [1,2,3,4];

let ans = arr.reduce((acc,el) => {
    return acc+el;
});

console.log(ans);
