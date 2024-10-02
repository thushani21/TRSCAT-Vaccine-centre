import Panel from '@govuk-react/panel';
import { Link, Main } from "govuk-react";

//@author Saba, Camila, Thiviya, Thushani and Amanah

function SaveChangesPan() {
    {/*When email and phone number is changed the panel the user is directed to */ }
    return (
        <>
            <Main className="myMain">
            <Panel >Saved<br /> Changes</Panel>
            </Main>
        </>
    );
}

export default SaveChangesPan;