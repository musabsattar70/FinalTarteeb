export const Publication = ({
    publicationDetails,
    setSelectedPublication,
    index,
    setSelectedPublicationIndex,
    setPublicationTypeState,
    handleDelete,
}) => {
    return (
        <div className="instructor_degree">
            <span>
                <a href={publicationDetails.PublicationLink} target="_blank">
                    <b>{publicationDetails.PublicationName}</b>
                </a>
            </span>
            <span className="community_serivce_date">
                <i className="fa-solid fa-books"></i>{" "}
                {publicationDetails.PublicationType}
            </span>
            <span className="community_serivce_date">
                <i className="fa-solid fa-calendar-days"></i>{" "}
                {publicationDetails.PublicationDate?.slice(0, 10)}
            </span>

            <i className="fa-solid fa-newspaper instructor_degree_icon"></i>
            <i
                className="fa-solid fa-pen instructor_degree_edit_icon"
                onClick={(e) => {
                    setPublicationTypeState(publicationDetails.PublicationType);
                    setSelectedPublication(publicationDetails);
                    setSelectedPublicationIndex(index);
                }}
            ></i>
            <i
                className="fa-solid fa-trash instructor_degree_trash_icon"
                onClick={(e) => {
                    handleDelete(publicationDetails.PublicationId);
                }}
            ></i>
        </div>
    );
};
