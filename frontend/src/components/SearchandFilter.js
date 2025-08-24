import React, { useState } from 'react';

const SearchAndFilter = ({ onSearch, onFilter, categories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onFilter(value);
  };

  return (
    <div className="search-filter-container">
      <input
        type="text"
        placeholder="Search plants by name or category..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <select 
        value={selectedCategory} 
        onChange={handleCategoryChange}
        className="category-filter"
      >
        <option value="all">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;