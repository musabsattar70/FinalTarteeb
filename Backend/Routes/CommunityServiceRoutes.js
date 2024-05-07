const express = require("express");
const router = express.Router();
const communityServiceController = require("../Controllers/CommunityServiceController");

// Get All Educational Background
router.get("/:userId", communityServiceController.GetAllCommunityService);

// Add Educational Background
router.post("/", communityServiceController.AddCommunityService);

// Update Educational Background
router.put("/", communityServiceController.UpdateCommunityService);

// Delete Educational Background
router.delete(
    "/:communityServiceId",
    communityServiceController.DeleteCommunityService
);

module.exports = router;
