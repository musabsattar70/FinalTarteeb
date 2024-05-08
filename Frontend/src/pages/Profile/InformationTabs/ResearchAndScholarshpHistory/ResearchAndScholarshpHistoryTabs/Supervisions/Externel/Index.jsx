import { useEffect, useState } from "react";
import { Supervision } from "./Supervision";
import { SupervisionEdit } from "./SupervisionEdit";
import { useParams } from "react-router-dom";

export const Externel = () => {
  const supervisionsList = [
    {
      Name: "Mobile Robotics Controller Experiment",
      Authors: ["John Doe", "J.K. Rowling"],
      Date: "2023-09-05",
      Location: "Harvard University",
    },
    {
      Name: "Autonomous Drone Navigation",
      Authors: ["Alice Smith", "Bob Johnson"],
      Date: "2023-10-15",
      Location: "Stanford University",
    },
    {
      Name: "Computer Vision for Object Recognition",
      Authors: ["Eva Rodriguez", "Michael Chen"],
      Date: "2023-08-20",
      Location: "University of Oxford",
    },
    {
      Name: "Human-Robot Interaction Study",
      Authors: ["Sarah Thompson", "David Miller"],
      Date: "2023-07-12",
      Location: "Massachusetts Institute of Technology (MIT)",
    },
    {
      Name: "Industrial Automation System",
      Authors: ["Chris Anderson", "Olivia White"],
      Date: "2023-11-28",
      Location: "ETH Zurich",
    },
  ];

  const [supervisionsListState, setSupervisionsListState] = useState([]);
  const [selectedSupervision, setSelectedSupervision] = useState();
  const [selectedSupervisionIndex, setSelectedSupervisionIndex] = useState();
  const [allowPublic, setAllowPublic] = useState(true);

  const { id } = useParams();

  const fetchSupervisions = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/supervision/${id}`
    );
    const data = await response.json();
    setSupervisionsListState(
      data.Data?.filter((item) => item.Location != "Habib University")
    );
  };

  useEffect(() => {
    fetchSupervisions();
  }, []);

  const handleAddSupervision = async () => {
    const supervisionName = document.getElementById("supervision_name").value;
    const supervisionAuthors = document.getElementById(
      "supervision_authors"
    ).value;
    const supervisionDate = document.getElementById("supervision_date").value;
    const supervisionLocation = document.getElementById(
      "supervision_location"
    ).value;

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/supervision/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          name: supervisionName,
          authors: supervisionAuthors,
          date: supervisionDate,
          location: supervisionLocation,
        }),
      }
    );

    if (!response.ok) {
      alert("Failed to add supervision");
      return;
    }

    fetchSupervisions();

    setSelectedSupervision();
    setSelectedSupervisionIndex();
  };

  const handleUpdateSupervisionDetails = async () => {
    const supervisionName = document.getElementById("supervision_name").value;
    const supervisionAuthors = document.getElementById(
      "supervision_authors"
    ).value;
    const supervisionDate = document.getElementById("supervision_date").value;
    const supervisionLocation = document.getElementById(
      "supervision_location"
    ).value;

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/supervision/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          supervisionId: selectedSupervision.SupervisionId,
          name: supervisionName,
          authors: supervisionAuthors,
          date: supervisionDate,
          location: supervisionLocation,
        }),
      }
    );

    if (!response.ok) {
      alert("Failed to update supervision");
      return;
    }

    fetchSupervisions();

    // const authors = supervisionAuthors.split("\n");

    // if (selectedSupervisionIndex || selectedSupervisionIndex == 0) {
    //     const supervisionsListStateCopy = supervisionsListState;

    //     supervisionsListStateCopy[selectedSupervisionIndex] = {
    //         Name: supervisionName,
    //         Authors: authors,
    //         Date: supervisionDate,
    //         Location: supervisionLocation,
    //     };

    //     setSupervisionsListState(supervisionsListStateCopy);
    // } else {
    //     setSupervisionsListState([
    //         ...supervisionsListState,
    //         {
    //             Name: supervisionName,
    //             Authors: authors,
    //             Date: supervisionDate,
    //             Location: supervisionLocation,
    //         },
    //     ]);
    // }

    setSelectedSupervision();
    setSelectedSupervisionIndex();
  };

  const handleDelete = async (index) => {
    // // Create a copy of statelist
    // const stateCopy = [...supervisionsListState];
    // // Remove the item at the specified index
    // stateCopy.splice(index, 1);
    // // Update the state with the modified copy
    // setSupervisionsListState(stateCopy);

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/supervision/${index}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      alert("Failed to delete supervision");
      return;
    }

    fetchSupervisions();
    setSelectedSupervision();
    setSelectedSupervisionIndex();
  };

  return (
    <div>
      <div>
        {!selectedSupervision &&
          supervisionsListState.map((item, index) => (
            <Supervision
              key={index}
              supervisionDetails={item}
              setSelectedSupervision={setSelectedSupervision}
              index={index}
              handleDelete={handleDelete}
              setSelectedSupervisionIndex={setSelectedSupervisionIndex}
            />
          ))}

        {selectedSupervision && (
          <SupervisionEdit supervisionDetails={selectedSupervision} />
        )}

        <div className="personal_details_edit_wrapper">
          {selectedSupervision ? (
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
                onClick={(e) => setSelectedSupervision()}
                className="personal_details_edit"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <button
                onClick={
                  selectedSupervision?.true
                    ? handleAddSupervision
                    : handleUpdateSupervisionDetails
                }
                className="personal_details_edit"
              >
                <i className="fa-solid fa-check"></i>
              </button>
            </>
          ) : (
            <button
              onClick={(e) =>
                setSelectedSupervision({
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
