import React from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ input, setInput, handleSearch }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(input);
    navigate(`/search/${input}`);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          value={input}
          placeholder='Search for movies or shows'
          className='search-input'
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
