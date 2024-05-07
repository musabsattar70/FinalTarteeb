const AdminService = require("../Services/AdminService");

exports.GetAdminInfo = async (req, res) => {
    try {
        const adminService = new AdminService();

        const { userId } = req.params;

        const data = await adminService.GetAdminInfo(userId);

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

exports.UpdateAdminInfo = async (req, res) => {
    try {
        const adminService = new AdminService();

        await adminService.UpdateAdminInfo(req.body);

        return res.status(200).json({
            Message: "Updated successfully",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            Message: "Internal Server Error",
        });
    }
};

exports.GetAllAdminInfo = async (req, res) => {
    try {
        const adminService = new AdminService();

        const data = await adminService.GetAllAdminInfo(req.body);

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

exports.LoginAdmin = async (req, res) => {
    try {
        const adminService = new AdminService();

        const token = await adminService.LoginAdmin(req.body);

        if (!token)
            return res.status(401).json({
                Message: "Invalid Credentials",
            });

        if (token == "NoAdminAccess") {
            return res.status(401).json({
                Message: "We only support admin login for now!",
            });
        }

        return res.status(200).json({
            Message: "Success",
            Token: token,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            Message: "Internal Server Error",
        });
    }
};
