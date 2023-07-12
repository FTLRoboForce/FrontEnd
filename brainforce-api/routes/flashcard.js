const express = require("express");
const Flashcard = require("../models/flashcard");
const router = express.Router();

router.post("/list", async function (req, res, next) {
  try {
    const id = req.body.userid;
    const set = await Flashcard.listSetsForUser(id);
    return res.status(201).json({ set });
  } catch (err) {
    next(err);
  }
});

router.post("/list/:id", async function (req, res, next) {
  try {
    const setid = req.params.id;
    const set = await Flashcard.fetchSetById(setid);
    return res.status(201).json({ set });
  } catch (err) {
    next(err);
  }
});

router.post("/add", async function (req, res, next) {
  try {
    const set = await Flashcard.createCourse(req.body);
    return res.status(201).json({ set });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
