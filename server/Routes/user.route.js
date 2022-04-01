const express = require("express");

const router = express.Router();
const User = require("../Models/user.model");

// POST REGISTER
router.post("/register", async(req, res) => {
  // GET DATA FROM REQ.BODY
  const { fullName, email, password } = req.body;

  const newUser = new User({ fullName, email, password });
  
  try {
    newUser.save();
    res.send("User Registered successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

// POST LOG IN
router.post("/login", async(req, res) => {
  const { email, password } = req.body;

  try {
    // if these objects matched (email and pw) it stores to the usser
    const user = await User.find({ email, password });

// it becomes 1
    if (User.length > 0) {

      // if log in is successful, these get sent from backend to front
      const userCurrent = {
        fullName : user[0].fullName,
        email : user[0].email,
        isAdmin : user[0].isAdmin,
        _id : user[0]._id

      }
      res.send(userCurrent)

    } else {
      // user does not exist
      return res.status(400).json({ message: "Please try again" });
    }
  } catch (erorr) {
    return res.status(400).json({ message: "Something went wrong!" });
  }
});

module.exports = router;
