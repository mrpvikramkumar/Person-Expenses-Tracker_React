import React from 'react';

import './PersonFilter.css';

const PersonFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
//props.onChangeFilter
  return (
    <div className='persons-filter'>
      <div className='persons-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default PersonFilter;
