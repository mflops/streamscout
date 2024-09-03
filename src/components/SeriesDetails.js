import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './MovieSeriesDetails.css';
import SearchBar from './SearchBar';

const SeriesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seriesDetails, setSeriesDetails] = useState(null);
  const [input, setInput] = useState('');

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    const fetchSeriesDetails = async () => {
      try {
        const response = await axios.get('http://www.omdbapi.com/', {
          params: {
            apikey: process.env.REACT_APP_OMDB_API_KEY,
            i: id,
            plot: 'full',
          },
        });
        setSeriesDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSeriesDetails();
  }, [id]);

  if (!seriesDetails) return <h1 style={{ color: 'white' }}>Loading...</h1>;
  return (
    <>
      <SearchBar
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />
      <div className='container'>
        <div className='tile'>
          <div className='series-details'>
            <div className='series-details-heading'>
              <h1>{seriesDetails.Title}</h1>
            </div>
            <p>
              <strong>Released:</strong> {seriesDetails.Released}
            </p>
            <p>
              <strong>Rated:</strong> {seriesDetails.Rated}
            </p>
            <p>
              <strong>Runtime:</strong> {seriesDetails.Runtime}
            </p>
            <p>
              <strong>Genre:</strong> {seriesDetails.Genre}
            </p>
            <p>
              <strong>Director:</strong> {seriesDetails.Director}
            </p>
            <p>
              <strong>Writer:</strong> {seriesDetails.Writer}
            </p>
            <p>
              <strong>Actors:</strong> {seriesDetails.Actors}
            </p>
            <p>
              <strong>Plot:</strong> {seriesDetails.Plot}
            </p>
            <p>
              <strong>Language:</strong> {seriesDetails.Language}
            </p>
            <p>
              <strong>Country:</strong> {seriesDetails.Country}
            </p>
            <p>
              <strong>Awards:</strong> {seriesDetails.Awards}
            </p>
            <p>
              <strong>IMDb Rating:</strong> {seriesDetails.imdbRating}
            </p>
            <p>
              <strong>Total Seasons:</strong> {seriesDetails.totalSeasons}
            </p>
          </div>
          <div className='series-details-poster'>
            <img
              src={seriesDetails.Poster}
              alt={`${seriesDetails.Title} Poster`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeriesDetails;
