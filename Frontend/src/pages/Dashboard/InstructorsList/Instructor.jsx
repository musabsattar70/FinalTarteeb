import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "../../../constants/PageRoutesPath";


export const Instructor = ({
    instructorDetails
}) => {


    return (
        <div className="instructor">
            <Link
                to={PAGE_ROUTES.PROFILE + "/" + instructorDetails.UserId}
            >
                <img src={"http://localhost:7075/images/" + instructorDetails.ProfileImagePath} alt={instructorDetails.Name} />
                <span>
                    {instructorDetails.FirstName} {instructorDetails.LastName}
                </span>
            </Link>
        </div>
    );
}