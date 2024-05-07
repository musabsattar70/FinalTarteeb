const PublicationService = require("../Services/PublicationService");

exports.GetAllPublication = async (req, res) => {
    try {
        const publicationService = new PublicationService();

        const { userId } = req.params;

        const data = await publicationService.GetAllPublication(userId);

        return res.status(200).json({
            Message: "Success",
            Data: data,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            Message: "Internal Server Error",
        });
    }
};

exports.AddPublication = async (req, res) => {
    try {
        const publicationService = new PublicationService();

        await publicationService.AddPublication(req.body);

        return res.status(200).json({
            Message: "Success",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            Message: "Internal Server Error",
        });
    }
};

exports.UpdatePublication = async (req, res) => {
    try {
        const publicationService = new PublicationService();

        await publicationService.UpdatePublication(req.body);

        return res.status(200).json({
            Message: "Success",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            Message: "Internal Server Error",
        });
    }
};

exports.DeletePublication = async (req, res) => {
    try {
        const publicationService = new PublicationService();

        const { publicationId } = req.params;

        await publicationService.DeletePublication(publicationId);

        return res.status(200).json({
            Message: "Success",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            Message: "Internal Server Error",
        });
    }
};
