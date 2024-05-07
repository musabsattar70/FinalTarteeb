const ClubPatronageService = require("../Services/ClubPatronageService");

exports.GetAllClubPatronage = async (req, res) => {
    try {
        const clubPatronageService = new ClubPatronageService();

        const { userId } = req.params;

        const data = await clubPatronageService.GetAllClubPatronage(userId);

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

exports.AddClubPatronage = async (req, res) => {
    try {
        const clubPatronageService = new ClubPatronageService();

        await clubPatronageService.AddClubPatronage(req.body);

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

exports.UpdateClubPatronage = async (req, res) => {
    try {
        const clubPatronageService = new ClubPatronageService();

        await clubPatronageService.UpdateClubPatronage(req.body);

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

exports.DeleteClubPatronage = async (req, res) => {
    try {
        const clubPatronageService = new ClubPatronageService();

        const { clubPatronageId } = req.params;

        await clubPatronageService.DeleteClubPatronage(clubPatronageId);

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
