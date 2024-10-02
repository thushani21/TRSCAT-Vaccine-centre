import { Radio, Main } from "govuk-react";
import styled from 'styled-components';
import Button from '@govuk-react/button';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Page, Breadcrumbs, H3 } from 'govuk-react';
import { useState, useContext } from 'react';

//Authors of this file: Amanah, Thiviya, Camila, Thushani, Saba 

function RegistrationPage1() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  //depending on option chosen, directs them to the page they have selected. 
  const handleContinueClick = () => {
    if (selectedOption === 'nhs') {
      return navigate('/RegistrationPage1/RegistrationNHS');
    } else {
      return navigate('/RegistrationPage1/RegistrationPostcode');
    }
  };

  return (
    <>
      <Main className="myMain">
        <H3> Register through</H3>
        <Radio name="group1" onChange={() => setSelectedOption('nhs')}>
          NHS
        </Radio>
        <Radio name="group1" onChange={() => setSelectedOption('postcode')}>
          Postcode
        </Radio>

        <Button onClick={handleContinueClick}>
          Continue
        </Button>
      </Main>
    </>
  );
}

export default RegistrationPage1;
