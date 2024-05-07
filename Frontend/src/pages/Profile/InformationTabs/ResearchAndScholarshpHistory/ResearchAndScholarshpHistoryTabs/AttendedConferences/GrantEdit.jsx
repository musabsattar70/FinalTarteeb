export const GrantEdit = ({ grantDetails }) => {
    return (
        <div>
            <div className="personal_details_input_wrapper">
                <label htmlFor="">Name:</label>

                <input
                    id="grant_title"
                    defaultValue={grantDetails.Title}
                    key={grantDetails.Title}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Source of Funding:</label>

                <input
                    id="grant_source"
                    defaultValue={grantDetails.SourceOfFunding}
                    key={grantDetails.SourceOfFunding}
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
                <label htmlFor="">Details:</label>

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
