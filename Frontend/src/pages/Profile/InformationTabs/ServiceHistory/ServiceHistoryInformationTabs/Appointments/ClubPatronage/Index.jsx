import { useEffect, useState } from "react";
import { ClubEdit } from "./ClubEdit";
import { Club } from "./Club";
import { useParams } from "react-router-dom";

export const ClubPatronage = () => {
    const clubList = [
        {
            Name: "Computer Science Club",
            TermFrom: "Fall 2022",
            TermTo: "Spring 2023",
        },
        {
            Name: "Art and Design Society",
            TermFrom: "Fall 2022",
            TermTo: "Spring 2023",
        },
        {
            Name: "Environmental Awareness Club",
            TermFrom: "Fall 2022",
            TermTo: "Spring 2023",
        },
        {
            Name: "Literary Magazine Committee",
            TermFrom: "Fall 2022",
            TermTo: "Spring 2023",
        },
        {
            Name: "Mathematics Enthusiasts Club",
            TermFrom: "Fall 2022",
            TermTo: "Spring 2023",
        },
    ];

    const [clubListState, setClubListState] = useState([]);
    const [selectedClub, setSelectedClub] = useState();
    const [selectedClubIndex, setSelectedClubIndex] = useState();
    const [termFromState, setTermFromState] = useState();
    const [termToState, setTermToState] = useState();
    const [allowPublic, setAllowPublic] = useState(true);

    const { id } = useParams();

    const fetchClubPatronage = async () => {
        const response = await fetch(
            "http://localhost:7075/api/club-patronage/" + id
        );
        const data = await response.json();
        setClubListState(data.Data);
    };

    useEffect(() => {
        fetchClubPatronage();
    }, []);

    const handleAddStaffAppointment = async () => {
        const clubName = document.getElementById("club_name").value;

        // const staffAppointmentTerm = document.getElementById("staff_appointment_term").value;

        const response = await fetch(
            "http://localhost:7075/api/club-patronage/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: id,
                    clubName: clubName,
                    termFrom: termFromState,
                    termTo: termToState,
                }),
            }
        );

        if (!response.ok) {
            alert("Error adding club patronage details");
        }

        fetchClubPatronage();

        setSelectedClub();
        setSelectedClubIndex();
        setTermFromState();
        setTermToState();
    };

    const handleUpdateClubDetails = async () => {
        const clubName = document.getElementById("club_name").value;

        // const staffAppointmentTerm = document.getElementById("staff_appointment_term").value;

        const response = await fetch(
            "http://localhost:7075/api/club-patronage/",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clubPatronageId: selectedClub.ClubPatronageId,
                    clubName: clubName,
                    termFrom: termFromState,
                    termTo: termToState,
                }),
            }
        );

        if (!response.ok) {
            alert("Error updating club patronage details");
        }

        fetchClubPatronage();

        setSelectedClub();
        setSelectedClubIndex();
        setTermFromState();
        setTermToState();
    };

    const handleDelete = async (index) => {
        const response = await fetch(
            "http://localhost:7075/api/club-patronage/" + index,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            alert("Error deleting club patronage details");
        }

        fetchClubPatronage();
    };

    // const handleDelete = (index) => {
    //     // Create a copy of statelist
    //     const stateCopy = [...clubListState];
    //     // Remove the item at the specified index
    //     stateCopy.splice(index, 1);
    //     // Update the state with the modified copy
    //     setClubListState(stateCopy);
    // };

    return (
        <div>
            <div>
                {!selectedClub &&
                    clubListState.map((item, index) => (
                        <Club
                            key={index}
                            clubDetails={item}
                            setSelectedClub={setSelectedClub}
                            index={index}
                            handleDelete={handleDelete}
                            setSelectedClubIndex={setSelectedClubIndex}
                            setTermFromState={setTermFromState}
                            setTermToState={setTermToState}
                        />
                    ))}

                {selectedClub && (
                    <ClubEdit
                        clubDetails={selectedClub}
                        termFromState={termFromState}
                        setTermFromState={setTermFromState}
                        termToState={termToState}
                        setTermToState={setTermToState}
                    />
                )}

                <div className="personal_details_edit_wrapper">
                    {selectedClub ? (
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
                                        : {
                                              background:
                                                  "rgba(217, 217, 217, 0.5)",
                                          }
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
                                onClick={(e) => {
                                    setSelectedClub();
                                    setSelectedClubIndex();
                                    setTermToState();
                                    setTermFromState();
                                }}
                                className="personal_details_edit"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>

                            <button
                                onClick={
                                    selectedClub?.true
                                        ? handleAddStaffAppointment
                                        : handleUpdateClubDetails
                                }
                                className="personal_details_edit"
                            >
                                <i className="fa-solid fa-check"></i>
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={(e) =>
                                setSelectedClub({
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
        </div>
    );
};
