import Main from '@govuk-react/main';
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { CurrentContext } from '../../App';
import jq from 'jquery';
import { H2 } from 'govuk-react';
import FormGroup from '@govuk-react/form-group';

//@author Saba, Camila, Thiviya, Thushani and Amanah

function NumberChange() {
    //these are the variables assigned to be used
    const navigate = useNavigate();
    const context = useContext(CurrentContext); 
    const [touched, setTouched] = useState(false);//error trigger
    const [number, setNumber] = useState('');
    const [numberChanged, setNumberChanged] = useState(false);
    const [error, setError] = useState("Invalid phone number");//error message wrong input

    const handleClick = () => {//validation checked by Button when clicked
        const wrongLength= number.length == 12; //validation
        const isInteger = Number.isInteger(parseInt(number));
        const hasNoSpaces = !number.includes(' ');

        if (wrongLength && hasNoSpaces && isInteger) {//conditions for a valid phone number
            setTouched(false);
            const userNumber = number;
            PhonePHP({ userNumber,setError });//users number being sent to PHP after being validated
            console.log("pass")
        } else {
            setTouched(true);
            console.log("red")
        }
    }

    const handleChange = (event) => { //handles the chnages coming from the input
        const { value } = event.target;
        setNumber(value);              
    };

    function PhonePHP({ userNumber, setError }) {//take the number the user has enetered
        var phpNumber = {
            'user': context.userId,
            'number': userNumber
        };

        var url_php = 'http://localhost:4000/numberChange.php';//php file to change the number

        //open request function
        jq.ajax({
            type: "POST",//post method being used
            mode: 'no-cors',
            url: url_php,
            data: phpNumber,//number being sent

            success: function (response) {

                console.log(response)

                // parse the json string into string
                if (JSON.parse(response) === 'updated') {

                    console.log('updated');
                    setNumberChanged(true);
                    //if number chnaged goes to svaed chnages panel
                    navigate('/GPRecordsTabsMain/SavedChangesPan');

                } else if (JSON.parse(response) === 'Failed') {

                    console.log("failed")
                    setTouched(true);
                    //not changed gives an error message
                    setError('Phone Number not changed');

                } else if (JSON.parse(response) === 'exists') {
                    console.log("exists")
                    setTouched(true);
                    setError('Phone Number already exists');
                }
            }
        });
    }

    return (
        <>
            <Main className="myMain">
                <H2>Enter your new phone number</H2>
            <FormGroup>
                <InputField
                    input={{
                        type: 'number',//does not allow text to be put in
                        name: 'number',
                        placeholder: 'Example: 075463218919',
                    }}
                    meta={{
                        error: error,
                        touched: touched,
                    }}

                    value={number}//takes the number
                    onChange={handleChange}
                />
              </FormGroup>  
                <br />
                <br />
                <Button type="button" onClick={handleClick}>Save and Continue</Button>
               
            </Main>

        </>

    );
}

export default NumberChange;