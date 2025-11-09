const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const db = require("./config/user");
// const Car = require('./models/car')

const cors = require("cors");

const port = process.env.PORT || 3000; // Default to 3000 if the port is not set

// Middleware
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "https://car-rental-kohl-ten.vercel.app",
      "https://car-rental-rust-mu.vercel.app",
      https://cab-gears.vercel.app/,
      // Add any other domains you're using
    ],
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

// Built-in Express body parsers (no need for body-parser package)
app.use(express.json({ limit: "10mb" })); // JSON body parsing with a limit
app.use(express.urlencoded({ limit: "10mb", extended: true })); // URL-encoded data with a limit

// Routes
app.use("/", require("./routes/index"));
app.use("/admin", require("./routes/admin"));

// Start server
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port: ${port}`);
  }
});
