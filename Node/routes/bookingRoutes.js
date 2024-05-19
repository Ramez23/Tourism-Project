const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/", bookingController.createBooking);
router.get("/:tourId", bookingController.getBookingsByTourId);

module.exports = router;
