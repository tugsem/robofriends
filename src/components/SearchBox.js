/* eslint react/prop-types: 0 */
import React from 'react';

const SearchBox = (props) => {
  const { searchChange } = props;
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        onChange={searchChange}
        placeholder="search robots"
      />
    </div>
  );
};

export default SearchBox;
