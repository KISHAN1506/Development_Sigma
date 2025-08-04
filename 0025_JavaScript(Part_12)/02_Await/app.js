function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 10)
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

demo();

// Improving previous Color change code using Async and Await

let h2 = document.querySelector("h2");
function colorChange(color, delay) {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            h2.style.color = color;
            resolved("Color Changed");
        }, delay);
    });
}

async function ColCh () {
    await colorChange("orange",1000);
    await colorChange("red",1000);
    colorChange("blue",1000);
}

ColCh();