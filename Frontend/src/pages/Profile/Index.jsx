import { useNavigate, useParams } from "react-router-dom";
import { PAGE_ROUTES } from "../../constants/PageRoutesPath";
import { useState } from "react";
import { Header } from "../../components/Header";
import { ProfileInformation } from "./ProfileInformation/Index";
import { InformationTabs } from "./InformationTabs/Index";

export const Profile = () => {
    const { id } = useParams();
    const navigator = useNavigate();

    if (!id) navigator(PAGE_ROUTES.DASHBOARD);
    if(!localStorage.getItem("token")) window.location.href = "/login";


    return (
        <>
            <Header />

            <main className="my_profile_section_main">
                <ProfileInformation />

                <InformationTabs />
            </main>
        </>
    );
};
