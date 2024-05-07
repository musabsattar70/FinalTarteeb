import { useEffect, useState } from "react";
import { CustomSelect } from "../../../../components/CustomSelect";
import { useParams } from "react-router-dom";

export const PersonalDetails = () => {
    const [isEdit, setIsEdit] = useState();
    const [instructorPersonalDetailsState, setInstructorPersonalDetailsState] =
        useState({});
    const [gendersList, setGendersList] = useState(["Male", "Female", "Other"]);
    const [genderState, setGenderState] = useState("Male");
    const [program, setProgram] = useState("CS");
    const [school, setSchool] = useState("DSSE");
    const [facultyType, setFacultyType] = useState("Full-Time");

    const handleUpdatePersonalDetails = async () => {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dateOfBirth = document.getElementById("date_of_birth").value;
        // const designation = document.getElementById("designation").value;
        const cnic = document.getElementById("cnic").value;
        const pec = document.getElementById("pec").value;
        const phoneNumber = document.getElementById("phone_number").value;
        const joiningDate = document.getElementById("joining_date").value;
        const nationality = document.getElementById("nationality").value;

        console.log({
            userId: id,
            firstName: firstName,
            lastName: lastName,
            nationality: nationality,
            cnic: cnic,
            pecNo: pec,
            phoneNumber: phoneNumber,
            joiningDate: joiningDate,
            facultyType: facultyType,
            school: school,
            program: program,
            gender: genderState,
            dateOfBirth: dateOfBirth,
        });

        const response = await fetch(
            `http://localhost:7075/api/admin/UpdateAdminInfo/`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: id,
                    firstName: firstName,
                    lastName: lastName,
                    nationality: nationality,
                    cnic: cnic,
                    pecNo: pec,
                    phoneNumber: phoneNumber,
                    joiningDate: joiningDate,
                    facultyType: facultyType,
                    school: school,
                    program: program,
                    gender: genderState,
                    dateOfBirth: dateOfBirth,
                }),
            }
        );

        if (!response.ok) {
            return alert("Error updating personal details!");
        }

        setIsEdit(false);
    };

    const { id } = useParams();

    useEffect(() => {
        const fetchInstructorProfileInformation = async () => {
            const response = await fetch(
                `http://localhost:7075/api/admin/GetAdminInfo/${id}`
            );
            if (!response.ok) {
                return alert("Error fetching instructor profile information!");
            }
            const data = await response.json();
            setInstructorPersonalDetailsState(data.Data);

            setGenderState(data.Data.Gender);
            setProgram(data.Data.Program);
            setSchool(data.Data.School);
            setFacultyType(data.Data.FacultyType);

        };
        fetchInstructorProfileInformation();
    }, [isEdit]);

    return (
        <div>
            <div className="personal_details_input_wrapper">
                <label htmlFor="">First Name:</label>

                {isEdit ? (
                    <input
                        id="firstName"
                        defaultValue={instructorPersonalDetailsState.FirstName}
                        key={instructorPersonalDetailsState.FirstName}
                        type="text"
                    />
                ) : (
                    <p>{instructorPersonalDetailsState.FirstName}</p>
                )}
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Last Name:</label>

                {isEdit ? (
                    <input
                        id="lastName"
                        defaultValue={instructorPersonalDetailsState.LastName}
                        key={instructorPersonalDetailsState.LastName}
                        type="text"
                    />
                ) : (
                    <p>{instructorPersonalDetailsState.LastName}</p>
                )}
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Date of Birth:</label>

                {isEdit ? (
                    <input
                        id="date_of_birth"
                        defaultValue={instructorPersonalDetailsState.DateOfBirth?.slice(
                            0,
                            10
                        )}
                        key={instructorPersonalDetailsState.DateOfBirth}
                        type="date"
                    />
                ) : (
                    <p>
                        {instructorPersonalDetailsState.DateOfBirth?.slice(
                            0,
                            10
                        )}
                    </p>
                )}
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Gender:</label>
                {isEdit ? (
                    <div id="custom_semester_select_under_tab">
                        <CustomSelect
                            placeHolderText={"e.g Male"}
                            methodIconClass={"fa-solid fa-caret-down"}
                            optionsList={gendersList}
                            setInputValue={setGenderState}
                            inputValue={genderState}
                        />
                    </div>
                ) : (
                    <p>{instructorPersonalDetailsState.Gender}</p>
                )}
            </div>

            {/* <div className="personal_details_input_wrapper">
                <label htmlFor="">Designation:</label>

                {isEdit ? (
                    <input
                        id="designation"
                        defaultValue={
                            instructorPersonalDetailsState.Designation
                        }
                        key={instructorPersonalDetailsState.Designation}
                        type="text"
                    />
                ) : (
                    <p>{instructorPersonalDetailsState.Designation}</p>
                )}
            </div> */}

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Nationality:</label>

                {isEdit ? (
                    <input
                        id="nationality"
                        defaultValue={
                            instructorPersonalDetailsState.Nationality
                        }
                        key={instructorPersonalDetailsState.Nationality}
                        type="text"
                    />
                ) : (
                    <p>{instructorPersonalDetailsState.Nationality}</p>
                )}
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">CNIC:</label>

                {isEdit ? (
                    <input
                        id="cnic"
                        defaultValue={instructorPersonalDetailsState.CNIC}
                        key={instructorPersonalDetailsState.CNIC}
                        type="text"
                    />
                ) : (
                    <p>{instructorPersonalDetailsState.CNIC}</p>
                )}
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">PEC:</label>

                {isEdit ? (
                    <input
                        id="pec"
                        defaultValue={instructorPersonalDetailsState.PECNo}
                        key={instructorPersonalDetailsState.PECNo}
                        type="text"
                    />
                ) : (
                    <p>{instructorPersonalDetailsState.PECNo}</p>
                )}
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Phone Number:</label>

                {isEdit ? (
                    <input
                        id="phone_number"
                        defaultValue={
                            instructorPersonalDetailsState.PhoneNumber
                        }
                        key={instructorPersonalDetailsState.PhoneNumber}
                        type="text"
                    />
                ) : (
                    <p>{instructorPersonalDetailsState.PhoneNumber}</p>
                )}
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Joining Date:</label>

                {isEdit ? (
                    <input
                        id="joining_date"
                        defaultValue={instructorPersonalDetailsState.JoiningDate?.slice(
                            0,
                            10
                        )}
                        key={instructorPersonalDetailsState.JoiningDate}
                        type="date"
                    />
                ) : (
                    <p>
                        {instructorPersonalDetailsState.JoiningDate?.slice(
                            0,
                            10
                        )}
                    </p>
                )}
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Faculty Type:</label>

                {isEdit ? (
                    <div id="custom_semester_select_under_tab">
                        <CustomSelect
                            placeHolderText={"e.g Male"}
                            methodIconClass={"fa-solid fa-caret-down"}
                            optionsList={["Full-Time", "Visiting", "On-Leave"]}
                            setInputValue={setFacultyType}
                            inputValue={
                               facultyType
                            }
                        />
                    </div>
                ) : (
                    <p>{instructorPersonalDetailsState.FacultyType}</p>
                )}
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">School:</label>
                {isEdit ? (
                    <div id="custom_semester_select_under_tab">
                        <CustomSelect
                            placeHolderText={"e.g Male"}
                            methodIconClass={"fa-solid fa-caret-down"}
                            optionsList={["DSSE", "AHSS"]}
                            setInputValue={setSchool}
                            inputValue={school}
                        />
                    </div>
                ) : (
                    <p>{instructorPersonalDetailsState.School}</p>
                )}
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Program:</label>
                {isEdit ? (
                    <div id="custom_semester_select_under_tab">
                        <CustomSelect
                            placeHolderText={"e.g Male"}
                            methodIconClass={"fa-solid fa-caret-down"}
                            optionsList={["CS", "CE", "EE", "CND", "SDP", "CH"]}
                            setInputValue={setProgram}
                            inputValue={program}
                        />
                    </div>
                ) : (
                    <p>{instructorPersonalDetailsState.Program}</p>
                )}
            </div>

            <div className="personal_details_edit_wrapper">
                {isEdit ? (
                    <>
                        <button
                            onClick={(e) => setIsEdit(false)}
                            className="personal_details_edit"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <button
                            onClick={handleUpdatePersonalDetails}
                            className="personal_details_edit"
                        >
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </>
                ) : (
                    <button
                        onClick={(e) => setIsEdit(true)}
                        className="personal_details_edit"
                    >
                        <i className="fa-solid fa-pen"></i>
                    </button>
                )}
            </div>
        </div>
    );
};
