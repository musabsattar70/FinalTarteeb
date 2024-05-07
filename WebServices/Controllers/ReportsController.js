const { REPORT_TYPES } = require("../data/ReportsData"); // Importing REPORT_TYPES from ReportsData
const ReportsService = require("../Services/ReportsService"); // Importing ReportsService
const crypto = require("crypto"); // Importing crypto module for generating random file name

exports.GenerateReport = async (req, res, next) => {
    // Defining an asynchronous function to generate report
    try {
        // Check if request body contains required fields for ReportType
        if (
            !req.body.ReportType ||
            req.body.ReportType instanceof Object === false ||
            !req.body.ReportType.Title ||
            !req.body.ReportType.SubCategories ||
            req.body.ReportType.SubCategories instanceof Array === false ||
            req.body.ReportType.SubCategories.length === 0
        ) {
            res.status(400).send("Bad Request!"); // Sending Bad Request response if validation fails
            return;
        }

        // Find the corresponding report type element from REPORT_TYPES array
        const reportTypeElement = REPORT_TYPES.find(
            (x) => x.Title === req.body.ReportType.Title
        );

        if (!reportTypeElement) {
            res.status(400).send("Bad Request!"); // Sending Bad Request response if report type is not found
            return;
        }

        let isErrorInSubCategory = false;
        // Validate each subcategory in the request body
        req.body.ReportType.SubCategories.forEach((subCategory) => {
            if (
                typeof subCategory !== "string" ||
                subCategory === "" ||
                reportTypeElement.SubCategories.includes(subCategory) === false
            ) {
                res.status(400).send("Bad Request!"); // Sending Bad Request response if subcategory validation fails
                isErrorInSubCategory = true;
            }
        });

        if (isErrorInSubCategory) {
            return; // Exiting the function if there is an error in subcategories
        }

        // Check if request body contains required fields for Instructors
        if (
            !req.body.Instructors ||
            req.body.Instructors instanceof Array === false ||
            req.body.Instructors.length === 0
        ) {
            res.status(400).send("Bad Request!"); // Sending Bad Request response if validation fails
            return;
        }
        let isError = false;
        // Validate each instructor ID in the request body
        req.body.Instructors.forEach((id) => {
            if (typeof id !== "number" || id <= 0) {
                res.status(400).send("Bad Request!"); // Sending Bad Request response if validation fails
                isError = true;
            }
        });
        if (isError) {
            return; // Exiting the function if there is an error in instructor IDs
        }

        // Instantiate ReportsService
        const _reportsService = new ReportsService();
        // Generate the report using ReportsService
        const result = await _reportsService.GenerateReport(
            req.body.ReportType,
            req.body.Instructors
        );

        // Generate a random file name for the report
        const length = 10;
        const randomFileName = crypto
            .randomBytes(Math.ceil(length / 2))
            .toString("hex")
            .slice(0, length);
        // Set response headers for file download
        res.setHeader(
            "Content-Disposition",
            `attachment; filename="${req.body.ReportType.Title}_${randomFileName}.xlsx"`
        );
        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );

        // Send the generated report as response
        res.send(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in fetching data"); // Sending Internal Server Error response if an error occurs
        console.error("Database query error", err); // Logging the error
    }
};

exports.GetInstructorsList = async (req, res, next) => {
    // Defining an asynchronous function to get list of instructors
    try {
        // Instantiate ReportsService
        const _reportsService = new ReportsService();
        // Get list of instructors using ReportsService
        const result = await _reportsService.GetInstructorsList();
        // Send the list of instructors as response
        res.send(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in fetching data"); // Sending Internal Server Error response if an error occurs
        console.error("Database query error", err); // Logging the error
    }
};
