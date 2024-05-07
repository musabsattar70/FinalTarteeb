import { useState } from "react";
import { CustomSelect } from "../../../../components/CustomSelect";
import { ServiceHistoryInformationTabs } from "./ServiceHistoryInformationTabs/Index";


export const ServiceHistory = () => {

    const [semester, setSemester] = useState();
    const [semestersList, setSemestersList] = useState([
        "Fall 2023",
        "Summer 2023",
        "Spring 2023",
        "Fall 2022",
        "Summer 2022",
        "Spring 2022",
        "Fall 2021",
        "Summer 2021",
        "Spring 2021"
    ]);

    return (

        <div>

            {/* <div className="personal_details_input_wrapper">

                <label htmlFor="">
                    Semester:
                </label>

                <div id="custom_semester_select_under_tab">

                    <CustomSelect
                        placeHolderText={"e.g Fall 2023"}
                        methodIconClass={"fa-solid fa-caret-down"}
                        optionsList={semestersList}
                        setInputValue={setSemester}
                        inputValue={semester}
                    />

                </div>



            </div> */}

            <ServiceHistoryInformationTabs />

        </div>

    );

}