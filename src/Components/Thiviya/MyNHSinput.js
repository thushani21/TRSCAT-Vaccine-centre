import Button from '@govuk-react/button';
import { InputField, Main } from 'govuk-react';
import FormGroup from '@govuk-react/form-group';
import jq from 'jquery';
import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import { H1, H2, H3, H4, H5, H6 } from 'govuk-react';
import { CurrentContext } from '../../App';

// @author done by Camila, Thushani, Amanah, Thiviya and Saba

//this page will check if the nhs number entered by the doctor exisirts
//if yes it will allow them to view the medical record

//creating function for the nhs input
function MyNHSinput() {
  const context = useContext(CurrentContext);
  const navigate = useNavigate();

// creating local variables that in react act like key value pair
//touched is used to tell if a user is interacting with inputs or fields
  const [touched, setTouched] = useState(false);
  const [usrInput, setusrInput] = useState('');
  const [verifiedComp, setVerifiedComp] = useState(false);
  const [error, setError] = useState("Not valid nhs number");

  const handleClick = () => {
    context.setpatientNHSno(usrInput);

    //vallidation for the nhs input 
    const inputLengthValid = usrInput.length > 10; // making sure the nhs number is longer than 10 numbers
    const isanumbers = !isNaN(usrInput); //ensuring only numbers are entered
    const hasNoSpaces = !usrInput.includes(' '); //no white space allowed

    if (inputLengthValid && isanumbers  && hasNoSpaces) {
      setTouched(false);
      changeDBdPHP({ usrInput, setError });
      } else {
        setTouched(true);
      }
    }

// handleChange was triggered by onChange 
// handleChange willl take user input from a text field
//the state of the component is then updated  
  const handleChange = (event) => {
    const { value } = event.target;
    setusrInput(value);
    console.log(value)
  };

  //php function 
  function changeDBdPHP({ usrInput, setError }) {
    var nhsinput = {
      'nhsinput': usrInput,
    };

    var url_php = 'http://localhost:4000/verifyNHSInput.php'; //calling the php file
      // open request function
      jq.ajax({

        type: "POST", //using the post method
        mode: 'no-cors',
        url: url_php,
        data: nhsinput,

        success: function (response) {
        //checking if the query was successfull
            console.log(response) 
          
            if (JSON.parse(response) === 'verified') {
              console.log('verified'); 
                setVerifiedComp(true);               
                navigate('/MyNHSinput/Viewmedicalrecord');  //if the query was succesfull the page eill redirect to Viewmedicalrecord             
               } 
            else{
              console.log('other failed') //if the query failed it means that either the nhs doesn't exist locally or the patient has no mdr
              setTouched(true);
              setError('patient nhs not found/medical record not found');

            }  
          }
      });
  }

  return (
    <>
      <Main className ="myMain">
        <h1>Enter Patient's NHS No.</h1>

        <FormGroup>
          <InputField
            input={{
              type: '',
              name: 'usrInput',
              placeholder: 'nhs201273654741'
            }}
            meta={{
              error: error,
              touched: touched,
            }}
            value={usrInput}
            onChange={handleChange} //when triggered this will call handleChange to update the user input
          >
          </InputField>
                    
          <Button type="button" onClick={handleClick}>Continue</Button>
                    
        </FormGroup> 
          <br />
          <br />
      </Main>
    </>
  );
}

export default MyNHSinput;





