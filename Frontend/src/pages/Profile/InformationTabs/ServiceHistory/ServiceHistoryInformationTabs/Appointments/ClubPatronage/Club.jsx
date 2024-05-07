export const Club = ({
    clubDetails,
    setSelectedClub,
    index,
    setSelectedClubIndex,
    setTermToState,
    setTermFromState,
    handleDelete,
}) => {
    return (
        <div className="instructor_degree">
            <span>
                <b>{clubDetails.ClubName}</b>
            </span>
            <span style={{ marginTop: "1rem" }}>
                <i className="fa-solid fa-calendar-days"></i> &nbsp;{" "}
                {clubDetails.TermFrom} - {clubDetails.TermTo}
            </span>

            <i className="fa-solid fa-people-group instructor_degree_icon"></i>
            <i
                className="fa-solid fa-pen instructor_degree_edit_icon"
                onClick={(e) => {
                    setSelectedClub(clubDetails);
                    setSelectedClubIndex(index);
                    setTermToState(clubDetails.TermTo);
                    setTermFromState(clubDetails.TermFrom);
                }}
            ></i>
            <i
                className="fa-solid fa-trash instructor_degree_trash_icon"
                onClick={(e) => {
                    handleDelete(clubDetails.ClubPatronageId);
                }}
            ></i>
        </div>
    );
};
