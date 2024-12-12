const express = require("express");
const router = express.Router();

const dashBoardController = require("../controllers/dashboard.controller");

router
  .route("/course_enroll")
  .get(dashBoardController.getCourseEnrollController);
router
  .route("/user_course_progress")
  .get(dashBoardController.getAllUserCourseProgressController);

module.exports = router;
