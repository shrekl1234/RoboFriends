import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ searchChange }) => {
  return (
    <input type="search" placeholder="Search Robots" onChange={searchChange} />
  );
};

export default SearchBox;
