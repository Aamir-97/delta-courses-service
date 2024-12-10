const profileService = require("../services/profile.service");

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

module.exports = {
  getAllProfilesController,
  getProfileByIdController,
  updateProfileController,
};
