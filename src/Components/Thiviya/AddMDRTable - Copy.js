import React, { useState, useEffect, context } from 'react';
//import {LabelText} from "govuk-react";
//import {Select} from "govuk-react";
import bcrypt from 'bcryptjs';
// import SelectInput from '@govuk-react/select';
import {Table, Main, DateField, InputField, Select} from "govuk-react";
import Button from '@govuk-react/button';
// import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
//trying validation

// @author done by Camila, Thushani, Amanah, Thiviya and Saba


function AddMDRTable() {

    /*#####################################  VARIABLES #################################### */

  const [ SelDoseNum, setDoseNum] = useState('NA'); //handle1
  const [ SelVaccManifacturer, setVaccManifacturer] = useState('NA'); //handle2
    const [SelDiseaseTarg, setDiseaseTarg] = useState('NA'); //handle3

    const [SelVaccineType, setVaccineType] = useState('NA'); //handle4


    const [SelProduct, setProduct] = useState('NA'); //handle5


  const [ SelVaccineBatchNo, setVaccineBatchNo] = useState('NA');   //handle6
  const [ SelCountofVacc, setCountofVacc] = useState('NA'); //handle7
    const [SelAuth, setAuth] = useState('NA');  //handle8
const [ SelTotDoses, setTotDoses] = useState('NA'); //handle10

  const [ SelSite, setSite] = useState('NA'); //handle9
  
  const [ SelDisplayName, setDisplayName] = useState('NA');  //handle11
    const [SelSnomedCode, setSnomedCode] = useState('NA'); //handle12

  const [ SelProcedCode, setProcedCode] = useState('NA');    //handle13
  const [BoosterInput, setBooster] = useState('');  //handle16

 
  const [vaccDateInput, setVaccDate] = useState({
    day: '',
    month: '', 
    year: '',
  });

  const formattedDate = String(vaccDateInput.day) + '-' + String(vaccDateInput.month) + '-' + String(vaccDateInput.year);
  console.log(formattedDate );

  const [ dateEntInput, setDateEnt] = useState('NA');  //handle15  
    const [dateEntInput1, setDateEnt1] = useState('NA');  //handle15 
//constant variables for touch, and error messages
  const [touched, setTouched] = useState(false);
  // const [userInput, setuserInput] = useState('');
  const [error, setError] = useState("error"); // error only for inputs
  const [errorDate, setErrorDate] = useState(""); // error only for inputs


  //functions
  //repeat 16 times for all your selects
    function onHandle1(event) {
        const value = event.target;
        //console.log(value)
        setDoseNum(value.options[value.selectedIndex].textContent)
    };

    function onHandle2 (event) {
      const value = event.target;
      // console.log(value)
      setVaccManifacturer(value.options[value.selectedIndex].textContent)
    };

    function onHandle3 (event) {
      const value = event.target;
      // console.log(value)
      setDiseaseTarg(value.options[value.selectedIndex].textContent)
    };

    function onHandle4 (event) {
      const value = event.target;
      // console.log(value)
      setVaccineType(value.options[value.selectedIndex].textContent)
    };

    function onHandle5 (event) {
      const value = event.target;
      // console.log(value)
      setProduct(value.options[value.selectedIndex].textContent)
    };

    function onHandle6 (event) {
      const value = event.target;
      //console.log(value)
      setVaccineBatchNo(value.options[value.selectedIndex].textContent)
    };

    function onHandle7 (event) {
      const value = event.target;
      //console.log(value)
      setCountofVacc(value.options[value.selectedIndex].textContent)
    };


  function onHandle8 (event)  {
    const value = event.target;
    //console.log(value)
    setAuth(value.options[value.selectedIndex].textContent)
  };

  function onHandle9 (event) {
    const value = event.target;
    //console.log(value)
    setSite(value.options[value.selectedIndex].textContent)
  };


  function onHandle10 (event)  {
    const value = event.target;
    //console.log(value)
    setTotDoses(value.options[value.selectedIndex].textContent)
  };


  function onHandle11 (event)  {
    const value = event.target;
    //console.log(value)
    setDisplayName(value.options[value.selectedIndex].textContent)
  };


  function onHandle12 (event)  {
    const value = event.target;
    //console.log(value)
    setSnomedCode(value.options[value.selectedIndex].textContent)
  };


  function onHandle13 (event)  {
    const value = event.target;
    //console.log(value)
    setProcedCode(value.options[value.selectedIndex].textContent)
  };

  function onHandle15 (event)  {
    const value = event.target;
    setDateEnt1(value.options[value.selectedIndex].textContent)
   };

  // function onHandle16 (event) {
  //   const value = event.target;
  //   //console.log(value)
  //   setBooster(value.options[value.selectedIndex].textContent)
  // };


  // const handleChange = (event) => {
  //   // take user input as a value
  //         const { value } = event.target;
  //         setBooster(value);
  //         console.log(value)
  //     };


    /*############################################   BOTTON  ############################################*/

  const handleClick = () => {

    //booster validation
      const boosterchar = BoosterInput.includes('1') || BoosterInput.includes('0');
      const lengthBoost = BoosterInput.length === 1;

      if (boosterchar && lengthBoost) {

        setTouched(false);
        console.log("pass")
        //changeDBdPHP({ userInput, setError });

      } else {
        setTouched(true);
        console.log("error")
      }
      

      const day = vaccDateInput.day;
      const month = vaccDateInput.month;
      const year = vaccDateInput.year;
      
      const hasNoSpaces = !day.includes(' ');
      const hasNoSpacesMonth = !month.includes(' ');
      const hasNoSpacesYear = !year.includes(' ');

      const isNotNumberDay = isNaN(day);
      const isNotNumberMonth = isNaN(month);
      const isNotNumberYear = isNaN(year);

      const monthlessthan1 =  month < 1;
      const monthgreaterthan12 =  month >12;

      if (hasNoSpaces){
        setErrorDate('');
      }else{
        console.log(hasNoSpaces)
        setErrorDate('error');
      }

      if (hasNoSpacesMonth){
        setErrorDate('');
      }else{
        console.log(hasNoSpacesMonth)
        setErrorDate('error');
      }

      if (hasNoSpacesYear){
        setErrorDate('');
      }else{
        console.log(hasNoSpacesYear)
        setErrorDate('error');
      }

      if (isNotNumberDay){
        setErrorDate('');
      }else{
        console.log(isNotNumberDay)
        setErrorDate('error');
      }

      if (isNotNumberMonth){
        setErrorDate('');
      }else{
        console.log(isNotNumberMonth)
        setErrorDate('error');
      }

      if (isNotNumberYear){
        setErrorDate('');
      }else{
        console.log(isNotNumberYear)
        //setErrorDate('error');
      }


      if (monthlessthan1){
        setErrorDate('');
      }else{
        console.log(monthlessthan1)
        //setErrorDate('error');
      }

      if (monthgreaterthan12){
        setErrorDate('');
      }else{
        console.log(monthgreaterthan12)
        setErrorDate('error');
      }

    }


    //handle change for the user inputs
    const handleChange = (event) => {
      // take user input as a value
            const { value } = event.target;
            setBooster(value);
    };
  

    const handleChange2 = (date) => {
      // take user input as a value
      setVaccDate(date);
      
      //console.log(date.day, date.month, date.year);
      console.log('DATE ENTERED',vaccDateInput);
    };


  /*###############################################    CONSOLE UPDATED #############################################################*/
    useEffect(() => {
      console.log(SelDoseNum);
    },[SelDoseNum]
    );

    //useeffect2
    useEffect(() => {
      console.log(SelVaccManifacturer);
    },[SelVaccManifacturer]
    );

    //useeffect3
    useEffect(() => {
      console.log(SelDiseaseTarg);
    },[SelDiseaseTarg]
    );

    //useeffect4
    useEffect(() => {
      console.log(SelVaccineType);
    },[SelVaccineType]
    );

    //useeffect5
    useEffect(() => {
      console.log(SelProduct);
    },[SelProduct]
    );

    //useeffect6
    useEffect(() => {
      console.log(SelVaccineBatchNo);
    },[SelVaccineBatchNo]
    );

    //useeffect7
    useEffect(() => {
      console.log(SelCountofVacc);
    },[SelCountofVacc]
    );
    //useeffect8
    useEffect(() => {
      console.log(SelAuth);
    },[SelAuth]
    );
    //useeffect9
    useEffect(() => {
      console.log(SelSite);
    },[SelSite]
    );
    //useeffect10
    useEffect(() => {
      console.log(SelTotDoses);
    },[SelTotDoses]
    );
    //useeffect11
    useEffect(() => {
      console.log(SelDisplayName);
    },[SelDisplayName]
    );
    //useeffect12
    useEffect(() => {
      console.log(SelSnomedCode);
    },[SelSnomedCode]
    );
    //useeffect13
    useEffect(() => {
      console.log(SelProcedCode);
    },[SelProcedCode]
    );

   /* ############################################################# TABLE #######################################################################*/

  return ( 
    <>
      <Main>
        <h1>
          Add Medical Record
        </h1>

      <Table className= "tableStyle">


        <Table.Row>
          <Table.CellHeader>
            Dose Number
          </Table.CellHeader>
          <Table.Cell>
          <Select
              input={{
                name: 'group1',
                onChange : onHandle1
              }}
              meta={{
                error: error,
                touched: touched
              }}
            >
              <option value="0"  disabled hidden selected > Choose </option>             
              <option value="1" >1</option>
              <option value="2">2</option>
            </Select> 
          </Table.Cell>
        </Table.Row> 


        <Table.Row>
          <Table.CellHeader >
            Vaccination Date
          </Table.CellHeader>
          <Table.Cell>
          <DateField
            input={{
              onChange: handleChange2,
              value: vaccDateInput,
            }}
            errorText= {errorDate}
            
          >
          </DateField>

          </Table.Cell>
        </Table.Row>  


        <Table.Row >
          <Table.CellHeader>
            Vaccination Manufacturer
          </Table.CellHeader>
          <Table.Cell>     
            <Select
              input={{
                name: 'group1',
                onChange : onHandle2
              }}
              meta={{
                error: error,
                touched: touched
              }}
            >
              <option value="0" disabled hidden selected > Choose </option>             
              <option value="1"> AstraZenica, AB, ORG-12394567</option>
              <option value="2"> Phizer, PH, ORG-012349567</option>
              <option value="3">Johnson and Johnson, JJ, ORG-87654</option>
            </Select>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.CellHeader>
            Disease Targeted
          </Table.CellHeader>
          <Table.Cell>
          <Select
              input={{
                name: 'group1',
                onChange : onHandle3
              }}
              meta={{
                error: error,
                touched: touched
              }}>
                <option value="0" disabled hidden selected > Choose </option>
                <option value="1"> Covid-19 846547485</option>
                <option value="2">Booster</option>
              </Select> 
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.CellHeader>
            Vaccine Type
          </Table.CellHeader>
          <Table.Cell> 
            <Select
              input={{
                name: 'group1',
                onChange : onHandle4
              }}
              meta={{
                error: error,
                touched: touched
              }}
            >
              <option value="0" disabled hidden selected> Choose </option> 
              <option value="1">AstraZenica, 03948576</option>
              <option value="2">Phizer, 3456789</option>
              <option value="3"> Johnson and Johnson, 98765432</option>
              </Select>  
          </Table.Cell>
        </Table.Row>

       <Table.Row>
          <Table.CellHeader>
            Product
          </Table.CellHeader>
          <Table.Cell>
            <Select
              input={{
                name: 'group1',
                onChange : onHandle5
              }}
              meta={{
                error: error,
                touched: touched
              }}
            >
              <option value="0" disabled hidden selected> Choose </option> 
              <option value="1">Vaxzevria, EU/1/21/1529</option>
              <option value="2">Jcovden, EU/1/20/1525</option>
              <option value="3">Spikevax, EU/1/20/1507</option>
              <option value="4">Comirnaty, EU/1/20/1528</option>
              <option value="5">Nuvaxovid, EU/1/21/1618</option>
            </Select>
          </Table.Cell>
        </Table.Row>


        <Table.Row>
          <Table.CellHeader>
            Vaccine Batch No.
          </Table.CellHeader>
          <Table.Cell>
          <Select
            input={{
              name: 'group1',
              onChange : onHandle6
            }}
            meta={{
              error: error,
              touched: touched
              }}
            >
              <option value="0" disabled hidden selected > Choose </option> 
              <option value="1">34527566</option>
              <option value="2">34574562</option>
              <option value="3">34547561</option>
            </Select>
          </Table.Cell>
        </Table.Row>

         <Table.Row>
          <Table.CellHeader>
            Country of Vaccination
          </Table.CellHeader>
          <Table.Cell>
            <Select
              input={{
                name: 'group1',
                onChange : onHandle7
              }}
              meta={{
                error: error,
                touched: touched
              }}
            >
                <option value="0" disabled hidden selected > Choose </option> 
                <option value="1">UK</option>
            </Select>
          </Table.Cell>
        </Table.Row>


        <Table.Row>
          <Table.CellHeader>
            Authority
          </Table.CellHeader>
          <Table.Cell>
            <Select
              input={{
                name: 'group1',
                onChange : onHandle8
              }}
              meta={{
                error: error,
                touched: touched
              }}
            >
              <option value="0" disabled hidden selected > Choose </option> 
              <option value="1">Hospital</option>
              </Select>
          </Table.Cell>
        </Table.Row>


        <Table.Row>
          <Table.CellHeader>
            Site
          </Table.CellHeader>
          <Table.Cell>
            <Select
              input={{
                name: 'group1',
                onChange : onHandle9
              }}
              meta={{
                error: error,
                touched: touched
              }}
            >
              <option value="0" disabled hidden selected > Choose </option> 
              <option value="1">Left Arm</option>
              <option value="2">Right Arm</option>
            </Select> 
          </Table.Cell>
        </Table.Row>


        <Table.Row>
          <Table.CellHeader>
            Total Series of Doses
          </Table.CellHeader>
          <Table.Cell>
            <Select
              input={{
                name: 'group1',
                onChange : onHandle10
              }}
              meta={{
                error: error,
                touched: touched
              }}
            >
                <option value="0" disabled hidden selected > Choose </option> 
                <option value="1">1 </option>
                <option value="2">2</option>
              </Select>
          </Table.Cell>
        </Table.Row>



        <Table.Row>
          <Table.CellHeader>
            Display Name
          </Table.CellHeader>
            <Table.Cell>
              <Select
                input={{
                  name: 'group1',
                  onChange : onHandle11
                }}
                meta={{
                  error: error,
                  touched: touched
                }}
              >
                <option value="0" disabled hidden selected > Choose </option> 
                <option value="1">Astrazenica</option>
                <option value="2">Phizer</option>
                <option value="3">Johnson and Johnson</option>
              </Select>           
          </Table.Cell>
        </Table.Row>


        <Table.Row>
          <Table.CellHeader>
            Snomed Code
          </Table.CellHeader>
          <Table.Cell>
            <Select
              input={{
                name: 'group1',
                onChange : onHandle12
              }}
              meta={{
                error: error,
                touched: touched
              }}
            >
                <option value="0" disabled hidden selected > Choose </option> 
                <option value="1">23456789 </option>
                <option value="2">37865433456787</option>
                <option value="3">2345612123789</option>
              </Select>
          </Table.Cell>
        </Table.Row>


         <Table.Row>
          <Table.CellHeader>
            Date Entered
          </Table.CellHeader>
          <Table.Cell>
            <DateField
              input={{
                onChange: handleChange2,
                value: vaccDateInput,
              
              }}
              >
            </DateField>  
          </Table.Cell>
        </Table.Row> 





        <Table.Row>
          <Table.CellHeader>
            Procedure Code
          </Table.CellHeader>
          <Table.Cell>
            <Select
              input={{
                name: 'group1',
                onChange : onHandle13
              }}
              meta={{
                error: error,
                touched: touched
              }}
            >
              <option value="0" disabled hidden selected > Choose </option> 
              <option value="1">123456789</option>
              <option value="2">098765432</option>
              <option value="3">23456747612398</option>
            </Select>
          </Table.Cell>
        </Table.Row>




        <Table.Row>
          <Table.CellHeader>
            Booster
          </Table.CellHeader>
          <Table.Cell>
            <InputField
              input={{
                type: 'number', // prevent user from writing charachters
                name: 'BoosterInput'
              }}
              meta={{
                error: error, 
                touched: touched,
              }}
              value={BoosterInput}
              onChange={handleChange}
            > 
            </InputField>
          </Table.Cell>
        </Table.Row>  
          
      </Table> 
      
       <Button type="button" onClick={handleClick} >Update</Button>    
      
      </Main>

    </>
  ); 
}
export default AddMDRTable;