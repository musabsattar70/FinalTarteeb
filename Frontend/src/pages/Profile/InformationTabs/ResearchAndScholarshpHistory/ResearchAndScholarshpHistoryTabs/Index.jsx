import { useState } from "react";
import { Tabs } from "./Tabs";
import { Publications } from "./Publications/Index";
import { GrantsAvailed } from "./GrantsAvailed/Index";
import { AttendedConferences } from "./AttendedConferences/Index";
import { Supervisions } from "./Supervisions/Index";


export const ResearchAndScholarshpHistoryTabs = () => {

    const tabDetails = [

        {
            "Name": "Publications",
            "Component": <Publications />
        },
        {
            "Name": "Grants Availed",
            "Component": <GrantsAvailed />
        },
        {
            "Name": "Attended Conferences",
            "Component": <AttendedConferences />
        },
        {
            "Name": "Supervisions",
            "Component": <Supervisions />
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