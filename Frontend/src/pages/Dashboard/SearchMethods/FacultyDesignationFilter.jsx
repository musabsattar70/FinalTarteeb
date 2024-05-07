import { useState } from "react";
import { CustomSelect } from "../../../components/CustomSelect";

export const FacultyDesignationFilter = ({
    designationFilter,
    setDesignationFilter,
}) => {
    return (
        <div className="faculty_designation_filter">
            <CustomSelect
                placeHolderText={"Filter by Faculty Designation"}
                inputValue={designationFilter}
                setInputValue={setDesignationFilter}
                methodIconClass={"fa-solid fa-caret-down"}
                optionsList={[
                    "Associate Professor",
                    "Assistant Professor",
                    "Lecturer",
                    "Dean's Fellow",
                ]}
            />
        </div>
    );
};
