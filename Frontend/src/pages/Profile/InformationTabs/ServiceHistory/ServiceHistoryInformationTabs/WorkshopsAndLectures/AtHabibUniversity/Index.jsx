import { useEffect, useState } from "react";
import { Workshop } from "./Workshop";
import { WorkshopEdit } from "./WorkshopEdit";
import { useParams } from "react-router-dom";

export const AtHabibUniversity = () => {
    const workshipList = [
        {
            Title: "Digital Skills Workshop",
            Date: "2023-06-05",
            ShortDescription:
                "Empower yourself with essential digital skills! Join our workshop to learn about basic computer literacy, online safety, and using productivity tools for everyday tasks.",
        },
        {
            Title: "Art Therapy Session",
            Date: "2023-07-12",
            ShortDescription:
                "Express yourself through art! Attend our therapeutic art session, where participants can explore creativity, relieve stress, and connect with others in a supportive environment.",
        },
        {
            Title: "Financial Literacy Seminar",
            Date: "2023-08-18",
            ShortDescription:
                "Take control of your finances! Join our seminar to gain valuable insights into budgeting, saving, and investing. Learn practical tips for financial success and independence.",
        },
        {
            Title: "Mindfulness Meditation Workshop",
            Date: "2023-09-25",
            ShortDescription:
                "Find inner peace and tranquility. Our mindfulness meditation workshop offers guided meditation sessions, breathing exercises, and mindfulness practices to enhance your overall well-being.",
        },
        {
            Title: "Career Development Bootcamp",
            Date: "2023-10-15",
            ShortDescription:
                "Invest in your professional growth! Attend our career development bootcamp to gain insights into resume building, job search strategies, and effective interview techniques.",
        },
    ];

    const [workshopListState, setWorkshopListState] = useState([]);
    const [selectedWorkshop, setSelectedWorkshop] = useState();
    const [selectedWorkshopIndex, setSelectedWorkshopIndex] = useState();
    const [allowPublic, setAllowPublic] = useState(true);

    const { id } = useParams();

    const fetchWorkshops = async () => {
        const response = await fetch(
            `http://localhost:7075/api/workshop/${id}`
        );
        const data = await response.json();
        setWorkshopListState(
            data.Data?.filter((item) => item.Location == "Habib University")
        );
    };

    useEffect(() => {
        fetchWorkshops();
    }, []);

    const handleAddWorkshop = async () => {
        const workshopTitle = document.getElementById("workshop_title").value;
        const workshopDate = document.getElementById("workshop_date").value;
        const shortDescription =
            document.getElementById("short_description").value;

        const response = await fetch(`http://localhost:7075/api/workshop/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                userId: id,
                title: workshopTitle,
                date: workshopDate,
                description: shortDescription,
                location: "Habib University",
            }),
        });

        if (!response.ok) {
            alert("Failed to add workshop");
            return;
        }

        fetchWorkshops();

        setSelectedWorkshop();
        setSelectedWorkshopIndex();
    };

    const handleUpdateWorkshopDetails = async () => {
        const workshopTitle = document.getElementById("workshop_title").value;
        const workshopDate = document.getElementById("workshop_date").value;
        const shortDescription =
            document.getElementById("short_description").value;

        const response = await fetch(`http://localhost:7075/api/workshop/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                workshopId: selectedWorkshop?.WorkshopId,
                title: workshopTitle,
                date: workshopDate,
                description: shortDescription,
                location: "Habib University",
            }),
        });

        if (!response.ok) {
            alert("Failed to update workshop");
            return;
        }

        fetchWorkshops();

        // if (selectedWorkshopIndex || selectedWorkshopIndex == 0) {
        //     const workshopListStateCopy = workshopListState;

        //     workshopListStateCopy[selectedWorkshopIndex] = {
        //         Title: workshopTitle,
        //         Date: workshopDate,
        //         ShortDescription: shortDescription,
        //     };

        //     setWorkshopListState(workshopListStateCopy);
        // } else {
        //     setWorkshopListState([
        //         ...workshopListState,
        //         {
        //             Title: workshopTitle,
        //             Date: workshopDate,
        //             ShortDescription: shortDescription,
        //         },
        //     ]);
        // }

        setSelectedWorkshop();
        setSelectedWorkshopIndex();
    };

    const handleDelete = async (index) => {
        // // Create a copy of statelist
        // const stateCopy = [...workshopListState];
        // // Remove the item at the specified index
        // stateCopy.splice(index, 1);
        // // Update the state with the modified copy
        // setWorkshopListState(stateCopy);

        const response = await fetch(
            `http://localhost:7075/api/workshop/${index}`,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            alert("Failed to delete workshop");
            return;
        }

        fetchWorkshops();
        setSelectedWorkshop();
        setSelectedWorkshopIndex();
    };

    return (
        <div>
            <div>
                {!selectedWorkshop &&
                    workshopListState.map((item, index) => (
                        <Workshop
                            key={index}
                            workshopDetails={item}
                            setSelectedWorkshop={setSelectedWorkshop}
                            index={index}
                            handleDelete={handleDelete}
                            setSelectedWorkshopIndex={setSelectedWorkshopIndex}
                        />
                    ))}

                {selectedWorkshop && (
                    <WorkshopEdit workshopDetails={selectedWorkshop} />
                )}

                <div className="personal_details_edit_wrapper">
                    {selectedWorkshop ? (
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
                                onClick={(e) => setSelectedWorkshop()}
                                className="personal_details_edit"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>

                            <button
                                onClick={
                                    selectedWorkshop?.true
                                        ? handleAddWorkshop
                                        : handleUpdateWorkshopDetails
                                }
                                className="personal_details_edit"
                            >
                                <i className="fa-solid fa-check"></i>
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={(e) =>
                                setSelectedWorkshop({
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
