import { useEffect, useState } from "react";

export const InstructorsList = ({
  selectedInstructors,
  setSelectedInstructors,
}) => {
  // const [selectedInstructors, setSelectedInstructors] = useState([]);
  const [data, setData] = useState([]);

  let insturctors = [
    {
      School: "DSSE",
      Departments: [
        {
          Department: "CS",
          Instructors: [
            {
              Name: "Qasim Pasta",
              ID: 123,
              Department: "CS",
              School: "DSSE",
            },
            {
              Name: "Mobeen Movania",
              ID: 981,
              Department: "CS",
              School: "DSSE",
            },
            {
              Name: "Abdul Samad",
              ID: 102,
              Department: "CS",
              School: "DSSE",
            },
          ],
        },
        {
          Department: "EE",
          Instructors: [
            {
              Name: "Mansoor Ahmed",
              ID: 671,
              Department: "EE",
              School: "DSSE",
            },
            {
              Name: "Maria Qasim",
              ID: 611,
              Department: "EE",
              School: "DSSE",
            },
            {
              Name: "Ramiz Ragheb",
              ID: 697,
              Department: "EE",
              School: "DSSE",
            },
          ],
        },
        {
          Department: "CE",
          Instructors: [
            {
              Name: "Faisal Alvi",
              ID: 701,
              Department: "CE",
              School: "DSSE",
            },
            {
              Name: "Ayesha Enayat",
              ID: 749,
              Department: "CE",
              School: "DSSE",
            },
            {
              Name: "Shah Jamal Alvi",
              ID: 721,
              Department: "CE",
              School: "DSSE",
            },
          ],
        },
      ],
    },
    {
      School: "AHSS",
      Departments: [
        {
          Department: "CND",
          Instructors: [
            {
              Name: "Qasim Pasta",
              ID: 543,
              Department: "CND",
              School: "AHSS",
            },
            {
              Name: "Mobeen Movania",
              ID: 551,
              Department: "CND",
              School: "AHSS",
            },
            {
              Name: "Abdul Samad",
              ID: 911,
              Department: "CND",
              School: "AHSS",
            },
          ],
        },
        {
          Department: "SDP",
          Instructors: [
            {
              Name: "Mansoor Ahmed",
              ID: 909,
              Department: "SDP",
              School: "AHSS",
            },
            {
              Name: "Maria Qasim",
              ID: 333,
              Department: "SDP",
              School: "AHSS",
            },
            {
              Name: "Ramiz Ragheb",
              ID: 334,
              Department: "SDP",
              School: "AHSS",
            },
          ],
        },
        {
          Department: "CH",
          Instructors: [
            {
              Name: "Faisal Alvi",
              ID: 444,
              Department: "CH",
              School: "AHSS",
            },
            {
              Name: "Ayesha Enayat",
              ID: 411,
              Department: "CH",
              School: "AHSS",
            },
            {
              Name: "Shah Jamal Alvi",
              ID: 450,
              Department: "CH",
              School: "AHSS",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/api/reports/GetInstructorsList"
        );
        const data2 = await response.json();
        setData(data2);
      } catch (error) {
        console.error("Error:", error);
        alert("Error fetching instructors");
      }
    };
    fetchData();
  }, []);

  // Convert data format
  const convertedData = [];

  // Function to create the required format for each school
  function createSchoolFormat(school, departments) {
    const schoolFormat = {
      School: school,
      Departments: [],
    };

    departments.forEach((department) => {
      const instructors = data.filter(
        (item) => item.School === school && item.Department === department
      );
      const departmentFormat = {
        Department: department,
        Instructors: [],
      };

      instructors.forEach((instructor, index) => {
        departmentFormat.Instructors.push({
          Name: instructor.Name,
          ID: instructor.ID,
          Department: instructor.Department,
          School: instructor.School,
        });
      });

      schoolFormat.Departments.push(departmentFormat);
    });

    return schoolFormat;
  }

  // Extract unique schools and departments
  const schools = [...new Set(data.map((item) => item.School))];
  const departments = {
    DSSE: ["CS", "EE", "CE"],
    AHSS: ["CND", "SDP", "CH"],
  };

  // Iterate through each school
  schools.forEach((school) => {
    convertedData.push(createSchoolFormat(school, departments[school]));
  });

  insturctors = convertedData;

  const areAllInstructorInProgramInState = (targetProgram) => {
    let localInstructors = [];
    selectedInstructors.forEach((instructor) => {
      if (instructor.Department == targetProgram) {
        localInstructors.push(instructor);
      }
    });

    let totalProgramInstructors = 0;

    insturctors.forEach((school) => {
      school.Departments.forEach((department) => {
        if (department.Department != targetProgram) return;
        totalProgramInstructors += department.Instructors.length;
      });
    });

    return totalProgramInstructors == localInstructors.length;
  };

  const getAllInstructorsInProgram = (targetProgram) => {
    let localInstructors = [];
    insturctors.forEach((school) => {
      school.Departments.forEach((department) => {
        if (department.Department != targetProgram) return;
        department.Instructors.forEach((instructor) => {
          localInstructors.push(instructor);
        });
      });
    });
    return localInstructors;
  };

  const setAllInstructorsInProgramInState = (targetProgram) => {
    const allInstructors = getAllInstructorsInProgram(targetProgram);
    const alreadyNotInState = allInstructors.filter(
      (instructor) =>
        !selectedInstructors.find(
          (item) =>
            item.ID == instructor.ID && item.Department == instructor.Department
        )
    );
    setSelectedInstructors([...selectedInstructors, ...alreadyNotInState]);
  };

  const deleteAllInstructorsInProgramInState = (targetProgram) => {
    const allInstructors = getAllInstructorsInProgram(targetProgram);
    const alreadyInState = allInstructors.filter((instructor) =>
      selectedInstructors.find(
        (item) =>
          item.ID == instructor.ID && item.Department == instructor.Department
      )
    );
    setSelectedInstructors(
      selectedInstructors.filter(
        (instructor) =>
          !alreadyInState.find(
            (item) =>
              item.ID == instructor.ID &&
              item.Department == instructor.Department
          )
      )
    );
  };

  const areAllInstructorInSchoolInState = (targetSchool) => {
    let localInstructors = [];
    selectedInstructors.forEach((instructor) => {
      if (instructor.School == targetSchool) {
        localInstructors.push(instructor);
      }
    });

    let totalSchoolInstructors = 0;

    insturctors.forEach((school) => {
      if (school.School != targetSchool) return;
      school.Departments.forEach((department) => {
        totalSchoolInstructors += department.Instructors.length;
      });
    });
    return totalSchoolInstructors == localInstructors.length;
  };

  const getAllInstructorsInSchool = (targetSchool) => {
    let localInstructors = [];
    insturctors.forEach((school) => {
      if (school.School != targetSchool) return;
      school.Departments.forEach((department) => {
        department.Instructors.forEach((instructor) => {
          localInstructors.push(instructor);
        });
      });
    });
    return localInstructors;
  };

  const setAllInstructorsInSchoolInState = (targetSchool) => {
    const allInstructors = getAllInstructorsInSchool(targetSchool);

    const alreadyNotInState = allInstructors.filter(
      (instructor) =>
        !selectedInstructors.find(
          (item) =>
            item.ID == instructor.ID && item.Department == instructor.Department
        )
    );
    setSelectedInstructors([...selectedInstructors, ...alreadyNotInState]);
  };

  const deleteAllInstructorsInSchoolInState = (targetSchool) => {
    const allInstructors = getAllInstructorsInSchool(targetSchool);
    const alreadyInState = allInstructors.filter((instructor) =>
      selectedInstructors.find(
        (item) =>
          item.ID == instructor.ID && item.Department == instructor.Department
      )
    );
    setSelectedInstructors(
      selectedInstructors.filter(
        (instructor) =>
          !alreadyInState.find(
            (item) =>
              item.ID == instructor.ID &&
              item.Department == instructor.Department
          )
      )
    );
  };

  return (
    <section className="GenerateReportsChooseInstructors">
      <h2>Step 02 &mdash; Select Instructors</h2>

      {insturctors.map((school) => (
        <div className="ChooseInstructorsSchoolContainer" key={school.School}>
          <h3
            onClick={(e) => {
              if (
                e.target.id != "GenerateReportsTriangleOpen_" + school.School &&
                e.target.id != "GenerateReportsTriangleClose_" + school.School
              )
                return;

              const departments = document.querySelectorAll(
                `.ChooseInstructorsDepartment_${school.School}`
              );

              // const currentStyle = departments[0].style.display

              // if(currentStyle === "block"){
              //     const allOpenedTriangles = document.querySelectorAll(`.ChooseInstructorsDepartment_${school.School}_tri_close`)
              //     allOpenedTriangles.forEach(triangle => {
              //         triangle.style.display = "none"
              //     })
              //     console.log(document.querySelectorAll(`.ChooseInstructorsDepartment_${school.School}_tri_close`));
              // }

              departments.forEach((department) => {
                const currentStyle = department.style.display;

                department.style.display =
                  department.style.display === "none" || !currentStyle
                    ? "block"
                    : "none";
              });

              const subInstructors = document.querySelectorAll(
                `.ChooseInstructorsDepartment_${school.School}_ins`
              );
              subInstructors.forEach((instructor) => {
                const currentStyle = instructor.style.display;
                instructor.style.display =
                  instructor.style.display === "none" || !currentStyle
                    ? "none"
                    : "none";
              });

              const selectedItem = document.getElementById(
                `GenerateReportsTriangleClose_${school.School}`
              );

              if (
                selectedItem.style.display === "inline-block" ||
                selectedItem.style.display === ""
              ) {
                selectedItem.style.display = "none";
                document.getElementById(
                  `GenerateReportsTriangleOpen_${school.School}`
                ).style.display = "inline-block";
              } else {
                document.getElementById(
                  `GenerateReportsTriangleOpen_${school.School}`
                ).style.display = "none";
                document.getElementById(
                  `GenerateReportsTriangleClose_${school.School}`
                ).style.display = "inline-block";
              }

              const allOpenedTriangles = document.querySelectorAll(
                `.CustomTriangleOpen_${school.School}`
              );
              allOpenedTriangles.forEach((triangle) => {
                triangle.style.display = "none";
              });

              const allClosedTriangles = document.querySelectorAll(
                `.CustomTriangleClose_${school.School}`
              );
              allClosedTriangles.forEach((triangle) => {
                triangle.style.display = "inline-block";
              });
            }}
            className={`ChooseInstructorsSchool`}
          >
            <i
              className={`fa-solid fa-play GenerateReportsTriangleClose ChooseInstructorsDepartment_${school.School}_tri_close`}
              id={`GenerateReportsTriangleClose_${school.School}`}
            ></i>
            <i
              className={`fa-solid fa-play GenerateReportsTriangleOpen ChooseInstructorsDepartment_${school.School}_tri_open`}
              id={`GenerateReportsTriangleOpen_${school.School}`}
            >
              {" "}
            </i>
            <span
              id="customClickFunctionForSchool"
              onClick={(e) => {
                if (
                  e.currentTarget.childNodes[0].className !=
                  "downloadReportModal_CheckEmpty"
                ) {
                  deleteAllInstructorsInSchoolInState(school.School);
                  return;
                }
                setAllInstructorsInSchoolInState(school.School);
                let currentTriangleStyle = document.getElementById(
                  "GenerateReportsTriangleOpen_" + school.School
                ).style.display;
                if (
                  currentTriangleStyle === "none" ||
                  currentTriangleStyle === ""
                ) {
                  document
                    .getElementById(
                      "GenerateReportsTriangleClose_" + school.School
                    )
                    .click();
                  let allSubPrograms = document.querySelectorAll(
                    `.ChooseInstructorsDepartment_${school.School}`
                  );
                  allSubPrograms.forEach((subProgram) => {
                    subProgram.click();
                  });
                }

                let allSubPrograms = document.querySelectorAll(
                  `.ChooseInstructorsDepartment_${school.School}`
                );
                allSubPrograms.forEach((subProgram) => {
                  let subProgramElement = document.getElementById(
                    "GenerateReportsTriangleClose_" +
                      subProgram.innerText.trim()
                  )?.style.display;

                  if (
                    subProgramElement !== "none" &&
                    subProgramElement !== ""
                  ) {
                    subProgram.childNodes[0].click();
                  }
                });
              }}
            >
              {areAllInstructorInSchoolInState(school.School) ? (
                <span
                  id="customClickFunctionForSchoolFilled"
                  className="downloadReportModal_CheckFilled"
                >
                  <i className="fa-solid fa-check"></i>
                </span>
              ) : (
                <span className="downloadReportModal_CheckEmpty">
                  <i className="fa-solid fa-check"></i>
                </span>
              )}
            </span>
            &nbsp;
            {school.School}
          </h3>
          {school.Departments.map((department) => (
            <div>
              <h4
                onClick={(e) => {
                  if (
                    e.target.id !=
                      "GenerateReportsTriangleOpen_" + department.Department &&
                    e.target.id !=
                      "GenerateReportsTriangleClose_" + department.Department
                  )
                    return;
                  const instructors = document.querySelectorAll(
                    `.ChooseInstructorsInstructor_${department.Department}`
                  );
                  instructors.forEach((instructor) => {
                    const currentStyle = instructor.style.display;
                    instructor.style.display =
                      instructor.style.display === "none" || !currentStyle
                        ? "block"
                        : "none";
                  });
                  const selectedItem = document.getElementById(
                    `GenerateReportsTriangleClose_${department.Department}`
                  );

                  if (
                    selectedItem.style.display === "inline-block" ||
                    selectedItem.style.display === ""
                  ) {
                    selectedItem.style.display = "none";
                    document.getElementById(
                      `GenerateReportsTriangleOpen_${department.Department}`
                    ).style.display = "inline-block";
                  } else {
                    document.getElementById(
                      `GenerateReportsTriangleOpen_${department.Department}`
                    ).style.display = "none";
                    document.getElementById(
                      `GenerateReportsTriangleClose_${department.Department}`
                    ).style.display = "inline-block";
                  }
                }}
                className={`ChooseInstructorsDepartment ChooseInstructorsDepartment_${school.School}`}
              >
                <i
                  className={`fa-solid fa-play GenerateReportsTriangleClose CustomTriangleClose_${school.School}`}
                  id={`GenerateReportsTriangleClose_${department.Department}`}
                ></i>
                <i
                  className={`fa-solid fa-play GenerateReportsTriangleOpen CustomTriangleOpen_${school.School}`}
                  id={`GenerateReportsTriangleOpen_${department.Department}`}
                >
                  {" "}
                </i>
                <span
                  id="customClickFunctionForProgram"
                  onClick={(e) => {
                    if (
                      e.currentTarget.childNodes[0].className !=
                      "downloadReportModal_CheckEmpty"
                    ) {
                      deleteAllInstructorsInProgramInState(
                        department.Department
                      );
                      return;
                    }
                    setAllInstructorsInProgramInState(department.Department);
                    let currentTriangleStyle = document.getElementById(
                      "GenerateReportsTriangleOpen_" + department.Department
                    ).style.display;
                    if (
                      currentTriangleStyle === "none" ||
                      currentTriangleStyle === ""
                    ) {
                      document
                        .getElementById(
                          "GenerateReportsTriangleClose_" +
                            department.Department
                        )
                        .click();
                      let allSubPrograms = document.querySelectorAll(
                        `.ChooseInstructorsDepartment_${department.Department}`
                      );
                      allSubPrograms.forEach((subProgram) => {
                        subProgram.click();
                      });
                    }
                  }}
                >
                  {areAllInstructorInProgramInState(department.Department) ? (
                    <span
                      id="customClickFunctionForSchoolFilled"
                      className="downloadReportModal_CheckFilled"
                    >
                      <i className="fa-solid fa-check"></i>
                    </span>
                  ) : (
                    <span className="downloadReportModal_CheckEmpty">
                      <i className="fa-solid fa-check"></i>
                    </span>
                  )}
                </span>
                &nbsp;
                {department.Department}
              </h4>
              {department.Instructors.map((instructor) => (
                <div
                  className={`ChooseInstructorsInstructor ChooseInstructorsInstructor_${department.Department} ChooseInstructorsDepartment_${school.School}_ins`}
                >
                  <label
                    onClick={(e) => {
                      e.preventDefault();

                      if (
                        selectedInstructors.find(
                          (item) =>
                            item.ID == instructor.ID &&
                            item.Department == instructor.Department
                        )
                      ) {
                        setSelectedInstructors(
                          selectedInstructors.filter(
                            (item) => item.ID != instructor.ID
                          )
                        );
                      } else {
                        setSelectedInstructors([
                          ...selectedInstructors,
                          instructor,
                        ]);
                      }
                    }}
                  >
                    {selectedInstructors.find(
                      (item) =>
                        item.ID == instructor.ID &&
                        item.Department == instructor.Department
                    ) ? (
                      <span className="downloadReportModal_CheckFilled">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    ) : (
                      <span className="downloadReportModal_CheckEmpty">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    )}
                    <span className="ChooseInstructorsInstructorName">
                      {instructor.Name}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
