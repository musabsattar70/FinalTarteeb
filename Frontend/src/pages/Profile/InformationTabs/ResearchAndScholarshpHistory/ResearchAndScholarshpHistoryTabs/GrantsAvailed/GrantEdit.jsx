export const GrantEdit = ({ grantDetails }) => {
    return (
        <div>
            <div className="personal_details_input_wrapper">
                <label htmlFor="">Title:</label>

                <input
                    id="grant_title"
                    defaultValue={grantDetails.Title}
                    key={grantDetails.Title}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Source:</label>

                <input
                    id="grant_source"
                    defaultValue={grantDetails.Source}
                    key={grantDetails.Source}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Date:</label>

                <input
                    id="grant_date"
                    defaultValue={grantDetails.Date?.slice(0, 10)}
                    key={grantDetails.Date?.slice(0, 10)}
                    type="date"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Reason:</label>

                <textarea
                    id="grant_reason"
                    defaultValue={grantDetails.Reason}
                    key={grantDetails.Reason}
                    type="text"
                ></textarea>
            </div>
        </div>
    );
};
