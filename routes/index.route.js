const express = require('express');
const router = express.Router();

const courseRouter = require('./course.route');
const profileRouter = require('./profile.route');

router.use('/course', courseRouter);
router.use('/profile', profileRouter);

module.exports = router;