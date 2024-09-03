import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SearchPage = () => {
  const { title } = useParams();
  const [input, setInput] = useState(title || '');
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const cardsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (title) {
          const response = await axios.get('http://www.omdbapi.com', {
            params: {
              apikey: process.env.REACT_APP_OMDB_API_KEY,
              s: title,
            },
          });
          if (response.data.Search) {
            setMovies(response.data.Search);
          } else {
            setMovies([]);
          }
          setHasSearched(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [title]);

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
      <SearchBar
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />
      <div style={cardsStyle}>
        {hasSearched ? (
          movies.length > 0 ? (
            movies.map((movie, i) => {
              return (
                <MovieCard
                  key={i}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  id={movie.imdbID}
                  type={movie.Type}
                />
              );
            })
          ) : (
            <h1 style={{ color: 'white' }}>No Search Results</h1>
          )
        ) : null}
      </div>
    </div>
  );
};

export default SearchPage;
