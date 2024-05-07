const sql = require("mssql");
class AttendedConferencesService {
    constructor() {}

    GetAllAttendedConferences = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT AttendedConferencesId, Title, Date, SourceOfFunding, Reason FROM [AttendedConferences] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddAttendedConferences = async (attendedConferencesData) => {
        const { userId, title, sourceOfFunding, reason, date } =
            attendedConferencesData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("title", sql.VarChar, title);
        request.input("sourceOfFunding", sql.VarChar, sourceOfFunding);
        request.input("reason", sql.VarChar, reason);
        request.input("date", sql.Date, date);

        await request.query(
            "INSERT INTO [dbo].[AttendedConferences] ([UserId],[Title],[SourceOfFunding],[Date],[Reason]) VALUES (@userId, @title, @sourceOfFunding, @date, @reason)"
        );
    };

    UpdateAttendedConferences = async (attendedConferencesData) => {
        const { attendedConferencesId, title, sourceOfFunding, reason, date } =
            attendedConferencesData;

        const request = await pool.request();

        request.input("attendedConferencesId", sql.Int, attendedConferencesId);
        request.input("title", sql.VarChar, title);
        request.input("sourceOfFunding", sql.VarChar, sourceOfFunding);
        request.input("reason", sql.VarChar, reason);
        request.input("date", sql.Date, date);

        await request.query(
            "UPDATE [dbo].[AttendedConferences] SET [Title] = @title, [SourceOfFunding] = @sourceOfFunding, [Reason] = @reason, [Date] = @date WHERE [AttendedConferencesId] = @attendedConferencesId"
        );
    };

    DeleteAttendedConferences = async (attendedConferencesId) => {
        const request = await pool
            .request()
            .input("attendedConferencesId", sql.Int, attendedConferencesId);

        await request.query(
            "DELETE FROM [dbo].[AttendedConferences] WHERE [AttendedConferencesId] = @attendedConferencesId"
        );
    };
}

module.exports = AttendedConferencesService;
