

export const CourseEdit = ({
    courseDetails
}) => {

    return (

        <div>

            <div className="personal_details_input_wrapper">

                <label htmlFor="">
                    Semester:
                </label>

                <input
                    id="semester"
                    defaultValue={courseDetails.Semester}
                    key={courseDetails.Semester}
                    type="text"
                />

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