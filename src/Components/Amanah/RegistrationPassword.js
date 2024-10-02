//import './App.css';
import styled from 'styled-components';
import Button from '@govuk-react/button';
// import components from gov https://github.com/govuk-react/govuk-react/tree/main/components
import { Main, Breadcrumbs, H2, H3, H4, H5, H6, Details } from 'govuk-react';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import InputField from '@govuk-react/input-field'
import FormGroup from '@govuk-react/form-group';
import { CurrentContext } from '../../App';
import jq from 'jquery';
import bcrypt from 'bcryptjs';

//Authors of this file: Amanah, Thiviya, Camila, Thushani, Saba 

function RegistrationPassword() {


    const context = useContext(CurrentContext);

    const nhs = context.patientNHSno;
    console.log(nhs)

    const forename = context.forename;
   
    const surname = context.surname;
    const dob = context.dob;
    const genderCode = context.genderCode;
    const postcode = context.postcode;
    const email = context.email;
    const address = context.address;
    const number = context.number;
    const nationality = context.nationality;
    const ethnicity = context.ethnicity;
   

    const navigate = useNavigate();
    const [touched, setTouched] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false);

    const handleClick = () => {

        const passwordLengthValid = password.length > 9;
        const uppercaseLetter = password.match(/[A-Z]/);
        const hasNoSpaces = !password.includes(' ');
        const equalPassword = confirmPassword == password;

        if (passwordLengthValid && uppercaseLetter && hasNoSpaces && equalPassword) {
            setTouched(false);

            const hashedPassword = bcrypt.hashSync(password, 10);
            console.log("pass") 
            //console.log(nhs, forename, surname, dob, genderCode, postcode, email, address, number, nationality, ethnicity, hashedPassword)
            saveDB(nhs, forename, surname, dob, genderCode, postcode, email, address, number, nationality, ethnicity, hashedPassword);
            
        } else {
            setTouched(true);
            console.log("red")
        }
    }

    function saveDB(nhs, forename, surname, dob, genderCode, postcode, email, address, number, nationality, ethnicity, hashedPassword) {

        var dataInfo = {
            'nhs': nhs,
            'forename': forename,
            'surname': surname,
            'dob': dob,
            'genderCode': genderCode,
            'postcode': postcode,
            'email': email,
            'address': address,
            'number': number,
            'nationality': nationality,
            'ethnicity': ethnicity,
            'password': hashedPassword
        };

        var url_php = 'http://localhost:4000/nhsNumberReg3.php';

        // open request function
        jq.ajax({

            type: "POST",
            mode: 'no-cors',
            url: url_php,
            data: dataInfo,

            success: function (response) {

                console.log("response:", response)


                // parse the json string into string
                if (JSON.parse(response) === 'success') {

                    console.log(response)
                    navigate('/RegistrationPage1/RegistrationCompleted');


                } else {

                    console.log('other failed')


                }
            }
        });

    }

    const handleChange = (event) => {

        const { value } = event.target;
        setPassword(value);
        setConfirmPassword(value);
        console.log(password)        
        console.log(confirmPassword)        
    };

    return (
        
           <>
           
            <Main className = "myMain">
      
                <H2>Create a Password</H2>

                <p>Your password must:</p>

                <ul>
                    <li>Have 9 characters</li>
                    <li>Have at least 1 UPPERCASE letter</li>
                    <li>Not contain spaces</li>
                </ul>

                        <H3>Enter Password</H3>
                <FormGroup>
                        <InputField
                        input={{
                                type: 'password',
                                name: 'group0',
                                placeholder: '*********'
                            }}
                            meta={{
                                error: 'Not valid password',
                                touched: touched,
                            }}
                            value={password}
                            onChange={handleChange}
                        >
                        </InputField>

                        <H3>Confirm Password</H3>

                        <InputField
                        input={{
                                type: 'password',
                                name: 'group0',
                                placeholder:'*********'
                            }}
                            meta={{
                                error: 'Not valid password',
                                touched: touched,
                            }}
                            value={confirmPassword}
                            onChange={handleChange}
                        >
                        </InputField>
                    <Button type="button" onClick={handleClick}>Continue</Button>
                </FormGroup>
            </Main>
                
          
        </>
    );
}
export default RegistrationPassword;
