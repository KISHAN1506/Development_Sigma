const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// Insertion
// const user1 = new User({
//     name: "Kishan", email: "Kishan@smthing.com", age: 20,
// })

// user1.save();

// const user2 = new User({
//     name: "Eve", email: "Eve@smthing.com", age: 23,
// })

// save also returns a promise

// user2.save().then(res => {
//     console.log(res);
// }).catch((err) => { console.log(err); })


// Insertion of Many
// User.insertMany([
//     { name: "Ram", email: "ram@outlook.com", age: 13 },
//     { name: "Shyam", email: "shyam@outlook.com", age: 13 },
//     { name: "Arman", email: "arman@gmail.com", age: 13 },
// ])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// We might think that we should write all these queries of forming Schema, models 
// and collections in .then query of database connection Successful

// but mongoose uses Operation Buffering
// Mongoose lets you start using the models immeditely , without waiting for the
// mongoose to establish a conection to MongoDB


// find

// User.find({})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.find({ age: { $gt: 15 } })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.findOne({ age: { $gt: 15 } })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// FindOne we generally use to find the data using id

// Query object is returned by findOne but still it is thennable so 
// we can use then and catch
// User.findOne({ _id: '68ce3fe9dca3d2674fbf1759' })
//     .then((res) => {
//         console.log(res["name"]);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.findById('68ce3fe9dca3d2674fbf1759')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// Update using Mongoose

// User.updateOne({ name: "Kishan" }, { age: 19 })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Find one then update

// It will find and show data then make the changes in the databases
// Shown details are which we see before updation

// For getting updated data we can set the option of new as true
// User.findOneAndUpdate({ name: "Kishan" }, { age: 21 }, { new: true })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Find by id and update
User.findByIdAndUpdate("68ce427c127a68ab3ede04b5", { age: 21 }, { new: true })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err);
    });


// Deletion in Mongoose
// User.deleteOne({ name: "Ram" })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// Delete Many

// User.deleteMany({ age: 13 })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })


User.findByIdAndDelete('68ce41665080f5a73e1b102a')
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })