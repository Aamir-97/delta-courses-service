const profileService = require("../services/profile.service");
const bcrypt = require("bcrypt");

const getAllProfilesController = async (req, res) => {
  try {
    const result = await profileService.getAllProfileService();
    return res.status(200).json({ profiles: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getProfileByIdController = async (req, res) => {
  try {
    const result = await profileService.getProfileByIdService(req.params.id);
    return res.status(200).json({ profile: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProfileController = async (req, res) => {
  try {
    const result = await profileService.updateProfileService(
      req.params.id,
      req.body
    );
    return res.status(200).json({ profile: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createProfileController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create profile
    const result = await profileService.createProfileService({
      ...req.body,
      password: hashedPassword,
    });

    return res.status(201).json({ status: "success", profile: result });
  } catch (error) {
    console.error("Error in createProfileController:", error);
    return res.status(500).json({ status: "error", error: error.message });
  }
};

const deleteProfileController = async (req, res) => {
  try {
    const result = await profileService.deleteProfileService(req.params.id);
    return res.status(200).json({ profile: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProfilesController: getAllProfilesController,
  getProfileByIdController: getProfileByIdController,
  updateProfileController: updateProfileController,
  createProfileController: createProfileController,
  deleteProfileController: deleteProfileController,
};
