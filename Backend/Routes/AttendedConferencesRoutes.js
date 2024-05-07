const express = require("express");
const router = express.Router();
const attendedConferencesController = require("../Controllers/AttendedConferencesController");

// Get All Educational Background
router.get("/:userId", attendedConferencesController.GetAllAttendedConferences);

// Add Educational Background
router.post("/", attendedConferencesController.AddAttendedConferences);

// Update Educational Background
router.put("/", attendedConferencesController.UpdateAttendedConferences);

// Delete Educational Background
router.delete(
    "/:attendedConferencesId",
    attendedConferencesController.DeleteAttendedConferences
);

module.exports = router;
