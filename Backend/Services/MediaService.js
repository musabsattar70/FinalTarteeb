const sql = require("mssql"); // Importing mssql module for SQL database interaction

class MediaService {
    MediaService = () => {};

    UploadImage = async (userId, fileName) => {
        const request = await pool
            .request()
            .input("userId", sql.Int, userId)
            .input("fileName", sql.VarChar, fileName);

        await request.query(
            "UPDATE [Admin] SET ProfileImagePath = @fileName WHERE UserId = @userId"
        );
    };
}

module.exports = MediaService;
