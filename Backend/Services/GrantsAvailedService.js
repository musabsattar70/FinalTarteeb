const sql = require("mssql");
class GrantsAvailedService {
    constructor() {}

    GetAllGrantsAvailed = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT GrantsAvailedId, Title, Source, [Date], Reason FROM [GrantsAvailed] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddGrantsAvailed = async (grantsAvailedData) => {
        const { userId, title, source, date, reason } = grantsAvailedData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("title", sql.VarChar, title);
        request.input("source", sql.VarChar, source);
        request.input("date", sql.Date, date);
        request.input("reason", sql.VarChar, reason);

        await request.query(
            "INSERT INTO [dbo].[GrantsAvailed] ([UserId],Title, Source, [Date], Reason) VALUES (@userId, @title, @source, @date, @reason)"
        );
    };

    UpdateGrantsAvailed = async (grantsAvailedData) => {
        const { grantsAvailedId, title, source, date, reason } =
            grantsAvailedData;

        const request = await pool.request();

        request.input("grantsAvailedId", sql.Int, grantsAvailedId);
        request.input("title", sql.VarChar, title);
        request.input("source", sql.VarChar, source);
        request.input("date", sql.Date, date);
        request.input("reason", sql.VarChar, reason);

        await request.query(
            "UPDATE [dbo].[GrantsAvailed] SET [Title] = @title, [Source] = @source, [Date] = @date, [Reason] = @reason WHERE [GrantsAvailedId] = @grantsAvailedId"
        );
    };

    DeleteGrantsAvailed = async (grantsAvailedId) => {
        const request = await pool
            .request()
            .input("grantsAvailedId", sql.Int, grantsAvailedId);

        await request.query(
            "DELETE FROM [dbo].[GrantsAvailed] WHERE [GrantsAvailedId] = @grantsAvailedId"
        );
    };
}

module.exports = GrantsAvailedService;
