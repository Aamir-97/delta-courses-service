const express = require("express");

const router = express.Router();
const teacherController = require("../controllers/teacher.controller");

// Define routes for teacher service
router.route("/").get(teacherController.getAllTeachersController);

module.exports = router;
