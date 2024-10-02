import { Button } from 'govuk-react';
import InputField from '@govuk-react/input-field';
import Main from '@govuk-react/main';
import { H1, H2, H3, H4, H5, H6 } from 'govuk-react';
import FormGroup from '@govuk-react/form-group';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, NavLink, useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import jq from 'jquery';

// @author done by Camila, Thushani, Amanah, Thiviya and Saba

function CancelApp() {

    const navigate = useNavigate();

    const [touched, setTouched] = useState(false);//triggers the error message
    const [refNum, setRefNum] = useState('');
    const [verifiedComp, setVerifiedComp] = useState(false);
    const [error, setError] = useState("Invalid reference number");

    const handleClick = () => {//validation checked by Button when clicked
        //conditions to be met in order to have a valid refrence number - to be sent to the backend
        const inputLengthValid = refNum.length > 5;
        const uppercaseLetter = refNum.match(/[A-Z]/);
        const hasNoSpaces = !refNum.includes(' ');


        // validation
        if (inputLengthValid && uppercaseLetter && hasNoSpaces) {

            setTouched(false);
            changeDBdPHP({ refNum, setError });

        } else {
            //error shows up if wrong input
            setTouched(true);
        }
    }

    //stores the value as it is changing
    const handleChange = (event) => {

        const { value } = event.target;
        setRefNum(value);
        console.log(value)
    };

    // query database
    function changeDBdPHP({ refNum, setError }) {

        var refNumber = {
            'refN': refNum,
        };

        var url_php = 'http://localhost:4000/cancelApp.php';
        //PHP file called

        // open request function
        jq.ajax({

            type: "POST",
            mode: 'no-cors',
            url: url_php,
            data: refNumber,

            success: function (response) {

                console.log(response)

                // parse the json string into string
                if (JSON.parse(response) === 'cancelled') {

                    console.log('cancelled');
                    setVerifiedComp(true);

                    //if appointment is cancelled page changes
                    navigate('/Appointments/CancelConfirmation');

                } else {

                    console.log('other failed')
                    setTouched(true);
                    //if refrence number is not found
                    setError('Reference number not found');

                }
            }
        });
    }

    return (
        <>
            {/*if button action = true then do else (appointments) if false then main*/}
            <Main className="myMain">      
                

                <H3> To cancel an appointment enter the booking reference number</H3>                  


                <FormGroup>                 
                    <InputField
                        input={{
                            type: '',
                            name: 'refNum',
                            placeholder: 'Booking Num'
                        }}
                        meta={{
                            error: error,
                            touched: touched,
                        }}

                        value={refNum} 
                        onChange={handleChange}
                    >
                        Booking reference number
                    </InputField>

                    <Button type="button" onClick={handleClick}>Confirm</Button>
                    {/*Validation done when button is clicked */}
                </FormGroup>
              
               
            </Main>

        </>
    );
}
export default CancelApp;