import React from 'react';

import './Search.css';
const Search = (props) => {
  return (
    <form>
      <input
        type='text'
        name='name'
        class='question'
        id={props.id}
        required
        autocomplete='off'
        onChange={props.setFilter}
      />
      <label for='nme'>
        <span>{props.placeholder}</span>
      </label>
    </form>
  );
};

export default Search;
