import { useState } from "react";
import { CustomSelect } from "../../../../../../components/CustomSelect";

export const PublicationEdit = ({
    publicationDetails,
    publicationTypeState,
    setPublicationTypeState,
}) => {
    const [publicationsList, setPublicationsList] = useState([
        "Research Papers",
        "Review Articles",
        "Conference Papers",
        "Journal Articles",
        "Thesis/Dissertations",
    ]);

    return (
        <div>
            <div className="personal_details_input_wrapper">
                <label htmlFor="">Publication Type:</label>

                <div id="custom_semester_select_under_tab">
                    <CustomSelect
                        placeHolderText={"e.g Thesis"}
                        methodIconClass={"fa-solid fa-caret-down"}
                        optionsList={publicationsList}
                        setInputValue={setPublicationTypeState}
                        inputValue={publicationTypeState}
                    />
                </div>
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Publication Name:</label>

                <input
                    id="publication_name"
                    defaultValue={publicationDetails.PublicationName}
                    key={publicationDetails.PublicationName}
                    type="text"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Published On:</label>

                <input
                    id="publication_date"
                    defaultValue={publicationDetails.PublicationDate?.slice(
                        0,
                        10
                    )}
                    key={publicationDetails.PublicationDate?.slice(0, 10)}
                    type="date"
                />
            </div>

            <div className="personal_details_input_wrapper">
                <label htmlFor="">Published Document Link:</label>

                <input
                    id="publication_link"
                    defaultValue={publicationDetails.PublicationLink}
                    key={publicationDetails.PublicationLink}
                    type="text"
                />
            </div>
        </div>
    );
};
