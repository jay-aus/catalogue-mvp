import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const query = searchText; // Capture the current value of searchText
      onSearch(query);
      setSearchText(''); // Clear the search text after triggering the search
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search product..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Search;
