function sum(a,b){
    return (a+b);
}


function avrg(a,b,c){
    return ((a+b+c)/3);
}
let answer = sum(1,2);
// console.log(answer);

// console.log(sum(sum(1,2),3));


function SumTillN(n){
    let sum = 0;
    for(let i = 1;i<=n;i++) {
        sum += i;
    }
    return sum;
}

// console.log(SumTillN(30));


function concatinationOfArray(arr){
    let strg = "";
    for(let i = 0;i<arr.length;i++){
        strg += arr[i];
    }
    return strg;
}
let arr = ["Hi","Hello","Bye","TTYL"];

console.log(concatinationOfArray(arr));