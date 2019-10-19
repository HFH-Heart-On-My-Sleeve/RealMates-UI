import React from 'react';
import Select from 'react-select'

import './FilterDropdown.scss';

const FilterDropdown = ({ title, options, onChange, onChangeKey }) => (
    <div className="filter-dropdown">
      <h4>{title}</h4>
      <Select
        className="filter-dropdown__select"
        options={options}
        placeholder="Select from below"
        onChange={(selected) => onChange(onChangeKey, selected)}
      />
    </div>
  );

export default FilterDropdown;
