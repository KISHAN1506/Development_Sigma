// We use callbacks to deal with single threaded nature of JS


// This setTimeout is handled by our browser
setTimeout(() => {
    console.log("Kishan this side");
},2000);

console.log("Hello Everyone");