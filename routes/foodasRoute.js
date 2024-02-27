const express = require("express");
const router = express.Router();
const Food = require("../models/foodModel");
router.get("/getallfoodas", async (req, res) => {
  try {
    const foodas = await Food.find({});
    res.send(foodas);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
