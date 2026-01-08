const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();


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
    throw new ExpressError(401, "ACCESS DENIED!");
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

app.get("/err", (req, res) => {
    abcd = abcd;
})

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is forbidden");
})


app.use((err, req, res, next) => {
    // console.log("---Error Handler---");
    let { status = 500, message = "Some Error occurred" } = err;
    res.status(status).send(message);
    // next() --> calls next non error handling middleware
    // next(err) --> calls next error handling middleware
})


// for sorting 404 error, this has to be kept at the end of the page
app.use((req, res, next) => {
    res.status(404).send("Page not found!")
})


app.listen(8080, () => {
    console.log("Server is listening on the port 8080");
})