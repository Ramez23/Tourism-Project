const Tour = require("../models/tourModel");

exports.createTour = async (req, res) => {
  try {
    const { name, description, email, password } = req.body;
    const tour = new Tour({ name, description, email, password });
    await tour.save();
    res.status(201).send(tour);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      return res.status(400).send({ error: "Email already exists" });
    }
    res.status(400).send(error);
  }
};

exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.send(tours);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).send({ error: "Tour not found" });
    }
    res.send(tour);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!tour) {
      return res.status(404).send({ error: "Tour not found" });
    }
    res.send(tour);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).send({ error: "Tour not found" });
    }
    res.send(tour);
  } catch (error) {
    res.status(500).send(error);
  }
};
