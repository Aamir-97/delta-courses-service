const express = require('express');
const router = express.Router();

const courseRouter = require('./course.route');
const profileRouter = require('./profile.route');
const loginRouter = require('./login.route');
const dashboardRouter = require('./dashboard.route');

router.use('/course', courseRouter);
router.use('/profile', profileRouter);
router.use('/login', loginRouter);
router.use('/dashboard', dashboardRouter);

module.exports = router;