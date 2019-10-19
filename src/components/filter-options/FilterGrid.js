import React from 'react';
import './FilterGrid.scss';

const FilterGrid = ({ title, options, onChange, onChangeKey }) => (
      <div className="filter-options">
        <h4 className="filter-options__title" htmlFor="filter-options">{title}</h4>
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
                    onChange={() => onChange(onChangeKey, option)}>
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
  );

export default FilterGrid;
