import { H2 } from 'govuk-react';
import Button from '@govuk-react/button';
import Main from '@govuk-react/main';
import InputField from '@govuk-react/input-field';
import FormGroup from '@govuk-react/form-group';
import React, { useState, useContext } from 'react';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { CurrentContext } from '../../App';
import jq from 'jquery';

//@author Saba, Camila, Thiviya, Thushani and Amanah


function DeRegister() {
    //these are the variables assigned to be used
    const navigate = useNavigate();
    const context = useContext(CurrentContext);
    const [touched, setTouched] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState("Not valid password");


    const handleClick = () => {//validation checked by Button when clicked

        const passwordLengthValid = password.length > 9;
        const uppercaseLetter = password.match(/[A-Z]/);
        const hasNoSpaces = !password.includes(' ');

        if (passwordLengthValid && uppercaseLetter && hasNoSpaces) {
            setTouched(false);

            const hashedPassword = bcrypt.hashSync(password, 10);//password encrypted to be sent to the PHP
            DeregisterPHP({ hashedPassword });//matches the password in the database to the input
            console.log("pass")
        } else {
            setTouched(true);
            console.log("red")
        }
    }


    const handleChange = (event) => {//password being changed onChange

        const { value } = event.target;
        setPassword(value);
        console.log(value)           
    };


    function DeregisterPHP({ hashedPassword }) {
        var userPHP = {
            'user': context.userId,//the NHS number of the user logged in
        };

        var url_php = 'http://localhost:4000/deregister.php';//matches the password in the database

        //open request function
        jq.ajax({

            type: "GET",
            mode: 'no-cors',
            url: url_php,
            data: userPHP,

            success: function (response) {

                console.log(JSON.stringify(response))

                //parse the json string into string
                if (JSON.parse(response) === 'not found' || JSON.parse(response) === 'Failedphp') {

                    console.log('other failed')
                    setTouched(true);//not found send an error message
                    setError('Password not found');

                } else {

                    var json = response; //the password from the backend
                    const match = bcrypt.compare(hashedPassword, json);//compares the passwords
                    if (match) {
                        console.log("Match");//if match found then second PHP function called
                        PHPDelete();
                    } else {
                        console.log("No Match");
                    }

                }
            }
        });
    }

    function PHPDelete() {//function called when passowrd match
        var usePHP2 = {
            'user': context.userId,//NHS number of the user logges in
        };

        var url_php2 = 'http://localhost:4000/deregister2.php';//php de-register patient

        //open request function
        jq.ajax({

            type: "GET",
            mode: 'no-cors',
            url: url_php2,
            data: usePHP2,

            success: function (response) {

                console.log(response)

               if (JSON.parse(response) === 'Failedphp') {
                   //if not de-registered the error
                    console.log('other failed')
                    setTouched(true);
                    setError('Error occurred');

                } else {

                   navigate('/GPRecordsTabsMain/GPRecordsTab3/AccountDeletedPan');
                    //if patient is de-registered their sent to this panel - to confirm the de-registering
                    console.log("pass")

                }
            }
        });
    }

    return (
        <>
            <Main className="myMain">
                <FormGroup>
                <H2>Enter your password to de-register</H2>
                    <InputField
                        input={{
                            type: 'password',//input type is password
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
                <br />
                <br />
                    <Button type="button" onClick={handleClick}>Continue</Button>
                    {/*Validation done when button is clicked */}
                </FormGroup>
            </Main>
        </>

    );
}

export default DeRegister;