const dashboardService = require("../services/dashboard.service");

const getCourseEnrollController = async (req, res) => {
  try {
    const result = await dashboardService.allCourseEnrollService();
    return res.status(200).json({ courses: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllUserCourseProgressController = async (req, res) => {
  try {
    const result = await dashboardService.allUserCourseProgressService();
    return res.status(200).json({ courses: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCourseEnrollController: getCourseEnrollController,
  getAllUserCourseProgressController: getAllUserCourseProgressController,
};
