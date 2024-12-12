const loginService = require("../services/login.service");

const getLoginController = async (req, res) => {
  const credentials = req.body;
  try {
    const result = await loginService.getLoginService(credentials);
    return res.status(200).json({ user: result });
  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

module.exports = {
  getLoginController: getLoginController,
};
