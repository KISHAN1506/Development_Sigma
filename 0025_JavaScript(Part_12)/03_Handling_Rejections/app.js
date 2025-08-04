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


// Write await calls generally in try block , 
// if in case we face any rejection in Promise, rest of 
// the code should work normally
async function demo() {
    try {
        await colorChange("orange", 1000);
        await colorChange("red", 1000);
        await colorChange("blue", 1000);
    }
    catch (err) {
        console.log("Error caught : ", err);
    }

    let a = 5;
    console.log(a);
    console.log("New Number :", a + 5);


}

demo();