import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieSeriesDetails.css';
import SearchBar from './SearchBar';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);
  const [input, setInput] = useState('');

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get('http://www.omdbapi.com/', {
          params: {
            apikey: process.env.REACT_APP_OMDB_API_KEY,
            i: id,
            plot: 'full',
          },
        });
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) return <h1 style={{ color: 'white' }}>Loading...</h1>;
  return (
    <>
      <SearchBar
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />
      <div className='container'>
        <div className='tile'>
          <div className='movie-details'>
            <div className='movie-details-heading'>
              <h1>{movieDetails.Title}</h1>
            </div>
            <p>
              <strong>Released:</strong> {movieDetails.Released}
            </p>
            <p>
              <strong>Rated:</strong> {movieDetails.Rated}
            </p>
            <p>
              <strong>Runtime:</strong> {movieDetails.Runtime}
            </p>
            <p>
              <strong>Genre:</strong> {movieDetails.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movieDetails.Director}
            </p>
            <p>
              <strong>Writer:</strong> {movieDetails.Writer}
            </p>
            <p>
              <strong>Actors:</strong> {movieDetails.Actors}
            </p>
            <p>
              <strong>Plot:</strong> {movieDetails.Plot}
            </p>
            <p>
              <strong>Language:</strong> {movieDetails.Language}
            </p>
            <p>
              <strong>Country:</strong> {movieDetails.Country}
            </p>
            <p>
              <strong>Awards:</strong> {movieDetails.Awards}
            </p>
            <p>
              <strong>IMDb Rating:</strong> {movieDetails.imdbRating}
            </p>
            <p>
              <strong>Box Office:</strong> {movieDetails.BoxOffice}
            </p>
          </div>
          <div className='movie-details-poster'>
            <img
              src={movieDetails.Poster}
              alt={`${movieDetails.Title} Poster`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
