import { Breadcrumbs } from 'govuk-react';
import Main from '@govuk-react/main';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import { CurrentContext } from "../App";
import React, { useState, useContext, useEffect } from 'react';

// @author done by Camila, Thushani, Amanah, Thiviya and Saba

function MyBreadcrumbs() {

    const location = useLocation();
    const context = useContext(CurrentContext);

    return (
        <>
            <Main className="myMain">

                {/*camila's****************************************************/}

                {location.pathname === '/Appointments/ViewAppAdmin' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/ViewAppAdmin">
                                Doctor's Id
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}  

                {(location.pathname === '/Appointments/ViewAppAdmin/ViewAppList' && String(context.userId).includes('A')) && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/ViewAppAdmin">
                                Doctor's Id
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/ViewAppAdmin/ViewAppList">
                                View Appointments List
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}  
                {(location.pathname === '/Appointments/ViewAppAdmin/ViewAppList' && !isNaN(context.userId)) && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/ViewAppAdmin/ViewAppList">
                                View Appointments List
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )} 

                {location.pathname === '/Appointments/ViewAppAdmin/CancelApp' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/ViewAppAdmin">
                                Doctor's Id
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/ViewAppAdmin/CancelApp">
                                Cancel Appointment
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}  
                {location.pathname === '/Appointments/CancelApp' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/CancelApp">
                                Cancel Appointments
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}  
                {location.pathname === '/Appointments/CancelConfirmation' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}

                {/*Saba's****************************************************/}

                {(location.pathname === '/GPRecordsTabsMain' || location.pathname === '/GPRecordsTabsMain/GPRecordsTab1' || location.pathname === '/GPRecordsTabsMain/GPRecordsTab2' || location.pathname === '/GPRecordsTabsMain/GPRecordsTab3') && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain">
                                GP Records
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}  

                {location.pathname === '/GPRecordsTabsMain/GPRecordsTab1/NumberChange' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain">
                                GP Records
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain/GPRecordsTab1/NumberChange">
                                Change Number
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}

                {location.pathname === '/GPRecordsTabsMain/GPRecordsTab1/ChangeEmail' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain">
                                GP Records
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain/GPRecordsTab1/ChangeEmail">
                                Change Email
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}  
                
                {location.pathname === '/GPRecordsTabsMain/SavedChangesPan' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain">
                                GP Records
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain/SavedChangesPan">
                                Saved Changes
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}
                
                {location.pathname === '/GPRecordsTabsMain/GPRecordsTab3/DeRegister' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain">
                                GP Records
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain/GPRecordsTab3/DeRegister">
                                De-Registration
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}
                
                {location.pathname === '/GPRecordsTabsMain/AccountDeletedPan' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain">
                                GP Records
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain/AccountDeletedPan">
                                Account Deleted
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}
                
                {location.pathname === '/GPRecordsTabsMain/GPRecordsTab3/ChangePassword' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain">
                                GP Records
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain/GPRecordsTab3/ChangePassword">
                                Change Password
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}
                
                {location.pathname === '/GPRecordsTabsMain/PasswordChangedPan' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/GPRecordsTabsMain">
                                GP Records
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}


                {/*Thiviya's****************************************************/}

                {location.pathname === '/MyNHSinput' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/MyNHSinput">
                                Records
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}


                {location.pathname === '/MyNHSinput/Viewmedicalrecord' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/MyNHSinput">
                                Records
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/MyNHSinput/Viewmedicalrecord">
                                Medical Record
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}   
                
                {location.pathname === '/MyNHSinput/AddMDRTable' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/MyNHSinput">
                                Records
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/MyNHSinput/Viewmedicalrecord">
                                Medical Record
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/MyNHSinput/AddMDRTable">
                                Add Medical Record
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}
            
                {location.pathname === '/MyNHSinput/MyPanel' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/MyNHSinput">
                                Records
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/MyNHSinput/Viewmedicalrecord">
                                Medical Record
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}   


                {/*Thushani's****************************************************/}

                {location.pathname === '/Appointments' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}
                {location.pathname === '/Appointments/Bookapp' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/Bookapp">
                                Book Appointment - Date
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}
                {location.pathname === '/Appointments/Bookapp/Bookapp2' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/Bookapp">
                                Book Appointment - Date
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/Bookapp/Bookapp2">
                                Book Appointment - Time
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}
                {location.pathname === '/Appointments/Bookapp/Bookapp2/AppointmentDescription' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/Bookapp">
                                Book Appointment - Date
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/Bookapp/Bookapp2">
                                Book Appointment - Time
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments/Bookapp/Bookapp2/AppointmentDescription">
                                Book Appointment - Description
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}

                {location.pathname === '/Appointments/Bookapp/Bookapp2/AppointmentDescription/Bookapp3' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/Appointments">
                                Appointments
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}


                {/*Amanah's****************************************************/}

                {location.pathname === '/RegistrationPage1' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1">
                                Register
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )} 

                {location.pathname === '/RegistrationPage1/RegistrationNHS' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1">
                                Register
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationNHS">
                                NHS Number
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}


                {location.pathname === '/RegistrationPage1/RegistrationNHS/RegistrationDetails' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1">
                                Register
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationNHS">
                                NHS Number
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationNHS/RegistrationDetails">
                                Details
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}
                {location.pathname === '/RegistrationPage1/RegistrationNHS/RegistrationDetails/RegistrationPassword' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1">
                                Register
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationNHS">
                                NHS Number
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationNHS/RegistrationDetails">
                                Details
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationNHS/RegistrationDetails/RegistrationPassword">
                                Password
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}

                {location.pathname === '/RegistrationPage1/RegistrationPostcode' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1">
                                Register
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationPostcode">
                                Post Code
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}



                {location.pathname === '/RegistrationPage1/RegistrationPostcode/RegistrationDetails' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1">
                                Register
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationPostcode">
                                Post Code
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationPostcode/RegistrationDetails">
                                Details
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}
                {location.pathname === '/RegistrationPage1/RegistrationPostcode/RegistrationDetails/RegistrationPassword' && (
                    <>
                        <Breadcrumbs>
                            <Breadcrumbs.Link href="/Home">
                                Home
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1">
                                Register
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationPostcode">
                                Post Code
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationPostcode/RegistrationDetails">
                                Details
                            </Breadcrumbs.Link>
                            <Breadcrumbs.Link href="/RegistrationPage1/RegistrationPostcode/RegistrationDetails/RegistrationPasswor">
                                Password
                            </Breadcrumbs.Link>
                        </Breadcrumbs>
                    </>
                )}

            </Main>

        </>
    );
}
export default MyBreadcrumbs;