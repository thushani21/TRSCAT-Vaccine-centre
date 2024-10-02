import Main from '@govuk-react/main';
import Paragraph from '@govuk-react/paragraph';
import { H1, H2, H3, H4, H5, H6 } from 'govuk-react';

// @author done by Camila, Thushani, Amanah, Thiviya and Saba
//this is the page that siplays if the page the user is trying to does not exist
//this stops an error from occuring

function ErrorPage() {

    return (
        <>
            <Main className="myMain">
                <H1>Page not found</H1>
                <Paragraph>If you typed the web address, check it is correct.</Paragraph>

                <Paragraph>If you pasted the web address, check you copied the entire address.</Paragraph>

                    <Paragraph>If the web address is correct or you selected a link or button, contact the GP Service Helpline if you need to speak to someone.
                    </Paragraph>
            </Main>
        </>
    );
}
export default ErrorPage;
