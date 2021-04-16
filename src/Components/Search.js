import { useState } from 'react';
import '../index.css';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  const [input, inputState] = useState('');
  const [state, setState] = useState('');
  // var [search, searchState] = useState([]);
  function onInputChange(event) {
    inputState(event.target.value);
    console.log(event.target.value);
  }

  function keyUpEvent(event) {
    if (event.key === 'Enter') {
      setState(input);
      event.preventDefault();
      alert(state);
    }
  }

  function onImageClickHandler(event) {
    setState(input);
    alert(state);
    event.preventDefault();
  }

  return (
    <div className="search-products">
      <div className="Click" onClick={onImageClickHandler}>
        <SearchIcon />
      </div>
      <input
        type="text"
        onKeyUp={keyUpEvent}
        autoComplete="off"
        id="searchInput"
        placeholder="Search for products, brands and more"
        onChange={onInputChange}
      />
      <div className="active-box" />
    </div>
  );
}

export default Search;
