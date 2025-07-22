let nums = [23, 343, 2, 45, 6, 54, 234, 4, 56];

let ans = nums.filter((el) => {
    return (el % 2 == 0);
})

console.log(ans);