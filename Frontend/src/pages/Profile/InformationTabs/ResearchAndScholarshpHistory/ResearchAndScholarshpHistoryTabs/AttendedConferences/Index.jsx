import { useEffect, useState } from "react";
import { Grant } from "./Grant";
import { GrantEdit } from "./GrantEdit";
import { useParams } from "react-router-dom";

export const AttendedConferences = () => {
  const grantsList = [
    {
      Name: "Computer Graphics Fund",
      Source: "Government",
      Details:
        "Secured funding to conduct research on innovative techniques in computer graphics, with a focus on real-time rendering and virtual reality applications.",
      Date: "2023-01-15",
    },
    {
      Name: "STEM Education Initiative",
      Source: "NGO",
      Details:
        "Received a grant to support a STEM education program aimed at underprivileged students, providing access to quality science, technology, engineering, and mathematics education.",
      Date: "2023-03-22",
    },
    {
      Name: "Innovation Fellowship",
      Source: "University",
      Details:
        "Granted an innovation fellowship to pursue a project on the development of sustainable energy solutions using cutting-edge technologies, contributing to the university's research objectives.",
      Date: "2023-05-10",
    },
    {
      Name: "Community Health Project",
      Source: "NGO",
      Details:
        "Secured funding for a community health initiative aimed at providing healthcare services and awareness programs to underserved populations, addressing prevalent health issues.",
      Date: "2023-07-18",
    },
    {
      Name: "Self-Funded Research",
      Source: "Self",
      Details:
        "Invested personal funds into a research project exploring the intersection of artificial intelligence and environmental sustainability, demonstrating a commitment to self-driven academic pursuits.",
      Date: "2023-09-05",
    },
  ];

  const [grantsListState, setGrantsListState] = useState([]);
  const [selectedGrant, setSelectedGrant] = useState();
  const [selectedGrantIndex, setSelectedGrantIndex] = useState();
  const [allowPublic, setAllowPublic] = useState(true);

  const { id } = useParams();

  const fetchGrantsList = async () => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/attended-conferences/" + id
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
      import.meta.env.VITE_API_URL + "/api/attended-conferences/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          title: grantTitle,
          sourceOfFunding: grantSource,
          date: grantDate,
          reason: grantReason,
        }),
      }
    );

    if (!response.ok) {
      alert("Failed to add attended conference");
      return;
    }

    setSelectedGrant();
    setSelectedGrantIndex();
    fetchGrantsList();
  };

  const handleUpdateGrantDetails = async () => {
    const grantTitle = document.getElementById("grant_title").value;
    const grantSource = document.getElementById("grant_source").value;
    const grantDate = document.getElementById("grant_date").value;
    const grantReason = document.getElementById("grant_reason").value;

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/attended-conferences/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          attendedConferencesId: selectedGrant.AttendedConferencesId,
          title: grantTitle,
          sourceOfFunding: grantSource,
          date: grantDate,
          reason: grantReason,
        }),
      }
    );

    if (!response.ok) {
      alert("Failed to update attnded Conference details");
      return;
    }

    fetchGrantsList();

    // if (selectedGrantIndex || selectedGrantIndex == 0) {
    //     const grantsListStateCopy = grantsListState;

    //     grantsListStateCopy[selectedGrantIndex] = {
    //         Name: grantTitle,
    //         Source: grantSource,
    //         Details: grantReason,
    //         Date: grantDate,
    //     };

    //     setGrantsListState(grantsListStateCopy);
    // } else {
    //     setGrantsListState([
    //         ...grantsListState,
    //         {
    //             Name: grantTitle,
    //             Source: grantSource,
    //             Details: grantReason,
    //             Date: grantDate,
    //         },
    //     ]);
    // }

    setSelectedGrant();
    setSelectedGrantIndex();
  };

  const handleDelete = async (index) => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/attended-conferences/" + index,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      alert("Failed to delete attended conference");
      return;
    }

    fetchGrantsList();
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
