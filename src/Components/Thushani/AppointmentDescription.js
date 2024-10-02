import { Main, H1, H2, H3, H4, H5  } from "govuk-react";
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import React, { useState, useContext } from 'react';
import { CurrentContext } from "../../App";
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import jq from 'jquery';


// @author done by Camila, Thushani, Amanah, Thiviya and Saba
function AppointmentDescription() {

    const context = useContext(CurrentContext);
    const [touched, setTouched] = useState(false);
    const [appDescrip, setAppDescrip] = useState('');
    const [available, setAvailable] = useState(true);
    const navigate = useNavigate();


    function handleClick () {


//  Description should have more 5 characters
    const descripLength = appDescrip.length > 5;




        if (descripLength) {

        setTouched(false); 
        const date = context.date;
        const time = context.time;
        const user = context.userId;
            addPHP(date, time, user, appDescrip);

        } else {

        setTouched(true);
        console.log("red")
        }
    }
      
    function handleChange (event) {

      const { value } = event.target;
      setAppDescrip(value);  
      console.log(value)
    };

    function addPHP(date, time, user, appDescrip) {

        var dataInfo = {
            'date': date,
            'time': time,
            'user': user,
            'descrip': appDescrip
        };

        var url_php = 'http://localhost:4000/bookAppointment.php';

        // open request function
        jq.ajax({

            type: "POST",
            mode: 'no-cors',
            url: url_php,
            data: dataInfo,

            success: function (response) {

                console.log("response:", response)


                // parse the json string into string
                if (JSON.parse(response) === 'added') {

                    console.log(response)
                    navigate('/Appointments/Bookapp/Bookapp2/AppointmentDescription/Bookapp3');


                } else if (JSON.parse(response) === 'notAvailable') {

                    console.log('no appointments')
                    setAvailable(false);


                } else {
                    console.log('other failed')
                }
            }
        });

    }

    return(
     <>

       {available === true && (

        <Main className="myMain"> 

                    <InputField
                        hint={<>Enter your reason to book the appointment </>}
                        input={{
                            name: 'group1'
                        }}
                        meta={{
                            error: 'Not valid description',
                            touched: touched
                        }}
                        value={appDescrip}
                        onChange={handleChange}
                    >   Appointment Description  </InputField> <br />
                    <Button type="button" onClick={handleClick}>Save and Continue</Button>


        </Main>

        ) }
          
            {available === false && (

                <Main className="myMain">

                    <H2> Date and time selected not available</H2>


                </Main>

            )}
        
        </>
        );
    }
export default AppointmentDescription;          