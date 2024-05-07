const sql = require("mssql");
class PublicationService {
    constructor() {}

    GetAllPublication = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT PublicationId, PublicationName, PublicationType, PublicationDate, PublicationLink FROM [Publications] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddPublication = async (publicationData) => {
        const {
            userId,
            publicationName,
            publicationType,
            publicationDate,
            publicationLink,
        } = publicationData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("publicationName", sql.VarChar, publicationName);
        request.input("publicationType", sql.VarChar, publicationType);
        request.input("publicationDate", sql.Date, publicationDate);
        request.input("publicationLink", sql.VarChar, publicationLink);

        await request.query(
            "INSERT INTO [dbo].[Publications] ([UserId],PublicationName, PublicationType, PublicationDate, PublicationLink) VALUES (@userId, @publicationName, @publicationType, @publicationDate, @publicationLink)"
        );
    };

    UpdatePublication = async (publicationData) => {
        const {
            publicationId,
            publicationName,
            publicationType,
            publicationDate,
            publicationLink,
        } = publicationData;

        const request = await pool.request();

        request.input("publicationId", sql.Int, publicationId);
        request.input("publicationName", sql.VarChar, publicationName);
        request.input("publicationType", sql.VarChar, publicationType);
        request.input("publicationDate", sql.Date, publicationDate);
        request.input("publicationLink", sql.VarChar, publicationLink);

        await request.query(
            "UPDATE [dbo].[Publications] SET [PublicationName] = @publicationName, [PublicationType] = @publicationType, [PublicationDate] = @publicationDate, [PublicationLink] = @publicationLink WHERE [PublicationId] = @publicationId"
        );
    };

    DeletePublication = async (publicationId) => {
        const request = await pool
            .request()
            .input("publicationId", sql.Int, publicationId);

        await request.query(
            "DELETE FROM [dbo].[Publications] WHERE [PublicationId] = @publicationId"
        );
    };
}

module.exports = PublicationService;
