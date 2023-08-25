import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for an item..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}


export default SearchBar;