const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");

router.post("/", tourController.createTour);
router.get("/", tourController.getTours);
router.get("/:id", tourController.getTourById);
router.patch("/:id", tourController.updateTour);
router.delete("/:id", tourController.deleteTour);

module.exports = router;
