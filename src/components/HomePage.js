import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };
  return (
    <>
      <section className='hero-section'>
        <div className='search-bar-container'>
          <SearchBar
            input={input}
            setInput={setInput}
            handleSearch={handleSearch}
          />
        </div>
        <h1 style={{ fontSize: '5rem' }}>
          Stream Scout - Find Your Next Favourite Movie
        </h1>
        <h2 style={{ fontSize: '2rem' }}>
          Discover the latest movies and series
        </h2>
      </section>
    </>
  );
};

export default HomePage;
