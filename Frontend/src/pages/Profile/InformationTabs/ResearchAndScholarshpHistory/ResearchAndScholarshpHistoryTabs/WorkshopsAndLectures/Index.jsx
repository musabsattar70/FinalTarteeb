import { useState } from "react";


export const WorkshopsAndLectures = () => {

    const workshopsAndLecturesTabs = [
        {
            "Name": "Habib",
            "Component": <h1></h1>
        },
        {
            "Name": "External",
            "Component": <h1></h1>
        }
    ]

    const [selectedTab, setSelectedTab] = useState(workshopsAndLecturesTabs[0])

    return (

        <div>


            <div className="service_history_tab_components_tabs">
                {workshopsAndLecturesTabs.map((item, index) =>
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