export const Service = ({
    serviceDetails,
    setSelectedService,
    index,
    setSelectedServiceIndex,
    handleDelete,
}) => {
    return (
        <div className="instructor_degree">
            <span>
                <b>{serviceDetails.Name}</b>
            </span>
            <span className="community_serivce_date">
                <i className="fa-solid fa-calendar-days"></i>{" "}
                {serviceDetails.Date?.slice(0, 10)}
            </span>
            <span className="community_serivce_description">
                {serviceDetails.Description}
            </span>

            <i className="fa-solid fa-hand-holding-seedling instructor_degree_icon"></i>
            <i
                className="fa-solid fa-pen instructor_degree_edit_icon"
                onClick={(e) => {
                    setSelectedService(serviceDetails);
                    setSelectedServiceIndex(index);
                }}
            ></i>
            <i
                className="fa-solid fa-trash instructor_degree_trash_icon"
                onClick={(e) => {
                    handleDelete(serviceDetails.CommunityServiceId);
                }}
            ></i>
        </div>
    );
};
