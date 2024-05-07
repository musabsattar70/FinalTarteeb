const express = require("express");
const router = express.Router();
const educationalBackgroundController = require("../Controllers/EducationalBackgroundController");

// Get All Educational Background
router.get(
    "/:userId",
    educationalBackgroundController.GetAllEducationalBackground
);

// Add Educational Background
router.post("/", educationalBackgroundController.AddEducationalBackground);

// Update Educational Background
router.put("/", educationalBackgroundController.UpdateEducationalBackground);

// Delete Educational Background
router.delete(
    "/:educationalBackgroundId",
    educationalBackgroundController.DeleteEducationalBackground
);

module.exports = router;
