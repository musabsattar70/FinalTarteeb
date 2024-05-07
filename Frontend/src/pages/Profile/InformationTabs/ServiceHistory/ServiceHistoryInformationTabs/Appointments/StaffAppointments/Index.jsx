import { useEffect, useState } from "react";
import { StaffAppointmentEdit } from "./StaffAppointmentEdit";
import { StaffAppointment } from "./StaffAppointment";
import { useParams } from "react-router-dom";

export const StaffAppointments = () => {
  const staffAppointments = [
    {
      Designation: "Program Director",
      TermFrom: "Fall 2022",
      TermTo: "Spring 2023",
    },
    {
      Designation: "Dean",
      TermFrom: "Fall 2022",
      TermTo: "Spring 2023",
    },
    {
      Designation: "Associate Dean",
      TermFrom: "Fall 2022",
      TermTo: "Spring 2023",
    },
    {
      Designation: "Associate Dean",
      TermFrom: "Fall 2022",
      TermTo: "Spring 2023",
    },
    {
      Designation: "Department Head",
      TermFrom: "Fall 2022",
      TermTo: "Spring 2023",
    },
  ];

  const [staffAppointmentState, setStaffAppointmentState] = useState([]);
  const [selectedStaffAppointment, setSelectedStaffAppointment] = useState();
  const [selectedStaffAppointmentIndex, setSelectedStaffAppointmentIndex] =
    useState();
  const [termFromState, setTermFromState] = useState();
  const [termToState, setTermToState] = useState();
  const [allowPublic, setAllowPublic] = useState(true);

  const { id } = useParams();

  const fetchStaffAppointments = async () => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/staff-appointment/" + id
    );
    const data = await response.json();
    setStaffAppointmentState(data.Data);
  };

  useEffect(() => {
    fetchStaffAppointments();
  }, []);

  const handleAddStaffAppointment = async () => {
    const staffAppointmentDesignation = document.getElementById(
      "staff_appointment_designation"
    ).value;
    // const staffAppointmentTerm = document.getElementById("staff_appointment_term").value;

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/staff-appointment/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          designation: staffAppointmentDesignation,
          termFrom: termFromState,
          termTo: termToState,
        }),
      }
    );

    if (!response.ok) {
      alert("Error adding staff appointment details");
    }

    fetchStaffAppointments();

    setSelectedStaffAppointment();
    setSelectedStaffAppointmentIndex();
    setTermFromState();
    setTermToState();
  };

  const handleUpdateStaffAppointmentDetails = async () => {
    const staffAppointmentDesignation = document.getElementById(
      "staff_appointment_designation"
    ).value;
    // const staffAppointmentTerm = document.getElementById("staff_appointment_term").value;

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/staff-appointment/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          staffAppointmentId: selectedStaffAppointment.StaffAppointmentId,
          designation: staffAppointmentDesignation,
          termFrom: termFromState,
          termTo: termToState,
        }),
      }
    );

    if (!response.ok) {
      alert("Error updating staff appointment details");
    }

    fetchStaffAppointments();

    setSelectedStaffAppointment();
    setSelectedStaffAppointmentIndex();
    setTermFromState();
    setTermToState();
  };

  const handleDelete = async (index) => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/staff-appointment/" + index,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      alert("Error deleting staff appointment details");
    }

    fetchStaffAppointments();
  };

  return (
    <div>
      <div>
        {!selectedStaffAppointment &&
          staffAppointmentState.map((item, index) => (
            <StaffAppointment
              key={index}
              staffAppointmentDetails={item}
              setSelectedStaffAppointment={setSelectedStaffAppointment}
              index={index}
              handleDelete={handleDelete}
              setSelectedStaffAppointmentIndex={
                setSelectedStaffAppointmentIndex
              }
              setTermFromState={setTermFromState}
              setTermToState={setTermToState}
            />
          ))}

        {selectedStaffAppointment && (
          <StaffAppointmentEdit
            staffAppointmentDetails={selectedStaffAppointment}
            termFromState={termFromState}
            setTermFromState={setTermFromState}
            termToState={termToState}
            setTermToState={setTermToState}
          />
        )}

        <div className="personal_details_edit_wrapper">
          {selectedStaffAppointment ? (
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
                  setSelectedStaffAppointment();
                  setSelectedStaffAppointmentIndex();
                  setTermToState();
                  setTermFromState();
                }}
                className="personal_details_edit"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <button
                onClick={
                  selectedStaffAppointment?.true
                    ? handleAddStaffAppointment
                    : handleUpdateStaffAppointmentDetails
                }
                className="personal_details_edit"
              >
                <i className="fa-solid fa-check"></i>
              </button>
            </>
          ) : (
            <button
              onClick={(e) =>
                setSelectedStaffAppointment({
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
