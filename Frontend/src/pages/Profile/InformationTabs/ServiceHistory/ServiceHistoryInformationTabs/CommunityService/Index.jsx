import { useEffect, useState } from "react";
import { Service } from "./Service";
import { ServiceEdit } from "./ServiceEdit";
import { useParams } from "react-router-dom";

export const CommunityService = () => {
    const services = [
        {
            Name: "Community Clean-Up Day",
            Date: "2023-03-25",
            ShortDescription:
                "Join us in beautifying our neighborhood! Volunteers will gather at the local park to clean up litter, plant flowers, and contribute to a cleaner, more vibrant community.",
        },
        {
            Name: "Senior Wellness Workshop",
            Date: "2023-05-10",
            ShortDescription:
                "A day of health and wellness for seniors! This workshop at our local community center aims to enhance the well-being of our senior community members. Participants will enjoy informative sessions on nutrition, gentle exercises, and mindfulness techniques.",
        },
        {
            Name: "Food Drive",
            Date: "2023-06-15",
            ShortDescription:
                "Help fight hunger in our community by participating in our annual food drive. Donate non-perishable items at designated collection points throughout the town.",
        },
        {
            Name: "Youth Tutoring Program",
            Date: "2023-07-05",
            ShortDescription:
                "Support local students by volunteering for our youth tutoring program. Help them with homework, provide mentorship, and make a positive impact on their academic journey.",
        },
        {
            Name: "Green Initiative Seminar",
            Date: "2023-08-20",
            ShortDescription:
                "Learn about sustainable living practices and environmental conservation at our Green Initiative Seminar. Explore ways to reduce your carbon footprint and promote eco-friendly habits.",
        },
    ];

    const [serviceListState, setServiceListState] = useState([]);
    const [selectedService, setSelectedService] = useState();
    const [selectedServiceIndex, setSelectedServiceIndex] = useState();
    const [allowPublic, setAllowPublic] = useState(true);

    const { id } = useParams();

    const fetchServiceList = async () => {
        // Fetch data from the server
        const response = await fetch(
            `http://localhost:7075/api/community-service/${id}`
        );
        const data = await response.json();
        // Update the state with the fetched data
        setServiceListState(data.Data);
    };

    useEffect(() => {
        fetchServiceList();
    }, []);

    const addService = async () => {
        const serviceName = document.getElementById("service_name").value;
        const serviceDate = document.getElementById("service_date").value;
        const shortDescription =
            document.getElementById("short_description").value;

        const response = await fetch(
            `http://localhost:7075/api/community-service/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: id,
                    name: serviceName,
                    date: serviceDate,
                    description: shortDescription,
                }),
            }
        );

        if (!response.ok) {
            alert("Failed to add service");
            return;
        }

        fetchServiceList();

        setSelectedService();
        setSelectedServiceIndex();
    };

    const handleUpdateServiceDetails = async () => {
        const serviceName = document.getElementById("service_name").value;
        const serviceDate = document.getElementById("service_date").value;
        const shortDescription =
            document.getElementById("short_description").value;

        const response = await fetch(
            `http://localhost:7075/api/community-service/`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    communityServiceId: id,
                    name: serviceName,
                    date: serviceDate,
                    description: shortDescription,
                }),
            }
        );

        if (!response.ok) {
            alert("Failed to update service");
            return;
        }

        fetchServiceList();

        // if (selectedServiceIndex || selectedServiceIndex == 0) {
        //     const serviceListStateCopy = serviceListState;

        //     serviceListStateCopy[selectedServiceIndex] = {
        //         Name: serviceName,
        //         Date: serviceDate,
        //         ShortDescription: shortDescription,
        //     };

        //     setServiceListState(serviceListStateCopy);
        // } else {
        //     setServiceListState([
        //         ...serviceListState,
        //         {
        //             Name: serviceName,
        //             Date: serviceDate,
        //             ShortDescription: shortDescription,
        //         },
        //     ]);
        // }

        setSelectedService();
        setSelectedServiceIndex();
    };

    const handleDelete = async (index) => {
        const response = await fetch(
            `http://localhost:7075/api/community-service/${index}`,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            alert("Failed to delete service");
            return;
        }

        fetchServiceList();
        setSelectedService();
        setSelectedServiceIndex();

        // const serviceListStateCopy = serviceListState;
        // serviceListStateCopy.splice(index, 1);
        // setServiceListState(serviceListStateCopy);
    };

    return (
        <div>
            <div>
                {!selectedService &&
                    serviceListState.map((item, index) => (
                        <Service
                            key={index}
                            serviceDetails={item}
                            setSelectedService={setSelectedService}
                            index={index}
                            handleDelete={handleDelete}
                            setSelectedServiceIndex={setSelectedServiceIndex}
                        />
                    ))}

                {selectedService && (
                    <ServiceEdit serviceDetails={selectedService} />
                )}

                <div className="personal_details_edit_wrapper">
                    {selectedService ? (
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
                                onClick={(e) => setSelectedService()}
                                className="personal_details_edit"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>

                            <button
                                onClick={
                                    selectedService?.true
                                        ? addService
                                        : handleUpdateServiceDetails
                                }
                                className="personal_details_edit"
                            >
                                <i className="fa-solid fa-check"></i>
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={(e) =>
                                setSelectedService({
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
