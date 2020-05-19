import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './searchbar.scss';

function Searchbar() {
  return (
    <div className="searchWrapper">
      <input
        className="searchBar"
        type="text"
        placeholder="Type your search here..."
      />
      <button className="search-btn" type="submit">
        <SearchIcon />
      </button>
    </div>
  );
}

export default Searchbar;
