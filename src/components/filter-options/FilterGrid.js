import React from 'react';
import { filterOptions } from '../../db/hardcoded-filter';
import {useState} from 'react';

const FilterGrid = ({ title, options }) => {
  const [step2, setStep2] = useState({});
  const handleEvent = (e, value) =>{
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
                    onChange={(e) => {handleEvent(e, option.value)}}>
                  </input>
                </div>
              )
            })
          }
      </div>
    </div>
  )};

const FilterGrids = () => filterOptions.map((option, index) => <FilterGrid key={index} {...option} />);

export default FilterGrids;