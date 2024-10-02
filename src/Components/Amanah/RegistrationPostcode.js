//import './App.css';
import styled from 'styled-components';
import Button from '@govuk-react/button';

// import components from gov https://github.com/govuk-react/govuk-react/tree/main/components
import { Page, Breadcrumbs, H3, Main, FormGroup } from 'govuk-react';
import TopNav from '@govuk-react/top-nav';
import Crown from '@govuk-react/icon-crown'
import Footer from '@govuk-react/footer'
//import footerLogo from './components/copyright.png'
import InputField from '@govuk-react/input-field'
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import { CurrentContext } from '../../App';
import jq from 'jquery';

//Authors of this file: Amanah, Thiviya, Camila, Thushani, Saba 

function RegistrationPostcode() {

    const navigate = useNavigate();
    const context = useContext(CurrentContext);
    const [error, setError] = useState("Invalid NHS Number");

    //postcode error
    const [touched, setTouched] = useState(false);
    const [postcode, setPostcode] = useState('');
    const [postcodeChanged, setpostcodeChanged] = useState(false);

    //first name variables
    const [firstName, setFirstName] = useState('');
    const [firstNameChanged, setFirstNameChanged] = useState(false);
    const [firstNtouched, setFirstNTouched] = useState(false);

    //last name variables
    const [lastName, setLastName] = useState('');
    const [lastNameChanged, setLastNameChanged] = useState(false);
    const [lastNtouched, setLastNTouched] = useState(false);
    

    const handleClick = () => {

        //postcode checks
        const postcodeLengthNot = postcode.length > 4 && postcode.length < 9;
        console.log(postcodeLengthNot)
        console.log(postcode.length)

        //first name checks
        const firstNameLength = firstName.length > 1 && firstName.length < 20; 
        console.log(firstNameLength)

        //last name checks
        const lastNameLength = lastName.length > 1 && lastName.length < 20;
        console.log(lastNameLength)

        //postcode check
        if (postcodeLengthNot || firstNameLength || lastNameLength) {

            setTouched(false);

            console.log("pass")
            checkNHSnumber({ firstName, lastName, postcode })

            } else {
                setTouched(true);
            console.log("red")
            
        }
        
    }

    function checkNHSnumber({ firstName, lastName, postcode }) {

        var dataphp = {
            'firstName': firstName,
            'lastName': lastName,
            'postcode': postcode
        };

        var url_php = 'http://localhost:4000/nhsNumberReg2.php';

        // open request function
        jq.ajax({

            type: "POST",
            mode: 'no-cors',
            url: url_php,
            data: dataphp,

            success: function (response) {

                console.log(response)

                // parse the json string into string
                if (JSON.parse(response) === 'faileddb' || JSON.parse(response) === 'Failedphp') {


                    console.log('other failed')
                    setTouched(true);
                    setError('NHS number not found');



                } else {
                    var json = jq.parseJSON(response);
                    console.log(json.NHSNumber);
                    context.setpatientNHSno(json.NHSNumber);

                    navigate('/RegistrationPage1/RegistrationNHS/RegistrationDetails');

                }
            }
        });
    }
        
    const handleChange = (event) => {

        const { value } = event.target;
        setPostcode(value);
        console.log(postcode.length)               
    };

    const handleChange2 = (event) => {

        const { value } = event.target;
        setFirstName(value);
        console.log(firstName)               
    };

    const handleChange3 = (event) => {

        const { value } = event.target;
        setLastName(value);
        console.log(lastName)               
    };

    return (
        <>

            <Main className = "myMain">
                

                <H3>Enter your Postcode</H3>
                <FormGroup>
                <InputField
                    input={{
                        name: 'postcode',
                        placeholder: 'W1B 2HW'
                    }}
                    meta={{
                        error: 'Invalid postcode',
                        touched: touched,
                    }}
                    value={postcode}
                    onChange={handleChange}
                >
                </InputField>

                <H3>Enter your First Name</H3>
                
                <InputField
                    input={{
                        name: 'firstname',
                    }}
                    meta={{
                        error: 'Invalid First Name',
                        touched: firstNtouched,
                    }}
                    value={firstName}
                    onChange={handleChange2}
                ></InputField>
                
                <H3>Enter your Last Name</H3>
                
                <InputField
                    input={{
                        name: 'lastname',
                    }}
                    meta={{
                        error: 'Invalid Last Name',
                        touched: lastNtouched,
                    }}
                    value={lastName}
                    onChange={handleChange3}
                ></InputField>

                <Button type="button" onClick={handleClick}>Save and Continue</Button>
                </FormGroup>
            </Main>

        </>
    );
}
export default RegistrationPostcode;

