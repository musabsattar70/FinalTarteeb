const express = require("express");
const router = express.Router();
const publicationController = require("../Controllers/PublicationController");

// Get All Educational Background
router.get("/:userId", publicationController.GetAllPublication);

// Add Educational Background
router.post("/", publicationController.AddPublication);

// Update Educational Background
router.put("/", publicationController.UpdatePublication);

// Delete Educational Background
router.delete("/:publicationId", publicationController.DeletePublication);

module.exports = router;
