const express = require("express");
const router = express.Router();

const profileContrller = require("../controllers/profile.controller");

router.route("/")
  .get(profileContrller.getAllProfilesController)
  .post(profileContrller.createProfileController);
router
  .route("/:id")
  .get(profileContrller.getProfileByIdController)
  .put(profileContrller.updateProfileController)
  .delete(profileContrller.deleteProfileController);

module.exports = router;
