import { Button } from 'govuk-react';
import InputField from '@govuk-react/input-field';
import Main from '@govuk-react/main';
import { H1, H2, H3, H4, H5, H6 } from 'govuk-react';
import FormGroup from '@govuk-react/form-group';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, NavLink, useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import jq from 'jquery';
import { CurrentContext } from '../../App';


//@author done by Camila, Thushani, Amanah, Thiviya and Saba


function ViewAppAdmin() {

   //asks for doctors id to search 
    const context = useContext(CurrentContext);
    const navigate = useNavigate();

    console.log(context)
    //varaibles declared
    const [touched, setTouched] = useState(false);//triggers error
    const [staffid, setStaffId] = useState('');
    const [verifiedComp, setVerifiedComp] = useState(false);
    const [error, setError] = useState("Not valid staff id");

    const handleClick = () => {

        context.setDocId(staffid);

        //validation for a correct staffId
        const inputLengthValid = staffid.length > 1;
        const uppercaseLetter = staffid.match(/[A-Z]/);
        const hasNoSpaces = !staffid.includes(' ');        

        if (inputLengthValid && uppercaseLetter && hasNoSpaces) {

            setTouched(false);
            changeDBdPHP({ staffid, setError });

        } else {
            setTouched(true);
        }
    }

    const handleChange = (event) => {

        const { value } = event.target;
        setStaffId(value);
        console.log(value)
    };

        // query to database
    function changeDBdPHP({ staffid, setError }) {

        
        var id = {
            'id': staffid,
        };

        var url_php = 'http://localhost:4000/verifyDocId.php';//calling the PHP file

        // open request function
        jq.ajax({

            type: "POST",
            mode: 'no-cors',
            url: url_php,
            data: id,

            success: function (response) {

                console.log(response)

                // parse the json string into string
                if (JSON.parse(response) === 'verified') {

                    console.log('verified');
                    setVerifiedComp(true);      

                   //if true then cancel app else goes to list
                   //admin when goes to cancel has to put doctor id
                   //implemented for the patient
                    if (context.cancelApp == true) {
                        navigate('/Appointments/ViewAppAdmin/CancelApp');
                    } else {
                        navigate('/Appointments/ViewAppAdmin/ViewAppList');
                    }

                } else{

                    console.log('other failed')
                    setTouched(true);
                    setError('Doctor id not found');

                }
            }
        });
    }

    return (
        <>
            {/*if button action = true then do else (appointments) if false then main*/}
            <Main className="myMain">
                
                    <H3> To view appointments enter the doctor's medical ID</H3>
                <FormGroup>
                
                    <InputField
                        input={{
                            type: '',
                            name: 'staffid',
                            placeholder: 'Doctor Id'
                        }}
                        meta={{
                            error: error,
                            touched: touched,
                        }}

                        value={staffid}
                        onChange={handleChange}
                    >
                        Enter Doctor's Id
                    </InputField>

                    <Button type="button" onClick={handleClick}>Confirm</Button>
                    {/*Validation done when button is clicked */}
                </FormGroup>             

            </Main>

        </>
    );
}
export default ViewAppAdmin;