import React, { useState, useContext } from "react";
import { Main, H3} from "govuk-react";
import Caption from '@govuk-react/caption';
import Radio from '@govuk-react/radio';
import Button from '@govuk-react/button';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate } from 'react-router-dom';
import { CurrentContext } from "../../App";

// @author done by Camila, Thushani, Amanah, Thiviya and Saba

function getDateArray() {
  const dateArray = [];               // create an empty array to hold the formatted dates
  const startDate = new Date();       // create a new Date object for today's date

  // loop 5 times to get the next 5 dates, starting from today's date
  for (let i = 0; i < 5; i++) {
    const date = new Date(startDate);                                       // create a new Date object based on the startDate
    date.setDate(startDate.getDate() + i);                                  // set the date to the next day based on the index i
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }; // set the options for formatting the date
    const formattedDate = date.toLocaleDateString(undefined, options)      // format the date string
      .replace(/\//g, ' ');                                        // replace any forward slashes with spaces to match the desired format
    dateArray.push(formattedDate);                                   // push the formatted date string to the dateArray
  }

  return dateArray; // return the array of formatted dates
}


function Bookapp() {

    const context = useContext(CurrentContext);



    const navigate = useNavigate();
    const datesApp = getDateArray();
    const firstDate = datesApp[0];
    console.log(datesApp)

    const [selectedValue, setSelectedValue] = useState(null);
    

 

    function handleRadio(event) {
        setSelectedValue(event.target.value);
    }

    function handleClick () {
        if (selectedValue) {
            context.setDate(selectedValue);
            navigate('/Appointments/Bookapp/Bookapp2');
        }
    };



    return(
        <>
            <Main className="myMain">  {/*Select date to book appointment*/}
                <H3>Select date from available appointments</H3> <br/>
                <Caption> For example, 27 03 2007</Caption> <br/> <br/>

                <Radio onChange={handleRadio} value={datesApp[0]} name="g1">  {/*Today's Date */}
                    {datesApp[0]} 
                </Radio>
                <br /> <br />
                <Radio onChange={handleRadio} value={datesApp[1]} name="g1"> {/*Today's Date  + 1 */}
                    {datesApp[1]}
                </Radio>
                <br /> <br />
                <Radio onChange={handleRadio} value={datesApp[2]} name="g1"> {/*Today's Date  + 2 */}
                    {datesApp[2]}
                </Radio>
                <br /> <br />
                <Radio onChange={handleRadio} value={datesApp[3]} name="g1"> {/*Today's Date  + 3 */}
                    {datesApp[3]}
                </Radio>
                <br /> <br />
                <Radio onChange={handleRadio} value={datesApp[4]} name="g1"> {/*Today's Date  + 4 */}
                    {datesApp[4]}
                </Radio>
                <br /> <br />



                {/* This is a button element that calls the handleClick function when clicked */}
                <Button onClick={handleClick}>Save and Continue</Button>


{/* This is a button element that calls the handleClick function when clicked */}
                <Button onClick={handleClick}>Save and Continue</Button>

                
            </Main> 
        </>
    );
}
export default Bookapp; 