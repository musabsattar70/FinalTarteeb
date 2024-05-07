const sql = require("mssql");
class CommunityServiceService {
    constructor() {}

    GetAllCommunityService = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT CommunityServiceId, Name, Date, Description FROM [CommunityService] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddCommunityService = async (communityServiceData) => {
        const { userId, name, date, description } = communityServiceData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("name", sql.VarChar, name);
        request.input("date", sql.Date, date);
        request.input("description", sql.VarChar, description);

        await request.query(
            "INSERT INTO [dbo].[CommunityService] ([UserId],[Name],[Date],[Description]) VALUES (@userId, @name, @date, @description)"
        );
    };

    UpdateCommunityService = async (communityServiceData) => {
        const { communityServiceId, name, date, description } =
            communityServiceData;

        const request = await pool.request();

        request.input("communityServiceId", sql.Int, communityServiceId);
        request.input("name", sql.VarChar, name);
        request.input("date", sql.Date, date);
        request.input("description", sql.VarChar, description);

        await request.query(
            "UPDATE [dbo].[CommunityService] SET [Name] = @name, [Date] = @date, [Description] = @description WHERE [CommunityServiceId] = @communityServiceId"
        );
    };

    DeleteCommunityService = async (communityServiceId) => {
        const request = await pool
            .request()
            .input("communityServiceId", sql.Int, communityServiceId);

        await request.query(
            "DELETE FROM [dbo].[CommunityService] WHERE [CommunityServiceId] = @communityServiceId"
        );
    };
}

module.exports = CommunityServiceService;
