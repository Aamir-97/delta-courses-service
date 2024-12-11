const courseService = require("../services/courses.service");

const getAllCoursesController = async (req, res) => {
  if (req.query.userId) {
    try {
      const result = await courseService.getAllCoursesByUserIdService(
        req.query.userId
      );
      return res.status(200).json({ courses: result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    try {
      const result = await courseService.getAllCoursesService();
      return res.status(200).json({ courses: result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

const getAllCoursesByIdController = async (req, res) => {
  try {
    const result = await courseService.getAllCoursesByIdService(req.params.id);
    return res.status(200).json({ courses: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const enrollCourseController = async (req, res) => {
  const userId = req.body.userId;
  try {
    const result = await courseService.enrollCourseService(
      req.params.id,
      userId
    );
    return res.status(200).json({ courses: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const unenrollCourseController = async (req, res) => {
  const userId = req.body.userId;
  try {
    const result = await courseService.unenrollCourseService(
      req.params.id,
      userId
    );
    return res.status(200).json({ courses: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCourseProgressController = async (req, res) => {
  const progress = req.body.progress;
  const userId = req.query.userId;
  const courseId = req.params.id;
  try {
    const result = await courseService.updateCourseProgressService(
      courseId,
      userId,
      progress
    );
    return res.status(200).json({ courses: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCoursesController: getAllCoursesController,
  getAllCoursesByIdController: getAllCoursesByIdController,
  enrollCourseController: enrollCourseController,
  unenrollCourseController: unenrollCourseController,
  updateCourseProgressController: updateCourseProgressController,
};
