

export const StaffAppointment = ({
    staffAppointmentDetails,
    setSelectedStaffAppointment,
    index,
    setSelectedStaffAppointmentIndex,
    setTermToState,
    setTermFromState,
    handleDelete
}) => {

    return(

        <div className="instructor_degree">

            <span
            >
                <b>{staffAppointmentDetails.Designation}</b>
            </span>
            <span
                style={{marginTop: "1rem"}}
            >
                <i className="fa-solid fa-calendar-days"></i> &nbsp; {staffAppointmentDetails.TermFrom} - {staffAppointmentDetails.TermTo}
            </span>
            

            <i className="fa-solid fa-clipboard-user instructor_degree_icon"></i>
            <i
                className="fa-solid fa-pen instructor_degree_edit_icon"
                onClick={e => {
                    setSelectedStaffAppointment(staffAppointmentDetails)
                    setSelectedStaffAppointmentIndex(index)
                    setTermToState(staffAppointmentDetails.TermTo);
                    setTermFromState(staffAppointmentDetails.TermFrom);
                }}
            ></i>
            <i
                className="fa-solid fa-trash instructor_degree_trash_icon"
                onClick={e => {
                    handleDelete(staffAppointmentDetails.StaffAppointmentId);
                }}
            ></i>


        </div>

    );

}