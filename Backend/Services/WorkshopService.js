const sql = require("mssql");
class WorkshopService {
    constructor() {}

    GetAllWorkshop = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT WorkshopId, Title, [Date], Description, [Location] FROM [Workshop] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddWorkshop = async (workshopData) => {
        const { userId, title, date, description, location } = workshopData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("title", sql.VarChar, title);
        request.input("date", sql.Date, date);
        request.input("description", sql.VarChar, description);
        request.input("location", sql.VarChar, location);

        await request.query(
            "INSERT INTO [dbo].[Workshop] ([UserId],[Title],[Date],[Description],[Location]) VALUES (@userId, @title, @date, @description, @location)"
        );
    };

    UpdateWorkshop = async (workshopData) => {
        const { workshopId, title, date, description, location } = workshopData;

        const request = await pool.request();

        request.input("workshopId", sql.Int, workshopId);
        request.input("title", sql.VarChar, title);
        request.input("date", sql.Date, date);
        request.input("description", sql.VarChar, description);
        request.input("location", sql.VarChar, location);

        await request.query(
            "UPDATE [dbo].[Workshop] SET [Title] = @title, [Date] = @date, [description] = @description, [Location] = @location WHERE [WorkshopId] = @workshopId"
        );
    };

    DeleteWorkshop = async (workshopId) => {
        const request = await pool
            .request()
            .input("workshopId", sql.Int, workshopId);

        await request.query(
            "DELETE FROM [dbo].[Workshop] WHERE [WorkshopId] = @workshopId"
        );
    };
}

module.exports = WorkshopService;
