const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const port = 8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'application',
    password: 'kishan2006'
});


// HOME PAGE route
app.get("/", (req, res) => {
    let q = "select count(*) from user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            // res.send(result[0]["count(*)"]);
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error found in DataBase!!");
    }
});

// Show users route
app.get("/user", (req, res) => {
    let q = "SELECT * from user";
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error found in DataBase!!");
    }
})

// EDIT ROUTE
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * from user where id="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error found in DataBase!!");
    }
})


// UPDATE (DB) Route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * from user where id="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("Wrong Password");
            } else {
                let q2 = `UPDATE user SET username="${newUsername}" where id="${id}"`;
                connection.query(q2, (err2, result) => {
                    if(err2) throw err2;
                    console.log(err2);
                    res.redirect("/user");
                })
            }

        });
    } catch (err) {
        console.log(err);
        res.send("Some error found in DataBase!!");
    }
})


app.listen(port, () => {
    console.log("Listening on port " + port);
});

let createRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

