const MediaService = require("../Services/MediaService");
exports.UploadImage = async (req, res) => {
    try {
        const mediaService = new MediaService();

        const { userId } = req.params;

        const fileName = req.file.filename;

        await mediaService.UploadImage(userId, fileName);

        return res.status(200).json({
            Message: "Image uploaded successfully",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            Message: "Internal Server Error",
        });
    }
};
