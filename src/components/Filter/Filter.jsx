import React from "react"; 
import PropTypes from "prop-types"


const Filter = ({value, onChange}) => (
    <label htmlFor="search">
       <p className=''>Find contacts by name</p> 
       <input
      type="text"
      onChange={onChange}
      value={value}
    />
  </label>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
export default Filter;