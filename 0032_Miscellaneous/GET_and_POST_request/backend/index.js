const express = require("express");
let app = express();
const port = 8080;
 

// These 2 lines are compulsory to write in index.js
// as by default data is categorised as undefined (no by default data type is given)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    console.log("Request Made");

    let { user, password } = req.query;
    // res.send("Standard GET responts")
    res.send("Hello " + user);
})
app.post("/register", (req, res) => {
    console.log("Request Made");
    // to get data from req.body we have to parse the data
    // so that express can understand the data
    let { user, password } = req.body;

    res.send("Standard POST responts, hello "+user);
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})