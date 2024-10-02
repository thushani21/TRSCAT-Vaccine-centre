import Panel from '@govuk-react/panel';
import Main from '@govuk-react/main';

//@author Saba, Camila, Thiviya, Thushani and Amanah

function PasswordChangedPan() {
    {/*When password is changed the panel the user is directed to */ }
    return (
        <>
            <Main className="myMain">
            <Panel className="confirmation">Password<br /> Changed</Panel>
            </Main>
        </>
    );
}

export default PasswordChangedPan;