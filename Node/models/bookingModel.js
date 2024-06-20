const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  tour: {
    type: mongoose.Schema.ObjectId,
    ref: 'Tour',
    required: [true, 'Review must belong to a tour.']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user']
  },
  place: {
    type: mongoose.Schema.ObjectId,
    ref: 'Place',
    required: [true, 'Review must belong to a place']
  },
  date: { Date, required: [true, 'Review can not be empty!'] },
  bookingState: {
    type: String,
    enum: ['Confirmed', 'Pending', 'Canceled'],
    default: 'Pending'
  },
  paymentStatus: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' },
  paymentAmount: { type: Number },
  paymentMethod: { type: String, enum: ['Credit Card', 'PayPal', 'Cash'] },
  numberOfParticipants: { type: Number, default: 1 },
  specialRequests: { type: String },
  cancellationAllowed: { type: Boolean, default: true },
  cancellationDeadline: Date,
  statusUpdates: [{ status: String, date: Date }]
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
