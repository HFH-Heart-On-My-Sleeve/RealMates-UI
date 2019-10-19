import React from "react";
import { filterOptions } from '../hardcoded-filter';

const FilterOption = ({ title, options }) => (
  <div>
    <label htmlFor="filter-options">{title}</label>
    <select id="filter-options">
      {
        options.map((option, index) => {
          return (
            <option key={index} value={option.value}>{option.label}</option>
          )
        })
      }
    </select>
  </div>
);

const FilterOptions = () => filterOptions.map((option, index) => <FilterOption key={index} {...option} />);

export default FilterOptions;
