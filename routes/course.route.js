const express = require("express");
const router = express.Router();

const coursesController = require("../controllers/courses.controller");

router.route("/").get(coursesController.getAllCoursesController);
router.route("/:id").get(coursesController.getAllCoursesByIdController);
router.route("/enroll/:id").post(coursesController.enrollCourseController);
router.route("/unenroll/:id").delete(coursesController.unenrollCourseController);

module.exports = router;