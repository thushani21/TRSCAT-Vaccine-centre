import styled from 'styled-components';

import React from "react";
import { Main, H1, H2, H3, H4, H5 } from "govuk-react";
import Paragraph from '@govuk-react/paragraph';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, NavLink, Outlet } from 'react-router-dom';
import { CurrentContext } from '../../App';
import { useState, useContext, useEffect, createContext } from 'react';
// @author done by Camila, Thushani, Amanah, Thiviya and Saba

function Appointments() {
   
    const context = useContext(CurrentContext);
    console.log(context.userId)
    const handleClick = () => {

        context.setCancelApp(true);

    }

    return (
        <>
            <Main className="myMain">  {/* First page to Book/cencel/View appointments*/}
                <H3>Join the fight against the COVID-19 <br /> Book, Cancel and View your Appointments</H3>
                <H4>VACCINE</H4>
                <Paragraph>
                    Welcome to our COVID-19 vaccine appointment page. Here, you can easily book, cancel, and view your
                    appointments for the COVID-19 vaccine. Our user-friendly interface makes it simple to manage your
                    vaccination progress and stay up-to-date with the latest information on COVID-19 vaccines. Plus, with our
                    secure and reliable online platform, you can rest assured that your personal information IS protected at all
                    times. Get vaccinated on your terms and join the fight against COVID-19 today.
                </Paragraph>

                <H4>APPOINTMENTS</H4>

                

                {String(context.userId).includes('A') && (
                    <>

                        <div>
                            <Link onClick={handleClick} to="ViewAppAdmin">
                                Cancel an appointment <br /> <br />
                            </Link>
                            <Link to="/Appointments/ViewAppAdmin"> {/* This is a link element that goes to the "/Appointments/ViewAppAdmin" route */}
                                View appointments <br /> <br />
                            </Link>
                        </div>

                    </>
                )}
                {String(context.userId).includes('D') && (
                    <>

                        <div>
                            <Link to="/Appointments/ViewAppList">
                                View appointments <br /> <br />
                            </Link>
                        </div>

                    </>
                )}

                {!isNaN(context.userId) && (
                    <>

                        <div>
                            <Link to="Bookapp">
                                Book a vaccine appointment <br /> <br /> {/* This is a link element that goes to the "/Appointments/Bookapp" route */}
                            </Link>
                            <Link to="CancelApp">
                                Cancel an appointment <br /> <br />
                            </Link>
                            <Link to="/Appointments/ViewAppAdmin/ViewAppList">
                                View appointment <br /> <br />
                            </Link>
                        </div>

                    </>
                )}
            </Main>

        </>
    );
}

export default Appointments;