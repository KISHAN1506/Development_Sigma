const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.use(express.static(path.join(__dirname,"public/CSS")));
app.use(express.static(path.join(__dirname,"public/JS")));
app.set("view engine", "ejs");
// Here we are setting path for views that get cwd of EJS_Directory and join views at the end of it as us it as the path for views folder of EJS
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("Root");
    console.log("Request Made");
    res.render("home.ejs");

    // res.render("home"); also works
})
app.get("/rolldice", (req, res) => {
    console.log("Request Made For Dice Roll");
    let diceVal = Math.floor(Math.random() * 6) + 1; // coming from database
    // res.render("rolldice.ejs", { num: diceVal });
    // res.render("rolldice.ejs", { diceVal: diceVal });
    res.render("rolldice.ejs", { diceVal });
})

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }

})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})