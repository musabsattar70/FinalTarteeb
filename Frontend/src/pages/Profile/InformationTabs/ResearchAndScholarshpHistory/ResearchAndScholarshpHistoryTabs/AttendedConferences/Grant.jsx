export const Grant = ({
    grantDetails,
    setSelectedGrant,
    index,
    setSelectedGrantIndex,
    handleDelete,
}) => {
    return (
        <div className="instructor_degree">
            <span>
                <b>{grantDetails.Title}</b>
            </span>

            <span className="community_serivce_date">
                <i className="fa-solid fa-building-columns"></i>{" "}
                {grantDetails.SourceOfFunding}
            </span>
            <span className="community_serivce_date">
                <i className="fa-solid fa-calendar-days"></i>{" "}
                {grantDetails.Date?.slice(0, 10)}
            </span>

            <span className="community_serivce_description">
                {grantDetails.Reason}
            </span>

            <i className="fa-solid fa-award instructor_degree_icon"></i>
            <i
                className="fa-solid fa-pen instructor_degree_edit_icon"
                onClick={(e) => {
                    setSelectedGrant(grantDetails);
                    setSelectedGrantIndex(index);
                }}
            ></i>
            <i
                className="fa-solid fa-trash instructor_degree_trash_icon"
                onClick={(e) => {
                    handleDelete(grantDetails.AttendedConferencesId);
                }}
            ></i>
        </div>
    );
};
