import React from 'react';
import {useState} from 'react';

import './FilterGrid.scss';

const FilterGrid = ({ title, options }) => {
  const [step2, setStep2] = useState({});
  const handleEvent = (e, value) =>{
    setStep2({...step2, [value]: e.target.checked})
  }

  return(
      <div className="filter-options">
        <label className="filter-options__title" htmlFor="filter-options">{title}</label>
        <div id="filter-options" className="filter-options__options">
          {
            options.map((option, index) => {
              return (
                <div key={index} className="filter-options__option">
                  <input
                    className="filter-options__checkbox"
                    type="checkbox"
                    value={option.value}
                    id={option.label}
                    name={option.label}
                    onChange={(e) => {handleEvent(e, option.value)}}>
                  </input>
                  <label htmlFor={option.label} className="filter-options__label">
                    {option.label}
                  </label>
                </div>
              )
            })
          }
      </div>
    </div>
  )};

export default FilterGrid;
