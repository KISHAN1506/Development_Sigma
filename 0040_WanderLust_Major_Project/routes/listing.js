const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const {listingSchema,reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const router = express.Router();
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");




//Index Route
router.get("/", wrapAsync(listingController.index))

// New Route
router.get("/new",isLoggedIn , listingController.renderNewForm)

//Show Route
router.get("/:id", validateListing, wrapAsync(listingController.showListing))

// Create Route
router.post("/",isLoggedIn , wrapAsync(listingController.createListing))

// Edit Route
router.get("/:id/edit",isLoggedIn,isOwner , wrapAsync(listingController.renderEditForm))

// Update route
router.put("/:id", isLoggedIn,isOwner ,validateListing, wrapAsync(listingController.updateListing))

// Delete Route
router.delete("/:id",isLoggedIn,isOwner , wrapAsync(listingController.destroyListing))


module.exports = router;