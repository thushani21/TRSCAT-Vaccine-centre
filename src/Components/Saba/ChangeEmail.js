import { H2 } from 'govuk-react';
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import Main from '@govuk-react/main';
import FormGroup from '@govuk-react/form-group';
import React, { useState, useContext, useEffect } from 'react';
import jq from 'jquery';
import { CurrentContext } from '../../App';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';

//@author Saba, Camila, Thiviya, Thushani and Amanah

function ChangeEmail() {
    //these are the variables assigned to be used
    const navigate = useNavigate();
    const context = useContext(CurrentContext); 
    const [touched, setTouched] = useState(false);//error to be shown 
    const [email, setEmail] = useState(''); //email coming from the user
    const [emailChanged, setEmailChanged] = useState(false);
    const [error, setError] = useState("Invalid email");//error to be seen when not valid email entered
    

    const handleClick = () => {//validation checked by Button when clicked
        //conditions to be met in order to have a valid email - to be sent to the backend
        const emailLength = email.length > 9;
        const hasNoSpaces = !email.includes(' ');
        const containsAT = email.includes('@');
        const containsDot = email.includes('.');

        if (emailLength && hasNoSpaces && containsAT && containsDot) {
            setTouched(false);
            const correctEmail = email;
            EmailPHP({ correctEmail, setError });//correct email going to the PHP
            console.log("pass")
        } else {
            setTouched(true);
            console.log("red")
        }
    }

    const handleChange = (event) => {//stores the user input that has been changed when being entered
        const { value } = event.target;
        setEmail(value);  
    };

    function EmailPHP({ correctEmail,setError }) {//Frontend going to PHP
        var phpEmail = {
            'user': context.userId,
            'userEmail': correctEmail
        };

        var url_php = 'http://localhost:4000/emailChange.php';//PHP file

        //open request function
        jq.ajax({

            type: "POST",
            mode: 'no-cors',
            url: url_php,
            data: phpEmail,

            success: function (response) {

                //console.log(response);

                //parse the json string into string
                if (JSON.parse(response) === 'updated') {

                    console.log('updated');
                    setEmailChanged(true);
                    //when email changes goes to Saved Changes Panel
                    navigate('/GPRecordsTabsMain/SavedChangesPan');

                } else if (JSON.parse(response) === 'Failedphp') {
                    console.log("failed")
                    //if email not changed shows this error in the front end
                    setTouched(true);
                    setError('Email not changed');

                } else if (JSON.parse(response) === 'exists') {
                    console.log("exists")
                    setTouched(true);
                    setError('Email already exists');
                }

            }
        });
    }

    return (
        <>
            <Main >            
                <H2>Enter your new email address</H2>
                {/*Government front end tag for a form */}
                <FormGroup>
                    <InputField
                        input={{
                            type: 'email',//this is the type of input going in 
                            name: 'email',
                            placeholder: 'Example: abc@gmail.com',
                        }}
                        meta={{
                            error: error,
                            touched: touched,
                        }}

                        value={email}//the value being stored
                        onChange={handleChange}//changes being stored onChange
                    />
                <br />
                    <Button type="button" onClick={handleClick}>Save and Continue</Button>
                    {/*Validation done when button is clicked */}
                 </FormGroup>
            </Main>
        </>

    );
}

export default ChangeEmail;