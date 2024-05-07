const sql = require("mssql");
class StaffAppointmentService {
    constructor() {}

    GetAllStaffAppointment = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT StaffAppointmentId, Designation, TermFrom, TermTo FROM [StaffAppointment] WHERE UserId = @userId"
        );

        return result.recordset;
    };

    AddStaffAppointment = async (staffAppointmentData) => {
        const { userId, designation, termFrom, termTo } = staffAppointmentData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("designation", sql.VarChar, designation);
        request.input("termFrom", sql.VarChar, termFrom);
        request.input("termTo", sql.VarChar, termTo);

        await request.query(
            "INSERT INTO [dbo].[StaffAppointment] ([UserId],[Designation],[TermFrom],[TermTo]) VALUES (@userId, @designation, @termFrom, @termTo)"
        );
    };

    UpdateStaffAppointment = async (staffAppointmentData) => {
        const { staffAppointmentId, designation, termFrom, termTo } =
            staffAppointmentData;

        const request = await pool.request();

        request.input("StaffAppointmentId", sql.Int, staffAppointmentId);
        request.input("designation", sql.VarChar, designation);
        request.input("termFrom", sql.VarChar, termFrom);
        request.input("termTo", sql.VarChar, termTo);

        await request.query(
            "UPDATE [dbo].[StaffAppointment] SET [Designation] = @designation, [TermFrom] = @termFrom, [TermTo] = @termTo WHERE [StaffAppointmentId] = @staffAppointmentId"
        );
    };

    DeleteStaffAppointment = async (staffAppointmentId) => {
        const request = await pool
            .request()
            .input("staffAppointmentId", sql.Int, staffAppointmentId);

        await request.query(
            "DELETE FROM [dbo].[StaffAppointment] WHERE [StaffAppointmentId] = @staffAppointmentId"
        );
    };
}

module.exports = StaffAppointmentService;
