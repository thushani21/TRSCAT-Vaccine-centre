import React from 'react';
import Panel from '@govuk-react/panel';
//import Link from '@govuk-react/link';
import {Page, Main} from "govuk-react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';

// @author done by Camila, Thushani, Amanah, Thiviya and Saba

//this panel is to confirm if the medical record has been updated
function MyPanel() {
    return ( 
        <>
            <Main className = "myMain">
                <Panel title = "Records Updated"></Panel>   {/* confirmation to the doctor that the medical record has been updated */}              
                <Link to="/Viewmedicalrecord">View Medical Record</Link> {/* will redirect the doctor to view medical records again */}
                <br/>
                <br/>
            </Main>
        </>
    ); 
}
export default MyPanel;