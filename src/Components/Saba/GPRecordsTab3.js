import {H2} from 'govuk-react';
import Table from '@govuk-react/table';
import { BrowserRouter as Router, Outlet, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';


//@author Saba, Camila, Thiviya, Thushani and Amanah

function GPRecordsTab3() {

    return (
        <>
            <H2>My Account</H2>
            <Table>
                <Table.Row>
                    <Table.Cell>
                        <b>De-Register</b>
                    </Table.Cell>
                    <Table.Cell>
                        <Link to="/GPRecordsTabsMain/GPRecordsTab3/DeRegister">De-Register</Link>
                        {/*Link to change the de-register from the service*/}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <b>Password</b>
                    </Table.Cell>
                    <Table.Cell>
                        <Link to="/GPRecordsTabsMain/GPRecordsTab3/ChangePassword">Change Password</Link>
                        {/*Link to change the chnage password*/}
                    </Table.Cell>
                </Table.Row>
            </Table>
        </>
    );
}
export default GPRecordsTab3; 