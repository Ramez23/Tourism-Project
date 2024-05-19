const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  description: { type: String, required: false },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
