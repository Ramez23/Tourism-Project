const express = require("express");
const authController = require("../controllers/userController");

const router = express.Router();

router.use("/", authController);

module.exports = router;
