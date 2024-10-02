import React from "react";
import { Main, H1, H2, H3, H4, H5  } from "govuk-react";
import Radio from '@govuk-react/radio';
import Button from '@govuk-react/button';
import { useContext, useState } from "react";
import { CurrentContext } from "../../App";
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';



// @author done by Camila, Thushani, Amanah, Thiviya and Saba
function getAvailableTimes() {

    

    const startTime = new Date();
    startTime.setHours(9, 0, 0, 0); // Set the start time to 9am
    const endTime = new Date();
    endTime.setHours(17, 0, 0, 0); // Set the end time to 5pm
    const interval = 30; // Set the interval to 30 minutes
    const times = [];
  
    for (let time = new Date(startTime); time <= endTime; time.setMinutes(time.getMinutes() + interval)) {
      const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour24: true });
      const id = formattedTime.replace(/:/g, '').replace(/\./g, ''); // Generate a unique id for each time slot
      times.push({ id, time: formattedTime });
    }
    console.log(times)
    return times;
  }

function Bookapp2() {

    const [selectedValue, setSelectedValue] = useState(null);
    const navigate = useNavigate();
    const availableTimes = getAvailableTimes();
    const context = useContext(CurrentContext);

    function handleClick() {
        if (selectedValue) {
            context.setTime(selectedValue);
            navigate('/Appointments/Bookapp/Bookapp2/AppointmentDescription');
        }
    }

    function handleRadioChange(event) {
        setSelectedValue(event.target.value);
    }

   
  
    return (
        <Main className="myMain">
            <H3>Select time from available appointments</H3>
            {/* This maps over the availableTimes array and renders a radio input element for each time */}
            {availableTimes.map(time => (
                <Radio
                key={time.id} // unique key for React to identify each element
                name="group1" // name for the radio button group
                value={time.time} // value corresponding to the time slot
                checked={selectedValue === time.time} // whether the radio button should be checked
                onChange={handleRadioChange} // function to call when the radio button is changed
              >
                {/* Displays the time in a user-friendly format */}
                {time.time.replace(/\./, ':')}
              </Radio>
              
            ))}
            <Button onClick={handleClick}>Save and Continue</Button>
        </Main>
    );
  }
  export default Bookapp2 ;
  


























// function getAvailableTimes() {
//     const startTime = new Date();
//     startTime.setHours(9, 0, 0, 0); // Set the start time to 9am
//     const endTime = new Date();
//     endTime.setHours(17, 0, 0, 0); // Set the end time to 5pm
//     const interval = 30; // Set the interval to 30 minutes
//     const times = [];
  
//     for (let time = new Date(startTime); time <= endTime; time.setMinutes(time.getMinutes() + interval)) {
//       const options = { hour: 'numeric', minute: '2-digit' };
//       const formattedTime = time.toLocaleTimeString([], options);
//       const id = formattedTime.replace(/:/g, ''); // Generate a unique id for each time slot
//       times.push({ id, time: formattedTime });
//     }
  
//     return times;
//   }
  

// function Bookapp2(){
//     const availableTimes = getAvailableTimes();

//     return (
//         <Main>
//           <h3>Select time from available appointments</h3>
//           {availableTimes.map(time => (
//             <Radio key={time.id} name="group1" value={time.time}> 
//               {time.time} <br/> <br/>
//             </Radio> 
//           ))} 
//         </Main>
//       );

    // return(
    //  <>
    //     <Main >
    //         {/*Select time to book appointment*/}
    //         <H3>Select time from available appointments</H3> <br/> 

    //         {/* Options to select time -  radio buttons*/}
    //         <Radio name="group1">
    //         9:30am
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         10:00am
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         10:30am
    //         </Radio><br/>
    //         <Radio name="group1">
    //         11:00am
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         11:30am
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         12:00pm
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         12:30pm
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         13:00pm
    //         </Radio><br/>
    //         <Radio name="group1">
    //         13:30pm
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         14:00am
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         14:30pm
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         15:00pm
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         15:30pm
    //         </Radio><br/>
    //         <Radio name="group1">
    //         16:00pm
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         16:30am
    //         </Radio> <br/>
    //         <Radio name="group1">
    //         17:00am
    //         </Radio> <br/>

    //         <Button>
    //           Save and Continue
    //         </Button>


    //     </Main>
        
    // </>
    // );
// }
// export default Bookapp2;


  