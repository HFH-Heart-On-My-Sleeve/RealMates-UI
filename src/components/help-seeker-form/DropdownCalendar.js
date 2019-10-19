import React from 'react';
import DatePicker from 'react-datepicker';
import {useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";

const DropdownCalendar = (startOrEnd) => {
  const [datepickerState, setDatepickerState] = useState(new Date());
  return(
    <div>
      <DatePicker
        selected={datepickerState}
        onChange={(date) => {setDatepickerState(date)}}/>
    </div>
  )};

export default DropdownCalendar;