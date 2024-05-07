import { useState } from "react";
import { CustomSelect } from "../../../../../../../components/CustomSelect";



export const StaffAppointmentEdit = ({
    staffAppointmentDetails,
    termToState,
    setTermToState,
    termFromState,
    setTermFromState
}) => {

    const [termsList, setTermsList] = useState([
        "Spring 2023",
        "Fall 2023",
        "Spring 2022",
        "Fall 2022",
        "Spring 2021",
        "Fall 2021",
        "Spring 2020",
        "Fall 2020",
        "Spring 2019",
        "Fall 2019",
        "Spring 2018",
        "Fall 2018",
        "Spring 2017",
        "Fall 2017"
    ]);


    return (

        <div>

            <div className="personal_details_input_wrapper">

                <label htmlFor="">
                    Designation:
                </label>

                <input
                    id="staff_appointment_designation"
                    defaultValue={staffAppointmentDetails.Designation}
                    key={staffAppointmentDetails.Designation}
                    type="text"
                />

            </div>

            <div className="personal_details_input_wrapper">

                <label htmlFor="">
                    Term (From):
                </label>

                <div id="custom_semester_select_under_tab">

                    <CustomSelect
                        placeHolderText={"e.g Fall 2023"}
                        methodIconClass={"fa-solid fa-caret-down"}
                        optionsList={termsList}
                        setInputValue={setTermFromState}
                        inputValue={termFromState}
                    />

                </div>



            </div>

            <div className="personal_details_input_wrapper">

                <label htmlFor="">
                    Term (To):
                </label>

                <div id="custom_semester_select_under_tab">

                    <CustomSelect
                        placeHolderText={"e.g Fall 2024"}
                        methodIconClass={"fa-solid fa-caret-down"}
                        optionsList={termsList}
                        setInputValue={setTermToState}
                        inputValue={termToState}
                    />

                </div>



            </div>

           

        </div>

    );

}