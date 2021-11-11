import React from 'react';

const Search = (props) => {
  const {
    value,
    onChange,
    children = 'Search',
    placeholder = 'search...',
  } = props;

  return (
    <label>
      {children}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default Search;
