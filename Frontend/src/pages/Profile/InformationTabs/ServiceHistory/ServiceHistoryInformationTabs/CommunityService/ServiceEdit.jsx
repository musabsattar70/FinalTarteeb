export const ServiceEdit = ({ serviceDetails }) => {
    return (
        <div>
            <div className="personal_details_input_wrapper">
                <label htmlFor="">Service Name:</label>

                <input
                    id="service_name"
                    defaultValue={serviceDetails.Name}
                    key={serviceDetails.Name}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Date:</label>

                <input
                    id="service_date"
                    defaultValue={serviceDetails.Date?.slice(0, 10)}
                    key={serviceDetails.Date?.slice(0, 10)}
                    type="date"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Short Description:</label>

                <textarea
                    id="short_description"
                    defaultValue={serviceDetails.Description}
                    key={serviceDetails.Description}
                    type="text"
                ></textarea>
            </div>
        </div>
    );
};
