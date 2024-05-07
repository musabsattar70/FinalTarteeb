const express = require("express");
const router = express.Router();
const grantsAvailedController = require("../Controllers/GrantsAvailedController");

// Get All Educational Background
router.get("/:userId", grantsAvailedController.GetAllGrantsAvailed);

// Add Educational Background
router.post("/", grantsAvailedController.AddGrantsAvailed);

// Update Educational Background
router.put("/", grantsAvailedController.UpdateGrantsAvailed);

// Delete Educational Background
router.delete("/:grantsAvailedId", grantsAvailedController.DeleteGrantsAvailed);

module.exports = router;
