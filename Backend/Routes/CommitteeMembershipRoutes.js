const express = require("express");
const router = express.Router();
const committeeMembershipController = require("../Controllers/CommitteeMembershipController");

// Get All Educational Background
router.get("/:userId", committeeMembershipController.GetAllCommitteeMembership);

// Add Educational Background
router.post("/", committeeMembershipController.AddCommitteeMembership);

// Update Educational Background
router.put("/", committeeMembershipController.UpdateCommitteeMembership);

// Delete Educational Background
router.delete(
    "/:committeeMembershipId",
    committeeMembershipController.DeleteCommitteeMembership
);

module.exports = router;
