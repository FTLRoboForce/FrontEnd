const express = require("express");
const Quiz = require("../models/flashcard");
const router = express.Router();

router.post("/list", async function (req, res, next) {
  try {
    const id = req.body.userid;
    const quiz = await Quiz.listQuizzesForUser(id);
    return res.status(201).json({ quiz });
  } catch (err) {
    next(err);
  }
});

router.post("/list/:id", async function (req, res, next) {
  try {
    const quizid = req.params.id;
    const quiz = await Quiz.fetchQuizById(quizid);
    return res.status(201).json({ quiz });
  } catch (err) {
    next(err);
  }
});

router.post("/add", async function (req, res, next) {
  try {
    const quiz = await Quiz.createCourse(req.body);
    return res.status(201).json({ quiz });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
