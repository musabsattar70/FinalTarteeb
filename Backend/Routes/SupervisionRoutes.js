const express = require("express");
const router = express.Router();
const supervisionController = require("../Controllers/SupervisionController");

// Get All Educational Background
router.get("/:userId", supervisionController.GetAllSupervision);

// Add Educational Background
router.post("/", supervisionController.AddSupervision);

// Update Educational Background
router.put("/", supervisionController.UpdateSupervision);

// Delete Educational Background
router.delete("/:supervisionId", supervisionController.DeleteSupervision);

module.exports = router;
