import React from 'react'

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue w5 h1"
        type="Search"
        placeholder="Search robots"
        onChange={onSearchChange} />
    </div>
    )
};

export default SearchBox;
