let h1 = document.querySelector("h1");


// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("maroon", 1000, () => {
//         changeColor("green", 1000);
//     });
// });
    

function changeColor(color,delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            h1.style.color = color;
        }, delay);
    });
};

changeColor("red",1000)
.then(() => {
    console.log("Red color changed successfully");
    changeColor("Orange",1000);
})
.then(() => {
    console.log("Orange color changed successfully");
})
.catch(()=>{
    console.log("Seems like an error");
})