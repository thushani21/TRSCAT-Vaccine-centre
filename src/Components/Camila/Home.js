import styled from 'styled-components';
import Main from '@govuk-react/main';
import Paragraph from '@govuk-react/paragraph';
import { H1, H2, H3, H4, H5, H6 } from 'govuk-react';

//@author done by Camila, Thushani, Amanah, Thiviya and Saba
//The home page which is a default that displayes when user comes to the page

function Home() {

    return (
        <>
            <Main className="myMain">
                <H2 className="Homeh2">About the COVID&#8209;19 vaccine</H2>
                <H6>The coronavirus (COVID&#8209;19) vaccines are safe and effective. They give you the best protection COVID&#8209;19.</H6>
                <Paragraph>
                    Who can get a COVID&#8209;19 vaccine
                    Everyone aged 5 (on or before 31 August 2022) and over can get a 1st and 2nd
                    dose of the COVID&#8209;19 vaccine.
                </Paragraph>
                    <Paragraph>
                    People aged 16 and over, and some children aged 12 to 15, can also get a booster
                    dose.
                    </Paragraph>
                    <Paragraph>
                        People aged 5 and over who had a severely weakened immune system when
                        they had their 1st or 2nd dose will be offered an additional primary dose (3rd
                        dose) before any booster doses.
                        Some people, including those aged 50 years or over, those at higher risk or who
                        are pregnant, and frontline health and social care workers, will be offered a
                        seasonal booster (autumn booster).
                    </Paragraph>

            </Main>
        </>
    );
}
export default Home;
