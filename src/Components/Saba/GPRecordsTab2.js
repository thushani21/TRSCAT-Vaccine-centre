import { H2, H3 } from 'govuk-react';
import Table from '@govuk-react/table';
import React, { useState, useContext, useEffect } from 'react';
import { CurrentContext } from '../../App';

//@author Saba, Camila, Thiviya, Thushani and Amanah

function GPRecordsTab2() {
    const [info, setInfo] = useState([]);
    const context = useContext(CurrentContext); //coming from App.js, shows patient is logged in 
    console.log("checking", context.userId )

    useEffect(() => {
        fetch(`http://localhost:4000/appointmentHistory.php?nhs=${context.userId}`)
            .then(response => response.json())
            .then(data => {
                setInfo(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <H2>Appointment History</H2>
            {info.length > 0 ? (
                <Table
                    head={
                        <Table.Row>
                            <Table.CellHeader>Date</Table.CellHeader>
                            <Table.CellHeader>Doctor</Table.CellHeader>
                            <Table.CellHeader>Description</Table.CellHeader>
                        </Table.Row> 
                    }
                >
                    {/*These are the titles of each component of the appointment history*/}
                    {info.map((item) => (
                        <Table.Row key={item.id}>
                            <Table.Cell>{item.appointmentDate}</Table.Cell>
                            <Table.Cell>{item.staffFullName}</Table.Cell>
                            <Table.Cell>{item.appointmentDescription}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table>
            ) : (
                <H3>No appointments found</H3> 
            )}
        </>
    );
    {/*Iterations are done to print the data if info array is not empty*/ }
}

export default GPRecordsTab2;
