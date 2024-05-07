const SupervisionService = require("../Services/SupervisionService");

exports.GetAllSupervision = async (req, res) => {
    try {
        const supervisionService = new SupervisionService();

        const { userId } = req.params;

        const data = await supervisionService.GetAllSupervision(userId);

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

exports.AddSupervision = async (req, res) => {
    try {
        const supervisionService = new SupervisionService();

        await supervisionService.AddSupervision(req.body);

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

exports.UpdateSupervision = async (req, res) => {
    try {
        const supervisionService = new SupervisionService();

        await supervisionService.UpdateSupervision(req.body);

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

exports.DeleteSupervision = async (req, res) => {
    try {
        const supervisionService = new SupervisionService();

        const { supervisionId } = req.params;

        await supervisionService.DeleteSupervision(supervisionId);

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
