const EducationBackgroundService = require("../Services/EducationalBackgroundService");

exports.GetAllEducationalBackground = async (req, res) => {
    try {
        const educationBackgroundService = new EducationBackgroundService();

        const { userId } = req.params;

        const data =
            await educationBackgroundService.GetAllEducationalBackground(
                userId
            );

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

exports.AddEducationalBackground = async (req, res) => {
    try {
        const educationBackgroundService = new EducationBackgroundService();

        await educationBackgroundService.AddEducationalBackground(req.body);

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

exports.UpdateEducationalBackground = async (req, res) => {
    try {
        const educationBackgroundService = new EducationBackgroundService();

        await educationBackgroundService.UpdateEducationalBackground(req.body);

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

exports.DeleteEducationalBackground = async (req, res) => {
    try {
        const educationBackgroundService = new EducationBackgroundService();

        const { educationalBackgroundId } = req.params;

        await educationBackgroundService.DeleteEducationalBackground(
            educationalBackgroundId
        );

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
