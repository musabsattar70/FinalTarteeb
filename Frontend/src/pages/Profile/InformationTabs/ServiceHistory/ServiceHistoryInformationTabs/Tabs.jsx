

export const Tabs = ({
    tabDetails,
    selectedTab,
    setSelectedTab
}) => {

    return (

        <div className="service_history_tabs">

            {tabDetails.map((item, index) =>
                <span
                    className={item.Name == selectedTab.Name ? "active_service_history_tab" : ""}
                    key={index}
                    onClick={e => setSelectedTab(item)}
                >{item.Name}</span>
            )}

        </div>

    );

}