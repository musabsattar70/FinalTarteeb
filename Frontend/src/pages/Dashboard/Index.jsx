import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { InstructorsList } from "./InstructorsList/Index";
import { SearchMethods } from "./SearchMethods/Index";

export const Dashboard = () => {
    const [instructors, setInstructors] = useState([]);
    const [designationFilter, setDesignationFilter] = useState("");
    const [programFilter, setProgramFilter] = useState("");
    const [facultyTypeFilter, setFacultyTypeFilter] = useState("");
    const [selectedAlphabetChange, setSelectedAlphabetChange] = useState();
    const [selectedAlphabetInstructor, setSelectedAlphabetInstructor] = useState([]);

    if (!localStorage.getItem("token")) {
        window.location.href = "/login";
    }

    useEffect(() => {
        const fetchInstructors = async () => {
            const response = await fetch(
                "http://localhost:7075/api/admin/GetAllAdminInfo",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        designationFilter,
                        programFilter,
                        facultyTypeFilter,
                    }),
                }
            );
            if (!response.ok) {
                return alert("Error fetching instructors!");
            }
            const data = await response.json();
            setInstructors(data.Data);
            if(selectedAlphabetChange){
                setSelectedAlphabetInstructor(data.Data.filter((instructor) => instructor.FirstName[0] == selectedAlphabetChange));
            }
        };
        fetchInstructors();
    }, [designationFilter, programFilter, facultyTypeFilter]);

    return (
        <section className="homepage_section">
            <Header />

            <main>
                <SearchMethods
                    instructors={instructors}
                    setInstructors={setInstructors}
                    setDesignationFilter={setDesignationFilter}
                    setProgramFilter={setProgramFilter}
                    setFacultyTypeFilter={setFacultyTypeFilter}
                    designationFilter={designationFilter}
                    programFilter={programFilter}
                    facultyTypeFilter={facultyTypeFilter}
                    setSelectedAlphabetChange={setSelectedAlphabetChange}
                    setSelectedAlphabetInstructor={setSelectedAlphabetInstructor}
                />

                <InstructorsList instructors={selectedAlphabetChange ? selectedAlphabetInstructor : instructors} />
            </main>
        </section>
    );
};
