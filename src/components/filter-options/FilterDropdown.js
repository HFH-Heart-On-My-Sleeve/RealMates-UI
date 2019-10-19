import React from 'react';
import {useState} from 'react';
import Select from 'react-select'

const FilterDropdown = ({ title, options }) => {
  const [dropdownState, setDropdownState] = useState({});
  const handleEvent = (e) => {
    setDropdownState({country: e.value})
  }

  return(
    <div>
      <Select
        options={options}
        placeholder="Select from below"
        onChange={(e)=>{handleEvent(e)}}
        />
    </div>
  )};

export default FilterDropdown;