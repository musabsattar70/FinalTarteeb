const GrantsAvailedService = require("../Services/GrantsAvailedService");

exports.GetAllGrantsAvailed = async (req, res) => {
    try {
        const grantsAvailedService = new GrantsAvailedService();

        const { userId } = req.params;

        const data = await grantsAvailedService.GetAllGrantsAvailed(userId);

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

exports.AddGrantsAvailed = async (req, res) => {
    try {
        const grantsAvailedService = new GrantsAvailedService();

        await grantsAvailedService.AddGrantsAvailed(req.body);

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

exports.UpdateGrantsAvailed = async (req, res) => {
    try {
        const grantsAvailedService = new GrantsAvailedService();

        await grantsAvailedService.UpdateGrantsAvailed(req.body);

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

exports.DeleteGrantsAvailed = async (req, res) => {
    try {
        const grantsAvailedService = new GrantsAvailedService();

        const { grantsAvailedId } = req.params;

        await grantsAvailedService.DeleteGrantsAvailed(grantsAvailedId);

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
