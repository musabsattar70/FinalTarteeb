

export const Workshop = ({
    workshopDetails,
    setSelectedWorkshop,
    index,
    setSelectedWorkshopIndex,
    handleDelete
}) => {

    return(

        <div className="instructor_degree">

            <span
            >
                <b>{workshopDetails.Title}</b>
            </span>
            <span
                className="community_serivce_date"
            >
                <i className="fa-solid fa-calendar-days"></i> {workshopDetails.Date?.slice(0, 10)}
            </span>
            <span
                className="community_serivce_date"
            >
                <i className="fa-solid fa-location-dot"></i> {workshopDetails.Location}
            </span>
            <span
                className="community_serivce_description"
            >
                {workshopDetails.Description}
            </span>

            <i className="fa-solid fa-person-chalkboard instructor_degree_icon"></i>
            <i
                className="fa-solid fa-pen instructor_degree_edit_icon"
                onClick={e => {
                    setSelectedWorkshop(workshopDetails)
                    setSelectedWorkshopIndex(index)
                }}
            ></i>
            <i
                className="fa-solid fa-trash instructor_degree_trash_icon"
                onClick={e => {
                    handleDelete(workshopDetails.WorkshopId)
                }}
            ></i>


        </div>

    );

}