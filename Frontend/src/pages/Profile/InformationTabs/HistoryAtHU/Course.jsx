

export const Course = ({
    courseDetails,
    setSelectedCourse,
    index,
    setSelectedCourseIndex,
    setSemesterState,
    objKey,
    setObjKey,
    handleDelete
}) => {

    return(

        <div className="instructor_degree">

            
            <span>
                {courseDetails.CourseCode}: <b>{courseDetails.CourseName}</b>
            </span>
            <span>{courseDetails.Semester}</span>
            <span>
                Credit Hours: <b>{courseDetails.CreditHours}</b>
            </span>

            <i className="fa-solid fa-book instructor_degree_icon"></i>
            <i 
                className="fa-solid fa-pen instructor_degree_edit_icon"
                onClick={e => {
                    setSelectedCourse(courseDetails)
                    setSelectedCourseIndex(index)
                    setSemesterState(courseDetails.Semester)
                    setObjKey(objKey);
                }}
            ></i>
            <i 
                className="fa-solid fa-trash instructor_degree_trash_icon"
                onClick={e => {
                    handleDelete(courseDetails.TeachingHistoryId)
                }}
            ></i>


        </div>

    );

}