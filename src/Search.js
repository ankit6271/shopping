import { useEffect, useState } from "react";
import "./index.css";
import SearchIcon from "@material-ui/icons/Search";
function Search() {
  var [input, inputState] = useState("");
  var [state, setState] = useState("");
  var [search, searchState] = useState([]);
  function inputValue(event) {
    inputState(event.target.value);
    console.log(event.target.value);
  }
  function clickEventsKeyUp(event) {
    if (event.key === "Enter") {
      setState(input);
      event.preventDefault();
    }
  }
  function clickEventsImage(event) {
    setState(input);
    alert(state);
    event.preventDefault();
  }
  return (
    <div className="search-products">
      <form action="#">
        <div class="Click" onClick={clickEventsImage}>
          <SearchIcon />
        </div>
        <input
          type="text"
          onKeyUp={clickEventsKeyUp}
          autocomplete="off"
          id="searchInput"
          placeholder="Search for products, brands and more"
          onChange={inputValue}
        />
        <div class="active-box"></div>
      </form>
    </div>
  );
}
export default Search;
