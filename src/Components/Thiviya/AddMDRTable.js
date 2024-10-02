import React, { useState, useEffect, context, useContext } from 'react';
import bcrypt from 'bcryptjs';
import {Table, Main, DateField, InputField, Select} from "govuk-react";
import Button from '@govuk-react/button';
import jq from 'jquery';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import { CurrentContext } from '../../App';

// @author done by Camila, Thushani, Amanah, Thiviya and Saba
//this page will update a medical record

function AddMDRTable() {

    const navigate = useNavigate();
    const context = useContext(CurrentContext);

/*#####################################  VARIABLES #################################### */

    const [SelDoseNum, setDoseNum] = useState('NA'); 
    const [vaccDateInput, setVaccDate] = useState('');
    const [SelVaccManifacturer, setVaccManifacturer] = useState('NA');
    const [SelDiseaseTarg, setDiseaseTarg] = useState('NA');
    const [SelVaccineType, setVaccineType] = useState('NA');
    const [SelProduct, setProduct] = useState('NA');
    const [SelVaccineBatchNo, setVaccineBatchNo] = useState('NA');
    const [SelCountofVacc, setCountofVacc] = useState('NA');
    const [SelAuth, setAuth] = useState('NA');
    const [SelTotDoses, setTotDoses] = useState('NA');
    const [SelDisplayName, setDisplayName] = useState('NA'); 
    const [SelSnomedCode, setSnomedCode] = useState('NA');
    const [vaccDateInput2, setVaccDate2] = useState('');
    const [SelProcedCode, setProcedCode] = useState('NA');
    const [BoosterInput, setBooster] = useState('NA'); 
    const [SelSite, setSite] = useState('NA');

 /*############################################################# onChange ##########################################################*/

    function onHandle1(event) {
        const value = event.target;
        setDoseNum(value.options[value.selectedIndex].textContent);
    };

    function onHandle2(event) {
        const { value } = event.target;
        setVaccDate(value);
    };

    function onHandle3(event) {
        const value = event.target;
        setVaccManifacturer(value.options[value.selectedIndex].textContent);
    };

    function onHandle4(event) {
        const value = event.target;
        setDiseaseTarg(value.options[value.selectedIndex].textContent);
    };

    function onHandle5(event) {
        const value = event.target;
        setVaccineType(value.options[value.selectedIndex].textContent);
    };

    function onHandle6(event) {
        const value = event.target;
        setProduct(value.options[value.selectedIndex].textContent);
    };

    function onHandle7(event) {
        const value = event.target;
        setVaccineBatchNo(value.options[value.selectedIndex].textContent);
    };

    function onHandle8(event) {
        const value = event.target;
        setCountofVacc(value.options[value.selectedIndex].textContent);
    };

    function onHandle9(event) {
        const value = event.target;
        setAuth(value.options[value.selectedIndex].textContent);
    };

    function onHandle16(event) {
        const value = event.target;
        setSite(value.options[value.selectedIndex].textContent);
    };

    function onHandle10(event) {
        const value = event.target;
        setTotDoses(value.options[value.selectedIndex].textContent);
    };

    function onHandle11(event) {
        const value = event.target;
        setDisplayName(value.options[value.selectedIndex].textContent);
    };

    function onHandle12(event) {
        const value = event.target;
        setSnomedCode(value.options[value.selectedIndex].textContent);
    };

    function onHandle13(event) {
        const { value } = event.target;        
        setVaccDate2(value);
    };

    function onHandle14(event) {
        const value = event.target;
        setProcedCode(value.options[value.selectedIndex].textContent);
    };

    function onHandle15(event) {
        const { value } = event.target;
        console.log(value);
        setBooster(value);
    };


    useEffect(() => {
        console.log(vaccDateInput);
    }, [vaccDateInput]
    );

    /*############################################   onClick  ############################################*/

    function handleClick1() {

        toPHP();

    }

    //php function
    function toPHP() {

        var dataphp = {
            'nhs': context.patientNHSno,
            'dose': SelDoseNum,
            'date1': vaccDateInput,
            'vaccMan': SelVaccManifacturer,
            'diseaseTar': SelDiseaseTarg,
            'vaccType': SelVaccineType,
            'product': SelProduct,
            'vaccBatch': SelVaccineBatchNo,
            'countryVacc': SelCountofVacc,
            'auth': SelAuth,
            'sitee': SelSite,
            'totalDos': SelTotDoses, 
            'dispName': SelDisplayName,
            'gnome': SelSnomedCode,
            'date2': vaccDateInput2,
            'procedure': SelProcedCode,
            'booster': setBooster
        };
        console.log(dataphp)

        var url_php = 'http://localhost:4000/medicalRecord.php'; //calling the php file to insert the data into the database

        // open request function
        jq.ajax({

            type: "POST",
            mode: 'no-cors',
            url: url_php,
            data: dataphp,

            success: function (response) {

                console.log("response:", response)

                // parse the json string into string
                if (JSON.parse(response) === 'faileddb' || JSON.parse(response) === 'failedphp') {

                    console.log('other failed')

                } else {

                    navigate('/MyNHSinput/MyPanel'); //navigate to MyPanel which will only be triggered once the medical record is updated
                }
            }
        });    

    }
   

   /* ############################################################# TABLE #######################################################################*/

  return ( 
      <>
          <Main className='myMain'>

            <h1> Add Medical Record </h1>
        

    {/*############################################################## DOSE ########################################################*/}

              <Table className="tableStyle">
                  <Table.Row>
                      <Table.CellHeader> Dose Number </Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle1
                              }}
                          >
                              <option value="0" disabled hidden selected > Choose </option>
                              <option value="1" >1</option>
                              <option value="2">2</option>

                          </Select>
                      </Table.Cell>
                  </Table.Row>

