import { Button } from 'govuk-react';
import InputField from '@govuk-react/input-field';
import Main from '@govuk-react/main';
import React, { useState, useContext } from 'react';
import bcrypt from 'bcryptjs';
import jq from 'jquery';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import { H2, H3, H4 } from 'govuk-react';
import FormGroup from '@govuk-react/form-group';
import { CurrentContext } from '../../App';

//@author Saba, Camila, Thiviya, Thushani and Amanah

function ChangePassword() {

    const navigate = useNavigate();
    const context = useContext(CurrentContext); 
    const [touched, setTouched] = useState(false);//error
    const [password, setPassword] = useState('');//first input field
    const [confirmPassword, setConfirmPassword] = useState('');//second input field
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [error, setError] = useState("Not valid password");//error message

    const handleClick = () => {//validation done on button clicked
        //conditions in order to get a valid passowrd
        const passwordLengthValid = password.length > 9;
        const uppercaseLetter = password.match(/[A-Z]/);
        const hasNoSpaces = !password.includes(' ');
        const equalPassword = confirmPassword == password;

        if (passwordLengthValid && uppercaseLetter && hasNoSpaces && equalPassword) {
            setTouched(false);

            const hashedPassword = bcrypt.hashSync(password, 10);//encrpts password to be sent to PHP
            PasswordPHP({ hashedPassword });
            console.log("pass")
        } else {
            setTouched(true);//shows the error message
            console.log("red")
        }
    }

    const handleChange = (event) => {//handles changes being made in the input field
        const { value } = event.target;
        setPassword(value);           
    };

    const handleChange2 = (event) => {//handles changes being made in the input field

        const { value } = event.target;
        setConfirmPassword(value);         
    };

    function PasswordPHP({ hashedPassword }) {//react function to interact with the PHP
        var phpPassword = {//the varaibles going from the frontend to the PHP
            'user': context.userId,//the NHS number of the user that is logged in
            'password': hashedPassword //the password that is encrypted to change
        };

        var url_php = 'http://localhost:4000/passwordChange.php';
        //PHP file URL

        //open request function
        jq.ajax({
            //POST method being used
            type: "POST",
            mode: 'no-cors',
            url: url_php,
            data: phpPassword,

            success: function (response) {

                console.log(response)

                // parse the json string into string
                if (JSON.parse(response) === 'updated') {

                    console.log('updated');
                    setPasswordChanged(true);
                    //if updated the it goes to the Password Changed Panel
                    navigate('/GPRecordsTabsMain/PasswordChangedPan');

                } else if (JSON.parse(response) === 'Failed') {

                    console.log("failed")
                    setTouched(true);
                    //if not changed error message comes up in the front end.
                    setError('Password not changed');
                  
                }
            }
        });
    }
    return (
        <Main className="myMain">
            <H2>Change Password</H2>
            <div className="changePasswordCon">
                <H4>Your password must:</H4>
                <ul>
                    <li>have 9 characters</li>
                    <li>have at least one UPPERCASE letter</li>
                    <li>not contain spaces</li>
                </ul>
            </div>
                <FormGroup>
                    <InputField //first input has the password
                        input={{
                            type: 'password',//changes the front end - can not see the password user is typing
                            name: 'password',
                            placeholder: '****************',
                        }}
                        meta={{
                            error: error, //the error message that comes up if wrong input
                            touched: touched,
                        }}
                       
                        value={password}
                        onChange={handleChange}
                    />

                    <div className="changePasswordCon">
                        <H3>Confirm Password</H3>
                        <InputField //second input is to write the same password to confirm
                            input={{
                                type: 'password',
                                name: 'confirm-password',
                                placeholder: '****************',
                            }}
                            meta={{
                                error: error,
                                touched: touched,
                            }}
                            
                            value={confirmPassword}
                            onChange={handleChange2}
                        />
                </div>
                    
                <Button type="button" onClick={handleClick}>Continue</Button>
                {/*Validation done when button is clicked */}
                </FormGroup>
        </Main>
    );
};
export default ChangePassword;