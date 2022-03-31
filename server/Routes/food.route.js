// const FoodController = require("../Controllers/food.controller")

// module.exports = app =>{
//     app.get("/getallfoods", FoodController.allFoods)

// }

const express = require("express");
const router = express.Router();
const Food = require("../Models/food.model");

router.get("/getallfoods", async (req, res) => {
  try {
    const foods = await Food.find({});
    res.send(foods);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
