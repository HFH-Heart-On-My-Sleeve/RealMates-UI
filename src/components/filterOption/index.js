import React from "react";
import { filterOptions } from '../hardcoded-filter';
import {useState} from 'react';

const FilterOption = ({ title, options }) => {
  const [step2, setStep2] = useState({});
  const handleEvent = async (e, value, title) =>{
    setStep2({...step2, [value]: e.target.checked})
  }

  return(
      <div>
        <label htmlFor="filter-options">{title}</label>
        <div id="filter-options">
          {
            options.map((option, index) => {
              return (
                <div key={index}>
                  <label htmlFor={option.label}>
                    {option.label}
                  </label>
                  <input
                    type="checkbox"
                    value={option.value}
                    id={option.label}
                    onChange={(e) => {handleEvent(e, option.value, title)}}>
                  </input>
                </div>
              )
            })
          }
      </div>
    </div>
  )};

const FilterOptions = () => filterOptions.map((option, index) => <FilterOption key={index} {...option} />);

export default FilterOptions;
