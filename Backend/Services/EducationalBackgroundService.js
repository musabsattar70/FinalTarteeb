const sql = require("mssql");
class EducationBackgroundService {
    constructor() {}

    GetAllEducationalBackground = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT * FROM [EducationalBackground] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddEducationalBackground = async (educationalBackgroundData) => {
        const {
            userId,
            degreeTitle,
            specialization,
            university,
            countryOfUniversity,
            dateOfGraduation,
        } = educationalBackgroundData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("degreeTitle", sql.VarChar, degreeTitle);
        request.input("specialization", sql.VarChar, specialization);
        request.input("university", sql.VarChar, university);
        request.input("countryOfUniversity", sql.VarChar, countryOfUniversity);
        request.input("dateOfGraduation", sql.Date, dateOfGraduation);

        await request.query(
            "INSERT INTO [dbo].[EducationalBackground] ([UserId],[DegreeTitle],[Specialization],[University],[CountryOfUniversity],[DateOfGraduation]) VALUES (@userId, @degreeTitle, @specialization, @university, @countryOfUniversity, @dateOfGraduation)"
        );
    };

    UpdateEducationalBackground = async (educationalBackgroundData) => {
        const {
            educationalBackgroundId,
            degreeTitle,
            specialization,
            university,
            countryOfUniversity,
            dateOfGraduation,
        } = educationalBackgroundData;

        const request = await pool.request();

        request.input(
            "educationalBackgroundId",
            sql.Int,
            educationalBackgroundId
        );
        request.input("degreeTitle", sql.VarChar, degreeTitle);
        request.input("specialization", sql.VarChar, specialization);
        request.input("university", sql.VarChar, university);
        request.input("countryOfUniversity", sql.VarChar, countryOfUniversity);
        request.input("dateOfGraduation", sql.Date, dateOfGraduation);

        await request.query(
            "UPDATE [dbo].[EducationalBackground] SET [DegreeTitle] = @degreeTitle, [Specialization] = @specialization, [University] = @university, [CountryOfUniversity] = @countryOfUniversity, [DateOfGraduation] = @dateOfGraduation WHERE [EducationalBackgroundId] = @educationalBackgroundId"
        );
    };

    DeleteEducationalBackground = async (educationalBackgroundId) => {
        const request = await pool
            .request()
            .input("educationalBackgroundId", sql.Int, educationalBackgroundId);

        await request.query(
            "DELETE FROM [dbo].[EducationalBackground] WHERE [EducationalBackgroundId] = @educationalBackgroundId"
        );
    };
}

module.exports = EducationBackgroundService;
