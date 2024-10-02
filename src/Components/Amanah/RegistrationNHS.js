//import './App.css';
import styled from 'styled-components';
import Button from '@govuk-react/button';

// import components from gov https://github.com/govuk-react/govuk-react/tree/main/components
import { Page, Breadcrumbs, H3, Main } from 'govuk-react';
import InputField from '@govuk-react/input-field'
import FormGroup from '@govuk-react/form-group';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import jq from 'jquery';
import { CurrentContext } from '../../App'; 

//Authors of this file: Amanah, Thiviya, Camila, Thushani, Saba 

function RegistrationNHS() {
    const navigate = useNavigate();
    //declares a context variable 
    const context = useContext(CurrentContext);
    //declares a state variable touched that holds a boolean value of false
    const [touched, setTouched] = useState(false);
    //declares a state variable nhsNumber that holds an empty string 
    const [nhsNumber, setNhsNumber] = useState('');
    //declares a state variable error that holds the initial error message
    const [error, setError] = useState("Invalid NHS Number");

    const handleClick = () => {
        //set nhs number conditions 
        const nhsNumberLengthValid = nhsNumber.length == 11;
        const isInteger = Number.isInteger(parseInt(nhsNumber));
        const hasNoSpaces = !nhsNumber.includes(" ");

        //nhs number checks using if else statement 
        if ( nhsNumberLengthValid && isInteger  && hasNoSpaces) {
            setTouched(false);
            checkNHSnumber({ nhsNumber, setError })
            console.log("pass")
        } else {
            setTouched(true);
            console.log("red")
        }
    }

    const handleChange = (event) => {

        const { value } = event.target;
        setNhsNumber(value);
        console.log(value)               
    };

    function checkNHSnumber({ nhsNumber,setError }) {

        var nhsNo = {
            'nhs': nhsNumber,
        };

        var url_php = 'http://localhost:4000/nhsNumberReg.php';

        // open request function
        jq.ajax({

            type: "GET",
            mode: 'no-cors',
            url: url_php,
            data: nhsNo,

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

    return (
        <>

            <Main className = "myMain">
                
                
                <H3>Enter your NHS No.</H3>
                <FormGroup>
                <InputField
                            input={{
                                name: 'nhsNumber',
                                placeholder: 'For example, 12345678900'
                            }}
                            meta={{
                                error: 'Invalid NHS Number',
                                touched: touched,
                            }}
                            value={nhsNumber}
                            onChange={handleChange}
                        >
                        </InputField>
            
                  <Button type="button" onClick={handleClick}>Save and Continue</Button>
                </FormGroup>
            </Main>
        </>
    );
}
export default RegistrationNHS;
