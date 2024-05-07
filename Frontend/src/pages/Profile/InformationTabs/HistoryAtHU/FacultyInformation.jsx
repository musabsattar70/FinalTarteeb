import { useState } from "react";


export const FacultyInformation = () => {

    const facultyInformation = {
        "FacultyProgram": "CS",
        "JoiningDate": "2015-03-10"
    }

    const [isEdit, setIsEdit] = useState();

    const [facultyInformationState, setFacultyInformationState] = useState(facultyInformation)

    const handleUpdateFacultyInformation = () => {

        const facultyProgram = document.getElementById("faculty_program").value;
        const joiningDate = document.getElementById("joining_date").value;

        setFacultyInformationState({
            "FacultyProgram": facultyProgram,
            "JoiningDate": joiningDate
        })

        setIsEdit(false)

    }

    return (

        <div>


            <div className="personal_details_input_wrapper">

                <label htmlFor="">
                    Faculty Program:
                </label>

                {isEdit ?
                    <input
                        id="faculty_program"
                        defaultValue={facultyInformationState.FacultyProgram}
                        key={facultyInformationState.FacultyProgram}
                        type="text"
                    /> :
                    <p>{facultyInformationState.FacultyProgram}</p>
                }


            </div>

            <div className="personal_details_input_wrapper">

                <label htmlFor="">
                    Joining Date:
                </label>

                {isEdit ?
                    <input
                        id="joining_date"
                        defaultValue={facultyInformationState.JoiningDate}
                        key={facultyInformationState.JoiningDate}
                        type="date"
                    /> :
                    <p>{facultyInformationState.JoiningDate}</p>
                }


            </div>


            <div className="personal_details_edit_wrapper">

                {isEdit ?
                    <>
                        <button
                            onClick={e => setIsEdit(false)}
                            className="personal_details_edit"
                        >
                            <i
                                className="fa-solid fa-xmark"
                            ></i>
                        </button>

                        <button
                            onClick={handleUpdateFacultyInformation}
                            className="personal_details_edit"
                        >
                            <i
                                className="fa-solid fa-check"
                            ></i>
                        </button>
                    </> :
                    <button
                        onClick={e => setIsEdit(true)}
                        className="personal_details_edit"
                    >
                        <i

                            className="fa-solid fa-pen"
                        ></i>
                    </button>}

            </div>


        </div>

    );

}