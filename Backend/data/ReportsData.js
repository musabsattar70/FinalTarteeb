const path = require("path");

const REPORT_TYPES = [
    {
        ReportId: 1,
        TemplatePath: path.join(__dirname, "../Templates/SampleFormat-1.xlsx"),
        Title: "Full Report",
        SubCategories: [
            "Name of Faculty Member",
            "Gender",
            "CNIC No",
            "Passport No",
            "Email",
            "Cell No",
            "Nationality (Country Name)",
            "Current Actual Designation",
            "Additional Charge",
            "Highest Degree Level",
            "Highest Degree Name",
            "Year of completion of Highest Degree",
            "Subject of Specialization of Highest Degree",
            "Highest Degree Awarded by University",
            "Country from Which Highest Degree obtained",
            "Total Teaching and Research Experience",
            "Faculty Type",
            "Date of Birth",
            "Date of Joining",
            "Working Status During FY 2021-22",
        ],
    },
    {
        ReportId: 2,
        TemplatePath: path.join(__dirname, "../Templates/SampleFormat-2.xlsx"),
        Title: "List the Faculty Members",
        SubCategories: [
            "Name",
            "Degree Level",
            "Current Semester Loading Fall 2023",
            "Last Semester Loading Spring 2023",
        ],
    },
    {
        ReportId: 3,
        TemplatePath: path.join(__dirname, "../Templates/SampleFormat-3.xlsx"),
        Title: "List of Full-Time Departmental Teaching Faculty",
        SubCategories: [
            "Name",
            "PEC #",
            "Designation",
            "Joining Date",
            "Details of Qualifications",
            "Specialization",
            "Experience Teaching (yrs)",
            "Experience Total (yrs)",
            "Dedicated/Shared",
            "Courses taught in Spring 2023",
            "Courses taught in Fall 2023",
        ],
    },
    {
        ReportId: 4,
        TemplatePath: path.join(__dirname, "../Templates/SampleFormat-4.xlsx"),
        Title: "Publications",
        SubCategories: [
            "Author Name",
            "Publication Title",
            "Publication Date",
            "Publication Link",
            "Publication Type",
        ],
    },
    {
        ReportId: 5,
        TemplatePath: path.join(__dirname, "../Templates/SampleFormat-5.xlsx"),
        Title: "Service History",
        SubCategories: [
            "Committiee Membership",
            "Staff Appointment",
            "Club Patronage",
        ],
    },
    // {
    //     Title: "Faculty Complete Profile",
    //     SubCategories: []
    // },
    // {
    //     Title: "Faculty Publications",
    //     SubCategories: []
    // },
    // {
    //     Title: "Faculty Yearly Review",
    //     SubCategories: []
    // },
    // {
    //     Title: "Faculty Services",
    //     SubCategories: []
    // },
    // {
    //     Title: "Faculty Courses",
    //     SubCategories: []
    // }
];

module.exports = { REPORT_TYPES };
