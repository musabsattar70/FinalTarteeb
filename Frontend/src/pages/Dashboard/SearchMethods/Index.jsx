import { AlphabetsFilter } from "./AlphabetsFilter";
import { AvailabilityFilter } from "./AvailabilityFilter";
import { CoursesFilter } from "./CoursesFilter";
import { FacultyDesignationFilter } from "./FacultyDesignationFilter";

export const SearchMethods = ({
    setDesignationFilter,
    setProgramFilter,
    setFacultyTypeFilter,
    designationFilter,
    programFilter,
    facultyTypeFilter,
    instructors,
    setInstructors,
    setSelectedAlphabetChange,
    setSelectedAlphabetInstructor,
}) => {
    return (
        <div>
            <div className="search_filters_wrapper">
                <FacultyDesignationFilter
                    designationFilter={designationFilter}
                    setDesignationFilter={setDesignationFilter}
                />
                <CoursesFilter
                    programFilter={programFilter}
                    setProgramFilter={setProgramFilter}
                />
                <AvailabilityFilter
                    facultyTypeFilter={facultyTypeFilter}
                    setFacultyTypeFilter={setFacultyTypeFilter}
                />
            </div>

            <AlphabetsFilter
                instructors={instructors}
                setInstructors={setInstructors}
                setSelectedAlphabetChange={setSelectedAlphabetChange}
                setSelectedAlphabetInstructor={setSelectedAlphabetInstructor}
            />
        </div>
    );
};
