import { useEffect, useState } from "react";
import { Course } from "./Course";
import { CourseEdit } from "./CourseEdit";
import { useParams } from "react-router-dom";

export const CoursesTaught = () => {
    const [coursesList, setCoursesList] = useState();

    let groupedBySemesterObj = {};

    const groupCoursesBySemester = (arr, setterObj) => {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];

            if (element.Semester in setterObj) {
                setterObj[element.Semester].push(element);
            } else {
                setterObj[element.Semester] = [element];
            }
        }
    };
    const { id } = useParams();

    const fetchCourseList = async () => {
        const response = await fetch(
            "http://localhost:7075/api/teaching-history/" + id
        );

        const data = await response.json();

        setCoursesList(data.Data);
    };

    useEffect(() => {
        fetchCourseList();
    }, []);

    useEffect(() => {
        if (coursesList) {
            groupCoursesBySemester(coursesList, groupedBySemesterObj);
            setGroupedBySemester(groupedBySemesterObj);
        }
    }, [coursesList]);

    const [selectedCourse, setSelectedCourse] = useState();
    const [selectedCourseIndex, setSelectedCourseIndex] = useState();
    const [groupedBySemester, setGroupedBySemester] = useState({});
    const [semesterState, setSemesterState] = useState();
    const [objKey, setObjKey] = useState();
    const [allowPublic, setAllowPublic] = useState(true);

    const handleAddCourse = async () => {
        const courseCode = document.getElementById("course_code").value;
        const courseName = document.getElementById("course_name").value;
        const creditHours = document.getElementById("credit_hours").value;

        const response = await fetch(
            "http://localhost:7075/api/teaching-history",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: id,
                    semesterName: semesterState,
                    courseNo: courseCode,
                    courseName: courseName,
                    creditHours: creditHours,
                }),
            }
        );

        if (!response.ok) {
            alert("Something went wrong");
            return;
        }

        fetchCourseList();
        setSelectedCourse();
        setSelectedCourseIndex();
    };

    const handleUpdateCourseDetails = async () => {
        // const semester = document.getElementById("semester").value;
        const courseCode = document.getElementById("course_code").value;
        const courseName = document.getElementById("course_name").value;
        const creditHours = document.getElementById("credit_hours").value;

        const response = await fetch(
            "http://localhost:7075/api/teaching-history",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    teachingHistoryId: selectedCourse?.TeachingHistoryId,
                    semesterName: semesterState,
                    courseNo: courseCode,
                    courseName: courseName,
                    creditHours: creditHours,
                }),
            }
        );

        if (!response.ok) {
            alert("Something went wrong");
            return;
        }

        setSelectedCourse();
        setSelectedCourseIndex();
        setSemesterState();
        setObjKey();
        fetchCourseList();
    };

    const handleDelete = async (teachingHistoryId) => {
        const response = await fetch(
            "http://localhost:7075/api/teaching-history/" + teachingHistoryId,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            alert("Something went wrong");
            return;
        }

        fetchCourseList();

        // // Create a copy of coursesTaughtListState

        // // Remove the item at the specified index
        // const coursesTaughtCopy = [...coursesTaughtListState];
        // const newTaughtCourses = [];
        // for (let i = 0; i < coursesTaughtCopy.length; i++) {
        //     if (
        //         coursesTaughtCopy[i].CourseCode != courseCode ||
        //         (courseCode == coursesTaughtCopy[i].CourseCode &&
        //             coursesTaughtCopy[i].Semester != semester)
        //     ) {
        //         newTaughtCourses.push(coursesTaughtCopy[i]);
        //     }
        // }

        // // Update the state with the modified copy
        // setCoursesTaughtListState(newTaughtCourses);

        // // Now let's update the groupedBySemester state
        // let tempObj = {};
        // groupCoursesBySemester(newTaughtCourses, tempObj);
        // setGroupedBySemester(tempObj);
    };

    return (
        <div className="courses_taught">
            <h1>Courses Taught: </h1>
            <h1></h1>

            <div>
                {!selectedCourse &&
                    Object.keys(groupedBySemester).map((key, index) => (
                        <div key={index}>
                            <h2>
                                <i
                                    onClick={(e) => {
                                        e.currentTarget.classList.toggle(
                                            "rotate"
                                        );
                                        document
                                            .getElementById(
                                                key.replace(" ", "")
                                            )
                                            .classList.toggle("show_courses");
                                    }}
                                    className={"fa-solid fa-triangle"}
                                ></i>

                                {key}
                            </h2>

                            <div
                                className="hide_on_init"
                                id={key.replace(" ", "")}
                            >
                                {groupedBySemester[key].map((item, index) => (
                                    <Course
                                        objKey={key}
                                        setObjKey={setObjKey}
                                        key={index}
                                        courseDetails={item}
                                        setSelectedCourse={setSelectedCourse}
                                        index={index}
                                        handleDelete={handleDelete}
                                        setSelectedCourseIndex={
                                            setSelectedCourseIndex
                                        }
                                        setSemesterState={setSemesterState}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
            </div>

            {selectedCourse && (
                <CourseEdit
                    courseDetails={selectedCourse}
                    setSemesterState={setSemesterState}
                    semesterState={semesterState}
                />
            )}

            <div className="personal_details_edit_wrapper">
                {selectedCourse ? (
                    <>
                        {/* <button
                            title={
                                allowPublic
                                    ? "Hide publicaly"
                                    : "Allow publicaly"
                            }
                            style={
                                !allowPublic
                                    ? { background: "white" }
                                    : { background: "rgba(217, 217, 217, 0.5)" }
                            }
                            onClick={(e) => setAllowPublic(!allowPublic)}
                            className="personal_details_edit"
                        >
                            <i
                                className={
                                    allowPublic
                                        ? "fa-solid fa-eye"
                                        : "fa-solid fa-eye-slash"
                                }
                            ></i>
                        </button> */}
                        <button
                            onClick={(e) => {
                                setSelectedCourse();
                                setSelectedCourseIndex();
                                setSemesterState();
                                setObjKey();
                            }}
                            className="personal_details_edit"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <button
                            onClick={
                                selectedCourse?.true
                                    ? handleAddCourse
                                    : handleUpdateCourseDetails
                            }
                            className="personal_details_edit"
                        >
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </>
                ) : (
                    <button
                        onClick={(e) =>
                            setSelectedCourse({
                                true: true,
                            })
                        }
                        className="personal_details_edit"
                    >
                        <i className="fa-solid fa-add"></i>
                    </button>
                )}
            </div>
        </div>
    );
};
