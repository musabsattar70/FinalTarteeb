const express = require("express");
const router = express.Router();
const clubPatronageController = require("../Controllers/ClubPatronageController");

// Get All Educational Background
router.get("/:userId", clubPatronageController.GetAllClubPatronage);

// Add Educational Background
router.post("/", clubPatronageController.AddClubPatronage);

// Update Educational Background
router.put("/", clubPatronageController.UpdateClubPatronage);

// Delete Educational Background
router.delete("/:clubPatronageId", clubPatronageController.DeleteClubPatronage);

module.exports = router;
