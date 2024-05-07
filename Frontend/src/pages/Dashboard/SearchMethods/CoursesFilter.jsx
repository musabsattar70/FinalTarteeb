import { useState } from "react";
import { CustomSelect } from "../../../components/CustomSelect";

export const CoursesFilter = ({
    programFilter,
    setProgramFilter
}) => {


    return(

        <div className="faculty_designation_filter">

            <CustomSelect 
                placeHolderText={"Filter by Program"}
                inputValue={programFilter}
                setInputValue={setProgramFilter}
                methodIconClass={"fa-solid fa-caret-down"}
                optionsList={["CS", "CE", "CH", "CND", "SDP", "CH"]}
            />

        </div>

    );

}