import styled from 'styled-components';
import TopNav from '@govuk-react/top-nav';
import Crown from '@govuk-react/icon-crown';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import { CurrentContext } from "../App";
import React, { useState, useContext, useEffect } from 'react';


// @author done by Camila, Thushani, Amanah, Thiviya and Saba

// override style from gov topnav
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 0 10px;
  color: white;
  font-weight: 700;
  line-height: 1;
  font-size: 16px;
  font-family: nta, Arial, sans-serif;
  display: inline-block;
  text-decoration-skip-ink: none;
  border-bottom: 1px solid transparent;
  &.active {
    color: #1d8feb;
  }
`;

function MyTopnav() {

    const location = useLocation();  
    const context = useContext(CurrentContext); 
    console.log(typeof context.userId)

    function logout() {
        context.setUserId('NULL');
        console.log(context.userId)
    }


    return (
        <>
            
            <header>
                <TopNav
                    company={
                        <TopNav.Anchor href="/Home" target="_self">
                            <TopNav.IconTitle icon={<Crown height="32" width="36"/>}>
                                GOV.UK
                            </TopNav.IconTitle>
                        </TopNav.Anchor>
                    }
                >
                    

                    {/************************** VISITOR  ****************************/}

                    {context.userId === 'NULL' && (
                        <>

                            <StyledNavLink to="/Home">Home</StyledNavLink>
                            <StyledNavLink to="/RegistrationPage1">Register</StyledNavLink>
                            <StyledNavLink to="/LoginEmail" >Log in</StyledNavLink>

                        </>
                    )} 

                    {/************************** PATIENT  ****************************/}

                    {(!isNaN(context.userId) && context.userId != 'NULL') && (
                        <>

                            <StyledNavLink to="/Home" > Home</StyledNavLink>
                            <StyledNavLink to="/Appointments" > Appointments</StyledNavLink>
                            <StyledNavLink to="/GPRecordsTabsMain" > GP Record</StyledNavLink>
                            <StyledNavLink to="/MyNHSinput/Viewmedicalrecord" > Medical Records</StyledNavLink>
                            <StyledNavLink onClick={logout} to="/" > Log out</StyledNavLink>

                        </>
                    )}

                    {/************************** DOCTOR  ****************************/}

                    {String(context.userId).includes('D') && (
                        <>

                            <StyledNavLink to="/Home" > Home</StyledNavLink>
                            <StyledNavLink to="/Appointments" > Appointments</StyledNavLink>
                            <StyledNavLink to="/MyNHSinput" > Medical Records</StyledNavLink>
                            <StyledNavLink onClick={logout} to="/" > Log out</StyledNavLink>

                        </>
                    )} 

                    {/************************** ADMIN  ****************************/}

                    {String(context.userId).includes('A') && (
                        <>

                            <StyledNavLink to="/Home" > Home</StyledNavLink>
                            <StyledNavLink to="/Appointments" > Appointments</StyledNavLink>
                            <StyledNavLink onClick={logout} to="/" > Log out</StyledNavLink>

                        </>
                    )}
                </TopNav>
            </header>
        </>
    );
}

export default MyTopnav;