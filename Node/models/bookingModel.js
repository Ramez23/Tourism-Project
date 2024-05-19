const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  tourId: { type: mongoose.Schema.Types.ObjectId, ref: "Tour" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
