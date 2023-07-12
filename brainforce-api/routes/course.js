const express = require("express");
const Course = require("../models/course");
const router = express.Router();

router.post("/list", async function (req, res, next) {
  try {
    const id = req.body.userid;
    const courses = await Course.listCoursesForUser(id);
    return res.status(201).json({ courses });
  } catch (err) {
    next(err);
  }
});

router.post("/list/:id", async function (req, res, next) {
  try {
    const courseid = req.params.id;
    const userid = req.body.userid;
    const courses = await Course.fetchCourseById(courseid, userid);
    return res.status(201).json({ courses });
  } catch (err) {
    next(err);
  }
});

router.post("/add", async function (req, res, next) {
  try {
    const course = await Course.createCourse(req.body);
    return res.status(201).json({ course });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
