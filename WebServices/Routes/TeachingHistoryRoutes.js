const express = require("express");
const router = express.Router();
const teachingHistoryController = require("../Controllers/TeachingHistoryController");

// Get All Educational Background
router.get("/:userId", teachingHistoryController.GetAllTeachingHistory);

// Add Educational Background
router.post("/", teachingHistoryController.AddTeachingHistory);

// Update Educational Background
router.put("/", teachingHistoryController.UpdateTeachingHistory);

// Delete Educational Background
router.delete(
    "/:teachingHistoryId",
    teachingHistoryController.DeleteTeachingHistory
);

module.exports = router;
