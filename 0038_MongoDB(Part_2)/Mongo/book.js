const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/college')
}

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
})

const Book = mongoose.model("Book", UserSchema);

// We should not left any of the required field empty because it will give error
// also if variable type is Number , then we cannot pass "abcd"
// but we can pass "123" as it can be parsed in Number format. (Cast Error)

const book1 = new Book({
    title: "Mathematics",
    author: "RD Sharma",
    price: 299
})

book1.save()
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })