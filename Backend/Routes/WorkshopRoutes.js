const express = require("express");
const router = express.Router();
const workshopController = require("../Controllers/WorkshopController");

// Get All Educational Background
router.get("/:userId", workshopController.GetAllWorkshop);

// Add Educational Background
router.post("/", workshopController.AddWorkshop);

// Update Educational Background
router.put("/", workshopController.UpdateWorkshop);

// Delete Educational Background
router.delete("/:workshopId", workshopController.DeleteWorkshop);

module.exports = router;
