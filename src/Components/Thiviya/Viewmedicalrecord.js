import React, { useState, useEffect } from 'react';
import {Table} from "govuk-react";
import { Main, H3 } from "govuk-react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import jq from 'jquery';
import { CurrentContext } from '../../App';

// @author done by Camila, Thushani, Amanah, Thiviya and Saba

//this page will be used by both patients and doctors to view the medical record

function Viewmedicalrecord() {

  //const created which declare the variable DoseNumber as a kind of "key"
  //and when setDoseNumber is used it will update the DoseNumber
  //initialy set to NA 
  //this will be the same for all variables created bellow 
  const [DoseNumber, setDoseNumber] = useState('NA');
  const [VaccinationDate, setVaccinationDate] = useState('NA')
  const [ VaccinationManifacturer, setVaccinationManifacturer ] = useState('NA');
  const [ DiseaseTargeted, setDiseaseTargeted ] = useState('NA');
  const [ VaccineType, setVaccineType ] = useState('NA');
  const [ Product, setProduct ] = useState('NA');
  const [VaccineBatchNo, setVaccineBatchNo] = useState('NA');   
  const [ CountryofVaccination, setCountryofVaccination] = useState('NA');
  const [Authority, setAuthority] = useState('NA');  
  const [ Site, setSite] = useState('NA');
  const [ TotalDoses, setTotalDoses] = useState('NA');
  const [DisplayName, setDisplayName] = useState('NA');  
  const [ SnomedCode, setSnomedCode] = useState('NA');
  const [DateEntered, setDateEntered] = useState('NA');  
  const [ProcedureCode, setProcedureCode] = useState('NA');  
  const [Booster, setBooster] = useState('NA');
  const [empty, setEmpty] = useState(false);


  const context = useContext(CurrentContext);

  const patientId = context.patientNHSno; //will set patient id to the nhs number of the patient captured using the global variable
  const staffId = context.userId;

  console.log("patient id:", patientId)
  console.log("staff id:", staffId)

    if (!isNaN(staffId)) {
        var id = {
            'id': staffId,
        };
    } else if (!isNaN(patientId)) {

        var id = {
            'id': patientId,
        };
    } else {
        var id = {
            'id': staffId,
        };
    }
  var url_php = 'http://localhost:4000/ViewingMedicalRecord.php'; //caling the php file to retrive the data from the database
  
  jq.ajax({
    type: "GET", //using the GET method
    mode: 'no-cors',
    url: url_php,  
    data: id,     

    success: function (response) {
      console.log(response)
      
      // parse the json string into string
      //checking if the connection to the database failed or not
      if (JSON.parse(response) === 'faileddb' || JSON.parse(response) === 'failedphp') {


          console.log('failed')  
          setEmpty(true);
      }else {
          console.log(response)


          var json = jq.parseJSON(response);

        //set the variables to the corresponding value 
          setDoseNumber(json.DoesNo);
          setVaccinationDate(json.VaccinationDate);
          setVaccinationManifacturer(json.VaccineManufacturer);
          setDiseaseTargeted(json.DiseaseTargeted);
          setVaccineType(json.VaccineType);
          setProduct(json.Product);
          setVaccineBatchNo(json.VaccineBatchNumber);
          setCountryofVaccination(json.CountryOfVaccination);
          setAuthority(json.Authority);
          setSite(json.Site);
          setTotalDoses(json.TotalSeriesOfDoses);
          setDisplayName(json.DisplayName);
          setSnomedCode(json.SnomeCode);
          setDateEntered(json.DateEntered);
          setProcedureCode(json.ProcedureCode);
          setBooster(json.Booster);

      }
    }
  });
    

  return ( 
    <>
      <Main className = "myMain">
        <h1>
          Medical Record
        </h1>

              <Table className="tableStyle">  {/* rendering the data retrieved from the database */}

                  {(empty === false) && (
                      <>
                          <Table.Row>
                              <Table.CellHeader >Dose Number</Table.CellHeader>
                              <Table.Cell>{DoseNumber}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader >Vaccination Date</Table.CellHeader>
                              <Table.Cell>{VaccinationDate}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader >Vaccination Manifacturer</Table.CellHeader>
                              <Table.Cell>{VaccinationManifacturer}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Disease Targeted</Table.CellHeader>
                              <Table.Cell>{DiseaseTargeted}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader >Vaccine Type</Table.CellHeader>
                              <Table.Cell>{VaccineType}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Product</Table.CellHeader>
                              <Table.Cell>{Product}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Vaccine Batch No.</Table.CellHeader>
                              <Table.Cell>{VaccineBatchNo}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Country of Vaccination</Table.CellHeader>
                              <Table.Cell>{CountryofVaccination}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Authority</Table.CellHeader>
                              <Table.Cell>{Authority}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Site</Table.CellHeader>
                              <Table.Cell>{Site}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Total Series of Doses</Table.CellHeader>
                              <Table.Cell>{TotalDoses}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Display Name</Table.CellHeader>
                              <Table.Cell>{DisplayName}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Snomed Code</Table.CellHeader>
                              <Table.Cell>{SnomedCode}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Date Entered</Table.CellHeader>
                              <Table.Cell>{DateEntered}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Procedure Code</Table.CellHeader>
                              <Table.Cell>{ProcedureCode}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                              <Table.CellHeader>Booster</Table.CellHeader>
                              <Table.Cell>{Booster}</Table.Cell>
                          </Table.Row>

                      </>
                  )}


                  {(empty === true) && (
                      <>

                          <H3>
                              No records found
                          </H3>

                      </>
                  )} 
            
        </Table> 
            {/* this link will only appear if a doctor is logged in */}
            {/* This is because only doctors have the ability to add a medical record */}
              {String(staffId).includes('D') && (
                  <>
                      <Link to="/MyNHSinput/AddMDRTable">Add Medical Record</Link> 
                  </>
              )} 
        

      </Main>
    </>
  ); 
}
export default Viewmedicalrecord;