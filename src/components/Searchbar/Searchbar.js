/* eslint-disable react/prop-types */
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './searchbar.scss';

function Searchbar({ search, setSearch }) {
  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <form className="searchWrapper">
      <input
        className="searchBar"
        type="text"
        placeholder="Type your search here..."
        value={search}
        onChange={handleChange}
      />
      <button className="search-btn" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Searchbar;
