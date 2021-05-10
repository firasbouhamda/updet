  
import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';


const Clients = () => {
}
const ReactCalendar = () => {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </>
  )
}
export default Clients