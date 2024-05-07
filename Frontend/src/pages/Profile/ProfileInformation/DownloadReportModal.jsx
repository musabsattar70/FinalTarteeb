import { useState } from "react";
import { useParams } from "react-router-dom";

export const DownloadReportModal = ({ setModalStatus }) => {
    const [choosenTabs, setChoosenTabs] = useState([]);

    const { id } = useParams();

    console.log(id);

    const tabsList = [
        "Personal Details",
        "Educational Background",
        "History at HU",
        "Service History",
        "Research and Scholarship History",
    ];

    const handleCloseModal = () => {
        const modelElement = document.getElementById("downloadReportModal");

        modelElement.style.animation = "modelSlideOut 200ms ease-in-out";

        setTimeout(() => {
            setModalStatus(false);
            modelElement.style.animation = "modelSlideIn 200ms ease-in-out";
        }, 180);
    };

    return (
        <>
            <div
                className="downloadReportModalBlur"
                onClick={handleCloseModal}
            ></div>

            <div id="downloadReportModal" className="downloadReportModal">
                <div className="downloadReportModal_header">
                    <h2>Download Report</h2>
                    <i
                        className="fa-solid fa-x closeModalIcon"
                        onClick={handleCloseModal}
                    ></i>
                </div>

                <div className="downloadReportModal_body">
                    {tabsList.map((tab) => (
                        <div class="downloadReportModal_Checks">
                            <label
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (choosenTabs.includes(tab)) {
                                        setChoosenTabs(
                                            choosenTabs.filter(
                                                (tabs) => tab !== tabs
                                            )
                                        );
                                    } else {
                                        setChoosenTabs([...choosenTabs, tab]);
                                    }
                                }}
                            >
                                {choosenTabs.includes(tab) ? (
                                    <span
                                        key={tab}
                                        className="downloadReportModal_CheckFilled"
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                ) : (
                                    <span className="downloadReportModal_CheckEmpty">
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                )}

                                <span>{tab}</span>
                            </label>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => {
                        // Create a dummy anchor element
                        var downloadLink = document.createElement("a");
                        // Set the href attribute to the file you want to download
                        downloadLink.href = "../../assets/HuLogo.png";
                        // Set the download attribute to specify the filename
                        downloadLink.download = "temp.png";
                        // Append the anchor element to the document body
                        document.body.appendChild(downloadLink);
                        // Trigger the click event on the anchor element
                        downloadLink.click();
                        // Remove the anchor element from the document body
                        document.body.removeChild(downloadLink);
                    }}
                    className="downloadReportButtonProfile float_side_download_button"
                >
                    Resume (PDF) <i className="fa-solid fa-download"></i>
                </button>
            </div>
        </>
    );
};
