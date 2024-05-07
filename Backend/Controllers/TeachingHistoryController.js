const TeachingHistoryService = require("../Services/TeachingHistoryService");

exports.GetAllTeachingHistory = async (req, res) => {
    try {
        const teachingHistoryService = new TeachingHistoryService();

        const { userId } = req.params;

        const data = await teachingHistoryService.GetAllTeachingHistory(userId);

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

exports.AddTeachingHistory = async (req, res) => {
    try {
        const teachingHistoryService = new TeachingHistoryService();

        await teachingHistoryService.AddTeachingHistory(req.body);

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

exports.UpdateTeachingHistory = async (req, res) => {
    try {
        const teachingHistoryService = new TeachingHistoryService();

        await teachingHistoryService.UpdateTeachingHistory(req.body);

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

exports.DeleteTeachingHistory = async (req, res) => {
    try {
        const teachingHistoryService = new TeachingHistoryService();

        const { teachingHistoryId } = req.params;

        await teachingHistoryService.DeleteTeachingHistory(teachingHistoryId);

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
