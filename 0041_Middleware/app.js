const express = require("express");
const app = express();

// Middleware
// It has 2 choices --> 1. send response 2. call (next) can be a middleware or a function
// All requests are executed in middleware 

// Middlewares donot send responses
// These middlewares will run for every request 
// no matter whatever the type of request be GET POST PUT DELETE
// infact if the path passed is wrong then also the middlewares will run
// app.use((req, res, next) => {
//     console.log("Hi I am 1st middleware");
//     next();
//     console.log("This is after next");
// })

// app.use((req, res, next) => {
//     console.log("Hi I am 2nd middleware");
//     // next();
//     return next(); // as nothing should be written after next as a good programmer
//     console.log("This will never get printed");
// })

// Hi I am 1st middleware
// Hi I am 2nd middleware
// This is a random page
// This is after next
// after full execution next part will also run



// If we send the request to http://localhost:8080/random/abcd then also middleware will run
app.use("/random", (req, res, next) => {
    console.log("I am here for random route");
    next();
})

// Creating a utility middleware 
// Logger - morgan
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
})

app.get("/wrong", (req, res) => {
    abcd = abcd;
})


// Middleware for authentication of API so that only verified person can get the data
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveAccess") {
        next();
    }
    throw new Error("ACCESS DENIED!");
}


app.get("/api", checkToken, (req, res) => {
    res.send("Some DATA")
})

app.get("/", (req, res) => {
    res.send("HI, I am root");
})

app.get("/random", (req, res) => {
    res.send("This is a random page");
})


// for sorting 404 error, this has to be kept at the end of the page
app.use((req, res, next) => {
    res.status(404).send("Page not found!")
})


app.listen(8080, () => {
    console.log("Server is listening on the port 8080");
})