{/*############################################################## Vaccination Date ########################################################*/}
                  <Table.Row>
                      <Table.CellHeader >
                          Vaccination Date
                      </Table.CellHeader>
                      <Table.Cell>
                          <InputField
                              input={{
                                  type: 'string', 
                                  name: 'date2'
                              }}
                              value={vaccDateInput}
                              onChange={onHandle2}
                          >
                          </InputField>

                      </Table.Cell>
                  </Table.Row> 

{/*############################################################## Vaccination Manufacturer ########################################################*/}

                  <Table.Row >
                      <Table.CellHeader> Vaccination Manufacturer </Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle3
                              }}
                          >
                              <option value="0" disabled hidden selected > Choose </option>
                              <option value="1"> AstraZenica, AB, ORG-12394567</option>
                              <option value="2"> Phizer, PH, ORG-012349567</option>
                              <option value="3">Johnson and Johnson, JJ, ORG-87654</option>

                          </Select>
                      </Table.Cell>
                  </Table.Row>

{/*############################################################## Disease Targeted ########################################################*/}

                  <Table.Row>
                      <Table.CellHeader> Disease Targeted </Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle4
                              }}
                              >
                              <option value="0" disabled hidden selected > Choose </option>
                              <option value="1"> Covid-19 846547485</option>
                              <option value="2">Booster</option>
                          </Select>
                      </Table.Cell>
                  </Table.Row>

 {/*############################################################## Vaccine type ########################################################*/}                 

                  <Table.Row>
                      <Table.CellHeader> Vaccine Type </Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle5
                              }}              
                          >
                              <option value="0" disabled hidden selected> Choose </option>
                              <option value="1">AstraZenica, 03948576</option>
                              <option value="2">Phizer, 3456789</option>
                              <option value="3"> Johnson and Johnson, 98765432</option>
                          </Select>
                      </Table.Cell>
                  </Table.Row>

{/*############################################################## Product ########################################################*/}

                  <Table.Row>
                      <Table.CellHeader> Product </Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle6
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

{/*############################################################## Vaccine Batch No. ########################################################*/}

                  <Table.Row>
                      <Table.CellHeader> Vaccine Batch No.</Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle7
                              }}
                          >
                              <option value="0" disabled hidden selected > Choose </option>
                              <option value="1">34527566</option>
                              <option value="2">34574562</option>
                              <option value="3">34547561</option>
                          </Select>
                      </Table.Cell>
                  </Table.Row>

