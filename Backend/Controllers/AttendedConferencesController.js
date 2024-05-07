const AttendedConferencesService = require("../Services/AttendedConferencesService");

exports.GetAllAttendedConferences = async (req, res) => {
    try {
        const attendedConferencesService = new AttendedConferencesService();

        const { userId } = req.params;

        const data = await attendedConferencesService.GetAllAttendedConferences(
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

exports.AddAttendedConferences = async (req, res) => {
    try {
        const attendedConferencesService = new AttendedConferencesService();

        await attendedConferencesService.AddAttendedConferences(req.body);

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

exports.UpdateAttendedConferences = async (req, res) => {
    try {
        const attendedConferencesService = new AttendedConferencesService();

        await attendedConferencesService.UpdateAttendedConferences(req.body);

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

exports.DeleteAttendedConferences = async (req, res) => {
    try {
        const attendedConferencesService = new AttendedConferencesService();

        const { attendedConferencesId } = req.params;

        await attendedConferencesService.DeleteAttendedConferences(
            attendedConferencesId
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
