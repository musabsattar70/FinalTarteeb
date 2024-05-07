

export const Tabs = ({
    tabDetails,
    currentTab,
    setCurrentTab
}) => {



    return(

        <div className="tabs">

            {tabDetails.map((item, index)  =>
                <span
                    key={index}
                    className={item.Name == currentTab.Name ? "active_tab" : ""}
                    onClick={e => setCurrentTab(item)}
                >
                    {item.Name}
                </span>
            )}


        </div>

    );

}