import Main from '@govuk-react/main';
import Tabs from '@govuk-react/tabs';
import { BrowserRouter as Router, Routes, Outlet, Route, Link, useLocation, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

//@author Saba, Camila, Thiviya, Thushani and Amanah

function GPRecordsTabsMain() {

    const [selectedTab, setSelectedTab] = useState(1);//default selected tab
    const handleTabSelect = (index, event) => {
        setSelectedTab(index);
    };
    {/*Controls how user moves from one tab to another*/ }
    return (
        <>
            <Main className="myMain">
                <Tabs >
                    <Tabs.Title>Contents</Tabs.Title>
                    <Tabs.List>
                        <Tabs.Tab selected={selectedTab === 1} onClick={() => handleTabSelect(1)}><Link className={selectedTab === 1 ? "tabsSt2 selected" : "tabsSt1"} to="GPRecordsTab1">Personal Details</Link></Tabs.Tab>
                        <Tabs.Tab selected={selectedTab === 2} onClick={() => handleTabSelect(2)}><Link className={selectedTab === 2 ? "tabsSt2 selected" : "tabsSt1"} to="GPRecordsTab2">Appointment History</Link></Tabs.Tab>
                        <Tabs.Tab selected={selectedTab === 3} onClick={() => handleTabSelect(3)}><Link className={selectedTab === 3 ? "tabsSt2 selected" : "tabsSt1"} to="GPRecordsTab3">My Account</Link></Tabs.Tab>
                        {/*User can chnage the tabs onClick - changes according to it*/}
                       
                    </Tabs.List>
                    <Tabs.Panel selected >
                        <Outlet />
                    </Tabs.Panel>
                </Tabs>

            </Main>
            
            
        </>
    );
}
export default GPRecordsTabsMain;