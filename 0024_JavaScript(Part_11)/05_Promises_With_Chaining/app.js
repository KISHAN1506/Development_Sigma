// The promises object represents the eventual completion or failure of an 
// asychronous operation and its resulting value

// Promises -> resolve or reject

function saveToDB(data, success, failure) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success : data saved");
        } else {
            reject("Failure : weak connection")
        }
    })
}

// saveToDB("Kishan Agarwal")
//     .then(() => {
//         console.log("Data1 saved : Promise was resolved");
//     })
//     saveToDB("Hello")
//         .then(()=> {
//             console.log("Data2 Saved");
//         })

//     .catch(() => {
//         console.log("Promise was rejected");
//     })


saveToDB("Kishan Agarwal")
    .then((result) => {
        console.log("Data1 saved : Promise was resolved");
        console.log("result of promise : ",result);
        return saveToDB("Hello")
    })
    .then(() => {
        console.log("Data2 saved");
        console.log("result of promise : ",result);
        return saveToDB("abcd")
    })
    .then(() => {
        console.log("Data3 saved");
        console.log("result of promise : ",result);
    })
    .catch((error) => {
        console.log("Promise was rejected");
        console.log("error of promise : ",error);
    })
