const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default:"https://plus.unsplash.com/premium_photo-1730132436750-9b7da1103887?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
        set: (v) =>
            v === ""
                ? "https://plus.unsplash.com/premium_photo-1730132436750-9b7da1103887?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                : v,
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;