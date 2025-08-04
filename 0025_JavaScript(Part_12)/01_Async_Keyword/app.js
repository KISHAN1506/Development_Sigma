// Every async function by default returns a Promise
// Promise is being returned even if any of the return or promise 
// is passed or not


// async --> function works asyncronously
async function greet() {
    return "Hello!";
}

greet()
    .then((result) => {
        console.log(result + "World");
    })

    .catch((err) => {
        console.log("Some Error Encountered : ", err);
    });

let demo = async () => { return 5 };