import { useEffect, useState } from "react";
import { Grant } from "./Grant";
import { GrantEdit } from "./GrantEdit";
import { useParams } from "react-router-dom";

export const GrantsAvailed = () => {
    const grantsList = [
        {
            Title: "Computer Graphics Fund",
            Source: "Government",
            Reason: "Secured funding to conduct research on innovative techniques in computer graphics, with a focus on real-time rendering and virtual reality applications.",
            Date: "2023-01-15",
        },
        {
            Title: "STEM Education Initiative",
            Source: "NGO",
            Reason: "Received a grant to support a STEM education program aimed at underprivileged students, providing access to quality science, technology, engineering, and mathematics education.",
            Date: "2023-03-22",
        },
        {
            Title: "Innovation Fellowship",
            Source: "University",
            Reason: "Granted an innovation fellowship to pursue a project on the development of sustainable energy solutions using cutting-edge technologies, contributing to the university's research objectives.",
            Date: "2023-05-10",
        },
        {
            Title: "Community Health Project",
            Source: "NGO",
            Reason: "Secured funding for a community health initiative aimed at providing healthcare services and awareness programs to underserved populations, addressing prevalent health issues.",
            Date: "2023-07-18",
        },
        {
            Title: "Self-Funded Research",
            Source: "Self",
            Reason: "Invested personal funds into a research project exploring the intersection of artificial intelligence and environmental sustainability, demonstrating a commitment to self-driven academic pursuits.",
            Date: "2023-09-05",
        },
    ];

    const [grantsListState, setGrantsListState] = useState([]);
    const [selectedGrant, setSelectedGrant] = useState();
    const [selectedGrantIndex, setSelectedGrantIndex] = useState();
    const [allowPublic, setAllowPublic] = useState(true);

    const { id } = useParams();

    const fetchGrantsList = async () => {
        // Fetch grants list from API
        const response = await fetch(
            "http://localhost:7075/api/grants-availed/" + id
        );
        const data = await response.json();
        setGrantsListState(data.Data);
    };

    useEffect(() => {
        fetchGrantsList();
    }, []);

    const handleAddGrant = async () => {
        const grantTitle = document.getElementById("grant_title").value;
        const grantSource = document.getElementById("grant_source").value;
        const grantDate = document.getElementById("grant_date").value;
        const grantReason = document.getElementById("grant_reason").value;

        const response = await fetch(
            "http://localhost:7075/api/grants-availed/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: id,
                    title: grantTitle,
                    source: grantSource,
                    date: grantDate,
                    reason: grantReason,
                }),
            }
        );

        if (!response.ok) {
            alert("Failed to add grant");
            return;
        }

        fetchGrantsList();

        setSelectedGrant();
        setSelectedGrantIndex();
    };

    const handleUpdateGrantDetails = async () => {
        const grantTitle = document.getElementById("grant_title").value;
        const grantSource = document.getElementById("grant_source").value;
        const grantDate = document.getElementById("grant_date").value;
        const grantReason = document.getElementById("grant_reason").value;

        const response = await fetch(
            "http://localhost:7075/api/grants-availed/",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    grantsAvailedId: selectedGrant?.GrantsAvailedId,
                    title: grantTitle,
                    source: grantSource,
                    date: grantDate,
                    reason: grantReason,
                }),
            }
        );

        if (!response.ok) {
            alert("Failed to update grant");
            return;
        }

        fetchGrantsList();

        // if (selectedGrantIndex || selectedGrantIndex == 0) {
        //     const grantsListStateCopy = grantsListState;

        //     grantsListStateCopy[selectedGrantIndex] = {
        //         Title: grantTitle,
        //         Source: grantSource,
        //         Reason: grantReason,
        //         Date: grantDate,
        //     };

        //     setGrantsListState(grantsListStateCopy);
        // } else {
        //     setGrantsListState([
        //         ...grantsListState,
        //         {
        //             Title: grantTitle,
        //             Source: grantSource,
        //             Reason: grantReason,
        //             Date: grantDate,
        //         },
        //     ]);
        // }

        setSelectedGrant();
        setSelectedGrantIndex();
    };

    const handleDelete = async (index) => {
        // // Create a copy of statelist
        // const stateCopy = [...grantsListState];
        // // Remove the item at the specified index
        // stateCopy.splice(index, 1);
        // // Update the state with the modified copy
        // setGrantsListState(stateCopy);

        const response = await fetch(
            "http://localhost:7075/api/grants-availed/" + index,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            alert("Failed to delete grant");
            return;
        }

        fetchGrantsList();
        setSelectedGrant();
        setSelectedGrantIndex();
    };

    return (
        <div>
            <div>
                {!selectedGrant &&
                    grantsListState.map((item, index) => (
                        <Grant
                            key={index}
                            grantDetails={item}
                            setSelectedGrant={setSelectedGrant}
                            index={index}
                            handleDelete={handleDelete}
                            setSelectedGrantIndex={setSelectedGrantIndex}
                        />
                    ))}

                {selectedGrant && <GrantEdit grantDetails={selectedGrant} />}

                <div className="personal_details_edit_wrapper">
                    {selectedGrant ? (
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
                                onClick={(e) => setSelectedGrant()}
                                className="personal_details_edit"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>

                            <button
                                onClick={
                                    selectedGrant?.true
                                        ? handleAddGrant
                                        : handleUpdateGrantDetails
                                }
                                className="personal_details_edit"
                            >
                                <i className="fa-solid fa-check"></i>
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={(e) =>
                                setSelectedGrant({
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
