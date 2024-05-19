const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tourRoutes = require("./routes/tourRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const placeRoutes = require("./routes/placeRoutes");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

mongoose
  .connect("mongodb://localhost:27017/App", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/tours", tourRoutes);
app.use("/users", userRoutes);
app.use("/bookings", bookingRoutes);
app.use("/places", placeRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
