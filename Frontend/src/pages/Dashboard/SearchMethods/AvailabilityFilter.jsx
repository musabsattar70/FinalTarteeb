import { useState } from "react";
import { CustomSelect } from "../../../components/CustomSelect";

export const AvailabilityFilter = ({
    facultyTypeFilter,
    setFacultyTypeFilter,
}) => {
    return (
        <div className="faculty_designation_filter">
            <CustomSelect
                placeHolderText={"Filter by Availability"}
                inputValue={facultyTypeFilter}
                setInputValue={setFacultyTypeFilter}
                methodIconClass={"fa-solid fa-caret-down"}
                optionsList={["Full-Time", "Visiting", "On-Leave"]}
            />
        </div>
    );
};
