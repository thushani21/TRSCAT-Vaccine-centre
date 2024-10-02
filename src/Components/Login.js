import styled from 'styled-components';
import Main from '@govuk-react/main';
import Paragraph from '@govuk-react/paragraph';
import { H1, H2, H3, H4, H5, H6 } from 'govuk-react';
import FormGroup from '@govuk-react/form-group';
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import React, { useState, useContext, useEffect } from 'react';
import jq from 'jquery';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import { CurrentContext } from '../App';


//@author done by Camila, Thushani, Amanah, Thiviya and Saba

function Login() {

    const navigate = useNavigate();
    const context = useContext(CurrentContext); 
    const [touched, setTouched] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState("Incorrect email format");



    const handleClick = () => {

        const emailLength = email.length > 9;
        const hasNoSpaces = !email.includes(' ');
        const containsAT = email.includes('@');

        if (emailLength && hasNoSpaces && containsAT) {

            setTouched(false);
            EmailCheckPHP({ email })
            console.log(email)

            console.log("pass")
        } else {
            setTouched(true);
            console.log("red")
        }
    }
    const handleChange = (event) => {

        const { value } = event.target;
        setEmail(value);
        console.log(value)
    };

    function EmailCheckPHP({ email }) {

        var phpEmail = {
            'userEmail': email
        };

        var url_php = 'http://localhost:4000/loginEmail.php';

        // open request function
        jq.ajax({

            type: "GET",
            mode: 'no-cors',
            url: url_php,
            data: phpEmail,

            success: function (response) {

                console.log("",response)

                // parse the json string into string
                if (JSON.parse(response) === 'faileddb' || JSON.parse(response) === 'Failedphp') {

                    console.log("failed")
                    setTouched(true);
                    setError("Email not found");


                } else {

                    var json = jq.parseJSON(response);
                    console.log(json[Object.keys(json)[0]])

                    context.setPassLogin(json[Object.keys(json)[0]]);
                    context.setUserTempoId(json[Object.keys(json)[1]]);
                    
                    navigate('/LoginEmail/LoginPassword');
                }
            }
        });
    }


    return (
        <>
            <Main className="myMain">

                <H2>Email Address</H2>

                <Paragraph>
                    If you have the NHS app or other NHS websites or apps such as 
                    cornonavirus (COVID-19) services you should enter the email you have used to register for them
                </Paragraph>

                <FormGroup>
                    <InputField
                        input={{
                            type: 'email',
                            name: 'email',
                            placeholder: '****************',
                        }}
                        meta={{
                            error: error,
                            touched: touched,
                        }}
                        value={email}
                        onChange={handleChange}
                        
                    />
                </FormGroup>

                <Button type="button" onClick={handleClick}>Continue</Button>

            </Main>
        </>
    );
}
export default Login;

