import { useState } from "react";
import { Tabs } from "./Tabs";
import { PersonalDetails } from "./PersonalDetails/Index";
import { EducationalBackground } from "./EducationalBackground/Index";
import { HistoryAtHU } from "./HistoryAtHU/Index";
import { ServiceHistory } from "./ServiceHistory/Index";
import { ResearchAndScholarshpHistory } from "./ResearchAndScholarshpHistory/Index";


export const InformationTabs = () => {

    const tabDetails = [
        {
            "Name": "Personal Details",
            "Component": <PersonalDetails />
        },
        {
            "Name": "Educational Background",
            "Component": <EducationalBackground />
        },
        {
            "Name": "History at HU",
            "Component": <HistoryAtHU />
        },
        {
            "Name": "Service History",
            "Component": <ServiceHistory />
        },
        {
            "Name": "Research and Scholarship History",
            "Component": <ResearchAndScholarshpHistory />
        }
    ]

    const [currentTab, setCurrentTab] = useState(tabDetails[0]);

    return (

        <div className="information_tabs">
            
            <Tabs 
                tabDetails={tabDetails}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />

            <div className="information_tab_details">
                {currentTab.Component}
            </div>

        </div>

    );

}   