import { useEffect, useState } from "react";
import { CommitteeEdit } from "./CommitteeEdit";
import { Committee } from "./Committee";
import { useParams } from "react-router-dom";

export const CommitteeMemberships = () => {
  const committeeList = [
    {
      Name: "FYP Proposal Review Committee",
      Designation: "Chairperson",
      TermFrom: "Fall 2022",
      TermTo: "Spring 2023",
    },
    {
      Name: "Thesis Evaluation Committee",
      Designation: "Lead",
      TermFrom: "Fall 2022",
      TermTo: "Spring 2023",
    },
    {
      Name: "Research Ethics Board",
      Designation: "Secretary",
      TermFrom: "Fall 2022",
      TermTo: "Spring 2023",
    },
    {
      Name: "Academic Curriculum Committee",
      Designation: "Chairperson",
      TermFrom: "Fall 2022",
      TermTo: "Spring 2023",
    },
    {
      Name: "Admissions Review Board",
      Designation: "Lead",
      TermFrom: "Fall 2022",
      TermTo: "Spring 2023",
    },
  ];

  const [committeeListState, setCommitteeListState] = useState([]);
  const [selectedCommittee, setSelectedCommittee] = useState();
  const [selectedCommitteeIndex, setSelectedCommitteeIndex] = useState();
  const [termFromState, setTermFromState] = useState();
  const [termToState, setTermToState] = useState();
  const [allowPublic, setAllowPublic] = useState(true);

  const { id } = useParams();

  const fetchCommitteeList = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/committee-membership/${id}`
    );
    const data = await response.json();
    setCommitteeListState(data.Data);
  };

  useEffect(() => {
    fetchCommitteeList();
  }, []);

  const handleAddCommitteeDetails = async () => {
    const committeeName = document.getElementById("committee_name").value;
    const committeeDesignation = document.getElementById(
      "committee_designation"
    ).value;
    // const committeeTerm = document.getElementById("committee_term").value;

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/committee-membership/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          committeeName: committeeName,
          designation: committeeDesignation,
          termFrom: termFromState,
          termTo: termToState,
        }),
      }
    );

    if (!response.ok) {
      alert("Failed to add committee details");
      return;
    }

    fetchCommitteeList();

    setSelectedCommittee();
    setSelectedCommitteeIndex();
    setTermFromState();
    setTermToState();
  };

  const handleUpdateCommitteeDetails = async () => {
    const committeeName = document.getElementById("committee_name").value;
    const committeeDesignation = document.getElementById(
      "committee_designation"
    ).value;
    // const committeeTerm = document.getElementById("committee_term").value;

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/committee-membership/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          committeeMembershipId: selectedCommittee.CommittieeMembershipId,
          committeeName: committeeName,
          designation: committeeDesignation,
          termFrom: termFromState,
          termTo: termToState,
        }),
      }
    );

    if (!response.ok) {
      alert("Failed to update committee details");
      return;
    }

    fetchCommitteeList();

    // if (selectedCommitteeIndex || selectedCommitteeIndex == 0) {
    //     const committeeListStateCopy = committeeListState;

    //     committeeListStateCopy[selectedCommitteeIndex] = {
    //         Name: committeeName,
    //         Designation: committeeDesignation,
    //         TermFrom: termFromState,
    //         TermTo: termToState,
    //     };

    //     setCommitteeListState(committeeListStateCopy);
    // } else {
    //     setCommitteeListState([
    //         ...committeeListState,
    //         {
    //             Name: committeeName,
    //             Designation: committeeDesignation,
    //             TermFrom: termFromState,
    //             TermTo: termToState,
    //         },
    //     ]);
    // }

    setSelectedCommittee();
    setSelectedCommitteeIndex();
    setTermFromState();
    setTermToState();
  };

  const handleDelete = async (index) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/committee-membership/${index}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      alert("Failed to delete committee details");
      return;
    }

    fetchCommitteeList();
    setSelectedCommitteeIndex();
    setSelectedCommittee();
    setTermFromState();
    setTermToState();
  };

  return (
    <div>
      <div>
        {!selectedCommittee &&
          committeeListState.map((item, index) => (
            <Committee
              key={index}
              committeeDetails={item}
              setSelectedCommittee={setSelectedCommittee}
              index={index}
              handleDelete={handleDelete}
              setSelectedCommitteeIndex={setSelectedCommitteeIndex}
              setTermFromState={setTermFromState}
              setTermToState={setTermToState}
            />
          ))}

        {selectedCommittee && (
          <CommitteeEdit
            committeeDetails={selectedCommittee}
            termFromState={termFromState}
            setTermFromState={setTermFromState}
            termToState={termToState}
            setTermToState={setTermToState}
          />
        )}

        <div className="personal_details_edit_wrapper">
          {selectedCommittee ? (
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
                  setSelectedCommittee();
                  setSelectedCommitteeIndex();
                  setTermToState();
                  setTermFromState();
                }}
                className="personal_details_edit"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <button
                onClick={
                  selectedCommittee?.true
                    ? handleAddCommitteeDetails
                    : handleUpdateCommitteeDetails
                }
                className="personal_details_edit"
              >
                <i className="fa-solid fa-check"></i>
              </button>
            </>
          ) : (
            <button
              onClick={(e) =>
                setSelectedCommittee({
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
