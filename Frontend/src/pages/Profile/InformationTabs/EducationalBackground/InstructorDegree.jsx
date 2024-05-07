export const InstructorDegree = ({
    instructorDegreeDetails,
    setSelectedDegree,
    index,
    setSelectedDegreeIndex,
    handleDelete,
}) => {
    return (
        <div className="instructor_degree">
            <span>
                <b>{instructorDegreeDetails.DegreeTitle}</b> in{" "}
                <b>{instructorDegreeDetails.Specialization}</b> on{" "}
                <b>{instructorDegreeDetails.DateOfGraduation?.slice(0, 10)}</b>
            </span>
            <span>
                <b>
                    {instructorDegreeDetails.University},{" "}
                    {instructorDegreeDetails.CountryOfUniversity}
                </b>
            </span>

            <i className="fa-solid fa-graduation-cap instructor_degree_icon"></i>
            <i
                className="fa-solid fa-pen instructor_degree_edit_icon"
                onClick={(e) => {
                    setSelectedDegree(instructorDegreeDetails);
                    setSelectedDegreeIndex(
                        instructorDegreeDetails.EducationalBackgroundId
                    );
                }}
            ></i>
            <i
                className="fa-solid fa-trash instructor_degree_trash_icon"
                onClick={(e) => {
                    handleDelete(
                        instructorDegreeDetails.EducationalBackgroundId
                    );
                }}
            ></i>
        </div>
    );
};
