const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { stat } = require("fs");
const {listingSchema,reviewSchema} = require("./schema.js");
const { valid } = require("joi");
const Review = require("./models/review.js");
const { log } = require("console");



const MONGO_URL = "mongodb://127.0.0.1:27017/stayvia";

main().then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


app.get("/", (req, res) => {
    res.send("Server is Working!!")
})

const validateListing = (req,res,next) =>{
    let {error} = listingSchema.validate(req.body);
    
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg)
    }else{
        next();
    }
}

const validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg)
    }else{
        next();
    }
}


//Index Route
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}))

// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs")
})

//Show Route
app.get("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing })
}))

// Create Route
app.post("/listings", wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}))

// Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing })
}))

// Update route
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    let id = req.params.id;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}))

// Delete Route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let id = req.params.id;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings")
}))

//Reviews
//Reviews Post Route

app.post("/listings/:id/reviews", validateReview ,wrapAsync(async (req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review)

    listing.reviews.push(newReview)

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`)
}))

//Reviews Delete Route

app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req,res) =>{
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId)


    res.redirect(`/listings/${id}`)
}))

// app.get("/testListing",async (req,res)=>{
//     let sampleListing = new Listing({
//         title:"Villa de Cartonous",
//         description:"Beach Side",
//         image:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
//         price: 2500,
//         Location:"Surat, Gujarat",
//         Country:"India",
//     })

//     await sampleListing.save();
//     console.log("Sample was Saved!!");
//     res.send("Testing Successful");
// })

// instead of all and * just use and none
app.use((req, res, next) => {
    next(new ExpressError(404, "Page not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { err });
    // res.status(statusCode).send(message);
})


const port = 8080;
app.listen(port, () => {
    console.log("Server is listening to port 8080");
})