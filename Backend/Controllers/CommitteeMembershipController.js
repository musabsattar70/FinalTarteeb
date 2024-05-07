const CommitteeMembershipService = require("../Services/CommitteeMembershipService");

exports.GetAllCommitteeMembership = async (req, res) => {
    try {
        const committeeMembershipService = new CommitteeMembershipService();

        const { userId } = req.params;

        const data = await committeeMembershipService.GetAllCommitteeMembership(
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

exports.AddCommitteeMembership = async (req, res) => {
    try {
        const committeeMembershipService = new CommitteeMembershipService();

        await committeeMembershipService.AddCommitteeMembership(req.body);

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

exports.UpdateCommitteeMembership = async (req, res) => {
    try {
        const committeeMembershipService = new CommitteeMembershipService();

        await committeeMembershipService.UpdateCommitteeMembership(req.body);

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

exports.DeleteCommitteeMembership = async (req, res) => {
    try {
        const committeeMembershipService = new CommitteeMembershipService();

        const { committeeMembershipId } = req.params;

        await committeeMembershipService.DeleteCommitteeMembership(
            committeeMembershipId
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
