const CommunityServiceService = require("../Services/CommunityServiceService");

exports.GetAllCommunityService = async (req, res) => {
    try {
        const communityServiceService = new CommunityServiceService();

        const { userId } = req.params;

        const data = await communityServiceService.GetAllCommunityService(
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

exports.AddCommunityService = async (req, res) => {
    try {
        const communityServiceService = new CommunityServiceService();

        await communityServiceService.AddCommunityService(req.body);

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

exports.UpdateCommunityService = async (req, res) => {
    try {
        const communityServiceService = new CommunityServiceService();

        await communityServiceService.UpdateCommunityService(req.body);

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

exports.DeleteCommunityService = async (req, res) => {
    try {
        const communityServiceService = new CommunityServiceService();

        const { communityServiceId } = req.params;

        await communityServiceService.DeleteCommunityService(
            communityServiceId
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
