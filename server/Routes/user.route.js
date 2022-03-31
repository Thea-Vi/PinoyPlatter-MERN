const express = require("express");

const router = express.Router();
const User = require("../Models/user.model");

router.post("/register", (req, res) => {
  const { fullName, email, password } = req.body;

  const newUser = new User({ fullName, email, password });

  try {
    newUser.save();
    res.send("User Registered successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
