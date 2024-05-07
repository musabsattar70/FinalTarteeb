import HuLogoHeader from "../assets/HuLogoHeader.png";
import { Link, useNavigate } from "react-router-dom";

import { PAGE_ROUTES } from "../constants/PageRoutesPath";

export const Header = () => {
    const navigator = useNavigate();

    return (
        <header>
            <div className="header_wrapper">
                <div className="nav_logo">
                    <img src={HuLogoHeader} alt="HU Logo" />
                </div>

                <div className="nav_links">
                    <span>
                        <Link
                            to={PAGE_ROUTES.PROFILE + "/2"}
                            className={
                                "/" + location.pathname.split("/")[1] ==
                                PAGE_ROUTES.PROFILE
                                    ? "active_link"
                                    : ""
                            }
                        >
                            Profile
                        </Link>
                    </span>

                    <span>
                        <Link
                            to={PAGE_ROUTES.DASHBOARD}
                            className={
                                "/" + location.pathname.split("/")[1] ==
                                PAGE_ROUTES.DASHBOARD
                                    ? "active_link"
                                    : ""
                            }
                        >
                            Dashboard
                        </Link>
                    </span>

                    <span>
                        <Link
                            to={PAGE_ROUTES.REPORTS}
                            className={
                                "/" + location.pathname.split("/")[1] ==
                                PAGE_ROUTES.REPORTS
                                    ? "active_link"
                                    : ""
                            }
                        >
                            Reports
                        </Link>
                    </span>
                    {/* <span>
                        <Link
                            to={PAGE_ROUTES.SEARCH}
                            className={
                                "/" + location.pathname.split("/")[1] ==
                                PAGE_ROUTES.SEARCH
                                    ? "active_link"
                                    : ""
                            }
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                            Search
                        </Link>
                    </span> */}
                </div>

                <div className="nav_side">
                    <button
                        onClick={(e) => {
                            navigator(PAGE_ROUTES.LOGIN);
                            localStorage.removeItem("token");
                        }}
                    >
                        <i className="fa-solid fa-right-from-bracket"></i>{" "}
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};
