const sql = require("mssql");
class CommitteeMembershipService {
    constructor() {}

    GetAllCommitteeMembership = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT CommittieeMembershipId, CommittieeName, Designation, TermFrom, TermTo FROM [CommittieeMembership] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddCommitteeMembership = async (committeeMembershipData) => {
        const { userId, committeeName, designation, termFrom, termTo } =
            committeeMembershipData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("committeeName", sql.VarChar, committeeName);
        request.input("designation", sql.VarChar, designation);
        request.input("termFrom", sql.VarChar, termFrom);
        request.input("termTo", sql.VarChar, termTo);

        await request.query(
            "INSERT INTO [dbo].[CommittieeMembership] ([UserId],[CommittieeName],[Designation],[TermFrom],[TermTo]) VALUES (@userId, @committeeName, @designation, @termFrom, @termTo)"
        );
    };

    UpdateCommitteeMembership = async (committeeMembershipData) => {
        const {
            committeeMembershipId,
            committeeName,
            designation,
            termFrom,
            termTo,
        } = committeeMembershipData;

        const request = await pool.request();

        request.input("committeeMembershipId", sql.Int, committeeMembershipId);
        request.input("committeeName", sql.VarChar, committeeName);
        request.input("designation", sql.VarChar, designation);
        request.input("termFrom", sql.VarChar, termFrom);
        request.input("termTo", sql.VarChar, termTo);

        await request.query(
            "UPDATE [dbo].[CommittieeMembership] SET [CommittieeName] = @committeeName, [Designation] = @designation, [TermFrom] = @termFrom, [TermTo] = @termTo WHERE [CommittieeMembershipId] = @committeeMembershipId"
        );
    };

    DeleteCommitteeMembership = async (committeeMembershipId) => {
        const request = await pool
            .request()
            .input("committeeMembershipId", sql.Int, committeeMembershipId);

        await request.query(
            "DELETE FROM [dbo].[CommittieeMembership] WHERE [CommittieeMembershipId] = @committeeMembershipId"
        );
    };
}

module.exports = CommitteeMembershipService;
