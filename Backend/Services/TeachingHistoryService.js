const sql = require("mssql");
class TeachingHistoryService {
    constructor() {}

    GetAllTeachingHistory = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT TeachingHistoryId, CourseName, CreditHours, CourseNo AS CourseCode, SemesterName AS Semester FROM [TeachingHistory] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddTeachingHistory = async (teachingHistoryData) => {
        const { userId, courseName, creditHours, courseNo, semesterName } =
            teachingHistoryData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("courseName", sql.VarChar, courseName);
        request.input("creditHours", sql.Int, creditHours);
        request.input("courseNo", sql.VarChar, courseNo);
        request.input("semesterName", sql.VarChar, semesterName);

        await request.query(
            "INSERT INTO [dbo].[TeachingHistory] ([UserId],[CourseName],[CreditHours],[CourseNo],[SemesterName]) VALUES (@userId, @courseName, @creditHours, @courseNo, @semesterName)"
        );
    };

    UpdateTeachingHistory = async (teachingHistoryData) => {
        const {
            teachingHistoryId,
            courseName,
            creditHours,
            courseNo,
            semesterName,
        } = teachingHistoryData;

        const request = await pool.request();

        request.input("teachingHistoryId", sql.Int, teachingHistoryId);
        request.input("courseName", sql.VarChar, courseName);
        request.input("creditHours", sql.Int, creditHours);
        request.input("courseNo", sql.VarChar, courseNo);
        request.input("semesterName", sql.VarChar, semesterName);

        await request.query(
            "UPDATE [dbo].[TeachingHistory] SET [CourseName] = @courseName, [CreditHours] = @creditHours, [CourseNo] = @courseNo, [SemesterName] = @semesterName WHERE [TeachingHistoryId] = @teachingHistoryId"
        );
    };

    DeleteTeachingHistory = async (teachingHistoryId) => {
        const request = await pool
            .request()
            .input("teachingHistoryId", sql.Int, teachingHistoryId);

        await request.query(
            "DELETE FROM [dbo].[TeachingHistory] WHERE [TeachingHistoryId] = @teachingHistoryId"
        );
    };
}

module.exports = TeachingHistoryService;
