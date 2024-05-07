const sql = require("mssql");
const { GenerateToken } = require("../Helpers/JWTHelper");
class AdminService {
    constructor() {}

    LoginAdmin = async ({ email, password }) => {
        const request = await pool.request();

        request.input("email", sql.VarChar, email);
        request.input("password", sql.VarChar, password);

        const result = await request.query(
            "SELECT [UserId],[Email],[FirstName],[LastName], [RoleId] FROM [dbo].[Admin] WHERE [Email] = @email AND [Password] = HASHBYTES('SHA2_256', @password)"
        );

        if (result.recordset.length === 0) {
            return null;
        }

        if(result.recordset[0].RoleId == 1) {
            return "NoAdminAccess";
        }

        const user = result.recordset[0];

        const jwtPayload = {
            userId: user.UserId,
            email: user.Email,
            firstName: user.FirstName,
            lastName: user.LastName,
            roleId: user.RoleId,
        };

        return GenerateToken(jwtPayload);
    };

    GetAdminInfo = async (userId) => {
        const request = await pool.request().input("userId", sql.Int, userId);

        const result = await request.query(
            "SELECT TOP 1 [Admin].[UserId],[Email],[FirstName],[LastName],[Nationality],[CNIC],[PECNo],[PhoneNumber],[JoiningDate],[FacultyType],[ProfileImagePath],[School],[Program],[Gender],[DateOfBirth], [Designation] FROM [dbo].[Admin],[dbo].StaffAppointment WHERE [Admin].UserId = StaffAppointment.UserId AND [Admin].UserId = @userId  AND [Admin].RoleId = 1 ORDER BY StaffAppointment.StaffAppointmentId"
        );

        return result.recordset[0];
    };

    UpdateAdminInfo = async (adminData) => {
        const {
            userId,
            firstName,
            lastName,
            nationality,
            cnic,
            pecNo,
            phoneNumber,
            joiningDate,
            facultyType,
            school,
            program,
            gender,
            dateOfBirth,
        } = adminData;

        const request = await pool.request();

        request.input("userId", sql.Int, userId);
        request.input("firstName", sql.VarChar, firstName);
        request.input("lastName", sql.VarChar, lastName);
        request.input("nationality", sql.VarChar, nationality);
        request.input("cnic", sql.VarChar, cnic);
        request.input("pecNo", sql.VarChar, pecNo);
        request.input("phoneNumber", sql.VarChar, phoneNumber);
        request.input("joiningDate", sql.Date, joiningDate);
        request.input("facultyType", sql.VarChar, facultyType);
        request.input("school", sql.VarChar, school);
        request.input("program", sql.VarChar, program);
        request.input("dateOfBirth", sql.Date, dateOfBirth);
        request.input("gender", sql.VarChar, gender);

        await request.query(
            "UPDATE [dbo].[Admin] SET [FirstName] = @firstName, [LastName] = @lastName, [Nationality] = @nationality, [CNIC] = @cnic, [PECNo] = @pecNo, [PhoneNumber] = @phoneNumber, [JoiningDate] = @joiningDate, [FacultyType] = @facultyType, [School] = @school, [Program] = @program, [DateOfBirth] = @dateOfBirth, [Gender]= @gender WHERE [UserId] = @userId"
        );
    };

    GetAllAdminInfo = async ({
        designationFilter,
        programFilter,
        facultyTypeFilter,
    }) => {
        const request = await pool.request();

        let query =
            "SELECT [Admin].[UserId],[Email],[FirstName],[LastName],[Nationality],[CNIC],[PECNo],[PhoneNumber],[JoiningDate],[FacultyType],[ProfileImagePath],[School],[Program],[Gender],[DateOfBirth], [Designation],[StaffAppointment].[StaffAppointmentId] FROM [dbo].[Admin],[dbo].StaffAppointment WHERE [Admin].UserId = StaffAppointment.UserId AND [Admin].RoleId = 1";

        if (designationFilter) {
            let newString = designationFilter.replace(/'/g, "''");
            query += ` AND [Designation] = '${newString}'`;
        }

        if (programFilter) {
            query += ` AND [Program] = '${programFilter}'`;
        }

        if (facultyTypeFilter) {
            query += ` AND [FacultyType] = '${facultyTypeFilter}'`;
        }

        query +=
            " ORDER BY [Admin].UserId, StaffAppointment.StaffAppointmentId DESC";

        const result = await request.query(query);

        let data = [];
        let adminIds = [];

        result.recordset.forEach((record) => {
            if (!adminIds.includes(record.UserId)) {
                adminIds.push(record.UserId);
                data.push(record);
            }
        });

        return data;
    };
}

module.exports = AdminService;
