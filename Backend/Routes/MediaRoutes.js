const express = require("express");
const router = express.Router();
const FileSystemHelper = require("../Helpers/FileSystemHelper");
const mediaController = require("../Controllers/MediaController");

// Create Media Route Controller
router.post(
    "/upload/:userId",
    FileSystemHelper.single("profileImage"),
    mediaController.UploadImage
);

module.exports = router;
