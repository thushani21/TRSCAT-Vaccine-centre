import styled from 'styled-components';
import Main from '@govuk-react/main';
import Paragraph from '@govuk-react/paragraph';
import { H1, H2, H3, H4, H5, H6 } from 'govuk-react';
import Table from '@govuk-react/table';
import Tabs from '@govuk-react/tabs';
import { CellHeader } from 'govuk-react';
import { BrowserRouter as Router, Outlet, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import { CurrentContext } from '../../App';

//@author Saba, Camila, Thiviya, Thushani and Amanah

function GPRecordsTab1() {
    const context = useContext(CurrentContext);

    const [info, setInfo] = useState([]);//info array created to store the infromation form the database

    useEffect(() => {
        fetch(`http://localhost:4000/personalDetails.php?nhs=${context.userId}`)//takes the NHS number 
            .then(response => response.json())//NHS number used to find personal details 
            .then(data => {//when data is being retrieved it is being converted to response.json
                setInfo(data);//Data is being retrived from two tables 
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <H2>Personal Details</H2>
            <Table>
                <Table.Row>
                    <Table.Cell>NHS Number</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].nhsNumber}</Table.Cell>}
                    {/*Data coming from the first object of the array */}
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Forename</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].forename}</Table.Cell>}
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Surname</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].surname}</Table.Cell>}
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>DOB</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].personDOB + " "}</Table.Cell>}
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Gender Code</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].genderCode + " "}</Table.Cell>}
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Address</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].patientAddress}</Table.Cell>}
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Postcode</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].postcode}</Table.Cell>}
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Phone No.</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].patientTelNo + " "}</Table.Cell>}
                    <Table.Cell>
                        <Link to="/GPRecordsTabsMain/GPRecordsTab1/NumberChange">Change</Link>
                        {/*Link to change the GP record */}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Email</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].patientEmail}</Table.Cell>}
                    <Table.Cell>
                        <Link to="/GPRecordsTabsMain/GPRecordsTab1/ChangeEmail">Change</Link>
                        {/*Link to change the GP record */}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Nationality</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].patientNationality}</Table.Cell>}
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Ethnicity</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[0].patientEthnicity}</Table.Cell>}
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Registration Date</Table.Cell>
                    {info.length > 0 && <Table.Cell>{info[1].gpRegistrationDate + " "}</Table.Cell>}
                    {/*Data coming from the second object in the array */}
                    <Table.Cell></Table.Cell>
                </Table.Row>
            </Table>

            
        </>
    );
}
export default GPRecordsTab1;