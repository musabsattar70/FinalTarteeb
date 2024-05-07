export const WorkshopEdit = ({ workshopDetails }) => {
    return (
        <div>
            <div className="personal_details_input_wrapper">
                <label htmlFor="">Workshop Title:</label>

                <input
                    id="workshop_title"
                    defaultValue={workshopDetails.Title}
                    key={workshopDetails.Title}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Location:</label>

                <input
                    id="workshop_location"
                    defaultValue={workshopDetails.Location}
                    key={workshopDetails.Location}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Date:</label>

                <input
                    id="workshop_date"
                    defaultValue={workshopDetails.Date?.slice(0, 10)}
                    key={workshopDetails.Date?.slice(0, 10)}
                    type="date"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Short Description:</label>

                <textarea
                    id="short_description"
                    defaultValue={workshopDetails.Description}
                    key={workshopDetails.Description}
                    type="text"
                ></textarea>
            </div>
        </div>
    );
};
