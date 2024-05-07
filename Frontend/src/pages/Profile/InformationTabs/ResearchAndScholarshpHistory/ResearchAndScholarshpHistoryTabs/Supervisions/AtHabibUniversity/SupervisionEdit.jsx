export const SupervisionEdit = ({ supervisionDetails }) => {
    return (
        <div>
            <div className="personal_details_input_wrapper">
                <label htmlFor="">Name:</label>

                <input
                    id="supervision_name"
                    defaultValue={supervisionDetails.Name}
                    key={supervisionDetails.Name}
                    type="text"
                />
            </div>

            {/* <div className="personal_details_input_wrapper">
                <label htmlFor="">Location:</label>

                <input
                    id="supervision_location"
                    defaultValue={supervisionDetails.Location}
                    key={supervisionDetails.Location}
                    type="text"
                />
            </div> */}

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Date:</label>

                <input
                    id="supervision_date"
                    defaultValue={supervisionDetails.Date?.slice(0, 10)}
                    key={supervisionDetails.Date?.slice(0, 10)}
                    type="date"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">
                    Authors (separate by comma and space e.g "John, Alex,
                    Alia"):
                </label>

                <textarea
                    id="supervision_authors"
                    defaultValue={supervisionDetails.Authors}
                    key={supervisionDetails.Authors}
                    type="text"
                ></textarea>
            </div>
        </div>
    );
};
