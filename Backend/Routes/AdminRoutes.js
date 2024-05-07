const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/AdminController");

// Get Admin Info
router.get("/GetAdminInfo/:userId", adminController.GetAdminInfo);

// Update Admin Info
router.put("/UpdateAdminInfo", adminController.UpdateAdminInfo);

// Get All Admin Info
router.post("/GetAllAdminInfo", adminController.GetAllAdminInfo);

// Admin Login
router.post("/LoginAdmin", adminController.LoginAdmin);

module.exports = router;
