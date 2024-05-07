const ExcelJS = require("exceljs"); // Importing ExcelJS module for Excel file manipulation
const { REPORT_TYPES } = require("../data/ReportsData"); // Importing REPORT_TYPES from ReportsData
const sql = require("mssql"); // Importing mssql module for SQL database interaction

class ReportsService {
    GenerateReport = async (reportType, instructorIds) => {
        // Based on the report type, call specific report generation function
        if (reportType.Title === "Full Report") {
            return await this.GenerateFullReport(
                reportType.SubCategories,
                instructorIds
            );
        }

        if (
            reportType.Title ===
            "List of Full-Time Departmental Teaching Faculty"
        ) {
            return await this.GenerateFacultyList(
                reportType.SubCategories,
                instructorIds
            );
        }

        if (reportType.Title === "List the Faculty Members") {
            return await this.GenerateListFacultyMembers(
                reportType.SubCategories,
                instructorIds
            );
        }

        if (reportType.Title === "Publications") {
            return await this.GeneratePublications(
                reportType.SubCategories,
                instructorIds
            );
        }

        if (reportType.Title === "Service History") {
            return await this.GenerateServiceHistory(
                reportType.SubCategories,
                instructorIds
            );
        }
    };

    GenerateFullReport = async (options, instructorIds) => {
        // Extracting options for the full report
        // These options determine which data fields will be included in the report
        // For example, 'hasName' indicates whether the report includes faculty names
        const hasName = options.includes("Name of Faculty Member");
        const hasGender = options.includes("Gender");
        const hasCNICNo = options.includes("CNIC No");
        const hasPassportNo = options.includes("Passport No");
        const hasEmail = options.includes("Email");
        const hasCellNo = options.includes("Cell No");
        const hasNationality = options.includes("Nationality (Country Name)");
        const hasDesignation = options.includes("Current Actual Designation");
        const hasAdditionalCharge = options.includes("Additional Charge");
        const hasHighestDegreeLevel = options.includes("Highest Degree Level");
        const hasHighestDegreeName = options.includes("Highest Degree Name");
        const hasYearOfCompletion = options.includes(
            "Year of completion of Highest Degree"
        );
        const hasSpecialization = options.includes(
            "Subject of Specialization of Highest Degree"
        );
        const hasDegreeUniversity = options.includes(
            "Highest Degree Awarded by University"
        );
        const hasDegreeCountry = options.includes(
            "Country from Which Highest Degree obtained"
        );
        const hasTeachingExperience = options.includes(
            "Total Teaching and Research Experience"
        );
        const hasFacultyType = options.includes("Faculty Type");
        const hasDateOfBirth = options.includes("Date of Birth");
        const hasDateOfJoining = options.includes("Date of Joining");
        const hasWorkingStatus = options.includes(
            "Working Status During FY 2021-22"
        );

        // Creating a new Excel workbook
        const workbook = new ExcelJS.Workbook();
        // Finding the template path for the report type
        const reportType = REPORT_TYPES.find((x) => x.Title === "Full Report");
        const path = reportType.TemplatePath;

        return workbook.xlsx
            .readFile(path)
            .then(async () => {
                const worksheet = workbook.getWorksheet(1); // Get the first worksheet from the workbook

                const request = pool.request(); // Assuming 'pool' is defined elsewhere for SQL connection

                const tvp = new sql.Table(); // Creating a table-valued parameter for SQL stored procedure
                tvp.columns.add("InstructorId", sql.Int);
                instructorIds.forEach((id) => {
                    tvp.rows.add(id);
                });

                request.input("InstructorId", tvp); // Adding TVP as input parameter for SQL query
                request.input("ReportId", sql.Int, reportType.ReportId);

                const result = await request.execute(
                    "usp_GetInstructorDataByReportId"
                ); // Executing SQL stored procedure to get instructor data

                let startingRow = 2; // Starting row in Excel worksheet
                result.recordset.forEach((record) => {
                    const row = worksheet.getRow(startingRow); // Get the row in Excel worksheet
                    // Populate the row with data based on options
                    row.values = [
                        hasName
                            ? record.FirstName + " " + record.LastName
                            : null,
                        hasGender ? record.Gender : null,
                        hasCNICNo ? record.CNIC : null,
                        null,
                        hasEmail ? record.Email : null,
                        hasCellNo ? record.PhoneNumber : null,
                        hasNationality ? record.Nationality : null,
                        hasDesignation ? record.Designation : null,
                        null,
                        null,
                        hasHighestDegreeName ? record.DegreeTitle : null,
                        hasYearOfCompletion ? record.DateOfGraduation : null,
                        hasSpecialization ? record.Specialization : null,
                        hasDegreeUniversity ? record.University : null,
                        hasDegreeCountry ? record.CountryOfUniversity : null,
                        null,
                        hasFacultyType ? record.FacultyType : null,
                        hasDateOfBirth ? record.DateOfBirth : null,
                        hasDateOfJoining ? record.JoiningDate : null,
                        null,
                    ];

                    startingRow++; // Move to the next row
                });

                return workbook.xlsx.writeBuffer(); // Write the workbook to a buffer
            })
            .then((buffer) => {
                return buffer; // Return the buffer containing the generated Excel file
            })
            .catch((error) => {
                console.error("Error generating Excel file:", error); // Log any errors that occur during file generation
            });
    };

