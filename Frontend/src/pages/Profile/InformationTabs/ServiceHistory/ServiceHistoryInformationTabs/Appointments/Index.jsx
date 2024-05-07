import { useState } from "react";
import { ClubPatronage } from "./ClubPatronage/Index";
import { CommitteeMemberships } from "./CommitteeMemberships/Index";
import { StaffAppointments } from "./StaffAppointments/Index";


export const Appointments = () => {

    const appointmentTabs = [
        {
            "Name": "Staff Appointments",
            "Component": <StaffAppointments />
        },
        {
            "Name": "Committee Memeberships",
            "Component": <CommitteeMemberships />
        },
        {
            "Name": "Club Patronage",
            "Component": <ClubPatronage />
        }
    ]

    const [selectedTab, setSelectedTab] = useState(appointmentTabs[0])

    return (

        <div>


            <div className="service_history_tab_components_tabs">
                {appointmentTabs.map((item, index) =>
                    <span
                        key={index}
                        
                    >
                        <b
                            className={selectedTab.Name == item.Name ? "active_tab_inside_tabs" : ""}
                            onClick={e => setSelectedTab(item)}
                        >
                            {item.Name}
                        </b>
                    </span>
                )}

            </div>


            {selectedTab.Component}

        </div>

    );

}