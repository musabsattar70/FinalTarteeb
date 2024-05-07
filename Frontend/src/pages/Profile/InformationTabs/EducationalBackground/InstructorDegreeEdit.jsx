

export const InstructorDegreeEdit = ({
    instructorDegreeDetails
}) => {

    return (
        <div>
            <div className="personal_details_input_wrapper">
                <label htmlFor="">Degree Title:</label>

                <input
                    id="degree_title"
                    defaultValue={instructorDegreeDetails.DegreeTitle}
                    key={instructorDegreeDetails.DegreeTitle}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Specialization:</label>

                <input
                    id="specialization"
                    defaultValue={instructorDegreeDetails.Specialization}
                    key={instructorDegreeDetails.Specialization}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">University:</label>

                <input
                    id="university"
                    defaultValue={instructorDegreeDetails.University}
                    key={instructorDegreeDetails.University}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Country of University:</label>

                <input
                    id="university_country"
                    defaultValue={instructorDegreeDetails.CountryOfUniversity}
                    key={instructorDegreeDetails.CountryOfUniversity}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Graduation Date:</label>

                <input
                    id="graduation_date"
                    defaultValue={instructorDegreeDetails.DateOfGraduation?.slice(
                        0,
                        10
                    )}
                    key={instructorDegreeDetails.DateOfGraduation?.slice(0, 10)}
                    type="date"
                />
            </div>
        </div>
    );

}