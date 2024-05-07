import { useEffect, useState } from "react";
import { InstructorDegree } from "./InstructorDegree";
import { InstructorDegreeEdit } from "./InstructorDegreeEdit";
import { useParams } from "react-router-dom";

export const EducationalBackground = () => {
    const [degreeListState, setDegreeListState] = useState([]);
    const [selectedDegree, setSelectedDegree] = useState();
    const [selectedDegreeIndex, setSelectedDegreeIndex] = useState();
    const [allowPublic, setAllowPublic] = useState(true);

    const { id } = useParams();
    const fetchDegreeList = async () => {
        // Fetch degreeList from the API
        const response = await fetch(
            import.meta.env.VITE_API_URL + "/api/educational-background/" + id
        );
        const data = await response.json();
        setDegreeListState(data.Data);
    };

    useEffect(() => {
        fetchDegreeList();
    }, [selectedDegree]);

    const handleUpdateDegreeDetails = async () => {
        const degreeTitle = document.getElementById("degree_title").value;
        const specialization = document.getElementById("specialization").value;
        const university = document.getElementById("university").value;
        const universityCountry =
            document.getElementById("university_country").value;
        const graduationDate = document.getElementById("graduation_date").value;

        // if (selectedDegreeIndex || selectedDegreeIndex == 0) {
        //     const degreeListStateCopy = degreeListState;

        //     degreeListStateCopy[selectedDegreeIndex] = {
        //         DegreeTitle: degreeTitle,
        //         Specialization: specialization,
        //         University: university,
        //         UniversityCountry: universityCountry,
        //         GraduationDate: graduationDate,
        //     };

        //     setDegreeListState(degreeListStateCopy);
        // } else {
        //     setDegreeListState([
        //         ...degreeListState,
        //         {
        //             DegreeTitle: degreeTitle,
        //             Specialization: specialization,
        //             University: university,
        //             UniversityCountry: universityCountry,
        //             GraduationDate: graduationDate,
        //         },
        //     ]);
        // }

        const response = await fetch(
            import.meta.env.VITE_API_URL + "/api/educational-background",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    degreeTitle: degreeTitle,
                    specialization: specialization,
                    university: university,
                    countryOfUniversity: universityCountry,
                    dateOfGraduation: graduationDate,
                    educationalBackgroundId: selectedDegreeIndex,
                }),
            }
        );

        if (!response.ok) {
            alert("Failed to update degree details");
        }

        setSelectedDegree();
        setSelectedDegreeIndex();
    };

    const handleDelete = async (index) => {
        // // Create a copy of degreeListState
        // const degreeListStateCopy = [...degreeListState];
        // // Remove the item at the specified index
        // degreeListStateCopy.splice(index, 1);
        // // Update the state with the modified copy
        // setDegreeListState(degreeListStateCopy);

        const response = await fetch(
            import.meta.env.VITE_API_URL + "/api/educational-background/" + index,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            alert("Failed to delete degree details");
        }

        fetchDegreeList();

        setSelectedDegree();
        setSelectedDegreeIndex();
    };

    const handleAddDegree = async () => {
        const degreeTitle = document.getElementById("degree_title").value;
        const specialization = document.getElementById("specialization").value;
        const university = document.getElementById("university").value;
        const universityCountry =
            document.getElementById("university_country").value;
        const graduationDate = document.getElementById("graduation_date").value;

        const response = await fetch(
            import.meta.env.VITE_API_URL + "/api/educational-background",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: id,
                    degreeTitle: degreeTitle,
                    specialization: specialization,
                    university: university,
                    countryOfUniversity: universityCountry,
                    dateOfGraduation: graduationDate,
                }),
            }
        );

        if (!response.ok) {
            alert("Failed to add degree details");
        }

        setSelectedDegree();
        setSelectedDegreeIndex();
    };

    return (
        <div key={degreeListState}>
            {!selectedDegree &&
                degreeListState.map((item, index) => (
                    <InstructorDegree
                        key={index}
                        instructorDegreeDetails={item}
                        setSelectedDegree={setSelectedDegree}
                        index={item.EducationalBackgroundId}
                        handleDelete={handleDelete}
                        setSelectedDegreeIndex={setSelectedDegreeIndex}
                    />
                ))}

            {selectedDegree && (
                <InstructorDegreeEdit
                    instructorDegreeDetails={selectedDegree}
                />
            )}

            <div className="personal_details_edit_wrapper">
                {selectedDegree ? (
                    <>
                        {/* <button
                            title={
                                allowPublic
                                    ? "Hide publicaly"
                                    : "Allow publicaly"
                            }
                            style={
                                !allowPublic
                                    ? { background: "white" }
                                    : { background: "rgba(217, 217, 217, 0.5)" }
                            }
                            onClick={(e) => setAllowPublic(!allowPublic)}
                            className="personal_details_edit"
                        >
                            <i
                                className={
                                    allowPublic
                                        ? "fa-solid fa-eye"
                                        : "fa-solid fa-eye-slash"
                                }
                            ></i>
                        </button> */}

                        <button
                            onClick={(e) => setSelectedDegree()}
                            className="personal_details_edit"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <button
                            onClick={
                                selectedDegree.true
                                    ? handleAddDegree
                                    : handleUpdateDegreeDetails
                            }
                            className="personal_details_edit"
                        >
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </>
                ) : (
                    <button
                        onClick={(e) =>
                            setSelectedDegree({
                                true: true,
                            })
                        }
                        className="personal_details_edit"
                    >
                        <i className="fa-solid fa-add"></i>
                    </button>
                )}
            </div>
        </div>
    );
};
