const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then((res) => {
        console.log("Connection Successful!");
    }).catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let AllChats = [
    {
        from: "Kishan",
        to: "Rahul",
        msg: "Send the file asap",
        createdAt: new Date(),
    },
    {
        from: "Aman",
        to: "Abdul",
        msg: "Hope you are fine",
        createdAt: new Date(),
    },
    {
        from: "Riya",
        to: "Kunal",
        msg: "Don't forget the meeting tomorrow",
        createdAt: new Date(),
    },
    {
        from: "Meena",
        to: "Aman",
        msg: "Happy Birthday ",
        createdAt: new Date(),
    },
    {
        from: "Abdul",
        to: "Ravi",
        msg: "Where are you right now?",
        createdAt: new Date(),
    },
    {
        from: "Sanya",
        to: "Pooja",
        msg: "Let's catch up in the evening",
        createdAt: new Date(),
    },
    {
        from: "Rahul",
        to: "Kishan",
        msg: "I'll send the file in 10 mins",
        createdAt: new Date(),
    },
    {
        from: "Arjun",
        to: "Nikhil",
        msg: "Did you complete the assignment?",
        createdAt: new Date(),
    },
    {
        from: "Pooja",
        to: "Sanya",
        msg: "Sure, see you at 6",
        createdAt: new Date(),
    },
    {
        from: "Kunal",
        to: "Riya",
        msg: "Yes, I'll be there on time",
        createdAt: new Date(),
    },
    {
        from: "Nikhil",
        to: "Arjun",
        msg: "Still working on it",
        createdAt: new Date(),
    },
    {
        from: "Ravi",
        to: "Abdul",
        msg: "I'm near the station",
        createdAt: new Date(),
    },
    {
        from: "Priya",
        to: "Meena",
        msg: "Let's go shopping this weekend",
        createdAt: new Date(),
    },
    {
        from: "Vikram",
        to: "Aman",
        msg: "Send me the notes please",
        createdAt: new Date(),
    },
    {
        from: "Anjali",
        to: "Priya",
        msg: "Call me when you're free",
        createdAt: new Date(),
    },
];

Chat.insertMany(AllChats)