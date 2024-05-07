
import { useState } from "react";
import { CustomSelect } from "../../../../components/CustomSelect"

export const CourseEdit = ({
    courseDetails,
    semesterState,
    setSemesterState
}) => {

    const [semesterList, setSemesterList] = useState([
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
                    Semester:
                </label>

                <div id="custom_semester_select_under_tab">

                    <CustomSelect
                        placeHolderText={"e.g Fall 2023"}
                        methodIconClass={"fa-solid fa-caret-down"}
                        optionsList={semesterList}
                        setInputValue={setSemesterState}
                        inputValue={semesterState}
                    />

                </div>



            </div>


            <div className="personal_details_input_wrapper">

                <label htmlFor="">
                    Course Code:
                </label>

                <input
                    id="course_code"
                    defaultValue={courseDetails.CourseCode}
                    key={courseDetails.CourseCode}
                    type="text"
                />

            </div>

            <div className="personal_details_input_wrapper">

                <label htmlFor="">
                    Course Name:
                </label>

                <input
                    id="course_name"
                    defaultValue={courseDetails.CourseName}
                    key={courseDetails.CourseName}
                    type="text"
                />

            </div>

            <div className="personal_details_input_wrapper">

                <label htmlFor="">
                    Credit Hours:
                </label>

                <input
                    id="credit_hours"
                    defaultValue={courseDetails.CreditHours}
                    key={courseDetails.CreditHours}
                    type="text"
                />

            </div>

        </div>

    );

}