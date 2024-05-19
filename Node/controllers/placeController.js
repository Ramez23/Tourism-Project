const Place = require("../models/placeModel");

exports.createPlace = async (req, res) => {
  try {
    const { name, description, location } = req.body;
    const place = new Place({ name, description, location });
    await place.save();
    res.status(201).send(place);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.send(places);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).send({ error: "Place not found" });
    }
    res.send(place);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!place) {
      return res.status(404).send({ error: "Place not found" });
    }
    res.send(place);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletePlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);
    if (!place) {
      return res.status(404).send({ error: "Place not found" });
    }
    res.send(place);
  } catch (error) {
    res.status(500).send(error);
  }
};
