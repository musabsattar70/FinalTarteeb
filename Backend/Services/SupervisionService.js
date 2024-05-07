const sql = require("mssql");
class SupervisionService {
    constructor() {}

    GetAllSupervision = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT SupervisionId, [Name], [Date], Authors, [Location] FROM [Supervision] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddSupervision = async (supervisionData) => {
        const { userId, name, date, authors, location } = supervisionData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("name", sql.VarChar, name);
        request.input("date", sql.Date, date);
        request.input("authors", sql.VarChar, authors);
        request.input("location", sql.VarChar, location);

        await request.query(
            "INSERT INTO [dbo].[Supervision] ([UserId],[Name], [Date], Authors, [Location]) VALUES (@userId, @name, @date, @authors, @location)"
        );
    };

    UpdateSupervision = async (supervisionData) => {
        const { supervisionId, name, date, authors, location } =
            supervisionData;

        const request = await pool.request();

        request.input("supervisionId", sql.Int, supervisionId);
        request.input("name", sql.VarChar, name);
        request.input("date", sql.Date, date);
        request.input("authors", sql.VarChar, authors);
        request.input("location", sql.VarChar, location);

        await request.query(
            "UPDATE [dbo].[Supervision] SET [Name] = @name, [Date] = @date, [Authors] = @authors, [Location] = @location WHERE [SupervisionId] = @supervisionId"
        );
    };

    DeleteSupervision = async (supervisionId) => {
        const request = await pool
            .request()
            .input("supervisionId", sql.Int, supervisionId);

        await request.query(
            "DELETE FROM [dbo].[Supervision] WHERE [SupervisionId] = @supervisionId"
        );
    };
}

module.exports = SupervisionService;
