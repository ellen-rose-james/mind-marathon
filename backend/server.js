const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// POST: Register a new user
app.post("/users", (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }
  // Check for existing user by name, email, or phone
  db.query(
    "SELECT * FROM users WHERE name = ? OR email = ? OR phone = ?",
    [name, email, phone],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Server error" });
      if (results.length > 0) {
        return res
          .status(403)
          .json({ error: "You have already attempted the quiz." });
      }
      // Insert new user
      db.query(
        "INSERT INTO users (name, email, phone, visitcount) VALUES (?, ?, ?, 0)",
        [name, email, phone],
        (err, result) => {
          if (err) {
            console.error(err); // Add this line
            return res.status(500).json({ error: "Server error" });
          }
          return res.status(201).json({
            message: "Registration successful",
            userId: result.insertId,
          });
        }
      );
    }
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
