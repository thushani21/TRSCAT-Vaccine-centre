import Panel from '@govuk-react/panel';
import Main from '@govuk-react/main';
import { CurrentContext } from '../../App';
import React, { useContext, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, NavLink, useNavigate } from 'react-router-dom';

//@author Saba, Camila, Thiviya, Thushani and Amanah

function AccountDeletedPan() {
    //timer set when user de-registers, to go from panel to Home page
    const navigate = useNavigate();
    const context = useContext(CurrentContext);
    context.setUserId('NULL');//user id becomes null - meaning go to HOME PAGE

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/Home');
        }, 5000);//timer set to go home page
        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <>
            <Main className="myMain">
                <Panel title="Account deleted"></Panel>
                <p>We have sent you a confirmation email</p>
            </Main>
        </>
        
    );
}

export default AccountDeletedPan;

