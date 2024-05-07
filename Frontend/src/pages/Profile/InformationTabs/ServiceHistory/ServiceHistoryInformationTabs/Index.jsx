import { useState } from "react";
import { Tabs } from "./Tabs";
import { Appointments } from "./Appointments/Index";
import { CommunityService } from "./CommunityService/Index";
import { VoluntaryAppointments } from "./VoluntaryAppointments/Index";
import { WorkshopsAndLectures } from "./WorkshopsAndLectures/Index";


export const ServiceHistoryInformationTabs = () => {

    const tabDetails = [

        {
            "Name": "Appointments",
            "Component": <Appointments />
        },
        {
            "Name": "Community Service",
            "Component": <CommunityService />
        },

        {
            "Name": "Workshops/Lectures",
            "Component": <WorkshopsAndLectures />
        }
    ]

    const [selectedTab, setSelectedTab] = useState(tabDetails[0])

    return(

        <div className="service_history">

            <Tabs 
                tabDetails={tabDetails}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />

            <div className="service_history_tab_components">

                {selectedTab.Component}

            </div>

        </div>

    );

}