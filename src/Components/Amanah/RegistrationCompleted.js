//import './App.css';
import styled from 'styled-components';
import Button from '@govuk-react/button';

// import components from gov https://github.com/govuk-react/govuk-react/tree/main/components
import { Main, Breadcrumbs, H2, H3, H4, H5, H6, Details } from 'govuk-react';
import TopNav from '@govuk-react/top-nav';
import Crown from '@govuk-react/icon-crown'
import Footer from '@govuk-react/footer'
//import footerLogo from './components/copyright.png'
import InputField from '@govuk-react/input-field'
import Input from '@govuk-react/input';
import { Table } from 'govuk-react';
import Panel from '@govuk-react/panel';

//Authors of this file: Amanah, Thiviya, Camila, Thushani, Saba 

function RegistrationCompleted() {

    return (
        <>
          <Main className = "myMain">

                <Panel title="Registration Completed"></Panel>
                
                <p>We have sent you a confirmation email along with the reference number</p>
            </Main>

        </>
    );
}
export default RegistrationCompleted;
