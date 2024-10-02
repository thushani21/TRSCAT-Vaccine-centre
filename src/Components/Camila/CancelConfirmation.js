import Main from '@govuk-react/main';
import Panel from '@govuk-react/panel'

// @author done by Camila, Thushani, Amanah, Thiviya and Saba

function CancelConfirmation() {
    {/*When appointment is cancelled the panel the user is directed to */ }
    return (
        <>
            <Main className="myMain">
                <Panel title="Appointment successfully cancelled" />
            </Main>

        </>
    );
}
export default CancelConfirmation;