{/*############################################################## Country of Vaccination  ########################################################*/}

                  <Table.Row>
                      <Table.CellHeader> Country of Vaccination</Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle8
                              }}
                          >
                              <option value="0" disabled hidden selected > Choose </option>
                              <option value="1">UK</option>
                          </Select>
                      </Table.Cell>
                  </Table.Row>

{/*############################################################## Authority ########################################################*/}

                  <Table.Row>
                      <Table.CellHeader>Authority</Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle9
                              }}
                          >
                              <option value="0" disabled hidden selected > Choose </option>
                              <option value="1">Hospital</option>
                          </Select>
                      </Table.Cell>
                  </Table.Row>

{/*############################################################## Site ########################################################*/}                 

                  <Table.Row>
                      <Table.CellHeader>
                          Site
                      </Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle16
                              }}
                          >
                              <option value="0" disabled hidden selected > Choose </option>
                              <option value="1">Left Arm</option>
                              <option value="2">Right Arm</option>
                          </Select>
                      </Table.Cell>
                  </Table.Row>

{/*############################################################## Total Series of Doses  ########################################################*/}

                  <Table.Row>
                      <Table.CellHeader> Total Series of Doses </Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle10
                              }}
                          >
                              <option value="0" disabled hidden selected > Choose </option>
                              <option value="1">1 </option>
                              <option value="2">2</option>
                          </Select>
                      </Table.Cell>
                  </Table.Row>

{/*############################################################## Display Name ########################################################*/}

                  <Table.Row>
                      <Table.CellHeader> Display Name </Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle11
                              }}
                          >
                              <option value="0" disabled hidden selected > Choose </option>
                              <option value="1">Astrazenica</option>
                              <option value="2">Phizer</option>
                              <option value="3">Johnson and Johnson</option>
                          </Select>
                      </Table.Cell>
                  </Table.Row>

{/*############################################################## Snomed Code ########################################################*/}                  

                  <Table.Row>
                      <Table.CellHeader> Snomed Code </Table.CellHeader>
                        <Table.Cell>
                            <Select
                                input={{
                                    name: 'group1',
                                    onChange: onHandle12
                                }}
                            >
                                <option value="0" disabled hidden selected > Choose </option>
                                <option value="1">23456789 </option>
                                <option value="2">37865433456787</option>
                                <option value="3">2345612123789</option>
                            </Select>
                        </Table.Cell>
                  </Table.Row>

{/*############################################################## Date Entered ########################################################*/}

                  <Table.Row>
                      <Table.CellHeader> Date Entered </Table.CellHeader>
                      <Table.Cell>
                          <InputField
                              input={{
                                  type: 'string', 
                                  name: 'date2'
                              }}
                              value={vaccDateInput2}
                              onChange={onHandle13}
                          >
                          </InputField>
                      </Table.Cell>
                  </Table.Row> 

{/*############################################################## Procedure Code ########################################################*/}                  

                  <Table.Row>
                      <Table.CellHeader> Procedure Code</Table.CellHeader>
                      <Table.Cell>
                          <Select
                              input={{
                                  name: 'group1',
                                  onChange: onHandle14
                              }}
                          >
                              <option value="0" disabled hidden selected > Choose </option>
                              <option value="1">123456789</option>
                              <option value="2">098765432</option>
                              <option value="3">23456747612398</option>
                          </Select>
                      </Table.Cell>
                  </Table.Row>

{/*############################################################## Booster ########################################################*/}

                  <Table.Row>
                      <Table.CellHeader> Booster</Table.CellHeader>
                      <Table.Cell>
                          <InputField
                              input={{
                                  type: 'number', // prevent user from writing charachters
                                  name: 'BoosterInput'
                              }}
                              value={BoosterInput}
                              onChange={onHandle15}
                          >
                          </InputField>
                      </Table.Cell>
                  </Table.Row>  
          
              </Table> 
      
      {/* button for the user to update their record */}
              <Button type="button" onClick={handleClick1} >Update</Button>    
      
          </Main>

      </>
  ); 
}
export default AddMDRTable;