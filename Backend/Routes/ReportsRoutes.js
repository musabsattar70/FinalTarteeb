const express = require("express");
const router = express.Router();
const reportsController = require("../Controllers/ReportsController");

// GenerateReport Controller Route
router.post("/GenerateReport", reportsController.GenerateReport);

// Get Instructors List Controller Route
router.get("/GetInstructorsList", reportsController.GetInstructorsList);

module.exports = router;
