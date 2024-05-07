import { useState } from "react";


export const Appointments = () => {

    const appointmentTabs = [
        {
            "Name": "Staff Appointments",
            "Component": <h1></h1>
        },
        {
            "Name": "Committee Memeberships",
            "Component": <h1></h1>
        },
        {
            "Name": "Club Patronage",
            "Component": <h1></h1>
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


            <div className="personal_details_input_wrapper">
                <label htmlFor=""></label>
            </div>

        </div>

    );

}