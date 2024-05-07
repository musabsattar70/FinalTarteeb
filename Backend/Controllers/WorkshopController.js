const WorkshopService = require("../Services/WorkshopService");

exports.GetAllWorkshop = async (req, res) => {
    try {
        const workshopService = new WorkshopService();

        const { userId } = req.params;

        const data = await workshopService.GetAllWorkshop(userId);

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

exports.AddWorkshop = async (req, res) => {
    try {
        const workshopService = new WorkshopService();

        await workshopService.AddWorkshop(req.body);

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

exports.UpdateWorkshop = async (req, res) => {
    try {
        const workshopService = new WorkshopService();

        await workshopService.UpdateWorkshop(req.body);

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

exports.DeleteWorkshop = async (req, res) => {
    try {
        const workshopService = new WorkshopService();

        const { workshopId } = req.params;

        await workshopService.DeleteWorkshop(workshopId);

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
