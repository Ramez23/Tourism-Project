const Booking = require("../models/bookingModel");

exports.createBooking = async (req, res) => {
  try {
    const { tourId, userId, date } = req.body;
    const booking = new Booking({ tourId, userId, date });
    await booking.save();
    res.status(201).send(booking);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getBookingsByTourId = async (req, res) => {
  try {
    const { tourId } = req.params;
    const bookings = await Booking.find({ tourId });
    res.send(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
