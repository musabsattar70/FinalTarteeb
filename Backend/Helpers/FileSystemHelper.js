const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images");
    },
    filename: function (req, file, cb) {
        let fileExtension = file.originalname.split(".").pop();

        //Generate random 6 char hexa value

        let uniqueFileName =
            Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0") +
            "." +
            fileExtension;
        cb(null, uniqueFileName);
    },
});

const FileSystemHelper = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (
            file.mimetype !== "image/jpeg" &&
            file.mimetype !== "image/jpg" &&
            file.mimetype !== "application/jiff" &&
            file.mimetype !== "image/png"
        ) {
            return cb(new Error("Only JPEG/JPG/JIFF/PNG files are allowed!"));
        }

        cb(null, true);
    },
    limits: {
        fileSize: 1024 * 1024 * 10, //10MB
    },
});

module.exports = FileSystemHelper;
