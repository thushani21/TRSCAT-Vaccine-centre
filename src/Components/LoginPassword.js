import styled from 'styled-components';
import Main from '@govuk-react/main';
import Paragraph from '@govuk-react/paragraph';
import { H1, H2, H3, H4, H5, H6 } from 'govuk-react';
import FormGroup from '@govuk-react/form-group';
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import { CurrentContext } from '../App';
import React, { useState, useContext, useEffect } from 'react';
import jq from 'jquery';
import bcrypt from 'bcryptjs';


//@author done by Camila, Thushani, Amanah, Thiviya and Saba

function LoginPassword() {

    const navigate = useNavigate();
    const context = useContext(CurrentContext); 
    const [touched, setTouched] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [error, setError] = useState("Not valid password");

    const handleClick = () => {

        const passwordLengthValid = password.length > 9;
        const uppercaseLetter = password.match(/[A-Z]/);
        const hasNoSpaces = !password.includes(' ');

        if (passwordLengthValid && uppercaseLetter && hasNoSpaces) {
            setTouched(false);

            const hashedPassword = bcrypt.hashSync(password, 10);
            PasswordLogincheck({ hashedPassword });

            console.log(hashedPassword)
            console.log("pass")

        } else {
            setTouched(true);
            console.log("red")
        }
    }

    function PasswordLogincheck({ hashedPassword }) {


        const match = bcrypt.compare(hashedPassword, context.passLogin);//compares the passwords
        if (match) {
            console.log("Match");//if match found then second PHP function called
            navigate('/Home');
            context.setUserId(context.userTempoId);

            
        } else {
            console.log("No Match");
            setError('Password does not match with email');
        }

    }

    const handleChange = (event) => {

        const { value } = event.target;
        setPassword(value);
        //console.log(password)             
    };

    return (
        <>
            <Main className="myMain">

                <H2>Password</H2>

                <Paragraph>
                    If you have the NHS app or other NHS websites or apps such as
                    cornonavirus (COVID-19) services you should enter the password you have used to register for them.
                </Paragraph>

                <br/>
                <Paragraph>
                    We will check if you have an NHS login. If not, you can set up one.  
                </Paragraph>

                <FormGroup>

                <H3>Password</H3>
                    <InputField
                        input={{
                            type: 'password',
                            name: 'password',
                            placeholder: '****************',
                        }}
                        meta={{
                            error: error,
                            touched: touched,
                        }}
                        value={password}
                        onChange={handleChange}

                    />
                </FormGroup>

                <Button type="button" onClick={handleClick}>Continue</Button>

            </Main>
        </>
    );
}
export default LoginPassword;
