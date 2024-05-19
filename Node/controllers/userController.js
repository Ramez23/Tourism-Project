const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send({ error: "Invalid password" });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.send(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.put("/updatePassword", async (req, res) => {
  try {
    const { userId, currentPassword, newPassword } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    const validPassword = await bcrypt.compare(currentPassword, user.password);
    if (!validPassword) {
      return res.status(401).send({ error: "Current password is incorrect" });
    }
    user.password = newPassword; // The password will be hashed in the user model's
    await user.save();
    res.send({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = router;