    GenerateServiceHistory = async (options, instructorIds) => {
        // Extracting options for the service history report
        // These options determine which data fields will be included in the report
        const hasCommittieeMembership = options.includes(
            "Committiee Membership"
        );
        const hasClubPatronage = options.includes("Club Patronage");
        const hasStaffAppointment = options.includes("Staff Appointment");

        // Creating a new Excel workbook
        const workbook = new ExcelJS.Workbook();
        // Finding the template path for the report type
        const reportType = REPORT_TYPES.find(
            (x) => x.Title === "Service History"
        );
        const path = reportType.TemplatePath;

        return workbook.xlsx
            .readFile(path)
            .then(async () => {
                const tvp = new sql.Table(); // Creating a table-valued parameter for SQL stored procedure
                tvp.columns.add("InstructorId", sql.Int);
                instructorIds.forEach((id) => {
                    tvp.rows.add(id);
                });

                if (hasCommittieeMembership) {
                    // Worksheet 1 - Committiee Membership
                    const worksheet1 = workbook.getWorksheet(1); // Get the first worksheet from the workbook

                    const request1 = pool.request(); // Assuming 'pool' is defined elsewhere for SQL connection

                    request1.input("InstructorId", tvp); // Adding TVP as input parameter for SQL query
                    request1.input("ReportId", sql.Int, reportType.ReportId);

                    const result1 = await request1.execute(
                        "usp_GetInstructorDataByReportId"
                    ); // Executing SQL stored procedure to get instructor data

                    let startingRow1 = 3; // Starting row in Excel worksheet

                    result1.recordset.forEach((record) => {
                        const row = worksheet1.getRow(startingRow1); // Get the row in Excel worksheet
                        // Populate the row with data based on options
                        if (startingRow1 == 3) {
                            row.values = [
                                startingRow1 - 2, // Serial number
                                record.FirstName + " " + record.LastName,
                                record.School,
                                record.Program,
                                record.CommittieeName,
                                record.Designation,
                                record.CommittieeMembershipTermFrom,
                                record.CommittieeMembershipTermTo,
                            ];
                        } else {
                            row.values = [
                                result1.recordset[startingRow1 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.UserId, // Serial number
                                result1.recordset[startingRow1 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.FirstName + " " + record.LastName,
                                result1.recordset[startingRow1 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.School,
                                result1.recordset[startingRow1 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.Program,
                                record.CommittieeName,
                                record.Designation,
                                record.CommittieeMembershipTermFrom,
                                record.CommittieeMembershipTermTo,
                            ];
                        }

                        startingRow1++; // Move to the next row
                    });
                }

                // Worksheet 2 - Staff Appointment
                if (hasStaffAppointment) {
                    const worksheet2 = workbook.getWorksheet(2); // Get the first worksheet from the workbook

                    const request2 = pool.request(); // Assuming 'pool' is defined elsewhere for SQL connection

                    request2.input("InstructorId", tvp); // Adding TVP as input parameter for SQL query
                    request2.input(
                        "ReportId",
                        sql.Int,
                        reportType.ReportId + 1
                    );

                    const result2 = await request2.execute(
                        "usp_GetInstructorDataByReportId"
                    ); // Executing SQL stored procedure to get instructor data

                    let startingRow2 = 3; // Starting row in Excel worksheet

                    result2.recordset.forEach((record) => {
                        const row = worksheet2.getRow(startingRow2); // Get the row in Excel worksheet
                        // Populate the row with data based on options
                        if (startingRow2 == 3) {
                            row.values = [
                                startingRow2 - 2, // Serial number
                                record.FirstName + " " + record.LastName,
                                record.School,
                                record.Program,
                                record.Designation,
                                record.StaffAppointmentTermFrom,
                                record.StaffAppointmentTermTo,
                            ];
                        } else {
                            row.values = [
                                result2.recordset[startingRow2 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.UserId, // Serial number
                                result2.recordset[startingRow2 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.FirstName + " " + record.LastName,
                                result2.recordset[startingRow2 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.School,
                                result2.recordset[startingRow2 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.Program,
                                record.Designation,
                                record.StaffAppointmentTermFrom,
                                record.StaffAppointmentTermTo,
                            ];
                        }

                        startingRow2++; // Move to the next row
                    });
                }

                // Worksheet 3 - Club Patronage
                if (hasClubPatronage) {
                    const worksheet3 = workbook.getWorksheet(3); // Get the first worksheet from the workbook

                    const request3 = pool.request(); // Assuming 'pool' is defined elsewhere for SQL connection

                    request3.input("InstructorId", tvp); // Adding TVP as input parameter for SQL query
                    request3.input(
                        "ReportId",
                        sql.Int,
                        reportType.ReportId + 2
                    );

                    const result3 = await request3.execute(
                        "usp_GetInstructorDataByReportId"
                    ); // Executing SQL stored procedure to get instructor data

                    let startingRow3 = 3; // Starting row in Excel worksheet

                    result3.recordset.forEach((record) => {
                        const row = worksheet3.getRow(startingRow3); // Get the row in Excel worksheet
                        // Populate the row with data based on options

                        if (startingRow3 == 3) {
                            row.values = [
                                startingRow3 - 2, // Serial number
                                record.FirstName + " " + record.LastName,
                                record.School,
                                record.Program,
                                record.ClubName,
                                record.ClubPatronageTermFrom,
                                record.ClubPatronageTermTo,
                            ];
                        } else {
                            row.values = [
                                result3.recordset[startingRow3 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.UserId, // Serial number
                                result3.recordset[startingRow3 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.FirstName + " " + record.LastName,
                                result3.recordset[startingRow3 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.School,
                                result3.recordset[startingRow3 - 4].UserId ==
                                record.UserId
                                    ? ""
                                    : record.Program,
                                record.ClubName,
                                record.ClubPatronageTermFrom,
                                record.ClubPatronageTermTo,
                            ];
                        }
                        startingRow3++; // Move to the next row
                    });
                }

                return workbook.xlsx.writeBuffer(); // Write the workbook to a buffer
            })
            .then((buffer) => {
                return buffer; // Return the buffer containing the generated Excel file
            })
            .catch((error) => {
                console.error("Error generating Excel file:", error); // Log any errors that occur during file generation
            });
    };

    GeneratePublications = async (options, instructorIds) => {
        // Extracting options for the publications
        const hasAuthorName = options.includes("Author Name");
        const hasPublicationTitle = options.includes("Publication Title");
        const hasPublicationDate = options.includes("Publication Date");
        const hasPublicationType = options.includes("Publication Type");
        const hasPublicationLink = options.includes("Publication Link");

        // Creating a new Excel workbook
        const workbook = new ExcelJS.Workbook();
        // Finding the template path for the report type
        const reportType = REPORT_TYPES.find((x) => x.Title === "Publications");
        const path = reportType.TemplatePath;

        return workbook.xlsx
            .readFile(path)
            .then(async () => {
                const worksheet = workbook.getWorksheet(1); // Get the first worksheet from the workbook

                const request = pool.request(); // Assuming 'pool' is defined elsewhere for SQL connection

                const tvp = new sql.Table(); // Creating a table-valued parameter for SQL stored procedure
                tvp.columns.add("InstructorId", sql.Int);
                instructorIds.forEach((id) => {
                    tvp.rows.add(id);
                });

                request.input("InstructorId", tvp); // Adding TVP as input parameter for SQL query
                request.input("ReportId", sql.Int, reportType.ReportId);

                const result = await request.execute(
                    "usp_GetInstructorDataByReportId"
                ); // Executing SQL stored procedure to get instructor data

                let startingRow = 5; // Starting row in Excel worksheet
                result.recordset.forEach((record) => {
                    const row = worksheet.getRow(startingRow); // Get the row in Excel worksheet
                    // Populate the row with data based on options
                    row.values = [
                        startingRow - 4, // Serial number
                        hasAuthorName
                            ? record.FirstName + " " + record.LastName
                            : null,
                        hasPublicationTitle ? record.PublicationName : null,
                        null,
                        null,
                        hasPublicationDate
                            ? new Date(record.PublicationDate).getFullYear()
                            : null,
                        hasPublicationType ? record.PublicationType : null,
                        // hasPublicationLink ? record.PublicationLink : null,
                    ];

                    startingRow++; // Move to the next row
                });

                return workbook.xlsx.writeBuffer(); // Write the workbook to a buffer
            })
            .then((buffer) => {
                return buffer; // Return the buffer containing the generated Excel file
            })
            .catch((error) => {
                console.error("Error generating Excel file:", error); // Log any errors that occur during file generation
            });
    };

    GenerateFacultyList = async (options, instructorIds) => {
        // Extracting options for the faculty list report
        // These options determine which data fields will be included in the report

        const hasName = options.includes("Name");
        const hasPEC = options.includes("PEC #");
        const hasDesignation = options.includes("Designation");
        const hasJoiningDate = options.includes("Joining Date");
        const hasDetailsOfQualification = options.includes(
            "Details of Qualifications"
        );
        const hasSpecialization = options.includes("Specialization");
        const hasExperienceTeaching = options.includes(
            "Experience Teaching (yrs)"
        );
        const hasTotalExperience = options.includes("Experience Total (yrs)");
        const hasDedicated = options.includes("Dedicated/Shared");
        const hasCoursesTaughtInSpring2023 = options.includes(
            "Courses taught in Spring 2023"
        );
        const hasCoursesTaughtInFall2023 = options.includes(
            "Courses taught in Fall 2023"
        );

        // Creating a new Excel workbook
        const workbook = new ExcelJS.Workbook();

        // Finding the template path for the report type
        const reportType = REPORT_TYPES.find(
            (x) => x.Title === "List of Full-Time Departmental Teaching Faculty"
        );

        const path = reportType.TemplatePath;

        return workbook.xlsx
            .readFile(path)
            .then(async () => {
                const worksheet = workbook.getWorksheet(1); // Get the first worksheet from the workbook

                const request = pool.request(); // Assuming 'pool' is defined elsewhere for SQL connection

                const tvp = new sql.Table(); // Creating a table-valued parameter for SQL stored procedure
                tvp.columns.add("InstructorId", sql.Int);
                instructorIds.forEach((id) => {
                    tvp.rows.add(id);
                });

                request.input("InstructorId", tvp); // Adding TVP as input parameter for SQL query
                request.input("ReportId", sql.Int, reportType.ReportId);

                const result = await request.execute(
                    "usp_GetInstructorDataByReportId"
                ); // Executing SQL stored procedure to get instructor data

                let currentRow = 1;
                let currentId;
                let lastRow = 0;
                let startingRow = 6; // Starting row in Excel worksheet
                result.recordset.forEach((record) => {
                    if (currentId !== record.UserId) {
                        if (currentId) {
                            currentRow++;
                        }
                        currentId = record.UserId;
                    }

                    const row = worksheet.getRow(startingRow); // Get the row in Excel worksheet
                    // Populate the row with data based on options
                    row.values = [
                        currentRow !== lastRow ? currentRow : null, // Serial number
                        currentRow !== lastRow
                            ? hasName
                                ? record.FirstName + " " + record.LastName
                                : null
                            : null,
                        currentRow !== lastRow
                            ? hasPEC
                                ? record.PECNo
                                : null
                            : null,
                        currentRow !== lastRow
                            ? hasDesignation
                                ? record.Designation
                                : null
                            : null,
                        currentRow !== lastRow
                            ? hasJoiningDate
                                ? record.JoiningDate
                                : null
                            : null,
                        hasDetailsOfQualification ? record.DegreeTitle : null,
                        hasDetailsOfQualification
                            ? record.DateOfGraduation
                            : null,
                        hasDetailsOfQualification ? record.University : null,
                        hasSpecialization ? record.Specialization : null,
                        currentRow !== lastRow
                            ? hasExperienceTeaching
                                ? record.TeachingExperience
                                : null
                            : null,
                        currentRow !== lastRow
                            ? hasTotalExperience
                                ? record.TotalExperience
                                : null
                            : null,
                        currentRow !== lastRow
                            ? hasDedicated
                                ? record.Dedicated
                                : null
                            : null,
                        currentRow !== lastRow
                            ? hasCoursesTaughtInSpring2023
                                ? record.CourseTaughtInSpring2023
                                : null
                            : null,
                        currentRow !== lastRow
                            ? hasCoursesTaughtInFall2023
                                ? record.CourseTaughtInFall2023
                                : null
                            : null,
                    ];

                    if (currentRow !== lastRow) {
                        // Add bottom border to the row
                        row.eachCell(
                            { includeEmpty: true },
                            function (cell, colNumber) {
                                cell.border = {
                                    top: {
                                        style: "thin",
                                        color: { argb: "FF000000" },
                                    }, // You can adjust style and color as needed
                                };
                            }
                        );
                    }

                    startingRow++; // Move to the next row
                    lastRow = currentRow;
                });

                return workbook.xlsx.writeBuffer(); // Write the workbook to a buffer
            })
            .then((buffer) => {
                return buffer; // Return the buffer containing the generated Excel file
            })
            .catch((error) => {
                console.error("Error generating Excel file:", error); // Log any errors that occur during file generation
            });
    };

    GenerateListFacultyMembers = async (options, instructorIds) => {
        // Extracting options for the faculty members list report
        // These options determine which data fields will be included in the report
        const hasName = options.includes("Name");
        const hasDegreeLevel = options.includes("Degree Level");
        const hasCurrentSemesterLoadingFall2023 = options.includes(
            "Current Semester Loading Fall 2023"
        );
        const hasLastSemesterLoadingSpring2023 = options.includes(
            "Last Semester Loading Spring 2023"
        );

        // Creating a new Excel workbook
        const workbook = new ExcelJS.Workbook();

        // Finding the template path for the report type
        const reportType = REPORT_TYPES.find(
            (x) => x.Title === "List the Faculty Members"
        );

        const path = reportType.TemplatePath;

        return workbook.xlsx.readFile(path).then(async () => {
            const worksheet = workbook.getWorksheet(1); // Get the first worksheet from the workbook

            const request = pool.request(); // Assuming 'pool' is defined elsewhere for SQL connection

            const tvp = new sql.Table(); // Creating a table-valued parameter for SQL stored procedure
            tvp.columns.add("InstructorId", sql.Int);
            instructorIds.forEach((id) => {
                tvp.rows.add(id);
            });

            request.input("InstructorId", tvp); // Adding TVP as input parameter for SQL query
            request.input("ReportId", sql.Int, reportType.ReportId);

            const result = await request.execute(
                "usp_GetInstructorDataByReportId"
            ); // Executing SQL stored procedure to get instructor data

            let modifiedResult = this._ConvertResultToFullListFacultyMembers(
                result.recordset
            );

            let startingRow = 6; // Starting row in Excel worksheet
            modifiedResult.forEach((record) => {
                const row = worksheet.getRow(startingRow); // Get the row in Excel worksheet
                // Populate the row with data based on options
                row.values = [
                    record.SRNo,
                    hasName ? record.Name : null,
                    hasDegreeLevel ? "BS" : null,
                    hasCurrentSemesterLoadingFall2023
                        ? record.FallSemesterTheoryCreditHour
                        : null,
                    hasCurrentSemesterLoadingFall2023
                        ? record.FallSemesterLabCreditHour
                        : null,
                    hasCurrentSemesterLoadingFall2023
                        ? record.FallSemesterCourseName
                        : null,
                    hasLastSemesterLoadingSpring2023
                        ? record.SpringSemesterTheoryCreditHour
                        : null,
                    hasLastSemesterLoadingSpring2023
                        ? record.SpringSemesterLabCreditHour
                        : null,
                    hasLastSemesterLoadingSpring2023
                        ? record.SpringSemesterCourseName
                        : null,
                ];

                // Add bottom border to the row
                row.eachCell(
                    { includeEmpty: true },
                    function (cell, colNumber) {
                        cell.border = {
                            top: {
                                style: "thin",
                                color: { argb: "FF000000" },
                            },
                            bottom: {
                                style: "thin",
                                color: { argb: "FF000000" },
                            },
                            left: {
                                style: "thin",
                                color: { argb: "FF000000" },
                            },
                            right: {
                                style: "thin",
                                color: { argb: "FF000000" },
                            },
                        };
                    }
                );

                if (record.SRNo) {
                    // Add bottom border to the row
                    row.eachCell(
                        { includeEmpty: true },
                        function (cell, colNumber) {
                            cell.border = {
                                top: {
                                    style: "thick",
                                    color: { argb: "FF000000" },
                                },
                                bottom: {
                                    style: "thin",
                                    color: { argb: "FF000000" },
                                },
                                left: {
                                    style: "thin",
                                    color: { argb: "FF000000" },
                                },
                                right: {
                                    style: "thin",
                                    color: { argb: "FF000000" },
                                },
                            };
                        }
                    );
                }

                startingRow++; // Move to the next row
            });

            return workbook.xlsx.writeBuffer(); //
        });
    };

    _ConvertResultToFullListFacultyMembers = (result) => {
        let arr = [];

        let i = 0;
        let userId = 0;
        let srNo = 1;

        while (i < result.length) {
            let record = result[i];

            let fallSemesterCourses = result.filter(
                (item) =>
                    item.UserId == record.UserId &&
                    item.SemesterName == "Fall 2023"
            );
            i += fallSemesterCourses.length;

            let springSemesterCourses = result.filter(
                (item) =>
                    item.UserId == record.UserId &&
                    item.SemesterName == "Spring 2023"
            );
            i += springSemesterCourses.length;

            let hasFallSemesterMoreCourses = false;

            if (fallSemesterCourses.length > springSemesterCourses.length) {
                hasFallSemesterMoreCourses = true;
            }

            if (hasFallSemesterMoreCourses) {
                fallSemesterCourses.forEach((course, index) => {
                    let springCourse;

                    if (index < springSemesterCourses.length) {
                        springCourse = springSemesterCourses[index];
                    }

                    arr.push({
                        SRNo: userId == record.UserId ? null : srNo++,
                        UserId: userId == record.UserId ? null : record.UserId,
                        Name:
                            userId == record.UserId
                                ? null
                                : record.FirstName + " " + record.LastName,
                        FallSemesterTheoryCreditHour:
                            course.CourseName.indexOf("Lab") == -1
                                ? course.CreditHours
                                : null,
                        FallSemesterLabCreditHour:
                            course.CourseName.indexOf("Lab") != -1
                                ? course.CreditHours
                                : null,
                        FallSemesterCourseName: course.CourseName,
                        SpringSemesterTheoryCreditHour: springCourse
                            ? springCourse.CourseName.indexOf("Lab") == -1
                                ? springCourse.CreditHours
                                : null
                            : null,
                        SpringSemesterLabCreditHour: springCourse
                            ? springCourse.CourseName.indexOf("Lab") != -1
                                ? springCourse.CreditHours
                                : null
                            : null,
                        SpringSemesterCourseName: springCourse
                            ? springCourse.CourseName
                            : null,
                    });

                    userId = record.UserId;
                });
            } else {
                springSemesterCourses.forEach((course, index) => {
                    let fallCourse;

                    if (index < fallSemesterCourses.length) {
                        fallCourse = fallSemesterCourses[index];
                    }

                    arr.push({
                        SRNo: userId == record.UserId ? null : srNo++,
                        UserId: userId == record.UserId ? null : record.UserId,
                        Name:
                            userId == record.UserId
                                ? null
                                : record.FirstName + " " + record.LastName,

                        FallSemesterTheoryCreditHour: fallCourse
                            ? fallCourse.CourseName.indexOf("Lab") == -1
                                ? fallCourse.CreditHours
                                : null
                            : null,
                        FallSemesterLabCreditHour: fallCourse
                            ? fallCourse.CourseName.indexOf("Lab") != -1
                                ? fallCourse.CreditHours
                                : null
                            : null,
                        FallSemesterCourseName: fallCourse
                            ? fallCourse.CourseName
                            : null,
                        SpringSemesterTheoryCreditHour:
                            course.CourseName.indexOf("Lab") == -1
                                ? course.CreditHours
                                : null,
                        SpringSemesterLabCreditHour:
                            course.CourseName.indexOf("Lab") != -1
                                ? course.CreditHours
                                : null,
                        SpringSemesterCourseName: course.CourseName,
                    });

                    userId = record.UserId;
                });
            }
        }

        return arr;
    };

    GetInstructorsList = async () => {
        // Get the list of instructors from the database
        // This function can be used to populate the list of instructors in the UI
        const request = pool.request();

        const result = await request.query(
            "SELECT UserId AS ID, FirstName + ' ' + LastName AS Name, School, Program AS Department FROM [Admin] WHERE RoleId = 1"
        );

        return result.recordset;
    };
}

module.exports = ReportsService; // Export the ReportsService class
