import { Instructor } from "./Instructor";


export const InstructorsList = ({ instructors }) => {
    

    return (
        <div className="instructor_wrapper">
            {instructors.map((item, index) => (
                <>
                    <Instructor instructorDetails={item} key={index} />
                </>
            ))}
            {/* <div className="instructorAddAdmin" title="Add Instructor">
                <i className="fa-solid fa-plus"></i>
            </div> */}
        </div>
    );
};