const express = require("express");
const router = express.Router();

const listingController = require("../controllers/listingController");

//route to middleware when there is an update request from client
router.patch('/:listing_id', listingController.updateListing, (req, res) => {
  return res.status(200).json(res.locals.updatedListing);
});

router.delete('/:listing_id', listingController.deleteListing, (req, res) => {
  return res.status(200).json(res.locals.deleteListing);
});

module.exports = router;