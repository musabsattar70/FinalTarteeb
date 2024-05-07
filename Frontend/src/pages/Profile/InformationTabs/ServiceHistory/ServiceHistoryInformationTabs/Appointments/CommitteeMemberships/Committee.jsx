export const Committee = ({
    committeeDetails,
    setSelectedCommittee,
    index,
    setSelectedCommitteeIndex,
    setTermToState,
    setTermFromState,
    handleDelete,
}) => {
    return (
        <div className="instructor_degree">
            <span>
                <b>{committeeDetails.CommittieeName}</b>
            </span>

            <span className="community_serivce_date">
                <i className="fa-solid fa-chair-office"></i>{" "}
                {committeeDetails.Designation}
            </span>

            <span className="community_serivce_date">
                <i className="fa-solid fa-calendar-days"></i> &nbsp;{" "}
                {committeeDetails.TermFrom} - {committeeDetails.TermTo}
            </span>

            <i className="fa-solid fa-user-tie instructor_degree_icon"></i>
            <i
                className="fa-solid fa-pen instructor_degree_edit_icon"
                onClick={(e) => {
                    setSelectedCommittee(committeeDetails);
                    setSelectedCommitteeIndex(index);
                    setTermToState(committeeDetails.TermTo);
                    setTermFromState(committeeDetails.TermFrom);
                }}
            ></i>
            <i
                className="fa-solid fa-trash instructor_degree_trash_icon"
                onClick={(e) => {
                    handleDelete(committeeDetails.CommittieeMembershipId);
                }}
            ></i>
        </div>
    );
};
