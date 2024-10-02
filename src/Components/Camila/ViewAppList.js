import MyPagination from '../MyPagination';
import Table from '@govuk-react/table';
import { CellHeader, H2 } from 'govuk-react';
import Main from '@govuk-react/main';
import { useState, useEffect, useContext } from 'react';
import jq from 'jquery';
import { CurrentContext } from '../../App';

// @author done by Camila, Thushani, Amanah, Thiviya and Saba

function ViewAppList() {

    //comes from the database
    //varaibles intailised as NA would be changed when retrieved from the database
    const [name, setName] = useState('NA');
    const[surname, setSurname] = useState('NA')
    const [ refNum, setRefNum ] = useState('NA');
    const [ date, setDate ] = useState('NA');
    const [ time, setTime ] = useState('NA');
    const [ descrip, setDescrip ] = useState('NA');
    const [dose, setDose] = useState('NA');    
    const [noEntries, setNotEntries] = useState(false);

    const context = useContext(CurrentContext);
    const pages = context.pages;
    //getting the staff id from the global variable
    const staffId = context.docId;
  

    console.log("staff id:", staffId)

    if (staffId != 'NA') {
        var id = {
            'id': staffId,
        };
    } else {
        var id = {
            'id': context.userId,
        };
    }
    console.log(id)
        

    var url_php = 'http://localhost:4000/appList.php'; //the PHP file

    // open request function
    jq.ajax({

        type: "GET",
        mode: 'no-cors',
        url: url_php,  
        data: id,     

        success: function (response) {

            console.log(response)

            // parse the json string into string
            if (JSON.parse(response) === 'faileddb' || JSON.parse(response) === 'failedphp') {

                console.log('failed')  
                setNotEntries(true);

            } else {

                console.log(response)
                
                var json = jq.parseJSON(response);//cooverting json into a javascript object

             
                setRefNum(json.appointmentReferenceNumber);
                setName(json.forename);
                setSurname(json.surname);
                setDate(json.appointmentDate);
                setTime(json.appointmentTime);
                setDescrip(json.appointmentDescription);
            }
        }
    });


    

    return (
        <>
            
            <Main className="myMain">               

                
                {/*If no data is found */}
                    {noEntries === true && (
                        <>

                            <Table clasName="AppTable" caption="Appointments">

                                <H2>
                                    No appointments found
                                </H2>

                            </Table>

                        </>
                    )}

                    {noEntries === false && (
                        <>

                            <Table clasName="AppTable" caption="Appointments">
                                <Table.Row>
                                    <Table.CellHeader>
                                        Name
                                    </Table.CellHeader>
                                    <Table.Cell>
                                        {name} &nbsp; {surname}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.CellHeader>
                                        Booking Ref No
                                    </Table.CellHeader>
                                    <Table.Cell>
                                        {refNum}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.CellHeader>
                                        Date
                                    </Table.CellHeader>
                                    <Table.Cell>
                                        {date}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.CellHeader>
                                        Time
                                    </Table.CellHeader>
                                    <Table.Cell>
                                        {time}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.CellHeader>
                                        Description
                                    </Table.CellHeader>
                                    <Table.Cell>
                                        {descrip}
                                    </Table.Cell>
                                </Table.Row>
                        </Table>

                        {{pages} > 2 && (
                            <>

                                <MyPagination />

                            </>
                        )} 
                        </>
                    )}
            </Main>

        </>
    );
}
export default ViewAppList;