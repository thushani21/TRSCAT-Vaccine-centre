//import './App.css';
import styled from 'styled-components';
import Button from '@govuk-react/button';

// import components from gov https://github.com/govuk-react/govuk-react/tree/main/components
import {Breadcrumbs, H2, H3, H4, Main } from 'govuk-react';
import TopNav from '@govuk-react/top-nav';
import Crown from '@govuk-react/icon-crown'
import Footer from '@govuk-react/footer'
//import footerLogo from './components/copyright.png'
import InputField from '@govuk-react/input-field'
import { Table } from 'govuk-react';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect, createContext } from 'react';
import { CurrentContext } from '../../App';
import jq from 'jquery';

//Authors of this file: Amanah, Thiviya, Camila, Thushani, Saba 

function RegistrationDetails() {

    const navigate = useNavigate();
    const context = useContext(CurrentContext);

    // found in db
    const forename = context.forename;
    const surname = context.surname;
    const genderCode = context.genderCode;
    const postcode = context.postcode;

    const dobString = String(context.dob);

    const dob = context.dob;

    //console.log(typeof dobString)
    //console.log("dob", dobString)

    // nhs
    const nhs = context.patientNHSno;

    //address 
    const [addressTouched, setAddTouched] = useState(false);
    const address = context.address;
    const [addressChanged, setAddressChanged] = useState(false);

    //email
    const [emailTouched, setEmailTouched] = useState(false);
    const email = context.email;
    const [emailChanged,setEmailChanged] = useState(false);

    //phone number
    const [numTouched, setNumTouched] = useState(false);
    const number = context.number;
    const [numberChanged, setNumberChanged] = useState(false);

    //ethnicity
    const [ethnicityTouched, setEthnicityTouched] = useState(false);
    const ethnicity = context.ethnicity;
    const [ethnicityChanged, setEthnicityChanged] = useState(false);

    //nationality
    const [nationalityTouched, setNationalityTouched] = useState(false);
    const nationality = context.nationality;
    const [nationalityChanged, setNationalityChanged] = useState(false);

    // date
    const year = dobString.substring(0, 4);
    const month = dobString.substring(4, 6);
    const day = dobString.substring(6, 8);

    
    //const allCorrect = addressTouched && emailTouched && numTouched && ethnicityTouched && nationalityTouched 

    //console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);


    // if all are entered
    const [allEntered, setAllEntered] = useState(false);

    var nhsNo = {
        'nhs': context.patientNHSno,
    };

    var url_php = 'http://localhost:4000/nhsNumberReg.php';

    // open request function
    jq.ajax({

        type: "GET",
        mode: 'no-cors',
        url: url_php,
        data: nhsNo,

        success: function (response) {

            console.log("response:",response)

            // parse the json string into string
            if (JSON.parse(response) === 'faileddb' || JSON.parse(response) === 'Failedphp') {


                console.log('other failed')
                    

            } else {
                var json = jq.parseJSON(response);
                //console.log(json.Forename);

                context.setpatientNHSno(json.NHSNumber);
                context.setForename(json.Forename);
                context.setSurname(json.Surname);
                context.setGenderCode(json.GenderCode);
                context.setPostcode(json.Postcode);
                context.setDob(json.PersonDOB);

                console.log("are all inputs entered?", allEntered)

                if (allEntered) {
                    navigate('/RegistrationPage1/RegistrationNHS/RegistrationDetails/RegistrationPassword');
                    
                } else {
                    console.log('not entered')
                }
            }
        }
    });    
    

    const handleClick = () => {

        //address check variable
        const addressLengthNot = address.length > 8 && address.length < 100;
        console.log(addressLengthNot)
        console.log(address.length)

        //email check variable
        const emailLength = email.length > 9;
        const hasNoSpaces = !email.includes(' ');
        const containsAT = email.includes('@');
        const containsDot = email.includes('.');

        

        //phone number check variable
        const wrongLength= number.length == 11;
        const isInteger = Number.isInteger(parseInt(number));
        const hasNoSpacesNum = !number.includes(' ');
        const startsWithZero = number.startsWith('0');

        //ethnicity check variable
        const ethnicityLength = ethnicity.length > 3 && ethnicity.length < 40;

        //nationality check variable
        const nationalityLength = nationality.length > 4 && nationality.length < 50
        console.log("lengthNationality", nationalityLength)

     
        //address check
        if(addressLengthNot){
            setAddTouched(false);
            setAllEntered(true);
            console.log("pass")
        } else {
            setAddTouched(true);
            setAllEntered(false);
            console.log("red")
        }

        // email check
        if (emailLength && hasNoSpaces && containsAT && containsDot ){
            setEmailTouched(false);
            setAllEntered(true);
            console.log("pass")
        }else{
            setEmailTouched(true);
            setAllEntered(false);
        }

        //phone number check
        if(wrongLength && isInteger && hasNoSpacesNum && startsWithZero){
            setNumTouched(false);
            setAllEntered(true);
             console.log("pass")
            } else {
            setNumTouched(true);
            setAllEntered(false);
            console.log("red")
        }

        //ethnicity check
        if(ethnicityLength){
            setEthnicityTouched(false);
            setAllEntered(true);
             console.log("pass")
            } else {
            setEthnicityTouched(true);
            setAllEntered(false);
            console.log("red")

    }

        //nationality check
        if(nationalityLength){
            setNationalityTouched(false);
            setAllEntered(true);
             console.log("pass")
            } else {
            setNationalityTouched(true);
            setAllEntered(false);
            console.log("red")
            }
        }
    

    const handleChange = (event) => {

        const {value} = event.target;
        context.setAddress(value);
        console.log(address.length)               
    };

    const handleChange2 = (event) => {

        const {value} = event.target;
        context.setEmail(value);
        console.log(email.length)               
    };

    const handleChange3 =  (event) => {

        const {value} = event.target;
        context.setNumber(value);
        console.log(number.length)  
    };

    const handleChange4 =  (event) => {

        const {value} = event.target;
        context.setEthnicity(value);
        console.log(ethnicity.length)  
    };

    const handleChange5 =  (event) => {

        const {value} = event.target;
        context.setNationality(value);
        console.log(nationality.length)  
    };

    return (
        <>
           <Main className = "myMain">
                
               <Table caption="Enter your details" className = "RegisterTable">
                <Table.Row>
                    <Table.CellHeader>NHS Number</Table.CellHeader>
                </Table.Row>
                <Table.Row>
                        <Table.Cell>{context.patientNHSno}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.CellHeader>Forename</Table.CellHeader>
                    <Table.CellHeader>Surname</Table.CellHeader>
                </Table.Row>

                <Table.Row>
                        <Table.Cell>{ forename}</Table.Cell>
                        <Table.Cell>{ surname}</Table.Cell>
                </Table.Row>
                <Table.Row>

                    <Table.CellHeader>Date of Birth</Table.CellHeader>
                    <Table.CellHeader>Gender code</Table.CellHeader>
                </Table.Row>
                
                <Table.Row>
                        <span className="greyText">Day:</span> {day} <span className="greyText">Month:</span> {month} <span className="greyText">Year:</span> {year}

                        <Table.Cell> { genderCode}</Table.Cell>
                </Table.Row>

            <Table.Row>
                <Table.CellHeader>Address</Table.CellHeader>
                <Table.CellHeader>Postcode</Table.CellHeader>
            </Table.Row>
            <Table.Row><Table.Cell>
                <InputField
                            input={{
                                name: 'address',
                                placeholder: '123 ABC Road'
                            }}
                            meta={{
                                error: 'Invalid Address',
                                touched: addressTouched,
                            }}
                            value={address}
                            onChange={handleChange}
                        >
                </InputField></Table.Cell>
                
                        <Table.Cell>{ postcode}</Table.Cell>
    
        </Table.Row>
            <Table.Row>
            <Table.CellHeader>Email</Table.CellHeader>
            <Table.CellHeader>Phone Number</Table.CellHeader>
            </Table.Row>
            <Table.Row><Table.Cell>
            <InputField
                            input={{
                                type: 'email',
                                name: 'email',
                                placeholder: 'johndoe@email.com'
                            }}
                            meta={{
                                error: 'Invalid Email Address',
                                touched: emailTouched,
                            }}
                            value={email}
                            onChange={handleChange2}
            >
                        </InputField>
                    </Table.Cell>

            <Table.Cell> 
            <InputField
                            input={{
                                type: 'number',
                                name: 'phoneNumber',
                                placeholder: '02093785421'
                            }}
                            meta={{
                                error: 'Invalid phone number',
                                touched: numTouched,
                            }}
                            value={number}
                            onChange={handleChange3}
            >
            </InputField></Table.Cell>
            
        </Table.Row>

            <Table.Row>
            <Table.CellHeader>Nationality</Table.CellHeader>
            <Table.CellHeader>Ethinicity</Table.CellHeader>
            </Table.Row>
            <Table.Row><Table.Cell>
            <InputField
                            input={{
                                name: 'group0',
                                placeholder: 'Sri Lankan'
                            }}
                            meta={{
                                error: 'Invalid Nationality',
                                touched: nationalityTouched

                            }}
                            value={nationality}
                            onChange={handleChange5}
            >
            </InputField></Table.Cell>
            <Table.Cell>

            <InputField
                                input={{
                                    name: 'ethnicity',
                                    placeholder: 'Black British'
                                }}
                                meta={{
                                    error: 'Invalid Ethnicity',
                                    touched: ethnicityTouched,
                                }}
                                value={ethnicity}
                                onChange={handleChange4}
            >
            </InputField></Table.Cell>
        </Table.Row>
        </Table>
        
        <Button type="button" onClick={handleClick}>Save and Continue</Button>
            </Main>

           
        </>
    );
}

export default RegistrationDetails;