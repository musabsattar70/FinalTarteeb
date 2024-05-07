import { useState } from "react";
import { AtHabibUniversity } from "./AtHabibUniversity/Index";
import { Externel } from "./Externel/Index";


export const Supervisions = () => {

    const supervisionsTabs = [
        {
            "Name": "At Habib University",
            "Component": <AtHabibUniversity />
        },
        {
            "Name": "External",
            "Component": <Externel />
        }
    ]

    const [selectedTab, setSelectedTab] = useState(supervisionsTabs[0])

    return (

        <div>


            <div className="service_history_tab_components_tabs">
                {supervisionsTabs.map((item, index) =>
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