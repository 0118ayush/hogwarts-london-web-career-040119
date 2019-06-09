import React from "react";

const Search = props => {
  return (
    <div>
      <label for="search">Search: </label>
      <input onChange={props.updateSearchTerm} name="search" />
      <br/>
      <br />
      <label for="greased">Greased: </label>
      <input type="checkbox" name="greased" onChange = {props.updateGreasedFilter}/>
       <p> </p>
      <label for="sortby">Sort By: </label>
      <select type="dropdown" onChange={props.updateSortBy}>
        <option value= "none">None</option>
        <option value= "name">Name</option>
        <option value= "weight">Weight</option>
      </select>
      <hr/>
    </div>
  );
};

export default Search;
