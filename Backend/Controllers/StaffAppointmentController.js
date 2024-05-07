const StaffAppointmentService = require("../Services/StaffAppointmentService");

exports.GetAllStaffAppointment = async (req, res) => {
    try {
        const staffAppointmentService = new StaffAppointmentService();

        const { userId } = req.params;

        const data = await staffAppointmentService.GetAllStaffAppointment(
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

exports.AddStaffAppointment = async (req, res) => {
    try {
        const staffAppointmentService = new StaffAppointmentService();

        await staffAppointmentService.AddStaffAppointment(req.body);

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

exports.UpdateStaffAppointment = async (req, res) => {
    try {
        const staffAppointmentService = new StaffAppointmentService();

        await staffAppointmentService.UpdateStaffAppointment(req.body);

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

exports.DeleteStaffAppointment = async (req, res) => {
    try {
        const staffAppointmentService = new StaffAppointmentService();

        const { staffAppointmentId } = req.params;

        await staffAppointmentService.DeleteStaffAppointment(
            staffAppointmentId
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
