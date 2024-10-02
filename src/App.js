import './App.css';
import styled from 'styled-components';

import Home from './Components/Camila/Home'
import MyTopnav from './Components/MyTopnav';
import MyFooter from './Components/MyFooter';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import MyBreadcrumbs from './Components/MyBreadcrumbs';
import Main from '@govuk-react/main';

import ViewAppAdmin from './Components/Camila/ViewAppAdmin';
import Appointments from './Components/Thushani/Appointments';
import ViewAppList from './Components/Camila/ViewAppList';
import CancelApp from './Components/Camila/CancelApp';
import CancelConfirmation from './Components/Camila/CancelConfirmation';
import ErrorPage from './Components/Camila/ErrorPage';


import ChangeEmail from './Components/Saba/ChangeEmail';
import ChangePassword from './Components/Saba/ChangePassword';
import SavedChangesPan from './Components/Saba/SavedChangesPan';
import DeRegister from './Components/Saba/DeRegister';
import AccountDeletedPan from './Components/Saba/AccountDeletedPan';
import PasswordChangedPan from './Components/Saba/PasswordChangedPan';
import NumberChange from './Components/Saba/NumberChange';
import GPRecordsTabsMain from './Components/Saba/GPRecordsTabsMain';
import GPRecordsTab1 from './Components/Saba/GPRecordsTab1';
import GPRecordsTab2 from './Components/Saba/GPRecordsTab2';
import GPRecordsTab3 from './Components/Saba/GPRecordsTab3';

import Login from './Components/Login';
import LoginPassword from './Components/LoginPassword';

import Bookapp from './Components/Thushani/Bookapp';
import Bookapp2 from './Components/Thushani/Bookapp2';
import Bookapp3 from './Components/Thushani/Bookapp3';
import AppointmentDescription from './Components/Thushani/AppointmentDescription'

import AddMDRTable from './Components/Thiviya/AddMDRTable';
import MyNHSinput from './Components/Thiviya/MyNHSinput';
import Viewmedicalrecord from './Components/Thiviya/Viewmedicalrecord';
import MyPanel from './Components/Thiviya/MyPanel';


import RegistrationPage1 from './Components/Amanah/RegistrationPage1';
import RegistrationNHS from './Components/Amanah/RegistrationNHS';
import RegistrationPostcode from './Components/Amanah/RegistrationPostcode';
import RegistrationDetails from './Components/Amanah/RegistrationDetails';
import RegistrationPassword from './Components/Amanah/RegistrationPassword';
import RegistrationCompleted from './Components/Amanah/RegistrationCompleted';

import { createContext, useState } from 'react';
import { useContext } from 'react';

export const CurrentContext = createContext();

// @author done by Camila, Thushani, Amanah, Thiviya and Saba


