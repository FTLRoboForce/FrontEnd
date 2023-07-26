const express = require("express");
const openai = require("../models/openai");
const router = express.Router();

router.post("/", async function (req, res, next) {
  const { difficulty, subject } = req.body;
  const set = await User.fetchUserByEmail({ email, password });

  if (set) {
    res.json({ set });
  } else {
    res.status(401).json({ message: "Open AI API Request Failed" });
  }
});

module.exports = router;
