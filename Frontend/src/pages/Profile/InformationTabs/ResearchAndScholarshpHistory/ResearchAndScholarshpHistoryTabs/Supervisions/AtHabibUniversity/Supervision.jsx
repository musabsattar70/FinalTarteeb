export const Supervision = ({
    supervisionDetails,
    setSelectedSupervision,
    index,
    setSelectedSupervisionIndex,
    handleDelete,
}) => {
    return (
        <div className="instructor_degree">
            <span>
                <b>{supervisionDetails.Name}</b>
            </span>

            <span className="community_serivce_date">
                <i className="fa-solid fa-calendar-days"></i>{" "}
                {supervisionDetails.Date?.slice(0, 10)}
            </span>
            <span className="community_serivce_date">
                <i className="fa-solid fa-location-dot"></i>{" "}
                {supervisionDetails.Location}
            </span>

            <span>
                <b style={{ fontSize: "1.4rem" }}>Authors:</b>
            </span>

            {supervisionDetails.Authors?.split(", ").map((item, index) => (
                <span className="community_serivce_date" key={index}>
                    <i className="fa-solid fa-at"></i> {item}
                </span>
            ))}

            <i className="fa-solid fa-glasses instructor_degree_icon"></i>
            <i
                className="fa-solid fa-pen instructor_degree_edit_icon"
                onClick={(e) => {
                    setSelectedSupervision(supervisionDetails);
                    setSelectedSupervisionIndex(index);
                }}
            ></i>
            <i
                className="fa-solid fa-trash instructor_degree_trash_icon"
                onClick={(e) => {
                    handleDelete(supervisionDetails.SupervisionId);
                }}
            ></i>
        </div>
    );
};
