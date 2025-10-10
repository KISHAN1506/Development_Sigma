const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then((res) => {
        console.log("Connection Successful!");
    }).catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Index route
app.get("/chats", async (req, res) => {
    // as data is coming from database so it a asyncronous function
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
})

// New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

// Create Route
app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        createdAt: new Date()
    })
    newChat.save()
        .then((res) => {
            console.log("saved");
        }).catch((err) => {
            console.log(err);
        })
    res.redirect("/chats");
})

//Edit Route

app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})

// UPDATE ROUTE
app.put("/chats/:id",async (req, res) => {
    let { id } = req.params;
    let { msg:newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
})

//DESTROY ROUTE

app.delete("/chats/:id",async (req,res)=>{
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})


const port = 8080;

app.get("/", (req, res) => {
    res.send("Server is Working!!")
})


app.listen(port, () => {
    console.log("Listening on Port " + port);
})