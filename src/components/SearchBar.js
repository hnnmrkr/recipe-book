import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for recipes..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
