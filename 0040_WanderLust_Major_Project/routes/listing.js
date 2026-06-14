const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const {listingSchema,reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const router = express.Router();
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js")



//Index Route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}))

// New Route
router.get("/new",isLoggedIn , (req, res) => {
    res.render("listings/new.ejs")
})

//Show Route
router.get("/:id", validateListing, wrapAsync(async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if(!listing){
        req.flash("error","Listing does not exist!")
        res.redirect("/listings")
    }else{
        res.render("listings/show.ejs", { listing })
    }
}))

// Create Route
router.post("/",isLoggedIn , wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success","New Listing Created successfully!")
    res.redirect("/listings");
}))

// Edit Route
router.get("/:id/edit",isLoggedIn,isOwner , wrapAsync(async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing does not exist!")
        res.redirect("/listings")
    }else{
        res.render("listings/edit.ejs", { listing })
    }
}))

// Update route
router.put("/:id", isLoggedIn,isOwner ,validateListing, wrapAsync(async (req, res) => {
    let id = req.params.id;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success","Listing Updated!")
    res.redirect(`/listings/${id}`);
}))

// Delete Route
router.delete("/:id",isLoggedIn,isOwner , wrapAsync(async (req, res) => {
    let id = req.params.id;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted successfully!")
    res.redirect("/listings")
}))


module.exports = router;