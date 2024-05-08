import { useEffect, useState } from "react";
import { DownloadReportModal } from "./DownloadReportModal";
import { useParams } from "react-router-dom";

export const ProfileInformation = () => {
  const [instructorProfileInformation, setInstructorProfileInformation] =
    useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchInstructorProfileInformation = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/GetAdminInfo/${id}`
      );
      if (!response.ok) {
        return alert("Error fetching instructor profile information!");
      }
      const data = await response.json();
      setInstructorProfileInformation(data.Data);
    };
    fetchInstructorProfileInformation();
  }, []);

  const [modalStatus, setModalStatus] = useState(false);

  return (
    <div className="profile_information">
      <div className="profile_information_image">
        <div className="profile_information_image_wrapper">
          <img
            id="profileImage"
            src={
              import.meta.env.VITE_API_URL +
              "/images/" +
              instructorProfileInformation.ProfileImagePath
            }
            alt={instructorProfileInformation.FirstName}
          />
          <label for="imageInput">
            <i className="fa-solid fa-pen"></i>
          </label>
          <input
            onChange={async (e) => {
              const file = e.target.files[0];
              const formData = new FormData();
              formData.append("profileImage", file);
              const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/media/upload/${id}`,
                {
                  method: "POST",
                  body: formData,
                }
              );

              if (!response.ok) {
                return alert("Error uploading image!");
              }

              const reader = new FileReader();
              reader.onload = function () {
                const output = document.getElementById("profileImage");
                output.src = reader.result;
              };

              reader.readAsDataURL(file);
            }}
            id="imageInput"
            type="file"
            style={{ display: "none" }}
            accept=".png,.jpg,.jpeg,.jiff,.webp"
          />
        </div>

        <span>
          {instructorProfileInformation.FirstName +
            " " +
            instructorProfileInformation.LastName}
          , {instructorProfileInformation.School}
        </span>
        <span>{instructorProfileInformation.Designation}</span>
        {/* <span>{instructorProfileInformation.Designation1}</span> */}
      </div>

      <div className="profile_information_details">
        <span>
          Email: <b>{instructorProfileInformation.Email}</b>
        </span>
        <span>
          Joining Date:{" "}
          <b>{instructorProfileInformation.JoiningDate?.slice(0, 10)}</b>
        </span>
        <span>
          Onboard Status: <b>{instructorProfileInformation.FacultyType}</b>
        </span>
      </div>
      <button
        onClick={() => {
          setModalStatus(true);
        }}
        className="downloadReportButtonProfile"
      >
        Resume (PDF) <i className="fa-solid fa-download"></i>
      </button>

      {modalStatus && <DownloadReportModal setModalStatus={setModalStatus} />}
    </div>
  );
};
