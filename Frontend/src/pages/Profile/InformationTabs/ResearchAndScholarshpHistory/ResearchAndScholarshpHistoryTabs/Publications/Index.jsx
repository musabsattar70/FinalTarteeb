import { useEffect, useState } from "react";
import { Publication } from "./Publication";
import { PublicationEdit } from "./PublicationsEdit";
import { useParams } from "react-router-dom";

export const Publications = () => {
  const publicationsList = [
    {
      Type: "Research Papers",
      Name: "Exploring Quantum Computing Basics",
      Link: "https://example.com/publication1",
      Date: "2023-01-15",
    },
    {
      Type: "Review Articles",
      Name: "Machine Learning Approaches for Image Recognition",
      Link: "https://example.com/publication2",
      Date: "2023-03-22",
    },
    {
      Type: "Conference Papers",
      Name: "Advancements in Cancer Genomics",
      Link: "https://example.com/publication3",
      Date: "2023-05-10",
    },
    {
      Type: "Journal Articles",
      Name: "Blockchain Technology: A Comprehensive Study",
      Link: "https://example.com/publication4",
      Date: "2023-07-18",
    },
    {
      Type: "Thesis/Dissertations",
      Name: "Environmental Impact of Renewable Energy Sources",
      Link: "https://example.com/publication5",
      Date: "2023-09-05",
    },
  ];

  const [publicationsListState, setPublicationsListState] = useState([]);
  const [selectedPublication, setSelectedPublication] = useState();
  const [selectedPublicationIndex, setSelectedPublicationIndex] = useState();
  const [publicationTypeState, setPublicationTypeState] = useState();
  const [allowPublic, setAllowPublic] = useState(true);

  const { id } = useParams();

  const fetchPublicationList = async () => {
    // Fetch data from the server
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/publication/${id}`
    );

    const data = await response.json();
    setPublicationsListState(data.Data);
  };

  useEffect(() => {
    fetchPublicationList();
  }, []);

  const addPublication = async () => {
    // Fetch data from the server
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/publication/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          publicationType: publicationTypeState,
          publicationName: document.getElementById("publication_name").value,
          publicationLink: document.getElementById("publication_link").value,
          publicationDate: document.getElementById("publication_date").value,
        }),
      }
    );

    if (!response.ok) {
      alert("Failed to add publication");
      return;
    }

    fetchPublicationList();

    setSelectedPublication();
    setSelectedPublicationIndex();
    setPublicationTypeState();
  };

  const handleUpdatePublicationDetails = async () => {
    // const publicationType = document.getElementById("publication_type").value;
    const publicationName = document.getElementById("publication_name").value;
    const publicationLink = document.getElementById("publication_link").value;
    const publicationDate = document.getElementById("publication_date").value;

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/publication/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          publicationId: selectedPublication.PublicationId,
          publicationType: publicationTypeState,
          publicationName: publicationName,
          publicationLink: publicationLink,
          publicationDate: publicationDate,
        }),
      }
    );

    if (!response.ok) {
      alert("Failed to update publication");
      return;
    }

    fetchPublicationList();

    // if (selectedPublicationIndex || selectedPublicationIndex == 0) {
    //     const publicationsListStateCopy = publicationsListState;

    //     publicationsListStateCopy[selectedPublicationIndex] = {
    //         Type: publicationTypeState,
    //         Name: publicationName,
    //         Link: publicationLink,
    //         Date: publicationDate,
    //     };

    //     setPublicationsListState(publicationsListStateCopy);
    // } else {
    //     setPublicationsListState([
    //         ...publicationsListState,
    //         {
    //             Type: publicationTypeState,
    //             Name: publicationName,
    //             Link: publicationLink,
    //             Date: publicationDate,
    //         },
    //     ]);
    // }

    setSelectedPublication();
    setSelectedPublicationIndex();
    setPublicationTypeState();
  };

  const handleDelete = async (index) => {
    // // Create a copy of statelist
    // const stateCopy = [...publicationsListState];
    // // Remove the item at the specified index
    // stateCopy.splice(index, 1);
    // // Update the state with the modified copy
    // setPublicationsListState(stateCopy);

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/publication/${index}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      alert("Failed to delete publication");
      return;
    }

    fetchPublicationList();

    setSelectedPublication();
    setSelectedPublicationIndex();
    setPublicationTypeState();
  };

  return (
    <div>
      <div>
        {!selectedPublication &&
          publicationsListState?.map((item, index) => (
            <Publication
              key={index}
              publicationDetails={item}
              setSelectedPublication={setSelectedPublication}
              index={index}
              handleDelete={handleDelete}
              setSelectedPublicationIndex={setSelectedPublicationIndex}
              setPublicationTypeState={setPublicationTypeState}
            />
          ))}

        {selectedPublication && (
          <PublicationEdit
            publicationDetails={selectedPublication}
            publicationTypeState={publicationTypeState}
            setPublicationTypeState={setPublicationTypeState}
          />
        )}

        <div className="personal_details_edit_wrapper">
          {selectedPublication ? (
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
                  setSelectedPublication();
                  setSelectedPublicationIndex();
                  setPublicationTypeState();
                }}
                className="personal_details_edit"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <button
                onClick={
                  selectedPublication?.true
                    ? addPublication
                    : handleUpdatePublicationDetails
                }
                className="personal_details_edit"
              >
                <i className="fa-solid fa-check"></i>
              </button>
            </>
          ) : (
            <button
              onClick={(e) =>
                setSelectedPublication({
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
