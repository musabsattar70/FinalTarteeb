import { useState } from "react";
import { Header } from "../../components/Header";
import { InstructorsList } from "./InstructorList/Index";
import { ReportsOptions } from "./ReportsOptions/Index";
import { API_ROUTES_REPORTS } from "../../constants/ApiRoutes";
import { useNavigate } from "react-router-dom";

export const Reports = () => {
    const [selectedInstructors, setSelectedInstructors] = useState([]);

    const navigator = useNavigate();
    if (!localStorage.getItem("token")) {
        window.location.href = "/login";
    }

    const printTabOptions = [
        {
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
            Title: "List the Faculty Members",
            SubCategories: [
                "Name",
                "Degree Level",
                "Current Semester Loading Fall 2023",
                "Last Semester Loading Spring 2023",
            ],
        },
        {
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
            Title: "Service History",
            SubCategories: [
                "Committiee Membership",
                "Staff Appointment",
                "Club Patronage",
            ],
        },
    ];

    const [selectedPrintOptions, setSelectedPrintOptions] = useState([]);

    const GenerateReports = async () => {
        selectedPrintOptions.forEach(async (option) => {
            const _body = {
                Instructors: selectedInstructors.map((item) => item.ID),
                ReportType: option,
            };

            try {
                const response = await fetch(
                    API_ROUTES_REPORTS.BASE_URL +
                        API_ROUTES_REPORTS.GENERATE_REPORT,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(_body),
                    }
                );

                if (!response.ok) {
                    alert(response.statusText);
                } else {
                    // Extracting filename from content-disposition header if available
                    const contentDisposition = await response.headers.get(
                        "content-disposition"
                    );

                    let filename = "report.xlsx";

                    if (contentDisposition) {
                        filename = contentDisposition.split('filename="')[1];
                        filename = filename.split('"')[0];
                    }

                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", filename);
                    document.body.appendChild(link);
                    link.click();

                    // Cleanup: remove the link and revoke the URL
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        });
    };

    const downloadExcelFile = async () => {
        try {
            const response = await axios.post(
                "http://example.com/api/data",
                { key: "value" },
                { responseType: "blob" }
            );

            // Create a Blob from the response data
            const blob = new Blob([response.data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });

            // Create a URL for the Blob
            const url = window.URL.createObjectURL(blob);

            // Create a link and click it to trigger download
            const link = document.createElement("a");
            link.href = url;
            link.download = "data.xlsx";
            document.body.appendChild(link);
            link.click();

            // Cleanup: remove the link and revoke the URL
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <section className="homepage_section">
            <Header />

            <main>
                <h1 className="GenerateReportsHeading">Generate Reports</h1>

                <div className="GenerateReportsContent">
                    <ReportsOptions
                        selectedPrintOptions={selectedPrintOptions}
                        setSelectedPrintOptions={setSelectedPrintOptions}
                        printTabOptions={printTabOptions}
                    />
                    <InstructorsList
                        selectedInstructors={selectedInstructors}
                        setSelectedInstructors={setSelectedInstructors}
                    />
                </div>

                <div className="GenerateReportsButton">
                    <button onClick={GenerateReports}>
                        Generate Reports
                        <i className="fa-solid fa-download"></i>
                    </button>
                </div>
            </main>
        </section>
    );
};
