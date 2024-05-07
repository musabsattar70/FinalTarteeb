import { useState } from "react"

export const ReportsOptions = ({
    selectedPrintOptions,
    setSelectedPrintOptions,
    printTabOptions
}) => {


    return (
        <section className="GenerateReportsPrintSettings GenerateReportsChooseInstructors">
            <h2>Step 01 &mdash; Select Report(s)</h2>
            <div className="GenerateReportsPrintSettingsWrapper">
                {printTabOptions.map((tab, i) => <div className="GenerateReportsPrintSettingsTab">

                    <label
                        onClick={e => {
                            e.preventDefault()
                            // console.log(e.target.tagName)
                            if (e.target.classList.contains('fa-check') || e.target.tagName == 'LABEL') {
                                
                                if(document.getElementById(`GenerateReportsPrintSettingsSubTab_${i}`).style.display != 'block') {
                                    document.getElementById(`GenerateReportsPrintSettingsSubTab_${i}`).style.display = 'block'
                                    document.getElementById(`GenerateReportsTriangle_${i}`).classList.remove('GenerateReportsTriangleClose')
                                    document.getElementById(`GenerateReportsTriangle_${i}`).classList.add('GenerateReportsTriangleOpen')
                                    document.getElementById(`GenerateReportsTriangle_${i}`).style.display = 'inline-block'
                                }

                                if (selectedPrintOptions.find(item => item.Title == tab.Title)) {
                                    setSelectedPrintOptions(selectedPrintOptions.filter(item => item.Title != tab.Title))
                                } else {
                                    setSelectedPrintOptions([...selectedPrintOptions, tab])

                                }
                            }
                        }}
                    >
                        <i
                            onClick={e => {
                                if (document.getElementById(`GenerateReportsPrintSettingsSubTab_${i}`).style.display == 'block' || document.getElementById(`GenerateReportsPrintSettingsSubTab_${i}`).style.display == '') {
                                    document.getElementById(`GenerateReportsPrintSettingsSubTab_${i}`).style.display = 'none'
                                } else {
                                    document.getElementById(`GenerateReportsPrintSettingsSubTab_${i}`).style.display = 'block'
                                }

                                if(document.getElementById(`GenerateReportsPrintSettingsSubTab_${i}`).style.display == 'block') {
                                    e.target.classList.remove('GenerateReportsTriangleClose')
                                    e.target.classList.add('GenerateReportsTriangleOpen')
                                    e.target.style.display = 'inline-block'

                                } else {
                                    e.target.classList.remove('GenerateReportsTriangleOpen')
                                    e.target.classList.add('GenerateReportsTriangleClose')
                                    e.target.style.display = 'inline-block'
                                }
                            }}
                            className={`fa-solid fa-play GenerateReportsTriangleClose` }
                            id={"GenerateReportsTriangle_"+i}
                        />
                        {selectedPrintOptions.find(item => item.Title == tab.Title) ?
                            <span

                                className="downloadReportModal_CheckFilled"
                            >
                                <i className="fa-solid fa-check"></i>
                            </span> :
                            <span className="downloadReportModal_CheckEmpty">
                                <i className="fa-solid fa-check"></i>
                            </span>
                        }
                        {tab.Title}
                    </label>

                    <div className="GenerateReportsPrintSettingsSubTabs" id={`GenerateReportsPrintSettingsSubTab_${i}`} style={{display: "none"}} >
                        {tab.SubCategories.map(subTab =>
                            <label

                                onClick={e => {
                                    e.preventDefault()

                                    if (selectedPrintOptions.find(item => item.Title == tab.Title && item.SubCategories.find(item => item == subTab))) {
                                        const index = selectedPrintOptions.findIndex(item => item.Title == tab.Title && item.SubCategories.find(item => item == subTab))
                                        const newTab = selectedPrintOptions[index]
                                        newTab.SubCategories = newTab.SubCategories.filter(item => item != subTab)
                                        if (newTab.SubCategories.length == 0) {
                                            setSelectedPrintOptions(selectedPrintOptions.filter(item => item != newTab))
                                            return
                                        }
                                        setSelectedPrintOptions([...selectedPrintOptions.slice(0, index), newTab, ...selectedPrintOptions.slice(index + 1)])
                                        // setSelectedPrintOptions(selectedPrintOptions.filter(item => item != subTab))
                                    } else {

                                        if (!selectedPrintOptions.find(item => item.Title == tab.Title)) {
                                            const tabCopy = tab
                                            tabCopy.SubCategories = [subTab]
                                            setSelectedPrintOptions([...selectedPrintOptions, tabCopy])
                                        }
                                        else {
                                            const index = selectedPrintOptions.findIndex(item => item.Title == tab.Title)
                                            const newTab = selectedPrintOptions[index]
                                            newTab.SubCategories.push(subTab)
                                            setSelectedPrintOptions([...selectedPrintOptions.slice(0, index), newTab, ...selectedPrintOptions.slice(index + 1)])
                                        }
                                        // if (selectedPrintOptions.find(item => item.Title == tab.Title)) {
                                        //     const index = selectedPrintOptions.findIndex(item => item.Title == tab.Title)
                                        //     const newTab = selectedPrintOptions[index]
                                        //     newTab.SubCategories.push(subTab)
                                        //     setSelectedPrintOptions([...selectedPrintOptions.slice(0, index), newTab, ...selectedPrintOptions.slice(index + 1)])
                                        // }
                                        // setSelectedPrintOptions([...selectedPrintOptions, subTab])

                                    }
                                }}
                            >

                                {selectedPrintOptions.find(item => item.Title == tab.Title && item.SubCategories.find(item => item == subTab)) ?
                                    <span

                                        className="downloadReportModal_CheckFilled"
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span> :
                                    <span className="downloadReportModal_CheckEmpty">
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                }
                                {subTab}
                            </label>)}
                    </div>
                </div>)}
            </div>

        </section>
    )
}