function App() {    


    // Global variables
    const [userId, setUserId] = useState('NULL');

    const [userTempoId, setUserTempoId] = useState('NULL');
    const [passLogin, setPassLogin] = useState(null);
    const [pages, setPages] = useState(0);

    // thiviya
    const [patientNHSno, setpatientNHSno] = useState('NULL');

    //amanah
    const [forename, setForename] = useState('NA');
    const [surname, setSurname] = useState(false);
    const [dob, setDob] = useState("");
    const [genderCode, setGenderCode] = useState(false);
    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState(false);
    const [email, setEmail] = useState('');   
    const [number, setNumber] = useState('');   
    const [ethnicity, setEthnicity] = useState('');   
    const [nationality, setNationality] = useState(''); 

    //camila
    const [cancelApp, setCancelApp] = useState(false);
    const [docId, setDocId] = useState('NA');

    //thushani
    const [date, setDate] = useState('NA');
    const [time, setTime] = useState('NA');
    const [description, setDescription] = useState('NA');
   
    return (
        <>
            <Router>
               
                <CurrentContext.Provider value={{ cancelApp, setCancelApp, userId, setUserId, docId, setDocId, patientNHSno, setpatientNHSno, passLogin, setPassLogin,
                    userTempoId, setUserTempoId, forename, setForename, surname, setSurname, dob, setDob, genderCode, setGenderCode, address, setAddress,
                    postcode, setPostcode, email, setEmail, number, setNumber, ethnicity, setEthnicity, nationality, setNationality, pages, setPages, time, setTime, date, setDate,
                    description, setDescription}}>

                    <MyTopnav />                
                    <MyBreadcrumbs />
                
                    <Routes>

                        {/* done by CAMILA, THUSHANI, THIVIYA, SABA AND AMANAH ********************/}

                        <Route path="/LoginEmail" element={<Login />} />
                        <Route path="/LoginEmail/LoginPassword" element={<LoginPassword/>} />

                        {/*camila's*****************************************************************/}

                        <Route path="/Home" element={<Home />}/>
                        <Route path="/" element={<Navigate to="/Home" />} />
                        <Route path="/ErrorPage" element={<ErrorPage/>}></Route>
                        <Route path="*" element={<Navigate to="/ErrorPage" />} />
                    
                            <Route path="/Appointments/ViewAppAdmin" element={<ViewAppAdmin />} />
                            <Route path="/Appointments/ViewAppAdmin/ViewAppList" element={<ViewAppList />} />
                            <Route path="/Appointments/ViewAppList" element={<ViewAppList />} />
                            <Route path="/Appointments/ViewAppAdmin/CancelApp" element={<CancelApp />} />
                            <Route path="/Appointments/CancelApp" element={<CancelApp />} />
                    
                        <Route path="/Appointments/CancelConfirmation" element={<CancelConfirmation />} />

                        {/*Saba's*****************************************************************/}
                    
                        <Route path="/GPRecordsTabsMain" element={< GPRecordsTabsMain />}>
                            <Route index element={< GPRecordsTab1 />} />
                            <Route path="GPRecordsTab1" element={< GPRecordsTab1 />} />
                            <Route path="GPRecordsTab2" element={< GPRecordsTab2 />} />
                            <Route path="GPRecordsTab3" element={< GPRecordsTab3 />} />
                        </Route>
                        <Route path="/GPRecordsTabsMain/GPRecordsTab1/ChangeEmail" element={< ChangeEmail />} />
                        <Route path="/GPRecordsTabsMain/GPRecordsTab3/ChangePassword" element={< ChangePassword />} />
                        <Route path="/GPRecordsTabsMain/GPRecordsTab1/NumberChange" element={< NumberChange />} />
                    
                        <Route path="/GPRecordsTabsMain/GPRecordsTab3/DeRegister" element={< DeRegister />} />
                        <Route path="/GPRecordsTabsMain/GPRecordsTab3/AccountDeletedPan" element={< AccountDeletedPan />} />
                        <Route path="/GPRecordsTabsMain/PasswordChangedPan" element={< PasswordChangedPan />} />                    
                        <Route path="/GPRecordsTabsMain/SavedChangesPan" element={< SavedChangesPan />} />

                        {/*Thushani's*****************************************************************/}

                        <Route path="/Appointments" element={<Appointments />}></Route>
                        <Route path="/Appointments/Bookapp" element={< Bookapp />} />
                        <Route path="/Appointments/Bookapp/Bookapp2" element={< Bookapp2 />} />
                        <Route path="/Appointments/Bookapp/Bookapp2/AppointmentDescription/Bookapp3" element={< Bookapp3 />} />
                        <Route path="/Appointments/Bookapp/Bookapp2/AppointmentDescription" element={< AppointmentDescription />} />                    

                        {/*Thiviya's*****************************************************************/}

                        <Route path="/MyNHSinput" element={< MyNHSinput />} />
                        <Route path="/MyNHSinput/Viewmedicalrecord" element={< Viewmedicalrecord />} />
                        <Route path="/MyNHSinput/AddMDRTable" element={< AddMDRTable />} />
                        <Route path="/MyNHSinput/MyPanel" element={< MyPanel />} />
                        {/* thiviya change this */}
                        {/*Amanah's*****************************************************************/}

                        
                            <Route path="/RegistrationPage1" element={< RegistrationPage1 />} /> 
                            <Route path="/RegistrationPage1/RegistrationNHS" element={< RegistrationNHS />} />
                            <Route path="/RegistrationPage1/RegistrationNHS/RegistrationDetails" element={< RegistrationDetails />} />
                            <Route path="/RegistrationPage1/RegistrationNHS/RegistrationDetails/RegistrationPassword" element={< RegistrationPassword />} /> 
                            <Route path="/RegistrationPage1/RegistrationPostcode" element={< RegistrationPostcode />} /> 
                            <Route path="/RegistrationPage1/RegistrationPostcode/RegistrationDetails" element={< RegistrationDetails />} />
                            <Route path="/RegistrationPage1/RegistrationPostcode/RegistrationDetails/RegistrationPassword" element={< RegistrationPassword />} />                    
                            <Route path="/RegistrationPage1/RegistrationCompleted" element={< RegistrationCompleted />} />
                 
                    </Routes>

                    <MyFooter />

                    </CurrentContext.Provider>
               </Router>
        </>
    );
}
export default App;
