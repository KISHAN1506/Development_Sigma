// Q1

let arr = [10, 120, 123302];

let ans = arr.every((el) => {
    return (el % 10 == 0);
})

console.log(ans);


// Q2

let arr2 = [1,2,3,4,5];

let ans2 = arr2.reduce((min,el) => {
    if(min < el) {
        return min;
    }else { 
        return el;
    }
})

console.log(ans2);