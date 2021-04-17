import { useState } from 'react';
import '../index.css';
import SearchIcon from '@material-ui/icons/Search';

function Search(props) {

  return (
    <div className="search-products">
      <div className="Click" onClick={(event)=>{props.onClick(event)}}>
        <SearchIcon />
      </div>
      <input
        type="text"
        onKeyUp={(event)=>{props.onKeyUp(event)}}
        autoComplete="off"
        id="searchInput"
        placeholder="Search for products, brands and more"
        onChange={(event)=>{props.onChange(event)}}
      />
      <div className="active-box" />
    </div>
  );
}

export default Search;
