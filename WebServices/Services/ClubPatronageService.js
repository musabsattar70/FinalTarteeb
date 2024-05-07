const sql = require("mssql");
class ClubPatronageService {
    constructor() {}

    GetAllClubPatronage = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT ClubPatronageId, ClubName, TermFrom, TermTo FROM [ClubPatronage] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddClubPatronage = async (clubPatronageData) => {
        const { userId, clubName, termFrom, termTo } = clubPatronageData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("clubName", sql.VarChar, clubName);
        request.input("termFrom", sql.VarChar, termFrom);
        request.input("termTo", sql.VarChar, termTo);

        await request.query(
            "INSERT INTO [dbo].[ClubPatronage] ([UserId],[ClubName],[TermFrom],[TermTo]) VALUES (@userId, @clubName, @termFrom, @termTo)"
        );
    };

    UpdateClubPatronage = async (clubPatronageData) => {
        const { clubPatronageId, clubName, termFrom, termTo } =
            clubPatronageData;

        const request = await pool.request();

        request.input("clubPatronageId", sql.Int, clubPatronageId);
        request.input("clubName", sql.VarChar, clubName);
        request.input("termFrom", sql.VarChar, termFrom);
        request.input("termTo", sql.VarChar, termTo);

        await request.query(
            "UPDATE [dbo].[ClubPatronage] SET [ClubName] = @clubName, [TermFrom] = @termFrom, [TermTo] = @termTo WHERE [ClubPatronageId] = @clubPatronageId"
        );
    };

    DeleteClubPatronage = async (clubPatronageId) => {
        const request = await pool
            .request()
            .input("clubPatronageId", sql.Int, clubPatronageId);

        await request.query(
            "DELETE FROM [dbo].[ClubPatronage] WHERE [ClubPatronageId] = @clubPatronageId"
        );
    };
}

module.exports = ClubPatronageService;
