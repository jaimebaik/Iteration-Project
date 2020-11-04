const express = require("express");
const router = express.Router();

const listingController = require("../controllers/listingController");

//route to middleware when there is an update request from client
router.patch('/:listing_id', listingController.updateListing, (req, res) => {
  return res.status(200).json(res.locals.updatedListing);
});


module.exports = router;