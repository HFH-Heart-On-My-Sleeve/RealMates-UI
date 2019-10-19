import React from 'react';
import Select from 'react-select'

const FilterDropdown = ({ title, options, onChange, onChangeKey }) => (
    <div>
      <h4>{title}</h4>
      <Select
        options={options}
        placeholder="Select from below"
        onChange={(selected) => onChange(onChangeKey, selected)}
        />
    </div>
  );

export default FilterDropdown;
