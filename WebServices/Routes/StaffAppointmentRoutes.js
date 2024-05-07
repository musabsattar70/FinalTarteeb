const express = require("express");
const router = express.Router();
const staffAppointmentController = require("../Controllers/StaffAppointmentController");

// Get All Educational Background
router.get("/:userId", staffAppointmentController.GetAllStaffAppointment);

// Add Educational Background
router.post("/", staffAppointmentController.AddStaffAppointment);

// Update Educational Background
router.put("/", staffAppointmentController.UpdateStaffAppointment);

// Delete Educational Background
router.delete(
    "/:staffAppointmentId",
    staffAppointmentController.DeleteStaffAppointment
);

module.exports = router;
